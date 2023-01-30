import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useContact from "../../hooks/useContact";
import { fetchReadContactData } from "../../redux/thunks/contactThunk";
import LoadersModal from "../common/LoadersModal";
import Footer from "./Footer";

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
        style={{ height: "60vh" }}
      >
        <>
          {loading && <LoadersModal />}
          <div className="container">
            <div className="col-12 f-elements f-elements--center">
              <div className="col-6 f-elements f-elements--center">
                ✉️ Email:
                {contactData.email} ✉️
              </div>
              <div className="col-6 f-elements f-elements--center">
                🏠 Direccion: {contactData.name} 🏠
              </div>
            </div>
            <br></br>
            <div className="col-12">
              <div className="f-elements f-elements--center">
                <h1>Contactanos</h1>
              </div>
              <br />
              <div className="row f-elements--center">
                <br />
                <div className="col-md-6">
                  <form className="my-form">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="form-name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="form-email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Telephone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="form-subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email your Message</label>
                      <textarea
                        className="form-control"
                        id="form-message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <br></br>
                    <div className="list f-elements f-elements--center">
                      <a
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        href={`mailto:gegarciam95@gmail.com`}
                        type="submit"
                        style={{ border: "5px" }}
                      >
                        Contactanos
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
