import { useReducer , useRef} from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockdata =[{
  id:1,
  name: "임은성",
  contact: "strongbone@ajou.ac.kr"
},
{
  id:0,
  name: "정미림",
  contact: "mirimj0103@naver.com"
}
]

function reducer(state, action){
  switch(action.type){
    case "CREATE": return [action.data,...state]
    case "DLETE": return state.filter((item)=>item.id!==action.targetid)
  }
}

function App() {
  const [contactInfo, dispatch]=useReducer(reducer,mockdata);
  const idRef = useRef(2);

  const onCreate=(name,contact)=>{
    dispatch({
      type : "CREATE",
      data:{
        id: idRef.current++,
        name: name,
        contact: contact,
      }
    })
  }

  const onDlete=(targetid)=>{
    dispatch({
      type: "DLETE",
      targetid: targetid,
    })
  }

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor 
        onCreate={onCreate}
        />
      </section>
      <section>
        <ContactList 
        contactInfo={contactInfo}
        onDlete={onDlete}
        />
      </section>
    </div>
  );
}

export default App;
