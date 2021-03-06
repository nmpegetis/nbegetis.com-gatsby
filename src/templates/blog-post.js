import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import { Image } from "react-bootstrap"

const SubTitle = ({ ttr, date, author }) => (
  <h5 className="text-muted mb-5">
    Time to read: {ttr} <small>min</small> | {date} | {author}
  </h5>
)

export default ({ path, data }) => {
  const post = data.markdownRemark
  const photos = (data.allFile.edges || []).filter(el =>
    el.node.relativePath.includes(path)
  )
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <React.Fragment>
          <SubTitle
            ttr={post.frontmatter.timeToRead}
            date={post.frontmatter.date}
            author={post.frontmatter.author}
            tags={post.frontmatter.tags}
          />
          {/* todo: hot fix below, change this in future */}
          <Image
            width="550"
            fluid
            src={
              photos && photos[0] && photos[0].node.childImageSharp.fluid.src
            }
            alt={"profile-light"}
            rounded
            style={{ marginBottom: "20px" }}
          />
        </React.Fragment>
      }
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
        timeToRead
        tags
      }
      excerpt
    }
    allFile(
      filter: {
        extension: { eq: "jpg" }
        relativePath: { regex: "/(feature|blog)/" }
        relativeDirectory: { regex: "/content/blog/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
