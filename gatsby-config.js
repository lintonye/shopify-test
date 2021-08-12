module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shopify-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.SHOPIFY_STORE_URL,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
