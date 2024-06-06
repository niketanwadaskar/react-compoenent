import { Theme } from "@radix-ui/themes";
import Card from "./component/Card";
import RadixUi from "./component/RadixUi";
import "@radix-ui/themes/styles.css";
import TimelineEffect from "./component/TimelineEffect";
function App() {
  return (
    <div className=" gap-12 w-full justify-center flex flex-wrap  items-center">
      <TimelineEffect />
    </div>
  );
}

export default App;
