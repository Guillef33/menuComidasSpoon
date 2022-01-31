import React, { useRef, useState } from "react";
import "./Login.css";

const Login = ({ setToken }) => {
  const form = useRef(null);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

    const handleSubmit = (event) => {
      const formData = new FormData(form.current);
      const data = {
        usename: formData.get("email"),
        password: formData.get("password"),
      };
      console.log(data);
    };

      // function handleChange(name, value) {
      //   if (name === "usuario") {
      //     setUser(value);
      //     console.log("Nombre de usuario agregado");
      //   } else {
      //     console.log("No es un texto de user");
      //     if (value.length < 6) {
      //       setPasswordError(true);
      //       console.log("Se activa el error");
      //     } else {
      //       setPasswordError(false);
      //       setPassword(value);
      //       console.log("Buena contrasena siga sigas");
      //     }
      //   }
      // }


  return (
    <div className="Login">
      <div className="Login-container">
        <img src="" alt="logo" className="logo" />
        <form action="/search" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="name@foodsmenu.com"
            className="input input-email"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
