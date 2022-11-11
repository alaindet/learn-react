# Next.js 13 `/app` folder
- Routes must be **folders**, not filed
- File names are reserved and have a specific meaning, like `page.js`, `layout.js` and `loading.js`
- If you're using TypeScript, files are `page.tsx` etc. accordingly
- Any other file and folder in `/app` other than those with reserved names, are **simply ignored** and not treated as pages like before
- The file `/app/layout.js` is the root layout for the app
- Any layout declared as `/app/**/layout.js` is a **nested layout**, wrapping every page at the same file system level or below
- That means pages inherit the chain of nested layouts and can optionally add their own

- Having a layout which stays in the browser (at least until it's needed) allows you to perform data fetches only once when needed and for every page change
- Before Next.js 13, layouts wrapped all pages individually, so each wrapper on each page, even related pages, was a different wrapper instance and needed to perform HTTP requests multiple times, if needed
- Ex.: a sidebar on the left of an entire section which needs data from a server, needed to fetch this data for every page change
