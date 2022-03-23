import { useState } from "react";
import "./Signup.scss";

export default () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  type UserData = {
    name: string;
    email: string;
    password: string;
  };
  class User {
    data;
    constructor(data: UserData) {
      this.data = data;
      // this.data.name = name;
      // this.data.email = email;
      // this.data.password = password;
    }
  }
  const signUp = async (userData: UserData) => {
    return fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response?.json().then((jsn) => jsn))
      .catch((e) => console.log(e));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    console.log(name, email, password);
    // const userData = new User({ name, email, password });
    const userData = { name, email, password };
    console.log(userData);
    const signingUp = await signUp(userData);
    console.log(signingUp);
  };

  return (
    <div>
      <h1>Signup!</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></input>
        <input onSubmit={handleSubmit} type="submit" value="Sumbit!" />
      </form>
    </div>
  );
};
