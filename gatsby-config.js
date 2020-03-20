module.exports = {
  siteMetadata: {
    title: `Breguła Ubezpieczenia`,
    description: `Breguła Ubezpieczenia jest to rodzinna firma, która istnieje na rynku od ponad 25 lat. Ponad 1000 zadowolonych klientów skorzystało z usług naszej firmy. Jesteśmy liderami w branży, o czym świadczą co roczne nagrody i wyróżnienia od wielu towarzystw ubezpieczeniowych. Współpracując z większością z nich (ok 30 różnych firm ubezpieczeniowych), posiadamy kompleksową ochronę dla klienta indywidualnego oraz małych i średnich przedsiębiorstw.`,
    author: `Samuel Kędziora samukedo@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        google: {
          families: ['Lato']
        },
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#08213d`,
        theme_color: `#08213d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
