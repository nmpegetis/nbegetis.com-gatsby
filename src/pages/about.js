import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const { dark } = useContext(ThemeContext)

  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          roundedCircle
          width="140"
          height="140"
          src={
            dark
              ? `../../icons/profile_dark.png`
              : `../../icons/profile_light.png`
          }
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>.
          </p>

          <p className="i-5 mt-4 pt-2">
            People would describe me as an easy-going person, and I personally
            think you’d definitely enjoy grabbing a beer or coffee with me. I
            consider myself mostly as a resourceful and ingenious explorer and
            planner with an entrepreneurial and innovative mindset. I like
            planning my next destination and I always enjoy the journey to every
            destination in life, even if unplanned conditions are met halfway.
            So it is obvious why I like sailing as well as learning how to
            respond to wind-direction changes.
          </p>

          <p className="i-5 mt-4 pt-2">
            In my work life, I like building things for the web, and in my free
            time I enjoy all types of creative, learning and physical
            activities, keeping a balance between spirit, mind and body. So, one
            could say that what I don't like is inactivity, apathy and
            meaningless waste of time.
          </p>

          <p className="i-5 mt-4 pt-2">
            As a {occupation} I’ve been designing and writing code since my late
            teens (that period seems further and further away now!). So far,
            I’ve avoided to put myself under one label — to specialise in one
            thing only — and instead gone for this Jack of all Trades role in
            the various teams I’ve had the pleasure of working with. But doing
            so for that long I gained a good experience as a generalist in
            anything that has to do with data analysis, visualisations, business
            intelligence, product, machine learning and deep learning. I
            specialize, though, in software development for the mobile-web, both
            in front and backend. In the latest years, I work as a Senior{" "}
            {occupation} in financial sector. I have worked in startups and in
            big-companies, in small research teams with loose product focus and
            in large tight teams with laser focus on the mission. I’ve loved and
            love being part of that career journey.
          </p>

          <p className="i-5 mt-4 pt-2">
            Currently, at my job, I develop in Typescript and Angular for the
            frontend, while also in Java for the backend, and in my latest
            personal projects I enjoy React and GraphQL.
          </p>

          <p className="i-5 mt-4 pt-2">
            As for non-tech things, I’ve become more and more interested in the
            methods of leading teams and how to work smarter. That is, how the
            well-being of each team member is kept central while the work can
            progress in a smooth way.
          </p>

          <p className="i-5 mt-4 pt-2">
            I love traveling, and I plan to expand my traveling-territory in the
            following years, as for now I have only travelled in half of
            European countries. I have also traveled in 80% of Greek main roads
            and the surrounding cities, about 30 Greek islands and 60% of Cyprus
            main roads and surrounding cities. I have lived in total 1.5 years
            in Cyprus, 28 years in Greece and the rest in Switzerland. As of
            September 2019, I’ve settled in Zurich, Switzerland.
          </p>

          <p className="i-5 mt-4 pt-2">
            From my childhood, my family and my surrounding people taught me
            some values that I respect, appreciate and forward. Some of these
            are: goodness, kindness, environmentalism, peace, freedom, equality,
            respect for privacy and volunteering. If you want to learn more
            about me and what I am currently doing keep an eye out on{" "}
            <Link to="/now">Now</Link> for updates, on{" "}
            <Link to="/blog">Blog</Link> for thoughts and multimedia posts and
            on <Link to="/projects">Projects</Link> to see what I've been up to!
          </p>

          <p className="i-5 mt-4 pt-2">
            It is my first time that I will try to keep a blog once in a while
            so keep your expectations low, as I will experiment with this and I
            don’t know if it is going to work. I’d love to get your emails and
            tell me about you. Reach me at{" "}
            <a
              href="mailto:begetis@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              begetis@protonmail.com
            </a>{" "}
            about anything. 👋
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:begetis@protonmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <p> </p>
          {/* <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p> */}
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
