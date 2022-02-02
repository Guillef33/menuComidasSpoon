import React, { useState } from "react";

import { Redirect } from "react-router";
import axios from "axios";

import { Formik } from "formik";

import logo from "../../assets/images/logo.jpg";
import swal from "sweetalert";

import "./Login.css";

const Basic = () => {
  const [toNext, setToNext] = useState(false);

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo-login" />

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = `Este campo es requerido`;
            }
            // else if (!values.user === "guillef33@gmail.com") {
            //   errors.email = `Siga`;
            //   console.log("Aca");
            // }
            else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "El email no es valido. Intente de nuevo. ";
            } else if (!values.password) {
              errors.password = "Este campo es requerido";
            } else if (!/^[a-zA-Z0-9-]{4,}\b$/i.test(values.password)) {
              errors.password = `Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character`;
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log("email", values.email);
            console.log("password", values.password);

            axios.post(
              `http://challenge-react.alkemy.org/`,
              {},
              {
                auth: {
                  username: values.email,
                  password: values.password,
                },
              }
            );
            swal({
              title: "Felicidades estas logeado",
              text: JSON.stringify(values, null, 2),
              icon: "success",
              button: "aceptar",
            });

            setToNext(true);

            // Aca estoy agregando una funcion post submit
            //   const PostLogin = () => {
            //     fetch("http://challenge-react.alkemy.org/", {
            //       method: "POST",
            //       headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify({
            //         email: values.email,
            //         password: values.password,
            //       }),
            //     })
            //       .then((res) => res.json())
            //       // Aca puse este estado, pero no se cual iria, tome el codigo de:
            //       .then((result) => setPostLogin(result.rows))
            //       .catch((err) => console.log("error"));
            //   };
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="form">
              <label> Ingrese tu email </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Ingrese tu email"
                className="input input-email"
              />

              {errors.email && touched.email && (
                <p className="errors-formik">errors.email</p>
              )}
              <label> Ingrese tu contrasena </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Ingrese tu password"
                className="input input-password"
              />
              {errors.password && touched.password && (
                <p className="errors-formik">{errors.password}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="primary-button login-button"
              >
                Iniciar Sesion
              </button>
              <button className="secondary-button signup-button">
                Sign up
              </button>
              {toNext ? <Redirect to="/search" /> : null}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Basic;
