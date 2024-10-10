import { useState, useEffect } from "react";
import restList from "../utils/RestList"; // "../" means parent folder
import RestCard from "./Restcard"; //now we no longer need this data bcz we are fetching the data live from an API.
import SearchBar from "./search";
import Shimer from "./shimer";
//imports section ends here

console.log("restList = ", restList);
const Body = () => {
  const [restList2, setrestList2] = useState([]);
  let newList = restList2;
  useEffect(() => {
    fetch("https://www.eatsure.com/v1/api/get_restaurants?")
      .then((res) => res.json())
      .then((obj) => {
        setrestList2(obj?.data?.data);
      });
  }, []);

  //shimer ui rendering....
  if (restList2.length == 0) {
    return (
      <>
        <div className="searchBox">
          <SearchBar />
        </div>
        <div className="resCard-container">
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
          <Shimer />
        </div>
      </>
    );
  }

  //BUTTONS    ----------------
  //I put this button here bcz i have to pass this button componant inside body return.
  const Buttons = (props) => {
    return (
      <button
        className="eventBtn"
        onClick={() => {
          newList = restList2.filter((item) => {
            console.log("item", item);
            return item.main_offering == props.DISH;
          });
          console.log("ice cream list ", newList);
          setrestList2(newList);
        }}
      >
        {props.SEARCH}
      </button>
    );
  };

  //----------------
  return (
    <div className="body">
      <div className="searchBox">
        <SearchBar />
      </div>
      <Buttons SEARCH={"ICE-CREAM"} DISH={"Ice cream"} />
      <div className="resCard-container">
        {restList2.map((item, index) => {
          return <RestCard key={index} data={item}/>;
        })}
      </div>
    </div>
  );
};

export default Body;
