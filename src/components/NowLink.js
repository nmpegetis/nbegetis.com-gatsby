import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"

export default ({ to, select, id, date, duration, excerpt, tags = [] }) => {
  return (
    <Container
      className="text-left"
      className="now-container now-links"
      onClick={select(id)}
    >
      <Link to={to}>
        <h4 className="mt-1">{`${date} | ⏱️ ${duration} min`}</h4>
        {/* </Link> */}
        {tags.map(tag => (
          <Badge key={tag} pill variant="dark" className="px-2 mr-1">
            {tag}
          </Badge>
        ))}
        <p className="pt-1 pl-4 text-justify">{excerpt}</p>
      </Link>
    </Container>
  )
}
