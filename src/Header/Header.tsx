import "./header.scss";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Cart from "../components/Cart";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header: React.FC = () => {
  const [openCart, setOpenCart] = useState(false);
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo-kuggo" />
          </Link>
          <Search />
          <div className="header__cart">
            <Link to="/favorites" className="button__favotites">
              <svg
                width="25"
                height="25"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9935 3.51484C16.7329 2.90528 16.357 2.35291 15.887 1.88864C15.4167 1.42298 14.8621 1.05293 14.2535 0.798611C13.6224 0.533848 12.9455 0.398328 12.2622 0.399916C11.3035 0.399916 10.3681 0.665058 9.5552 1.16588C9.36073 1.28569 9.17599 1.41727 9.00097 1.56065C8.82595 1.41727 8.6412 1.28569 8.44674 1.16588C7.63387 0.665058 6.69848 0.399916 5.73976 0.399916C5.0494 0.399916 4.38044 0.533469 3.74842 0.798611C3.1378 1.05393 2.58746 1.4212 2.1149 1.88864C1.64429 2.35239 1.26835 2.90489 1.00839 3.51484C0.738077 4.14922 0.600006 4.82287 0.600006 5.51617C0.600006 6.17019 0.732244 6.8517 0.994774 7.54499C1.21452 8.12438 1.52956 8.72537 1.9321 9.33225C2.56995 10.2926 3.447 11.2943 4.53601 12.3097C6.34066 13.9929 8.12781 15.1555 8.20365 15.2027L8.66454 15.5012C8.86873 15.6328 9.13126 15.6328 9.33545 15.5012L9.79634 15.2027C9.87218 15.1536 11.6574 13.9929 13.464 12.3097C14.553 11.2943 15.43 10.2926 16.0679 9.33225C16.4704 8.72537 16.7874 8.12438 17.0052 7.54499C17.2677 6.8517 17.4 6.17019 17.4 5.51617C17.4019 4.82287 17.2639 4.14922 16.9935 3.51484V3.51484ZM9.00097 13.9477C9.00097 13.9477 2.07795 9.46776 2.07795 5.51617C2.07795 3.51484 3.71731 1.89257 5.73976 1.89257C7.16131 1.89257 8.39423 2.69388 9.00097 3.86443C9.6077 2.69388 10.8406 1.89257 12.2622 1.89257C14.2846 1.89257 15.924 3.51484 15.924 5.51617C15.924 9.46776 9.00097 13.9477 9.00097 13.9477Z"
                  fill="#282739"
                />
              </svg>
            </Link>
            <button
              onClick={() => setOpenCart(!openCart)}
              className={
                items.length > 0 ? "button__cart active" : "button__cart"
              }
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_16679)">
                  <path
                    d="M19.1523 7.25427H15.0031L12.6756 1.92486C12.5461 1.62833 12.2007 1.49282 11.9042 1.62239C11.6076 1.75189 11.4722 2.09732 11.6017 2.39388L13.7244 7.25431H6.27561L8.39827 2.39388C8.52776 2.09732 8.39237 1.75193 8.09581 1.62239C7.79929 1.49282 7.45382 1.62825 7.32436 1.92486L4.99686 7.25427H0.847685C0.304911 7.25427 -0.0979012 7.74564 0.0208488 8.26286L2.20581 17.7797C2.29257 18.1575 2.63608 18.4261 3.03265 18.4261H16.9673C17.3639 18.4261 17.7074 18.1575 17.7942 17.7797L19.9791 8.26286C20.0979 7.74568 19.695 7.25427 19.1523 7.25427V7.25427ZM5.1071 9.0513C5.02882 9.0513 4.94925 9.03552 4.87288 9.00216C4.57632 8.87267 4.44089 8.52728 4.57042 8.23068L5.01057 7.22278H6.28933L5.64432 8.69966C5.54819 8.91993 5.33296 9.0513 5.1071 9.0513ZM7.0703 15.3011C7.0703 15.6247 6.80796 15.8871 6.48436 15.8871C6.16077 15.8871 5.89843 15.6247 5.89843 15.3011V11.0043C5.89843 10.6807 6.16077 10.4183 6.48436 10.4183C6.80796 10.4183 7.0703 10.6807 7.0703 11.0043V15.3011ZM10.5859 15.3011C10.5859 15.6247 10.3236 15.8871 9.99999 15.8871C9.6764 15.8871 9.41405 15.6247 9.41405 15.3011V11.0043C9.41405 10.6807 9.6764 10.4183 9.99999 10.4183C10.3236 10.4183 10.5859 10.6807 10.5859 11.0043V15.3011ZM14.1016 15.3011C14.1016 15.6247 13.8392 15.8871 13.5156 15.8871C13.192 15.8871 12.9297 15.6247 12.9297 15.3011V11.0043C12.9297 10.6807 13.192 10.4183 13.5156 10.4183C13.8392 10.4183 14.1016 10.6807 14.1016 11.0043V15.3011ZM15.1271 9.00216C15.0507 9.03552 14.9712 9.0513 14.8929 9.0513C14.667 9.0513 14.4518 8.91997 14.3556 8.6997L13.7106 7.22282H14.9894L15.4295 8.23072C15.5591 8.52728 15.4236 8.87267 15.1271 9.00216Z"
                    fill="#282739"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_16679">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            {openCart && <Cart />}
          </div>
        </div>
        <div className="header__list">
          <ul>
            <li>
              <Link to="/about">О магазине</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка и оплата</Link>
            </li>
            <li>
              <Link to="/testDrive">Тест-драйв</Link>
            </li>
            <li>
            <Link to="/buying">Мои покупки</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;