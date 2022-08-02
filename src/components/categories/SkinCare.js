import React from 'react';
import Loader from '../loader/Loader';
import Product from '../Product';

export default function SkinCare({ data }) {
  return (
    <div className="container text-center my-1">
      <div className="row">
        {data.length !== 0 ? (
          data.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <Product data={product} />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
