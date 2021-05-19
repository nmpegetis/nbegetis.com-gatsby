import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"

export default ({ to, subtitle, excerpt, tags = [] }) => {
  return (
    <Container className="text-left">
      <Link to={to} style={{ textDecoration: "none" }}>
        <h4 className="mt-1">{subtitle}</h4>
      </Link>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-1 pl-4 text-justify">{excerpt}</p>
    </Container>
  )
}
