import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/header'
import Eyecatcher from '../components/eyecatcher'
import Regular from '../components/regular'
import Address from '../components/address'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteContent = get(this, 'props.data.contentfulIntroduction')
    const regularEvents = get(this, 'props.data.allContentfulRegularEvents.edges')
    const specialEvents = get(this, 'props.data.allContentfulSpecialEvent.edges')


    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <Header />
        <Eyecatcher content={siteContent}/>
        <Regular regularEventsList={regularEvents} specialEventsList={specialEvents}/>
        <Address />
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
    contentfulIntroduction (contentful_id: { eq: "1qiM8vQpKYEMgkS6ESseqe" }) {
      title
      subtitle
      description {
        description
      }
      buttonTitle
      
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
            description
          }
        }
      }
    }
    allContentfulSpecialEvent(sort: {fields: dateTime, order: ASC}) {
      edges {
        node {
          title
          slug
          dateTime
          download {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
