import React from "react";

function Menu({ menuItem }) {
    return (
        <div className="item">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <div className="flex">
                <img src={item.image} alt="" />
                <div className="flex-reverse">
                  <h3> author:</h3>
                  <h1 className="author">{item.author}</h1>
                  <h3> owner:</h3>
                  <h1 className="owner">{item.owner}</h1>
                  <h3>Category:</h3>
                  <h1 className="owner">{item.category}</h1>
                </div>
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
