# quotesapi

a lightweight serverless API that returns a random quote from a small local dataset.

## overview

this project is a minimal JavaScript API designed for quick deployment on Vercel. it exposes a single endpoint that returns a random quote along with basic metadata such as the quote count and generation time.

## features

- random quote generation
- simple JSON response format
- CORS enabled for browser access
- read-only GET endpoint
- no database or external service required

## project structure

- `api/quote.js` - request handler and response logic
- `quotes.json` - source quote data
- `package.json` - project metadata and scripts

## local development

1. start the app locally using Vercel's dev server:
   ```bash
   npx vercel dev
   ```
2. open the API in a browser or with curl:
   ```bash
   http://localhost:3000/api/quote
   ```

## endpoint

### GET /api/quote

returns a JSON object containing a random quote and metadata.

example response:
```json
{
  "status": "200 OK",
  "api": "quotesapi",
  "version": "1.0.0",
  "author": {
    "name": "tonicblade",
    "url": "https://github.com/tonicblade"
  },
  "generatedAt": "2026-10-03T00:00:00.000Z",
  "quote": {
    "id": 3,
    "text": "first, solve the problem. then, write the code.",
    "author": "john johnson"
  },
  "metadata": {
    "totalquotes": 6
  }
}
```

## deployment

this project is intended to run on Vercel as a serverless function. after connecting the repository to Vercel, the API will be available on your deployment URL.

## license

MIT