import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"

export default props => {
  const img = Array.isArray(props.featuredImage)
    ? props.featuredImage[0]
    : props.featuredImage

  return (
    <Card className="card-container" as={Link} to={props.to}>
      <Card.Img as="div" className="h-50 p-0">
        {img && (
          <GatsbyImage
            image={getImage(img)}
            alt={props.title}
            className="w-100 h-100"
          />
        )}
      </Card.Img>
      {/* TODO add tags */}
      {/* <div className="d-inline-flex">
        {props.tags.map(tag => (
          <Badge
            key={tag}
            pill
            variant="light"
            className="mr-2 p-0 px-3 resume-tags"
          >
            {tag}
          </Badge>
        ))}{" "}
      </div> */}

      <Card.Body className="pt-2">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.excerpt}</Card.Text>
      </Card.Body>
    </Card>
  )
}
