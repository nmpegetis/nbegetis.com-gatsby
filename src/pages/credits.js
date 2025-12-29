import React from "react"
import { PageTitle, PageLayout } from "../components"
import { SEO } from "../utils"
import Container from "react-bootstrap/Container"

const Credits = () => {
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
            <li>TODO: Fix code in this Credits page with UX principles</li>
            <li>TODO: Add content in Resume</li>
            <li>TODO: Change wepbage language based on location</li>
            <li>TODO: Add strava plugins or garmin to use within blog posts</li>
            <li>
              TODO: Decide if there is needed any background image for this
              webpage to make this more personal
            </li>
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
                Add content in Projects - 2025-12-29
              </s>{" "}-{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/cae6e2b"
                target="_blank"
                rel="noreferrer"
              >
                cae6e2b
              </a>
              {", "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/07907d9"
                target="_blank"
                rel="noreferrer"
              >
                07907d9
              </a>
              {", "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/7da95a5"
                target="_blank"
                rel="noreferrer"
              >
                7da95a5
              </a>
            </li>
            <li>
              <s>Make tags clickable and filterable - 2021-05-29</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/37fed90"
                target="_blank"
                rel="noreferrer"
              >
                37fed90
              </a>
              {", "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/b5ba9eb"
                target="_blank"
                rel="noreferrer"
              >
                b5ba9eb
              </a>
            </li>
            <li>
              <s>Add photos preview / photo fixes - 2021-06-07</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/e5a9a81"
                target="_blank"
                rel="noreferrer"
              >
                e5a9a81
              </a>
              {", "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/31032d7"
                target="_blank"
                rel="noreferrer"
              >
                31032d7
              </a>
            </li>
            <li>
              <s>Start writing blog posts / remove dummy posts - 2021-05-29</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/37fed90"
                target="_blank"
                rel="noreferrer"
              >
                37fed90
              </a>
            </li>
            <li>
              <s>Serve books list / show upcoming books - 2021-09-26</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/294aae0"
                target="_blank"
                rel="noreferrer"
              >
                294aae0
              </a>
            </li>
            <li>
              <s>Add "Past Now" navigation / dropdown affordance - 2021-05-20</s>
              -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/6a1f68c"
                target="_blank"
                rel="noreferrer"
              >
                6a1f68c
              </a>
              {", "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/90170ae"
                target="_blank"
                rel="noreferrer"
              >
                90170ae
              </a>
            </li>
            <li>
              <s>Add Last Updated timestamp on every new commit - 20210601</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/e5d6cda69e0c330e10d858c0886e394af15bb3da"
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
              >
                f7eb68e
              </a>
            </li>
            <li>
              <s>Produce Blog content - 20210528</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/37fed906194009e1f284d2b935c8cbef5e5b4ae6"
                target="_blank"
                rel="noreferrer"
              >
                37fed90
              </a>
            </li>
            <li>
              <s>Increase page font size - 20210527</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/037809b2b72f13d5812e1eb69118b8619418f6ed"
                target="_blank"
                rel="noreferrer"
              >
                037809b
              </a>
            </li>
            <li>
              <s>Fix for mobile screens. Menu icon not shown. - 20210526</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/7657b5e3a426dc12246a2d8c439ff0a601481d98"
                target="_blank"
                rel="noreferrer"
              >
                7657b5e
              </a>
            </li>
            <li>
              <s>Move to left the logo - 20210526</s> -{" "}
              <a
                href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/7657b5e3a426dc12246a2d8c439ff0a601481d98"
                target="_blank"
                rel="noreferrer"
              >
                7657b5e
              </a>
            </li>
          </ol>
        </p>
        <h3>Credits</h3>
        <p>
          This site is generated with the Gatsby, and is maintained by{" "}
          <a
            href="https://www.gatsbyjs.com/about/"
            target="_blank"
            rel="noreferrer"
          >
            these people
          </a>
          . The source code of this site is available on GitHub. I developed
          this site based on{" "}
          <a
            href="https://www.gatsbyjs.com/starters/surudhb/gatsby-personal-site-template"
            target="_blank"
            rel="noreferrer"
          >
            gatsby-personal-site-template
          </a>{" "}
          from{" "}
          <a href="https://github.com/surudhb" target="_blank" rel="noreferrer">
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

export default Credits
