import restList from "../utils/RestList"; // "../" means parent folder
import RestCard from "./Restcard";
import SearchBar from "./search";

const Body = () => {
  return (
    <div className="body">
      <div className="searchBox"><SearchBar /></div>
      <div className="resCard-container">
        {restList.map((item,index)=>{
           return  <RestCard key={index} data={item} />
        })}
      </div>
    </div>
  );
};

export default Body;