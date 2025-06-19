import "./ContactEditor.css";
import { useState ,useRef } from "react";

export default function ContactEditor({onCreate}) {
  const [contact,setContact]=useState("")
  const [name,setName]=useState("")
  const contactRef = useRef();
  const nameRef = useRef()

  const onChangeContact=(e)=>{
    setContact(e.target.value);
  }
  const onChangeName=(e)=>{
    setName(e.target.value);
  }

  const onSubmit =()=>{
    if(contact==="" & name ===""){
      nameRef.current.focus();
      return;
    }else if (contact===""){
      contactRef.current.focus();
      return;
    }else if(name ===""){
      nameRef.current.focus();
      return;
    }
    onCreate(name,contact)
    setName("")
    setContact("")
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input ref={nameRef} value={name} onChange={onChangeName} className="name" placeholder="이름 ..." />
        <input ref={contactRef} value={contact} onChange={onChangeContact} className="contact" placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
  
}
