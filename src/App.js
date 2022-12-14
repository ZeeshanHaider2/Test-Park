import { onSnapshot, collection } from "firebase/firestore"; //auto import for calling snapshot function
import { useEffect, useState } from "react";
import db from "./firebase";

const Dot = ({}) => {

}; 

function App(){
  const [demoUsers,setdemoUsers] = useState([{name:"loading...", id:"initial"}]);
  //console.log(demoUsers);
  useEffect(
    () =>
   onSnapshot(collection(db,"demoUsers"), (snapshot) => 
     setdemoUsers(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))  
    ),
    [] 
  );
  return (
   <div className="root">
    <ul>
     {demoUsers.map((demoUser)=>(
      <li>
      <Dot demoUser = {demoUser.value}/>
      name:{demoUser.name}&nbsp; &nbsp; username:{demoUser.username}&nbsp;&nbsp;id:{demoUser.id}&nbsp;&nbsp;email:{demoUser.email}&nbsp;&nbsp;phone:{demoUser.phone}&nbsp;&nbsp;website:{demoUser.website}
    </li>
     ))}
    </ul>
   </div>
  );
}

export default App;