import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from '../components/jumbotron';
import { ProductBox } from '../components/product-box';
import { loadProducts } from '../modules/products/product.actions';
import { selectProducts } from '../modules/products/product.selectors';
import './main-page.css';

function MainPageContent({ loadProducts, products }) {
  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Shopit</h1>
        <p>
          The best shopping site in the web that would saves you most money.
        </p>
        <p>Because you can't buy anything here.</p>
        <Jumbotron>
          <p>It's only crazy until you buy it.</p>
          <h1>Just Buy It.</h1>
          <p>Show them what a crazy can do.</p>
        </Jumbotron>
        <div className="main-page-product-grid">
          {products.map(product => (
            <ProductBox {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStates = state => ({
  products: selectProducts(state)
});

const mapDispatch = {
  loadProducts
};

export const MainPage = connect(
  mapStates,
  mapDispatch
)(MainPageContent);
