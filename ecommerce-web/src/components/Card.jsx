import React from 'react'


const Card = ({ title, description, price, src }) => {
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className='w-[150px]' src={src} alt="product-img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Shop now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;