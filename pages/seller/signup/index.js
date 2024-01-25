import React from 'react';
import styles from './signup.module.scss'
import AccessForm from '@/components/AccessForm/AccessForm';
import Link from 'next/link';
import Image from 'next/image';
import google from '../../../public/google.png'
import facebook from '../../../public/facebook.png'

const Signup = () => {

  const array = [["name","Name"],["email","Email"],["password","Password"]];
  const step = 'seller_signup'
    return (
      <div className="access_form_background">
        <div className="access_form">
          <h1>ADMIN SIGNUP</h1>

          <AccessForm array={array} step={step}></AccessForm>
          <p>
            Already have account?{" "}
            <Link href="/admin/login" className="newroute">
              Login
            </Link>{" "}
          </p>

          {/* Divider */}
          <div className="divider">
            <div className="single_bar"></div>
            <div>
              <span>Or</span>
            </div>
            <div className="single_bar"></div>
          </div>

          {/* Social Login */}
          <div>
            <div className="single_social_icon">
              <Image src={google} alt="" className="icon_property"></Image>
            </div>
            <div className="single_social_icon">
              <Image src={facebook} alt="" className="icon_property"></Image>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;