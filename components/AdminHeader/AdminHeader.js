import React from 'react';
import styles from "./AdminHeader.module.scss";
import {  FaList } from "react-icons/fa";
import Image from 'next/image';

const AdminHeader = ({ openSidebar, setOpenSidebar }) => {

  // const credential = JSON.parse(localStorage.getItem('userInfo'));
  // console.log(credential)
  return (
    <div className={styles.header_design}>
      
      
      {/* header */}
      <div
        onClick={() => setOpenSidebar(!openSidebar)}
        className={styles.burger}
      >
        <span>
          <FaList />
        </span>
      </div>


      {/* search bar */}
      <div className={styles.searchbar}>
        <input type="text" name='search' placeholder='search...'/>
      </div>


      {/* User credential */}
      <div className={styles.credential}>
          <div className=''>
            <h1>Elora Barua</h1>
            <h3>Admin</h3>
          </div>
          {/* <Image src={}></Image> */}
      </div>
    </div>
  );
};

export default AdminHeader;