import Rectangle from "./components/Rectangle";
import Block from "./components/Block";

function App() {
  return (
    <div>
        <Rectangle />
        <Rectangle />
        <Rectangle />

        <Block borderColor={"purple"} backColor={"yellow"} clickable={false} />
        <Block borderColor={"blue"} backColor={"red"} clickable={true} />

        <Block borderColor={"green"} backColor={"pink"} clickable={false} />
        <Block borderColor={"blue"} backColor={"red"} clickable={true} />

        <Block borderColor={"red"} backColor={"gray"} clickable={false} />
        <Block borderColor={"blue"} backColor={"red"} clickable={true} />
    </div>
  );
}

export default App;
