import React from "react";
import { useFormik } from "formik";
const Youtude = () => {
    const formik = useFormik({
        initialValues: {
            name: "Anu",
            email: "",
            channel: "",
        },
        onSubmit:values => {
            console.log("data",values);
        }
    });
    // console.log("form value : ", formik.values);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="name">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="channel">
                    channel:
                    <input
                        type="text"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Youtude;
