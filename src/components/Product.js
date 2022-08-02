import React from 'react';

export default function Product({ data }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={data.image_link}
        className="card-img-top"
        alt={data.description}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  );
}
