import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

import {Container} from 'layouts';

import products from 'seeders/products';

const ProductItem = () => {
  const [item, setItem] = useState(null);
  // alias
  const { itemAlias } = useParams();
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    const nextItem = products.find(product => product.alias === itemAlias);

    if (nextItem) {
      setItem(nextItem);
    } else {
      navigate('/');
    }
  }, []);

  // content
  const renderContent = item && (
    <div className="flex flex-col items-center">
      <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }}/>
      <h1 className="ui-title-1" style={{color: 'white'}}>{item.title}</h1>
      <span className="ui-title-3" style={{color: 'white'}}>{item.price}</span>

      {/*  controls */}
      <div className="flex mt-4">
        <Link to="/" className="ui-button isLink">
          Back to home
        </Link>
        <div className="ui-button isPrimary">
          Add to card
        </div>
      </div>
    </div>
  );

  return (
    <Container>
      {renderContent}
    </Container>
  );
};

export default ProductItem;