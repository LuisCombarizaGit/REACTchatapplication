import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"> CHAT APPLICATION </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChage={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />

          <input
            type="passworld"
            value={password}
            onChage={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />

          <div align="center">
            <button type="submit" className="button">
              <span> Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
