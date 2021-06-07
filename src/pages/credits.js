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
          <h5>Todo tasks for this personal page:</h5>
          <ul
            style={{
              height: "15em",
              "line-height": "2em",
              overflow: "scroll",
              "overflow-x": "hidden",
            }}
          >
            <li>Link 'so far' with an in-page href to "Past 'Now's"</li>
            <li>Fix code in this Credits page with UX principles</li>
            <li>Add tags in blog post cards and pages</li>
            <li>Make tags in whole web base clickable, and filterable</li>
            <li>Add plugin for photos preview</li>
            <li>Add tags in blog post cards and pages</li>
            <li>Add content in Projects</li>
            <li>Add content in Resume</li>
            <li>
              g Serve books reading list etc. from graphql. Show top # books
              based on my ratings
            </li>
            <li>Change wepbage language based on location</li>
            <li>Start by writing some blog posts and remove dummy blogposts</li>
            <li>Add strava plugins or garmin to use within blog posts</li>
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
            <li>Link 'so far' with an in-page href to "Past 'Now's"</li>
          </ul>
        </p>
        <hr />
        <p>
          <h5>Done tasks for this personal page:</h5>
          <ol
            style={{
              height: "15em",
              "line-height": "2em",
              overflow: "scroll",
              "overflow-x": "hidden",
            }}
            reversed
          >
            <li>
              <s>
                Fix image shown for each blog-post filtering only the ones
                within directory - 20210607
              </s>{" "}
              -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/"
                target="_blank"
              >
                latest
              </a>
            </li>
            <li>
              <s>Add Last Updated timestamp on every new commit - 20210601</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/e5d6cda69e0c330e10d858c0886e394af15bb3da"
                target="_blank"
              >
                e5d6cda
              </a>
            </li>
            <li>
              <s>
                Split todos from done in Credits Page and add checksums. -
                20210531
              </s>{" "}
              -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/f7eb68eaceb6e370067a13520bf0d97a3ba83ef5"
                target="_blank"
              >
                f7eb68e
              </a>
            </li>
            <li>
              <s>Produce Blog content - 20210528</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/37fed906194009e1f284d2b935c8cbef5e5b4ae6"
                target="_blank"
              >
                37fed90
              </a>
            </li>
            <li>
              <s>Increase page font size - 20210527</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/037809b2b72f13d5812e1eb69118b8619418f6ed"
                target="_blank"
              >
                037809b
              </a>
            </li>
            <li>
              <s>Fix for mobile screens. Menu icon not shown. - 20210526</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/7657b5e3a426dc12246a2d8c439ff0a601481d98"
                target="_blank"
              >
                7657b5e
              </a>
            </li>
            <li>
              <s>Move to left the logo - 20210526</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/7657b5e3a426dc12246a2d8c439ff0a601481d98"
                target="_blank"
              >
                7657b5e
              </a>
            </li>
          </ol>
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
