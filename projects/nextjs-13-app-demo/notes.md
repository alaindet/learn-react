# Next.js 13 `/app` folder
- Routes must be **folders**, not filed
- File names are reserved and have a specific meaning, like `page.js` and `layout.js`
- Any other file and folder apart for reserved oned, are **simply ignored** and not treated as pages like before
- The file `/app/layout.js` is the root layout for the app
- Any layout declared as `/app/**/layout.js` is a **nested layout**, wrapping every page at the same file system level or below
- That means pages inherit the chain of nested layouts and can optionally add their own
