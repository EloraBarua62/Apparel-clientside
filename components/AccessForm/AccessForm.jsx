import { adminLogin, adminSignup, messageClear, sellerLogin, sellerSignup } from "@/app/Reducers/authReducer";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

const AccessForm = ({ array, step }) => {
  // Calling funtion from reducer
  const dispatch = useDispatch();
  const router = useRouter();
  const { loader, errorMessage, successMessage, role } = useSelector(
    (state) => state.auth
  );

  // Form data handle
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // required data
    const name = event.target.name.value || "";
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (step === "admin_login") {
      dispatch(adminLogin({ email, password }));
    } 
    else if (step === "seller_login") {
      dispatch(sellerLogin({ email, password }));
    } 
    else if (step === "seller_signup") {
      dispatch(sellerSignup({ name, email, password }));
    }
    else
      dispatch(adminSignup({ name, email, password }));
  };

  useEffect(() => {
    
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      router.push(`/${role}`)
      
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage,dispatch,role,router]);

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
        {array[0][0] == "name" ? (
          <div className="access_form_checkbox">
            <input className="" type="checkbox" name="checkbox" required />
            <label htmlFor="checkbox">I agree to privacy policy & terms</label>
          </div>
        ) : (
          ""
        )}
        <button disabled={loader ? true : false} className="access_form_submit">
          {loader ? (
            <ScaleLoader
              color="#17706E"
              width="2px"
              height="16px"
              cssOverride={{}}
            />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default AccessForm;
