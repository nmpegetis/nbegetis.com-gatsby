import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default ({ showCredits }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(query)

  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <Link to={"/credits/"} className="link">
          <b>{author}</b> &copy; {new Date().getFullYear()}. Last updated on {new Date().toLocaleDateString()}
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
