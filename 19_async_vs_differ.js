// https://chatgpt.com/share/6894d0a1-788c-8012-9d80-200a7575d624
// In HTML, the async and defer attributes are used with <script> tags to control when and how external JavaScript files are loaded and executed. This helps improve page load performance and avoid blocking rendering.

// 🧠 1 - The Problem They Solve
// By default, when the browser encounters this:
// <script src="script.js"></script>
// It pauses HTML parsing, downloads and executes the script, then resumes parsing. This blocks rendering and slows down the page.

// 🧠 2 - async
// <script src="script.js" async></script>
// Loads in parallel with HTML parsing.
// Executes as soon as downloaded, possibly before HTML is fully parsed.
// Execution order not guaranteed if multiple async scripts are used.
// Ideal for independent scripts like analytics, ads, etc.

// 🧠 3 - defer
// <script src="script.js" defer></script>
// Loads in parallel with HTML parsing.
// Executes after the document has been parsed (DOM ready).
// Maintains order if there are multiple defer scripts.
// Best for DOM-dependent scripts like main app logic.

// ⚠️ Notes
// Both async and defer work only with external scripts (src must be present).
// If you use inline script, these attributes have no effect.
// In modern development, defer is commonly used for app scripts (e.g., React/Next.js bundles).

// 1. Fetching (Downloading)
// This is when the browser requests the .js file from the server and downloads it.
// Happens over the network.
// In both async and defer, fetching happens in parallel with HTML parsing, so the page doesn’t freeze while downloading.
// 2. Executing (Running)
// After fetching, the browser parses and runs the JS code.
// Execution can pause HTML parsing, depending on the attribute.

// Visual Timeline
// Without attributes:
// [Parse HTML] --stop--> [Fetch JS] --> [Execute JS] --> resume parsing
// With async:
// [Parse HTML + Fetch JS in parallel] --> when JS finishes downloading → stop parsing → execute JS → resume parsing
// With defer:
// [Parse HTML + Fetch JS in parallel] --> finish parsing HTML → execute JS

// | Attribute | Load        | Execute               | Order Preserved? | Blocks HTML? | Use When...                                               |
// | --------- | ----------- | --------------------- | ---------------- | ------------ | --------------------------------------------------------- |
// | **None**  | Immediately | Immediately (on load) | ✅ Yes            | ❌ Yes        | Rarely (for critical inline/early scripts)                |
// | **async** | In parallel | Immediately (on load) | ❌ No             | ✅ No         | For independent third-party scripts (e.g. analytics, ads) |
// | **defer** | In parallel | After HTML is parsed  | ✅ Yes            | ✅ No         | For DOM-dependent scripts & app logic                     |

// ✅ When to Use
// defer → For main scripts, app logic, DOM manipulation — safe and ordered.
// async → For external, independent scripts (analytics, ads) — fast and unordered.
// No attribute → Only when script must block rendering (rare in modern dev).

// In React and Next.js, script loading is handled a bit differently due to the framework abstraction and use of bundlers like Webpack or Vite. Here's what happens under the hood:
// ✅ React (Create React App or Vite)
// JavaScript bundles are injected into the final HTML with:
// <script src="main.js" defer></script>
// This is automatically done for you — scripts are loaded using defer by default, ensuring the DOM is parsed first.

// ✅ Why defer?
// Your app needs the DOM to exist before React can attach itself (hydrate, render).
// Ensures proper load order if multiple scripts are used (e.g., vendor, main, chunk files).

// ✅ Next.js (Pages Router / App Router)
// Next.js uses a mix of SSR (server-side rendering), hydration, and code-splitting, and still:
// It injects scripts with defer automatically for app bundles.
// It also gives you manual control using the <Script> component from next/script.

// Example:
// import Script from 'next/script';
// export default function Page() {
//   return (
//     <>
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
//         strategy="afterInteractive" // or 'lazyOnload', 'beforeInteractive'
//       />
//     </>
//   );
// }
// 🎯 Next.js <Script> strategies
// | Strategy            | When it Loads             | Use Case                           |
// | ------------------- | ------------------------- | ---------------------------------- |
// | `beforeInteractive` | Before hydration starts   | Critical scripts (e.g., polyfills) |
// | `afterInteractive`  | After page is interactive | Analytics, trackers, etc.          |
// | `lazyOnload`        | After window `load` event | Low-priority scripts               |
