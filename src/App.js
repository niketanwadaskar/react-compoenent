import { Theme } from "@radix-ui/themes";
import Card from "./component/Card";
import RadixUi from "./component/RadixUi";
import "@radix-ui/themes/styles.css";
import TimelineEffect from "./component/TimelineEffect";
import ServerSideCompo from "./component/ServerSideCompo";
function App() {
  return (
    <div className=" gap-12 w-full justify-center flex flex-wrap  items-center">
      <ServerSideCompo />
    </div>
  );
}

export default App;
