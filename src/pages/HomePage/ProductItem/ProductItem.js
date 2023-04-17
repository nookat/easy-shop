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
  }, [])

  // content
  const renderContent = item && (
    <>
      <h1 className="ui-title-1">{item.title}</h1>
    </>
  );

  // link to home
  const renderHomeLink = (
    <p>Please go to Home page: <Link to="/">Link</Link></p>
  );

  return (
    <Container>
      {renderContent}
      {renderHomeLink}
    </Container>
  );
};

export default ProductItem;