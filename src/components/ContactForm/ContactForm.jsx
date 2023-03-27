import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './contactForm.css';
import { Link } from 'react-router-dom';
const formBase = {
  firstName: '',
  lastName: '',
  email: '',
};


const ContactForm = () => {
  const [form, setForm] = useState(formBase);

  const [id, setId] = useState();

  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');

    addDoc(contactFormCollection, form).then((snapshot) => {
      setForm(formBase);
      setId(snapshot.id);
    });
  };

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;

    setForm({ ...form, [name]: value });
  };





  return (


    <div>

      {typeof id !== 'undefined' ? (
        <>
          <div className=''>
            <p className='divUnde'>Muchas gracias por su compra, su orden de compra fue procesada con el siguiente numero de ID {id}</p>

            <Link className="back2home" to="/">Volver a comprar</Link>
          </div>
        </>
      ) : (
        ''

      )}

      <div>

        <p className='titleForm'> Por favor complete sus datos para finalizar la operacion


        </p>
        <div className='formCompra '>

          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="firstname">Nombre</label>
              <input
                name="firstname"
                id="firstname"
                value={form.firstname}
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="lastname">Apellido</label>
              <input
                name="lastname"
                id="lastname"
                value={form.lastname}
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={inputChangeHandler}
              />
            </div>
            <button className='btnComprar'>Enviar</button>



          </form>
        </div>
      </div >
    </div>
  );

};

export default ContactForm;
