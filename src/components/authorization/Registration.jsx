import React, { useState } from "react";
import Input from "../../utils/input/Input";
import "./authorization.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setPassword={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button className="registration__btn">Зарегистрироваться</button>
    </div>
  );
};

export default Registration;
