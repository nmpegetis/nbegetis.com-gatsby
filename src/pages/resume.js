import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

const ResumePage = ({ data }) => {
  const history = data.allMarkdownRemark.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /\/[work].*\/|$/)
  return (
    <PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume (**dummy data, to be updated**)">
        &nbsp;
        <a href="../../resume.pdf" target="_blank" download aria-label="Resume (PDF, opens in new tab)">
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>
      <Container className="mt-5 pt-3" fluid>
        {history.map(({ node }) => (
          <div key={node.id}>
            <WorkHistory
              frontmatter={node.frontmatter}
              image={imageMap[node.fields.slug]}
              html={node.html}
            />
            <hr className="w-75" />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export default ResumePage

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { frontmatter: { startDate: DESC } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            position
            tags
            startDate(formatString: "MMMM")
            endDate(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
          relativePath
        }
      }
    }
  }
`
