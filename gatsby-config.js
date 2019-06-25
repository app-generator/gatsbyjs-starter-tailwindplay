module.exports = {
  siteMetadata: {
    title: `TailwindPlay`,
    description: `GatsbyJS Starter styled with Tailwind CSS`,
    author: `@Sm0keDev`,
    github: `https://github.com/app-generator/gatsbyjs-starter-tailwindplay`,
    blog: `https://blog.appseed.us/tag/gatsbyjs`,
    product: `https://appseed.us/apps/gatsbyjs`,
    docs: `https://docs.appseed.us/apps/gatsbyjs`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    }
  ]
};
