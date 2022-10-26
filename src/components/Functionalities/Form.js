import { useFormik } from "formik";
import { useRef, useState } from "react";
import { basicSchema } from "./Schemas";
import emailjs from '@emailjs/browser';

const BasicForm = () => {

  const form = useRef();

  const [submitDone, setSubmitDone] = useState (false);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({

    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },

    validationSchema: basicSchema,
    onSubmit: () => {
      emailjs.sendForm('service_8vvwxwx', 'template_7wlxct9', form.current, '4sHT-Sh-lEbqcrJGA')
      .then((result) => {
          console.log(result.text);
  
        if (result.text === "OK"){
          setSubmitDone(true);
        }

      }, (error) => {
        alert('Failed to send the message, please try again')
      });
    }
 
  });


  const reload = () => {
    window.location.reload(false)
  }

  return (
    <form autoComplete="off" ref={form} onSubmit={handleSubmit}>
      {submitDone&&<div className="alertbox"><h1>Message sent </h1> <button className="btn" onClick={reload}>Back</button></div>}
      <div className="first">
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.name && touched.name && <div className="error">{errors.name}</div>}
      </div>
      <div className="second">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="E-mail"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.subject && touched.subject ? "input-error" : ""}
      />
      {errors.subject && touched.subject && <div className="error">{errors.subject}</div>}
      </div>
      <div>
      <textarea
        id="message"
        type="text"
        name="message"
        placeholder="Enter message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.message && touched.message ? "input-error" : ""}
      />
      {errors.message && touched.message && <div className="error">{errors.message}</div>}
      </div>
      <button disabled={isSubmitting} type="submit" className="btn" >
        Send
      </button>
    </form>
  );
};

export default BasicForm;
