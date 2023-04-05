import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San ", "T", "lo"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);

  // }

  // return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/></div>

  const [alertVisible, setAlertVisibility] = useState(false);
  const handleButton = () => {
    console.log("hi");
    setAlertVisibility(true);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          my<span> alert</span>
        </Alert>
      )}
      <Button onClick={handleButton} color="secondary">
        My Button
      </Button>
    </div>
  );
}

export default App;
