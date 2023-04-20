import React from "react";



function Button(props) {

  function pushToData() {
    props.data.push(4);
    console.log(props.data);
  }

  return (
    // <button onClick={props.changeData}>
    <button onClick={props.changeData(pushToData)}>
      Click me
    </button>
  );
}

export default Button;