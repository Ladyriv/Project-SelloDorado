import React from 'react'
import ReactDOM from 'react-dom';
import Logo from '../assets/img/Logos/LogoBlanco.png'
import { Formik, Field, Form } from 'formik';


const PageWelcome = () => {
  return (
    <div className='welcome'>
      <h1>Bienvenidos
        somos
      </h1>
      <img
        className='logoImage'
        src={Logo}
        alt=""
      />
      <h4>Tienda de Licores</h4>

      <h3>¿Eres mayor de edad?</h3>
      <Formik
        initialValues={{
          picked: '',
        }}
        onSubmit ={async (values) => {
          console.log(values);
          /*localStorage.setItem("picked","true")*/
        }}
      >
        {({ values}) => (
          <Form>

            <div id="my-radio-group"></div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="picked" value="No" />
                No
              </label>
              
            </div>

            <button className='btn-pw' type="submit">Entrar</button>
          </Form>
        )}
      </Formik>
    </div>

  )
}

export default PageWelcome