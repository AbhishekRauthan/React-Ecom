import React, {useState} from "react";
import ShopData from './Shop.data';
import PreviewCollec from '../../components/PreviewCollection/PreviewCollec';

const Shop = () => {
  const [collections,setCollections] = useState(ShopData)
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

export default Shop
