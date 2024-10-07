const RestCard = (props) => {
  const{banner_image_es,description,main_offering,brand_name,rate} = props.data;
  return (
    <div className="container">
      <img src={banner_image_es} />
      <div className="content-box">
        <h4 className="name">{main_offering}</h4>
        <h6>{description}</h6>
        <h4> {brand_name}</h4>
        <h6>Rate: {rate}</h6>
        <div className="btn">
          <h2 className="price">$ 5</h2>
          <a href="#">Order Now</a>
        </div>
      </div>
    </div>
  );
};
export default RestCard;