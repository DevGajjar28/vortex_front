import React from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import "yup-phone";
import axios from "axios";
import { Flip } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    transition: Flip,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const ToastFailure = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    transition: Flip,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

function Contact() {

  const handleContact = async () => {
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/contact/`,
        formik.values
      );

      if (res.data) {
        ToastSuccess("Form submitted successfully!");
        formik.resetForm();
      }
    } catch (error) {
      ToastFailure(
        error?.response?.data?.data?.message || "Something went wrong"
      );
    }
  }

  const schema = Yup.object().shape({
    first_name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: handleContact,
    validationSchema: schema
  });




  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              We value your feedback and inquiries. Feel free to reach out to
              us for any questions or assistance you may need. As an
              independent platform, we are committed to providing you with
              unbiased recommendations and reliable service.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-pink-600">
                {" "}
                9265015709{" "}
              </a>

              <address className="mt-2 not-italic">
              A8, Vaikunth Complex, Ghodasar, Ahmedabad.
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="first_name"
                  name="first_name"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
                {formik.errors.first_name && <p className="text-red-500 text-sm">{formik.errors.first_name}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  {formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                {formik.errors.message && <p className="text-red-500 text-sm">{formik.errors.message}</p>}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
