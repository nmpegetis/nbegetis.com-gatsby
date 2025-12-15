const Helpers = {
  getImageMap: (images, regex, hasMultipleImages = true, limit = 3) => {
    return images.reduce((map, image) => {
      const slug = image.node.relativePath.match(regex)[0]
      if (hasMultipleImages) {
        if (map.hasOwnProperty(slug)) {
          if (map[slug].length <= limit)
            map[slug].push(image.node.childImageSharp.gatsbyImageData)
        } else {
          const arr = []
          arr.push(image.node.childImageSharp.gatsbyImageData)
          map[slug] = arr
        }
      } else {
        map[slug] = image.node.childImageSharp.gatsbyImageData
      }
      return map
    }, {})
  },
}

export default Helpers
