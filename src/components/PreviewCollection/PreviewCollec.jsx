import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'

import './PreviewCollec.scss'

const PreviewCollec = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({id, ...itemProps}) => (
              <CollectionItem key={id}{...itemProps} />
            ))
        }
      </div>
    </div>
  )
}

export default PreviewCollec
