import React from "react";
import "./Card.css";
import Product from "../assets/product.svg";

export const Card = () => (
  <>
    <div className='CardContainer'>
      <div className='ImageAndInfoContainer'>
        <img src={Product} className='Image' />
        <div className='Info'>
          <div className='SKU'>119270</div>
          <div className='Desc'>Bosch Tassimo TAS1006 Happy Red</div>
          <div className='SubDesc'>Ακουστικά</div>
        </div>
      </div>
      <div className='PriceContainer'>
        <div className='ActualPrice'>
          <div className='ActualPriceText'>από</div>
          <div className='ActualPriceValue'>
            <div className='strikethrough'>$500.00</div>
          </div>
        </div>
        <div className='PriceWithDiscount'>$400.00</div>
        <div className='Discount'>
          <div className='DiscountText'>όφελος</div>
          <div className='DiscountValue'>$100.00</div>
        </div>
      </div>
    </div>
  </>
);
