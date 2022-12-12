import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [surname, setSurname] = useState("");

  const handlerName = (event) => {
    setName(event.target.value);
  };

  const handlerLastName = (event) => {
    setLastname(event.target.value);
  };

  const handlerSurname = (event) => {
    setSurname(event.target.value);
  };

  const handleBtn = () => {
    let person = { lastname, name, surname };
    console.log(person);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={lastname}
          onChange={handlerLastName}
          placeholder="Фамилия"
        />
        <input
          type="text"
          value={name}
          onChange={handlerName}
          placeholder="Имя"
        />
        <input
          type="text"
          value={surname}
          onChange={handlerSurname}
          placeholder="Отчество"
        />
        <input type="submit" onClick={handleBtn} name="submit" />
      </form>
    </div>
  );
};

export default MyForm;
