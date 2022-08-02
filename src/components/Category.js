import React from 'react';
import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <div className="d-inline">
      <button>
        <Link to="/makeup">MakeUp</Link>
      </button>
      <button>
        <Link to="/haircare">Hair Care</Link>
      </button>
      <button>
        <Link to="/skincare">Skin Care</Link>
      </button>
    </div>
  );
}
