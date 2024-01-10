import React from "react";
import SideBar from "./components/SideBar";
import ServerSideBar from "./components/ServerSideBar"
import UserBar from "./components/UserBar";

function App() {  
  //const [channelName] = useState("general");
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col">
        <ServerSideBar />
        <UserBar />
      </div>
    </div>
  );
}

export default App;
