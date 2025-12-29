import React from "react"
import { PageTitle, PageLayout } from "../components"
import { SEO } from "../utils"
import Container from "react-bootstrap/Container"

const Credits = () => (
  <PageLayout>
    <SEO title="Credits" />
    <PageTitle title="Credits" />
    <Container className="text-left">
      <p>Last updated on December 29, 2025</p>

      <h3>Todo</h3>
      <h5>Todo tasks for this personal page:</h5>
      <div style={{ maxHeight: "15em", lineHeight: "2em", overflow: "auto" }}>
        <ul>
          <li>
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/issues/19" target="_blank" rel="noreferrer">#19: Accessibility: Form in navbar missing submit button (H32.2)</a>
            <span style={{ display: 'inline-block', marginLeft: '0.5em', fontSize: '0.8em', color: '#444' }}>· opened 2025-12-24</span>
          </li>
          <li>
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/issues/18" target="_blank" rel="noreferrer">#18: Accessibility: Insufficient color contrast (multiple elements)</a>
            <span style={{ display: 'inline-block', marginLeft: '0.5em' }}>
              <span style={{ display: 'inline-block', background: '#d73a4a', color: '#fff', padding: '0.08rem 0.4rem', borderRadius: '0.3rem', fontSize: '0.75rem' }}>bug</span>
              <span style={{ display: 'inline-block', background: '#fff', color: '#444', padding: '0.08rem 0.4rem', borderRadius: '0.3rem', fontSize: '0.75rem', marginLeft: '0.4rem' }}>· opened 2025-12-24</span>
            </span>
          </li>
          <li>
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/issues/17" target="_blank" rel="noreferrer">#17: Accessibility: Anchor elements missing accessible name (SVG-only anchors)</a>
            <span style={{ display: 'inline-block', marginLeft: '0.5em', fontSize: '0.8em', color: '#444' }}>· opened 2025-12-24</span>
          </li>
        </ul>
      </div>

      <hr />

      <h5>Done tasks for this personal page:</h5>
      <div style={{ maxHeight: "15em", lineHeight: "2em", overflow: "auto" }}>
        <ol reversed>
          <li>
            <s>Add content in Projects - 2025-12-29</s> -
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/cae6e2b" target="_blank" rel="noreferrer"> cae6e2b</a>,
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/07907d9" target="_blank" rel="noreferrer"> 07907d9</a>,
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/7da95a5" target="_blank" rel="noreferrer"> 7da95a5</a>
          </li>
          <li>
            <s>Make tags clickable and filterable - 2021-05-29</s> -
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/37fed90" target="_blank" rel="noreferrer"> 37fed90</a>,
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/b5ba9eb" target="_blank" rel="noreferrer"> b5ba9eb</a>
          </li>
          <li>
            <s>Add photos preview / photo fixes - 2021-06-07</s> -
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/e5a9a81" target="_blank" rel="noreferrer"> e5a9a81</a>,
            <a href="https://github.com/nmpegetis/nbegetis.com-gatsby/commit/31032d7" target="_blank" rel="noreferrer"> 31032d7</a>
          </li>
        </ol>
      </div>

      <h3>Credits</h3>
      <p>
        This site is generated with Gatsby and maintained by the community.
        The source code is available on GitHub. I developed this site based on{' '}
        <a href="https://www.gatsbyjs.com/starters/surudhb/gatsby-personal-site-template" target="_blank" rel="noreferrer">gatsby-personal-site-template</a>{' '}
        from <a href="https://github.com/surudhb" target="_blank" rel="noreferrer">Surudh Bhutani</a>.
      </p>

      <h3>License</h3>
      <p>This site’s simple license:</p>
      <p>You may copy the code of this site and be inspired by its structure.</p>
      <p>You may not copy any content of mine and claim it as your own.</p>

    </Container>
  </PageLayout>
)

export default Credits
