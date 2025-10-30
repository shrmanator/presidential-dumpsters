# SEO Performance Monitoring Guide

## Core Web Vitals Monitoring

### What to Track

**LCP (Largest Contentful Paint)**
- **Target:** < 2.5 seconds
- **Measures:** Loading performance
- **Fix:** Optimize images, reduce server response time, eliminate render-blocking resources

**FID (First Input Delay)**
- **Target:** < 100 milliseconds  
- **Measures:** Interactivity
- **Fix:** Minimize JavaScript, break up long tasks, use web workers

**CLS (Cumulative Layout Shift)**
- **Target:** < 0.1
- **Measures:** Visual stability
- **Fix:** Size images/videos, avoid inserting content above existing content

### Tools for Monitoring

1. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Check "Core Web Vitals" report weekly
   - Fix URLs listed as "Poor"

2. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Run monthly for key pages
   - Track score improvements over time

3. **Chrome DevTools (Lighthouse)**
   - Run locally during development
   - Generate reports before pushing changes
   - Target 90+ scores in all categories

4. **WebPageTest**
   - URL: https://www.webpagetest.org/
   - Detailed waterfall analysis
   - Test from different locations

## SEO Metrics Dashboard

### Weekly Tracking

| Metric | Current | Goal | Status |
|--------|---------|------|--------|
| Organic Traffic | ___ | +15% MoM | 🟡 |
| Keyword Rankings (Top 10) | ___ | 5 keywords | 🟡 |
| Google Business Profile Views | ___ | 500/mo | 🟡 |
| Click-Through Rate | ___% | 3-5% | 🟡 |
| Bounce Rate | ___% | <50% | 🟡 |
| Avg. Session Duration | ___ min | 2+ min | 🟡 |
| Form Submissions | ___ | 10/week | 🟡 |
| Phone Calls | ___ | 20/week | 🟡 |

### Monthly KPI Report Template

```
PRESIDENTIAL DUMPSTERS - SEO REPORT
Month: [Month Year]
Report Date: [Date]

TRAFFIC OVERVIEW
├─ Total Organic Sessions: [#] ([+/-]% vs last month)
├─ New Users: [#] ([+/-]% vs last month)
├─ Bounce Rate: [%] ([+/-]% vs last month)
└─ Avg. Session Duration: [time] ([+/-]% vs last month)

TOP PERFORMING PAGES
1. [Page URL] - [#] visits
2. [Page URL] - [#] visits
3. [Page URL] - [#] visits

KEYWORD RANKINGS (Top 5)
1. "dumpster rental waterbury ct" - Position [#] ([+/-])
2. "dumpster rental hartford ct" - Position [#] ([+/-])
3. "dumpster rental new haven ct" - Position [#] ([+/-])
4. "10 yard dumpster ct" - Position [#] ([+/-])
5. "20 yard dumpster waterbury" - Position [#] ([+/-])

GOOGLE BUSINESS PROFILE
├─ Profile Views: [#]
├─ Search Views: [#]
├─ Maps Views: [#]
├─ Phone Calls: [#]
└─ Direction Requests: [#]

CONVERSIONS
├─ Form Submissions: [#]
├─ Phone Calls (tracked): [#]
└─ Conversion Rate: [%]

TECHNICAL HEALTH
├─ Indexed Pages: [#]
├─ Coverage Issues: [#]
├─ Core Web Vitals: [Good/Needs Improvement/Poor]
└─ Mobile Usability Issues: [#]

ACTIONS TAKEN THIS MONTH
- [Action 1]
- [Action 2]
- [Action 3]

RECOMMENDATIONS FOR NEXT MONTH
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]
```

## Automated Monitoring Setup

### Google Analytics 4 Goals

Create these conversions in GA4:

1. **Form Submission**
   - Event: `form_submit`
   - Condition: `form_name = booking_form`

2. **Phone Click**
   - Event: `click`
   - Condition: `link_url contains tel:`

3. **Service Area Page View**
   - Event: `page_view`
   - Condition: `page_location contains /hartford | /new-haven | /oakville | /wolcott`

4. **High-Value Session**
   - Event: session
   - Condition: `session_duration > 120 seconds AND pages_per_session >= 3`

### Google Search Console Alerts

Set up weekly email reports for:
- [ ] Coverage errors
- [ ] Mobile usability issues
- [ ] Security issues
- [ ] Manual actions
- [ ] Core Web Vitals changes

### Microsoft Clarity Setup

```javascript
// Already implemented in layout.tsx
// Monitor:
// - Heatmaps (weekly)
// - Session recordings (weekly - look for friction)
// - Rage clicks (areas of frustration)
// - Dead clicks (non-functional elements)
```

## Competitor Monitoring

### Monthly Competitor Check

Track 3-5 main competitors:

