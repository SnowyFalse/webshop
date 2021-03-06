import React from "react";
import {SHOP_DATA} from "./Shop.data";
import {CollectionPreview} from "../../components/collection-preview/CollectionPreview";


export class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return <div>
      {collections.map(({id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps}/>))}
    </div>
  }
}