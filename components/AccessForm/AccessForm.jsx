import { adminLogin, messageClear } from "@/app/Reducers/authReducer";
import { useRouter } from "next/navigation";
import React, { useEffect } from 'react';
import {toast} from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from "react-spinners";

const AccessForm = ({array}) => {

  // Calling funtion from reducer
  const dispatch = useDispatch();
  const router = useRouter();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );



  // Form data handle
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // required data
    const name = event.target.name.value || '';
    const email = event.target.email.value;
    const password = event.target.password.value;

    const adminProfile = {
      name,
      email,
      password,
    }

    dispatch(adminLogin(adminProfile));
    console.log(adminProfile);
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }

    if(successMessage){
      toast.success(successMessage);
      dispatch(messageClear());
      router.push('/admin')
    }
  }, [errorMessage, successMessage]);

    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          {array.map((field) => (
            <>
              <label htmlFor={field[0]}>{field[1]}</label>
              <input
                className="access_form_field"
                type="text"
                name={field[0]}
                placeholder={`Enter your ${field[0]}`}
                required
              />
            </>
          ))}
          {/* <label htmlFor="name">Name</label>
          <input
            className="access_form_field"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            className="access_form_field"
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="access_form_field"
            type="text"
            name="password"
            placeholder="********"
            required
          /> */}

          {array[0][0] == "name" ? (
            <div className="access_form_checkbox">
              <input className="" type="checkbox" name="checkbox" required />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>
          ) : (
            ""
          )}
          <button
            disabled={loader? true : false}
            className="access_form_submit"
          >
            {loader ? (
              <ScaleLoader color="#17706E" width='2px' height='16px' cssOverride={{}} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    );
};

export default AccessForm;