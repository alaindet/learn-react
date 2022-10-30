# API Routes

- API Routes are routes performing mutations of data and returning usually JSON, not rendered pages
- Examples involve storing comments, purchase orders, sending emails, registering to newsletters etc.
- API routes must live inside `/pages/api` folder
- API routes should export a default function called `handler`
- By default, the handler function runs for **all** HTTP methods of a given route
