import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/header'
import Eyecatcher from '../components/eyecatcher'
import Regular from '../components/regular'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const regularEvents = get(this, 'props.data.allContentfulRegularEvents.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <Header />
        <Eyecatcher />
        <Regular regularEventsList={regularEvents}/>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRegularEvents {
      edges {
        node {
          title
          slug
          bibleText
          bibleVerse
          dateDay
          dateTime
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
