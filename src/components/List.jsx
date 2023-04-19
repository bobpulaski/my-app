import React from "react";

function List() {
  const data = [1, 2, 3]
  const items = data.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <ul>
      {items}
    </ul>
  )
}

export default List;