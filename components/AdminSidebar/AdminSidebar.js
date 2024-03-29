import React from 'react';
import styles from './AdminSidebar.module.scss'

const AdminSidebar = ({ navigate, currentComponent, setCurrentComponent, openSidebar}) => {
    // console.log(currentComponent);


    return (
      <div
        className={`${
          openSidebar
            ? "admin_dashboard_sidebar"
            : "admin_dashboard_sidebar_change"
        }`}
      >
        {navigate.map((item) => (
          <div key={item.id}>
            <button
              className="button_design"
              onClick={() => setCurrentComponent(item.datatable)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    );
};

export default AdminSidebar;