import React from 'react';
import styles from "./AdminHeader.module.scss";
import {  FaList } from "react-icons/fa";

const AdminHeader = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div className={styles.header_design}>
      {/* header */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className={styles.burger}
      >
        <span>
          <FaList />
        </span>
      </button>
    </div>
  );
};

export default AdminHeader;