import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ItemState } from "../../redux/slices/favoritesSlice";

const BuyingItem: React.FC<ItemState> = ({
    tittle,
    power,
    time,
    volume,
    speed,
    priceNew,
    priceOld,
    img,
}) => {

  return (
    <div className="item">
      <img width="250px" height="231px" src={img} alt="самокат" />
      <h3>{tittle}</h3>
      <div className="item__info">
        <ul>
          <li className="item__info-volume">{volume}</li>
          <li className="item__info-power">{power} л.с</li>

          <li className="item__info-speed">{speed} км/ч</li>
          <li className="item__info-time">{time}</li>
        </ul>
      </div>
      <div className="item__footer">
        <div className="item__price">
          <span>{priceOld} ₽</span>
          <p>{priceNew} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default BuyingItem;
