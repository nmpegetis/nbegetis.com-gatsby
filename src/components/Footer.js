import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default ({ showCredits }) => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <Link to={"/credits/"} className="link">
          <b>{author}</b> &copy; {new Date().getFullYear()}
        </Link>
        {showCredits && (
          <span>
            . Made with&nbsp;
            <span className="heart">&nbsp;❤&nbsp;</span> &&nbsp;
            <a href="https://www.gatsbyjs.org/">Gatsby</a>
          </span>
        )}
      </span>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
