import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        {unemployed && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
              display: "inline-flex",
              flexFlow: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="first-name">{firstName}</div>
            <div className="last-name">{lastName}</div>
          </h1>
          <br />
          <br />
          <p>
            <i>** Currently this web page is under development **</i>
          </p>
          <p>
            <i>** So far work is done only in Blog, Now and About page **</i>
          </p>
          <p>
            <i>
              <Link to={"/credits/"} className="link">
                ** Check which page features are coming next, and all the
                licenses and credits **
              </Link>{" "}
            </i>
          </p>
          <br />
          <br />
          <h3>Me in ten seconds</h3>
          <p>
            <i>
              Hi! Welcome to my webpage! I am a {occupation} from
              <strong>
                <span className="blue"> Greece🇬🇷</span>
              </strong>{" "}
              and
              <strong>
                <span className="yellow"> Cyprus🇨🇾</span>
              </strong>{" "}
              who lives in
              <strong>
                <span className="red"> Switzerland🇨🇭</span>
              </strong>
              . I am an explorer and I love any activity, in all four 🌴🍁🌲🌷,
              that needs a 🧭. In the summer I enjoy
              <strong>
                <span className="light-blue"> sailing</span>
              </strong>
              , in autumn
              <strong>
                <span className="light-yellow"> hiking</span>
              </strong>
              , in winter
              <strong>
                <span className="white"> skiing</span>
              </strong>
              , and in spring
              <strong>
                <span className="green"> cycling</span>
              </strong>
              .
            </i>
          </p>
          <p>
            <i>
              I decided to start this page/blog in May 2021, as this task had
              been in my todo list since 2013 😂. You can read more about me (in
              ten minutes) by visiting the{" "}
              <Link to={"/about/"} className="link">
                About
              </Link>{" "}
              page. You can also check out what I'm doing{" "}
              <Link to={"/now/"} className="link">
                now
              </Link>{" "}
              and what's happened to me{" "}
              <Link to={"/now/"} className="link">
                so far.
              </Link>{" "}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/nmpegetis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nmpegetis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          {unemployed && (
              <a
                href="https://www.freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "free-code-camp"]}
                  className="icons fcc"
                  title="FreeCodeCamp"
                />
              </a>
            ) && (
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "hackerrank"]}
                  className="icons hr"
                  title="Hackerrank"
                />
              </a>
            )}
          <a
            href="mailto:begetis@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
