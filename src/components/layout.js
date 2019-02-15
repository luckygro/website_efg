import React from 'react'
import Helmet from 'react-helmet'


import '../style/layout.css'

class Template extends React.Component {

  render() {

    const { meta, children } = this.props

    return (
      <>
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
        </Helmet>
        {children}
      </>
    )
  }
}

export default Template