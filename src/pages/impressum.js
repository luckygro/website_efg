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
    const text = get(this, 'props.data.contentfulIntroduction.impressum.impressum')
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
            <div dangerouslySetInnerHTML={{ __html: texthtml }} />
          </div>
        </article>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ImpressumQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    contentfulIntroduction (contentful_id: { eq: "1qiM8vQpKYEMgkS6ESseqe" }) {
      impressum {
        impressum
      }
    }
  }
`
