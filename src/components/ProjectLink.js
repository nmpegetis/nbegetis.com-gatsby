import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

const ProjectLink = ({ excerpt, featuredImages, tags = [], title, to }) => {
  return (
    <Container className="text-start">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row>
          {featuredImages &&
            featuredImages.map((image, idx) => (
              <Col key={idx}>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="w-75"
                />
              </Col>
            ))}
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}

export default ProjectLink
