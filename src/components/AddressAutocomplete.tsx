"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string, details?: google.maps.places.PlaceResult) => void;
  onSelectionChange?: (wasSelected: boolean) => void;
  onReadyChange?: (isReady: boolean) => void;
  placeholder?: string;
  className?: string;
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelectionChange,
  onReadyChange,
  placeholder = "Enter delivery address",
  className,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
      libraries: ["places"],
    });

    loader
      .load()
      .then(() => {
        if (!isMounted || !inputRef.current) return;

        const autocomplete = new google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "US" },
          },
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.formatted_address) {
            onChange(place.formatted_address, place);
            onSelectionChange?.(true);
          }
        });

        setIsLoaded(true);
        setLoadFailed(false);
        onReadyChange?.(true);
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
        if (!isMounted) return;

        setIsLoaded(false);
        setLoadFailed(true);
        onReadyChange?.(false);
      });

    return () => {
      isMounted = false;
    };
  }, [onChange, onSelectionChange, onReadyChange]);

  const handleManualSelection = (nextValue: string) => {
    if (!isLoaded) {
      const isComplete = nextValue.split(",").length >= 2 && nextValue.length > 15;
      onSelectionChange?.(isComplete);
    } else {
      onSelectionChange?.(false);
    }
  };

  const mergedClassName = [
    className,
    isLoaded ? "opacity-100" : loadFailed ? "opacity-100" : "opacity-85",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(event) => {
        const nextValue = event.target.value;
        onChange(nextValue);
        handleManualSelection(nextValue);
      }}
      onBlur={() => {
        if (!isLoaded) {
          const isComplete = value.split(",").length >= 2 && value.length > 15;
          onSelectionChange?.(isComplete);
        }
      }}
      placeholder={
        isLoaded
          ? placeholder
          : loadFailed
          ? "Enter delivery address (manual entry)"
          : "Loading address lookup..."
      }
      autoComplete="street-address"
      className={mergedClassName}
    />
  );
}
