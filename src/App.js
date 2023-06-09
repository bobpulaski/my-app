import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [data, setData] = useState([1, 2, 3]);

  function changeData(event) {
    setData((data) => [...data, 1]);
  }

  return (
    <div className="container">
      <h1>Application</h1>
      <List data={data} />
      <Button data={data} changeData={changeData} />
      {/* <Button data={data} /> */}
    </div>
  );
}

export default App;
