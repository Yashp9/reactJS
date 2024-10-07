//setting word wrap - on.

1.CORS (Cross-Origin Resource Sharing) is a security feature that allows websites to request resources from another domain (a different website) safely.
### In simple terms:
   Imagine you have a bakery (your website) that wants to buy ingredients (data) from another bakery across town (another website). The town has a rule that says, "No bakery can take ingredients from another unless permission is given." 
   This rule is similar to CORS in the web world. When your website tries to get data from a different server (like fetching user info or images), CORS ensures the other server explicitly allows your website to access it.
   If the permission isn't given, the browser blocks the request to prevent potential security risks. This way, CORS protects websites from unauthorized access to their data.


2.react basics;
//createElement will take three arguments 1st is tagname, 2nd is object{gives attribute to the class}, 3rd is content{it is the work of React->React.createElement}
 const heading = React.createElement('h1',{class:'header'},'heading came from react');
//createRoot will select a root where the element is going to insert{it's inside the ReactDOM}.
 const root = ReactDOM.createRoot(document.getElementById('root'));
//below code will insert the heading into root and get displayed on the html.
 root.render(heading); 

-->3 starting code----
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { class: "header" },
  "heading came from react"
);

// using JSX in react-

const jsxheading = (
  <div className="awesome" style={{ border: "1px solid red" }}>
    <h1>heading 1</h1>
    <h2>this is heading 2</h2> head1
  </div>
);

//react element:-
const elem = <spam>this is an react element</spam>;

//react componant
const JSXbutton = () => {
  return (
    <button>
      click me <h1>jsx button</h1>
    </button>
  );
};

//react function componants - they are just  function starts with capital letter.
const JSXfunction = function () {
  return (
    <div>
      <h1>{elem}<br/>I am from jsxfunction</h1> <JSXbutton /> 
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//to render the componants you must close it inside = <____/>;
root.render(<JSXfunction />);






















<div className="container">
      <img src={banner_image_es} />
      <div className="content-box">
        <h4 className="name">{main_offering}</h4>
        <h6>{description}</h6>
        <h4> {brand_name}</h4>
        <div className="btn">
          <h2 className="price">$ 5</h2>
          <a href="#">Order Now</a>
        </div>
      </div>
    </div>