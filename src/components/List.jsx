import React from "react";

function List(props) {
  const items = props.data.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <ul>
      {items}
    </ul>
  )
}

export default List;