import React from 'react';
import styles from './signup.module.scss'
import AccessForm from '@/components/AccessForm/AccessForm';
import Link from 'next/link';
import Image from 'next/image';
import google from '../../../public/google.png'
import facebook from '../../../public/facebook.png'

const Signup = () => {

  const array = [["name","Name"],["email","Email"],["password","Password"]];
    return (
      <div className="access_form_background">
        <div className="access_form">
          <h1>ADMIN SIGNUP</h1>

          <AccessForm array={array}></AccessForm>
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