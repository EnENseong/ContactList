import "./ContactItem.css";

export default function ContactItem({
  id, name, contact , onDlete
}) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={()=>{onDlete(id)}}>🗑️ Remove</button>
    </div>
  );
}