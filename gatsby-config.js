module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `HBUI - The Tempo Platform System`,
        short_name: `TPDS`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#553DED`,
        display: `minimal-ui`,
        icon: './src/assets/favicon.svg',
      },
    },
  ],
}
