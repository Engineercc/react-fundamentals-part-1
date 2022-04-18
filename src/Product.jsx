import React from "react";

const Product = ({
  id,
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
  images,
}) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card album-list__content" >
        <img className="card-img-top" src={thumbnail} />
        <div className="card-body">
            <h5>{id}</h5>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">{price}</h6>
          <h6 className="card-title">{brand}</h6>
          <h6 className="card-title">{category}</h6>
          <p className="card-text">{description}</p>
          {images.map((image,index) => {
            return (
              <img key={index} src={image} width={130} height={65} className="mr-2 mb-2" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
