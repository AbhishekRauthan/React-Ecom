import React, { Component } from 'react';
import ShopData from './Shop.data';
import PreviewCollec from '../../components/PreviewCollection/PreviewCollec';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, title, items }) => (
            <PreviewCollec key={id} title={title} items={items} />
          ))
        }
      </div>
    );
  }
}

export default Shop;