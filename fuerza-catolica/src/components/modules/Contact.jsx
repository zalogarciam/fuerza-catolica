import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useContact from "../../hooks/useContact";
import { fetchReadContactData } from "../../redux/thunks/contactThunk";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading, contactData } = useContact();

  useEffect(() => {
    document.title = "Fuerza Catolica - Contacto";
    Object.keys(contactData).length === 0 && dispatch(fetchReadContactData());
  }, []);

  return (
    <div>
      <Header></Header>
      <div
        className="container f-elements f-elements--header"
        style={{ height: "50vh" }}
      >
        <h1>Contacta a nuestro administrador: gegarciam95@gmail.com</h1>
      </div>
    </div>
  );
};

export default Contact;
