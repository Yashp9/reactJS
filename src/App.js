import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS (includes Popper)
import Header from "./componants/header";
import Body from "./componants/body";

//fetch('https://www.zomato.com/webapi/searchapi.php?city=23')


/*
 *Header
 *--Logo
 *--Nav-intems
 *Body
 *--Search
 *--Restaurantcounter
 *---RestaurantCard
 *    -img
 *    -Name of res,star rating,cousine,delivery time.
 *Footer
 *--Copyright
 *--link
 *--address
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
