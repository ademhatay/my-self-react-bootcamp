import React from 'react';
import {useFormik} from 'formik';
import validationSchema from "./validations";
import './styles.css'
const Index = () => {
    const {handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
        onSubmit: async (values, {resetForm, setErrors}) => {
            await new Promise((r) => setTimeout(r, 1000));
            if (values.email === "test@test.com"){
                return setErrors({email: "Bu Email Zaten kullanımda"})
            }
            console.log(values);
            resetForm();
        },
        validationSchema,
    });
    return (
        <div>
            <h2>İletişim</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="row">
                    <div className="four columns">
                        <label htmlFor="firstName">İsim</label>
                        <input
                            style={{width: "100%"}}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Jane"
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            disabled={isSubmitting}
                            onBlur={handleBlur('firstName')}
                        />
                        {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <label htmlFor="lastName">Soyisim</label>
                        <input
                            style={{width: "100%"}}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            value={values.lastName}
                            onChange={handleChange('lastName')}
                            disabled={isSubmitting}
                            onBlur={handleBlur('lastName')}
                        />
                        {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                </div>



                <div className="row">
                    <div className="four columns">

                        <label htmlFor="email">Email</label>
                        <input
                            style={{width: "100%"}}
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            value={values.email}
                            type="email"
                            onChange={handleChange('email')}
                            disabled={isSubmitting}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">

                        <label htmlFor="email">Mesajınız</label>
                        <textarea
                            style={{width: "100%"}}
                            id="message"
                            name="message"
                            placeholder="Mesajınızı yazınız"
                            value={values.message}
                            onChange={handleChange('message')}
                            disabled={isSubmitting}
                            onBlur={handleBlur('message')}
                        />
                        {errors.message && touched.message && <p className="error">{errors.message}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <button style={{width: "100%"}} type="submit" disabled={isSubmitting}>Gönder</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Index;
