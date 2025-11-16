#!/usr/bin/env node
/* eslint-disable no-console */

let chromium;

try {
  ({ chromium } = require("playwright"));
} catch (error) {
  console.error(
    "Playwright is required to run this script. Install it with `pnpm add -D playwright` and try again.",
  );
  process.exit(1);
}

async function run() {
  const baseUrl = process.env.BOOKING_FORM_URL || "http://localhost:3000";
  const sendRealSubmission = process.env.BOOKING_FORM_REAL_SUBMISSION === "true";

  console.log(`Opening ${baseUrl} to exercise the booking form...`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.setDefaultTimeout(15000);

  try {
    await page.goto(baseUrl, { waitUntil: "networkidle" });

    const contactInput = page.locator("#contact-name");
    await contactInput.waitFor({ state: "visible" });
    await contactInput.fill("Test Business");

    const sizeButton = page.getByRole("button", { name: /10.?yard/i });
    await sizeButton.click();

    const addressInput = page.getByPlaceholder(/Waterbury/i);
    await addressInput.fill("123 Main St, Waterbury, CT 06702");
    await addressInput.blur();

    const phoneInput = page.getByPlaceholder("(555) 123-4567");
    await phoneInput.fill("2035550123");

    const emailInput = page.getByPlaceholder("you@email.com");
    await emailInput.fill("test@example.com");

    const submitButton = page.getByRole("button", { name: /Request dumpster/ });
    await submitButton.waitFor({ state: "visible" });

    console.log(
      `Submitting booking form in ${sendRealSubmission ? "live" : "simulation"} mode...`,
    );
    await submitButton.click({
      modifiers: sendRealSubmission ? [] : ["Shift"],
    });

    const animatedTruck = submitButton.locator("svg").first();
    await animatedTruck.waitFor({ state: "visible" });
    const animationClass = await animatedTruck.getAttribute("class");

    if (!animationClass || !animationClass.includes("animate")) {
      throw new Error("Truck animation did not start after submission.");
    }
    console.log("Truck animation detected.");

    await page.getByRole("button", { name: /Requested!/ }).waitFor({ state: "visible" });
    console.log("Form reached success state. Test complete.");
  } finally {
    await page.close();
    await browser.close();
  }
}

run()
  .then(() => {
    console.log("Booking form smoke test finished successfully.");
  })
  .catch((error) => {
    console.error("Booking form smoke test failed:", error);
    process.exitCode = 1;
  });
