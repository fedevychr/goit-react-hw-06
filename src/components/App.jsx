import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import PhoneBookContainer from "./PhoneBookContainer/PhoneBookContainer";
import SearchBox from "./SearchBox/SearchBox";

// import { nanoid } from "nanoid";
// import { useDispatch, useSelector } from "react-redux";
// import { addContact, deleteContact } from "../redux/contactsSlice";
// import { setFilter } from "../redux/filtersSlice";

function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts.items) || [];
  // const filter = useSelector((state) => state.filters.name) || "";

  // const onAddContact = (formData) => {
  //   const finalContact = {
  //     ...formData,
  //     id: nanoid(),
  //   };

  //   dispatch(addContact(finalContact));
  // };

  // const onDeleteContact = (contactId) => {
  //   dispatch(deleteContact(contactId));
  // };

  // const onChangeFilter = (event) => {
  //   dispatch(setFilter(event.target.value));
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  // );

  return (
    <PhoneBookContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </PhoneBookContainer>
  );
}

export default App;