| Competitor | Domain Authority | Top Keywords | Estimated Traffic |
|------------|------------------|--------------|-------------------|
| Competitor 1 | [#] | [#] | [#] |
| Competitor 2 | [#] | [#] | [#] |
| Competitor 3 | [#] | [#] | [#] |

### What to Monitor

1. **Keyword Rankings**
   - Are they ranking for keywords you target?
   - New keywords they're targeting?

2. **Content Strategy**
   - New pages or blog posts
   - Topics they're covering
   - Content quality and length

3. **Backlink Profile**
   - New backlinks acquired
   - High-quality link sources
   - Link building strategies

4. **Technical SEO**
   - Site speed improvements
   - Schema markup additions
   - Mobile experience changes

## Ranking Tracking Tools

### Recommended Tools

**Free:**
- Google Search Console (basic position data)
- Google Business Profile Insights
- Bing Webmaster Tools

**Paid (Optional):**
- SEMrush ($119/mo) - Comprehensive SEO suite
- Ahrefs ($99/mo) - Backlink analysis + keyword tracking
- Moz Pro ($99/mo) - Rank tracking + site audits
- SE Ranking ($39/mo) - Budget-friendly alternative

### Manual Rank Checking (Free)

Use incognito/private browsing:
1. Open incognito window
2. Search for target keyword
3. Record position (1-100)
4. Note featured snippets, local pack position
5. Repeat for each location (use ?uule= for location simulation)

## Link Building Monitoring

### Backlink Health Check (Monthly)

- [ ] Total backlinks: [#]
- [ ] Referring domains: [#]
- [ ] Domain Authority: [#/100]
- [ ] Toxic/spam links: [#]
- [ ] New backlinks this month: [#]
- [ ] Lost backlinks this month: [#]

### Link Opportunities Tracker

| Source | Type | Status | Date Acquired |
|--------|------|--------|---------------|
| Google Business Profile | Citation | ✅ Active | [Date] |
| Yelp | Citation | ✅ Active | [Date] |
| Yellow Pages | Citation | 🟡 Pending | - |
| BBB | Citation | 🔴 Not Started | - |

## Review Monitoring

### Review Sources to Monitor

- [ ] Google Business Profile (daily)
- [ ] Yelp (weekly)
- [ ] Facebook (weekly)
- [ ] BBB (weekly)

### Review Response Template

**Positive Review (5 stars):**
```
Thank you so much, [Name]! We're thrilled to hear about your positive experience with Presidential Dumpsters. Providing fast, reliable service is our top priority, and we're glad we could help with your [project type]. We look forward to serving you again!
```

**Neutral Review (3-4 stars):**
```
Thank you for your feedback, [Name]. We appreciate you taking the time to share your experience. [Address specific concern]. We're always working to improve our service, and we'd love the opportunity to make things right. Please call us at (475) 441-6727.
```

**Negative Review (1-2 stars):**
```
We sincerely apologize for your experience, [Name]. This doesn't reflect the level of service we strive to provide. [Acknowledge issue]. Please contact us directly at (475) 441-6727 so we can resolve this immediately. We value your business and want to make this right.
```

## Performance Benchmarks

### Target Scores (3-Month Goals)

**Technical:**
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

**Rankings:**
- "dumpster rental waterbury ct": Top 3
- "dumpster rental hartford ct": Top 5
- "dumpster rental new haven ct": Top 5
- "10 yard dumpster ct": Top 10
- "20 yard dumpster waterbury": Top 10

**Traffic:**
- Organic sessions: 500+/month
- Average session duration: 2+ minutes
- Bounce rate: <50%
- Pages per session: 2+

**Conversions:**
- Form submissions: 40+/month
- Phone calls: 80+/month
- Conversion rate: 3-5%

## Alerts to Set Up

### Critical Alerts (Immediate Response)

1. **Site Down**
   - Use uptime monitoring (UptimeRobot, Pingdom)
   - SMS/email alert
   - Check within 5 minutes

2. **Manual Action (Google)**
   - Google Search Console email
   - Check daily during first month
   - Address immediately

3. **Security Issue**
   - Google Search Console email
   - Check daily
   - Fix within 24 hours

### Important Alerts (Response within 24 hours)

1. **Negative Review**
   - Google Business Profile notifications
   - Respond professionally within 24 hours

2. **Core Web Vitals Degradation**
   - Google Search Console weekly report
   - Investigate and fix within 1 week

3. **Ranking Drop (>5 positions)**
   - Weekly rank tracking
   - Analyze and address within 1 week

## Monthly SEO Audit Checklist

- [ ] Run Lighthouse audit on all key pages
- [ ] Check Google Search Console for errors
- [ ] Review keyword rankings
- [ ] Analyze traffic trends in GA4
- [ ] Check backlink profile
- [ ] Monitor competitor activity
- [ ] Review and respond to all reviews
- [ ] Update any stale content (>6 months old)
- [ ] Test all forms and CTAs
- [ ] Verify NAP consistency across web
- [ ] Check for broken links
- [ ] Review Core Web Vitals
- [ ] Update sitemap if new pages added
- [ ] Test mobile experience on real devices

---

*Regular monitoring ensures you catch and fix issues early, maintain rankings, and continually improve performance.*
