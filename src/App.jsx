import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchAllContacts } from "./redux/contacts/operations";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
    // <>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   <ContactList />
    // </>
  );
}

export default App;
