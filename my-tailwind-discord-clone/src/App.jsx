import React from "react";
import SideBar from "./components/SideBar";
import ServerSideBar from "./components/ServerSideBar"

function App() {  
  //const [channelName] = useState("general");
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col">
        <ServerSideBar />
      </div>
    </div>
  );
}

export default App;
