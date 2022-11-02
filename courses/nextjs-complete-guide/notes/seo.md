# SEO
Search Engine Optimization

## `<Head>`

- The `Head` component can be put anywhere inside a Next.js page component
- It allow you to declare SEO-related data (title, meta tags)
- Multiple `Head` components can be used as they are all combined
- When declaring the same tag in two `Head` components, the latest applies
  - Ex.: If `_app.js` and an inner page both declare a `<title>` in `<Head>`, the title from the inner page comes last and replaces the one from `_app.js`

## `_app.js`
- The `_app.js` is a mandatory file (or `_app.tsx` in TypeScript projects) that serves as the shell component of your app
- You can create layouts, add default title and meta tags and so on

## `_document.js`
- The `_document.js` is an optional file (or `_document.tsx` in TypeScript projects) that allows you to customize the HTML document that is sent to the client
- It must be a class extending the `Document` class from `next/document`
- The default document looks something like this on Next, but you can edit it via `_document.js`
  ```js
  import Document, { Html, Head, Main, NextScript } from 'next/document';

  export default class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  ```

## `<Image>`
- The Next.js `<Image>` component allows for optimizing images via lazy-loading and resizing
- Images are automatically optimized based on the user agent and other user data coming from the request
- It is mandatory to set `width` and `height` of the image in order to resize it on the server
- Resized images are stored for requests with similar/equal user agents
- By default, any `<Image>` that is not immediately visible is not loaded, but it loads lazily upon reveal

## `<Link>`
- As of Next.js 12, `<Link>` renders an anchor `<a>` **only** if its children is plain text
- Otherwiste, `<Link>` looks for an inner `<a>` passed as children and processes that
  - For example, you don't need to pass `href` to the inner `<a>` if you already passed it to the `<Link>` wrapper
  - ```tsx
    # NEXT.JS 12
    <Link href="/somewhere">
      <a><Image src="/the-logo.jpg" width={100} height={100} /></a>
    </Link>
    ```
- Next.js 13+ removed this behavior, so this works
  ```tsx
  # NEXT.JS 13+
  <Link href="/somewhere">
    <Image src="/the-logo.jpg" width={100} height={100} />
  </Link>
  ```
