import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, NowLink } from "../components"
import { SEO } from "../utils"
import { Container, Form, FormControl } from "react-bootstrap"

const SubTitle = ({ ttr, date, author }) => (
  <h5 className="text-muted mb-5">
    Time to read: {ttr} <small>min</small> | {date} | {author}
  </h5>
)

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
    selectedPost: null,
  })

  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[now].*\/|$/

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allPosts.filter(post => {
      // query will run on the following fields
      const { description, title, tags, author } = post.node.frontmatter
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        post.node.excerpt.toLowerCase().includes(stdQuery) ||
        (description && description.toLowerCase().includes(stdQuery)) ||
        title.toLowerCase().includes(stdQuery) ||
        author.toLowerCase().includes(stdQuery) ||
        (tags && tags.join("").toLowerCase().includes(stdQuery))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const select = id => e => {
    console.log("mpika", id)
    console.log(
      "filteredPosts",
      filteredPosts.filter(p => p.node.id === id)
    )
    const selected = filteredPosts.find(p => p.node.id === id)
    console.log(selected)
    setState({
      query,
      selectedPost: selected,
    })
  }

  const { filteredData, query, selectedPost } = state
  const filteredPosts = query !== "" ? filteredData : allPosts
  const { node: nowRead } = selectedPost || filteredPosts[0]

  return (
    <PageLayout>
      <SEO title="Now" />
      <PageTitle title="Now" />
      {filteredPosts.length > 0 && (
        <Container className="text-center" fluid>
          <SubTitle
            ttr={nowRead.timeToRead}
            date={nowRead.frontmatter.date}
            author={nowRead.frontmatter.author}
          />
          <Container className="text-justify">
            <div dangerouslySetInnerHTML={{ __html: nowRead.html }} />
          </Container>
        </Container>
      )}
      <PageTitle title="Past `Now`s" />
      <Container className="px-5 mb-5 text-center">
        <Form className="aurebesh blog-filter">
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form>
      </Container>
      <Container
        fluid
        className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            <NowLink
              to={"/now/"}
              id={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              duration={node.timeToRead}
              excerpt={node.excerpt}
              select={select}
            />
            <hr />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}
//todo: if a past now is selected then make available the selected now in screen
//todo: the below query needs optimization not to bring all the now texts but only the latest one
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/now/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            author
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          html
          timeToRead
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "jpg" }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/now/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
