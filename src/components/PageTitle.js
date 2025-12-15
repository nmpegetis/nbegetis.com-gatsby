import React from "react"
import { Container } from "react-bootstrap"

const PageTitle = ({ title, children }) => (
  <Container as="header" className="bg-none pt-4 mb-5 pb-0">
    <h1>
      {title}&nbsp;<span>{children}</span>&nbsp;
    </h1>
  </Container>
)

export default PageTitle
