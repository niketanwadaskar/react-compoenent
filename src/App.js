import { Theme } from "@radix-ui/themes";
import Card from "./component/Card";
import RadixUi from "./component/RadixUi";
import "@radix-ui/themes/styles.css";
function App() {
  return (
    <Theme
      accentColor="blue"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance="dark"
    >
      <div className=" gap-12 w-full justify-center flex flex-wrap  items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Theme>
  );
}

export default App;
