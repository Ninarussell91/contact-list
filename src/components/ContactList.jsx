import React {usestate} from 'react';
import ContactRow from './contactRow;'
//contact list component

const ContactList=() => {
//sample data: an array of contact objects 



const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function contactlist=> () {
    const[contacts,setContacts]= useState(dummycontacts);}

}
return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>



{/* Render each contact as a list item*/}
{contacts.map(contact => (
   <li key={contact.id}>
    <strong>{contact.name}</strong>:{contact.phone}
   </li>
))}




//default export of the contact list component 
export default ContactList;