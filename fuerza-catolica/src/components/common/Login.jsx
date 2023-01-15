import React, { Component } from "react";
import logo from "../../assets/img/logo.jpeg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === "admin" && password === "admin") {
      navigate("/fuerza-catolica/home/");
    } else {
      alert(
        "Datos invalidos, por favor utilice como usuario admin y clave admin"
      );
    }

    e.preventDefault();
  };

  const handleForgetPassword = (e) => {
    alert("Contacte al administrador: gegarciam95@gmail.com");
    e.preventDefault();
  };

  const handleCreateAccount = (e) => {
    alert("Contacte al administrador: gegarciam95@gmail.com");
    e.preventDefault();
  };

  return (
    <section className="vh-100 gradient-form bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pt-4 pb-1">Fuerza Catolica</h4>
                    </div>

                    <form>
                      <p>Por favor, ingrese a su cuenta:</p>

                      <div className="form-outline mb-4">
                        <input
                          id="form2Example11"
                          className="form-control"
                          placeholder="User: admin Password: admin"
                          onInput={(e) => setUser(e.target.value)}
                        />
                        <label className="form-label">Usuario</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          onInput={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label">Contraseña</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <div>
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            onClick={handleLogin}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                        <a
                          className="text-muted"
                          href="#"
                          onClick={handleForgetPassword}
                        >
                          ¿Se te olvidó tu contraseña?
                        </a>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <div>
                          <p className="mb-0 me-2">¿No tienes una cuenta?</p>
                        </div>
                        <div className="pt-3">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            onClick={handleCreateAccount}
                          >
                            Crear Cuenta
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="d-flex justify-content-center align-items-center w-100">
                    <img src={logo} width="256" height="256" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
