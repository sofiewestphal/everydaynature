module.exports = {
  siteMetadata: {
    title: "everydaynature",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "5gGVwiV42KNewCZDgwkNFUtZOs8SPFG_DvCiLemMjKs",
        spaceId: "knwnohaaf1cs",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
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
