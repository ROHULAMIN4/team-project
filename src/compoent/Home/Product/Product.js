import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  const { Name, description, img, price } = product;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card-Style">
        <img style={{ width: "100%", height: "100%" }} src={img} alt="" />
        <div className="transition-img">
          <h4 className="text-warning pt-4">{Name}</h4>
          <p>{description}</p>
          <p className="fs-4 fw-bold text-info">Price:{price}</p>
          <button type="button" class="btn btn-success">
            Add To card
          </button>

          {/* <Button onClick={handleOpen} sx={{ mb: 4 }} variant="contained">
              Purchase
            </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
