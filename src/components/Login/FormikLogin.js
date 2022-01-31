import React from "react";
import { Formik } from "formik";
import logo from "../../assets/images/logo.jpg";

import "./Login.css";

//    function ifMatch(param) {
// if (param.user.length > 0 && param.password.length > 0) {
//   if (param.user === "Guillermo" && param.password === "123456") {
//     const { user, password } = param;
//     let ac = { user, password };
//     let account = JSON.stringify(ac);
//     localStorage.setItem("account", account);
//     setIsLogin(true);
//   } else {
//     setIsLogin(false);
//     sethasError(true);
//   }
// } else {
//   setIsLogin(false);
//   sethasError(true);

const Basic = () => {


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
          } else if (!values.user === "guillef33@gmail.com") {
            errors.email = `Siga`;
            console.log("Aca");
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "El email no es valido. Intente de nuevo. ";
          } else if (!values.password) {
            errors.password = "Este campo es requerido";
          } else if (
            !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/i.test(
              values.password
            )
          ) {
            errors.password =
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
          }
          return errors;
        }}
        onSubmit={
          (values) => {
            alert(JSON.stringify(values, null, 2));
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

            //   setSubmitting(false);
          }
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
          // }
        }
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

            {errors.email && touched.email && errors.emailq}
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
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className="primary-button login-button"
            >
              Iniciar Sesion
            </button>
            <button className="secondary-button signup-button">Sign up</button>
          </form>
        )}
      </Formik>
    </div>
  </div>
)
};

export default Basic;
