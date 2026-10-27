# Yehia's Career Hub

**Author:** Yehia Abdelaziz Mohamed Ahmed Omer

## Project Description

Yehia's Career Hub is a Next.js web application built to organize and track a 60-day post-graduation roadmap to landing a software development role. It features:
- **Two-Month Roadmap (`/plan`):** A step-by-step preparation and practice strategy.
- **Opportunities Board (`/opportunities`):** A curated catalog of internship and junior developer openings.
- **Dynamic Opportunity Details (`/opportunities/[id]`):** Dedicated pages for individual job listings with dynamic routing and static prerendering.
- **Dashboard (`/Dashboard`):** An application tracker and overview hub with dedicated nested layouts.

---

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UL2IMATE/yehia-career-path.git
   cd yehia-career-path
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production (optional):**
   ```bash
   npm run build
   npm run start
   ```

---

## Conceptual Questions & Answers

### 1. Why did you use `await` when reading `params`?
In modern Next.js (version 15 and above), `params` (and `searchParams`) provided to page components and layouts is passed as a **Promise** rather than a plain synchronous object. 

This architectural change enables Next.js to stream and prerender static shells early without waiting synchronously on incoming request parameters. By using `await params`, the Server Component cleanly resolves the parameters asynchronously before accessing route properties like `id`.

### 2. Why is the route ID a string?
In HTTP and web routing, all URL paths and parameters are parsed directly from the incoming uniform resource locator (URL), which is fundamentally **text/string data**. 

Even if an ID appears to be a number (such as `/opportunities/1`), URLs do not possess intrinsic numeric data types. Therefore, Next.js provides the dynamic route segment `[id]` as a string (`"1"`). If a numeric comparison or lookup is ever required, developers explicitly cast or parse it (e.g., via `Number(id)` or comparing as strings `opp.id === id`).

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?
- **Dashboard Layout (`layout.tsx`):**
  - Persistent, shared UI elements that remain visible across all dashboard sub-routes without re-rendering or losing state during navigation.
  - Examples: Navigation bars (links between `/Dashboard` Overview and `/Dashboard/applications`), sidebars, headers, user profile cards, and global dashboard wrappers/styling.
- **Dashboard Pages (`page.tsx`, `applications/page.tsx`):**
  - View-specific content that changes based on the exact route the user is visiting.
  - Examples: The overview statistics and motivational summary belong on `/Dashboard/page.tsx`, while the specific list of submitted application cards belongs exclusively on `/Dashboard/applications/page.tsx`.
