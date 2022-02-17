import { useState } from "react";
import items from "./allData";
import Menu from "./Component/Menu";
import Button from "./Component/Button";
import "./App.css"

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
      const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

    return (
      
    <div className="App">
      <div className="title">
        <h1>
          E -
          <span> Book</span>
        </h1>
      </div>

          <Button button={buttons} filter={filter} className="butty"/>
          
      <Menu menuItem={menuItem} />
    </div>
  );
}

export default App;