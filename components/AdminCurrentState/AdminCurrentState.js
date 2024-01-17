import React from 'react';
import styles from './AdminCurrentState.module.scss'



const AdminCurrentState = ({ currentComponent }) => {
  return (
    <div className={styles.information_box}>
      {currentComponent}
    </div>
  );

};

export default AdminCurrentState;