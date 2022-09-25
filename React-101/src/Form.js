import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({ name: '', surname: '', gender: '0' });

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <div>isim</div>
        <input name="name" type="text" onChange={formHandler} />
        <div>soyisim</div>
        <input name="surname" type="text" onChange={formHandler} />
      </div>
      <select name="gender" value={form.gender} onChange={formHandler}>
        <option value="0">Erkek</option>
        <option value="1">Kadın</option>
      </select>
      <hr />
      <div>
        İsim: {form.name} <br />
        Soyisim: {form.surname} <br />
        Cinsiyet: {form.gender == '1' ? 'Kadın' : 'Erkek'}
      </div>
    </>
  );
};

export default Form;
