import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  //const [data, setData] = useState([1, 2, 3]);

  return (
    <div className="container">
      <h1>Application</h1>
      <List />
      <Button />
    </div>
  );
}

export default App;
