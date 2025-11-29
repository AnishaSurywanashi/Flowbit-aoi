import Sidebar from "./Components/Sidebar";
import AOIPanel from "./Components/AOIPanel";
import MapView from "./Components/MapView";

import HelpButton from "./Components/HelpButton";

export default function App() {
  return (
<div className="flex h-screen">
  <Sidebar />       {/* width ~80px */}
  <AOIPanel />      {/* width ~380px */}
  <div className="flex-1">
    <MapView />
     <HelpButton />
  </div>
</div>

  );
}
 