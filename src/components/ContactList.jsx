import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({contactInfo,onDlete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactInfo.map((contact)=>{
        return <ContactItem
        key={contact.id}
        {...contact}
        onDlete={onDlete}
        />
      })
      }
    </div>
  );
}
