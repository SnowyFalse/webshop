import React from "react";
import './CollectionPreview.styles.scss'
import {CollectionItem} from "../collection-item/CollectionItem";


export function CollectionPreview({title, items}) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}