import React from 'react';




const removeChilds = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};
function Modal(text) {
   var modal = document.getElementById("modal");
  removeChilds(modal);
  var field = document.createElement("fieldset");
  field.appendChild(document.createTextNode(text));
  modal.appendChild(field);
  setTimeout(() => {
    removeChilds(modal);
  }, 2000);
}

export default Modal;
