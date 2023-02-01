import React from 'react';
import {Link} from 'react-router-dom';

const card = ({name,imgs,price,description,id}) => {
  
  return (
    <Link key={id+54441154} className="card" to={{pathname:`/product/${id}`,
    hash:`#${name}`,state: { fromDashboard: true }}}>
          <img src={imgs[0]} alt="" className="card-img-top" />
          <div className="card-header d-flex justify-content-between">
            <h5 className="card-title">{name}</h5>
            <h5>{price}$</h5>
          </div>
          <div className="card-body">
          <p className="card-text">{description[0].slice(0,100)+ '...'}</p>
          </div>
    </Link>
  )
}

export default card
