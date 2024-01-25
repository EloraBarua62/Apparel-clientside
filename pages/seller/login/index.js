import AccessForm from '@/components/AccessForm/AccessForm';
import Link from 'next/link';
import React from 'react';

const Login = () => {
     
    const array = [
      ["email", "Email"],
      ["password", "Password"],
    ];
  const step = "seller_login";

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

        </div>
      </div>
    );
};

export default Login;