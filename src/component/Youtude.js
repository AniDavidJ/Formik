import React from "react";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};
const onSubmit = (values) => {
    console.log("data", values);
};
const validate = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = "This Field is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.channel) {
        errors.channel = "Channel is required";
    }
    return errors;
};
const Youtude = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });
    console.log("visted",formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="name">Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="channel">
                        channel:
                        <input
                            type="text"
                            name="channel"
                            onChange={formik.handleChange}
                            value={formik.values.channel}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.channel && formik.touched.channel ? (
                            <div className="error">{formik.errors.channel}</div>
                        ) : null}
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Youtude;
