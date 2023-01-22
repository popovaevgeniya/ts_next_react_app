This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# About project
    • Project based on Next.js
    • The design implemented using Tailwind CSS classes
    • Main colors used defined Tailwind config file
    
# Description of how the app works

	1. Product data fetched from GraphQL API at https://dev-creator-backoffice-api.shopcat.click/graphql used Apollo Client
{
  productById(productId: 53) {
    id
    name
    data
    variantRewards
  }
}

When a query is in progress, a spinner shown.

	2. All product data, serialized to JSON,  is stored in the data field. Available options are stored in the options field inside. Options are displayed to the user and clickable - one option from each group can be selected at a time.
	3. Available combinations of options are stored as product variants in the data.variants field. Selected option values should be matched against fields option1 and option2 of all variants to find the matching variant. For some option combinations there will be no variant. The price of the selected variant displayed in the header. If there’s no matching variant, the price section replaced with text  Variant Unavailable
	4. Variant rewards are stored in the variantRewards field returned by the query. This is a JSON field too. The keys here are the variant ids. If there’s a reward for the currently selected variant, it displayed in the header. If there’s no reward, the “you get …” section disappear.
	5. Prices/rewards using 2 decimal places.
	6. When a user opens the page, options for the variant with the highest reward pre-selected.
	7. If the selected variant is unavailable, Add to my store button  disabled.
	8. When Add to my store button is clicked, a mutation sent to the API, with the ID of currently selected variant as a parameter.

	mutation {
  	  addToCart(variantId: "123")
}


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
