import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={
            dark
              ? `../../icons/profile_dark.png`
              : `../../icons/profile_light.png`
          }
          alt={dark ? "profile-dark" : "profile-light"}
          roundedCircle
        />
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
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <h3>Me in eight seconds</h3>
          <p>
            <i>
              Hi! Welcome to my webpage! I am a 31 years old {occupation} from
              <strong>
                <span className="blue"> Greece</span>
              </strong>{" "}
              and
              <strong>
                <span className="yellow"> Cyprus</span>
              </strong>{" "}
              who lives in
              <strong>
                <span className="red"> Switzerland </span>
              </strong>
              since September 2019. I am an explorer and I love any activity
              that needs a compass in all four seasons. In the summer I enjoy -
              <strong>
                <span className="light-blue"> sailing</span>
              </strong>
              , in autumn -
              <strong>
                <span className="light-yellow"> hiking</span>
              </strong>
              , in winter -
              <strong>
                <span className="white"> skiing</span>
              </strong>
              , and in spring -
              <strong>
                <span className="green"> cycling</span>
              </strong>
              .
            </i>
          </p>
          <p>
            <i>
              I decided to start this page and this blog in May 2021, as this
              task had been in my todo list since 2013 😂. You can read more
              about me (in eight minutes) by visiting the About page. You can
              also check out what I'm doing now and what's happened to me so
              far.
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
            href="mailto:nmpegetis@gmail.com"
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
