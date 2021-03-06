/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Nikolas Begetis`,
    author: `Nikolas Begetis`,
    firstName: `Nikólas`,
    lastName: `Begétis`,
    description: `Nikolas Begetis's personal site`,
    occupation: `Software Engineer`,
    keywords: [
      `Nikolas`,
      `Begetis`,
      `Personal`,
      `Blog`,
      `Now`,
      `Resume`,
      `CV`,
      `Projects`,
      `Work`,
    ],
    siteUrl:
      `https://nikolasbegetiscom.gatsbyjs.io/` ||
      process.env.URL ||
      process.env.DEPLOY_URL ||
      `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Explorer`,
      `Navigator`,
      `Engineer`,
      `Thinker`,
      `Brainiac`,
      `Sailor`,
      `Leader`,
      `Salsero`,
      `Developer`,
      `Tech-savvy`,
      `Gadget-geek`,
      `Rambo`,
      `Diver`,
      `Surfer`,
      `Hobbyist`,
      `Ingenious`,
      `Debater`,
      `Commander`,
      `Captain`,
      `Professor`,
      `Coach`,
    ],
    readingList: [
      {
        title: `Sapiens: A Brief History of Humankind`,
        author: `Yuval Noah Harari`,
        link: `https://www.goodreads.com/book/show/23692271-sapiens`,
      },
      {
        title: `Behave: The Biology of Humans at our Best and Worst`,
        author: `Robert Sapolsky`,
        link: `https://www.goodreads.com/book/show/31170723-behave`,
      },
      {
        title: `The Gene: An Intimate History`,
        author: `Siddhartha Mukeherjee`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikolas Begetis's Personal Site`,
        short_name: `N.Begetis`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/faviconnorth.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    `gatsby-plugin-build-date`,
  ],
}
