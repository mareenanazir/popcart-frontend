/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Popcart",
    description:
      "Popcart is your perfect online shopping price comparison tool. Learn how to be a better shopper with our online tips!",
    url: "https://www.popcart.com",
    image: "popcart-index.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],

}
