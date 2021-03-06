import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Remarkable from 'remarkable'

import Layout from '../components/layout'
import Header from '../components/header'
import Eyecatcher from '../components/eyecatcher';

// render
var md = new Remarkable({
  html: true,
  breaks: true,
})

class RootIndex extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')
    const text = get(this, 'props.data.contentfulIntroduction.glaubensbekenntnis.glaubensbekenntnis')
    const title = get(this, 'props.data.contentfulIntroduction.glaubensbekenntnisTitel')
    const texthtml = md.render(text)

    return (
      <Layout meta={siteMetadata} >
        <Header />
        <Eyecatcher size='small' />
        <article>
          <div className="Container" style={
            {
                position: 'relative',
                top: '-133px',
                backgroundColor: '#fff',
                paddingTop: '20px',
                zIndex: 1111
            }
          }>            
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: texthtml }} />
          </div>
        </article>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query GlaubensbekenntnisQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    contentfulIntroduction (contentful_id: { eq: "1qiM8vQpKYEMgkS6ESseqe" }) {
      glaubensbekenntnisTitel
      glaubensbekenntnis {
        glaubensbekenntnis
      }
    }
  }
`
