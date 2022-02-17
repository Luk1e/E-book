import { updateImg, updateName } from "../Login/User";
import User from "../Login/User";
import { useState,useEffect } from "react";

//CSS
import "./ProfTemplate.css";
const Proftemplate = () => {
  const [name, setName] = useState(User.name);
  const [img, setImg] = useState(User.img);
  
  const fileseletedHandler = (event) => {
      setImg(event.target.files[0]);
  };
  
     

    const change = () => {
        if (User.name!=name) {
            console.log(name); 
              updateName(name);
        }
        if (User.img != img) {
               console.log(img);
      updateImg(img);
        }
     
    
  };
    

  return (
      <div className="Pmain">
        
      <div className="Pflex">
        <h1 className="Pitem">{User.name}</h1>

        <div className="xx">
          <img src={User.img} className="Pitem" alt="ProfilePicture" />
          <div className="xxright">
            <div className="xxitem xxname">change name</div>
            <input type="input" placeholder="Enter New Name" onChange={() => {setName(document.getElementById("setname").value);}} id="setname" className="xxitem xxholder" />
            <label htmlFor="file-upload" className="custom-file-upload photo">
              <i className="fa fa-cloud-upload"></i> Change Photo
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={fileseletedHandler}
              className="xxitem"
            />

            <button  onClick={() => {change(); }}className="xxitem pbtn">
              apply changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proftemplate;
