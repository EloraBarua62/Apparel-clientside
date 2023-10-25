import React from 'react';
import styles from './AdminSidebar.module.scss'

const AdminSidebar = ({sidebar, navigate, setCurrentComponent}) => {
    console.log(navigate);


    return(
    <div className={styles.admin_dashboard_sidebar}>
        {navigate.map((item) => <div key={item.id}>

            <button className={styles.button_design} onClick={()=>setCurrentComponent(item.datatable)}>{item.title}</button>
        </div>)}
    </div>);
};

export default AdminSidebar;