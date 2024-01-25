import AccessForm from '@/components/AccessForm/AccessForm';
import Link from 'next/link';
import React from 'react';

const Login = () => {
     
    const array = [
      ["email", "Email"],
      ["password", "Password"],
    ];
 const step = "admin_login";

    return (
      <div className="access_form_background">
        <div className="access_form">
          <h1>ADMIN LOGIN</h1>

          <AccessForm array={array} step={step}></AccessForm>

          <p>
            New member?{" "}
            <Link href="/admin/signup" className='newroute'>
              Signup
            </Link>{" "}
          </p>

          {/* <form>
            <label htmlFor="name">Name</label>
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
            />

            <div className='access_form_checkbox'>
              <input className="" type="checkbox" name="checkbox" required />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>

            <input type="submit" className='access_form_submit'/>
          
          
          </form> */}
        </div>
      </div>
    );
};

export default Login;