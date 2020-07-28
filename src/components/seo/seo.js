import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ title, description, url, image }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title || data.site.siteMetadata.title
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage = image || data.site.siteMetadata.image
        const metaUrl = url || data.site.siteMetadata.url
        return (
          <Helmet title={title}>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={metaImage} />
            {metaUrl && <meta property="og:url" content={metaUrl} />}
            {metaTitle && <meta property="og:title" content={metaTitle} />}
            {metaDescription && (
              <meta property="og:description" content={metaDescription} />
            )}
            {metaImage && <meta property="og:image" content={metaImage} />}
            <meta name="twitter:card" content="summary_large_image" />
            {metaTitle && <meta name="twitter:title" content={metaTitle} />}
            {metaDescription && (
              <meta name="twitter:description" content={metaDescription} />
            )}
            {metaImage && <meta name="twitter:image" content={metaImage} />}
          </Helmet>
        )
      }}
    />
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
  }
`
