import React from "react"
import { PageTitle, PageLayout } from "../components"
import { SEO } from "../utils"
import Container from "react-bootstrap/Container"

export default () => {
  return (
    <PageLayout>
      <SEO title="Credits" />
      <PageTitle title="Credits" />
      <Container className="text-left">
        <p>Last updated on May 26, 2021</p>
        <h3>Todo</h3>
        <p>
          Todo tasks for this personal page:
          <ul>
            <li>Increase page font size</li>
            <li>Move to left the logo</li>
            <li>Produce Blog content</li>
            <li>Add content in Projects</li>
            <li>Add content in Resume</li>
            <li>
              Serve books reading list etc. from graphql. Show top # books based
              on my ratings
            </li>
            <li>Change wepbage language based on location</li>
            <li>Start by writing some blog posts and remove dummy blogposts</li>
            <li>
              Add a drop down menu item functionality
              <ul>
                <li>
                  Add a 'Future' page in 'Now' drop down menu, for Future plans
                  (shortterm, midterm, longterm), priorities and bucketlist.
                </li>
              </ul>
            </li>
            <li>
              Decide if there is needed any background image for this webpage to
              make this more personal
            </li>
          </ul>
        </p>
        <h3>Credits</h3>
        <p>
          This site is generated with the Gatsby, and is maintained by{" "}
          <a href="https://www.gatsbyjs.com/about/" target="_blank">
            these people
          </a>
          . The source code of this site is available on GitHub. I developed
          this site based on{" "}
          <a
            href="https://www.gatsbyjs.com/starters/surudhb/gatsby-personal-site-template"
            target="_blank"
          >
            gatsby-personal-site-template
          </a>{" "}
          from{" "}
          <a href="https://github.com/surudhb" target="_blank">
            Surudh Bhutani
          </a>
          .
        </p>
        <h3>License</h3>
        <p>This site’s simple license: </p>
        <code>
          <p>Copyright Nikolas Begetis, 2021</p>
          <p>
            You may copy the code of this site, and be inspired by its
            structure.
          </p>
          <p>
            You may not copy any content of mine and claim them as your own.
          </p>
        </code>
        <p></p>
      </Container>
    </PageLayout>
  )
}
