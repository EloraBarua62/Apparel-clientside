import React, { useState } from 'react';
import Pagination from './Pagination/Pagination';
import styles from './SellersRequest.module.scss'

const SellersRequest = () => {
    const [parPage, setParPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <div className={styles.sellers_request_table}>
        <div className={styles.sellers_request_table_design}>
          <select onClick={(e) => setParPage(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="5">15</option>
            <option value="5">25</option>
          </select>
          <input type="text" placeholder="search" />

          {/* Table title */}
          <div className={styles.sellers_request_table_field}>
            <div className={styles.sellers_request_table_data}>
              <div className={styles.table_cell_min}>Id</div>
              <div className={styles.table_cell_mid}>Name</div>
              <div className={styles.table_cell_max}>Email</div>
              <div className={styles.table_cell_mid}>Payment Status</div>
              <div className={styles.table_cell_mid}>Status</div>
              <div className={styles.table_cell_mid}>Action</div>
            </div>
          </div>
        </div>
        {/*  Table content */}
        <div className={styles.sellers_request_table_design}>
          {/* Main field */}
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className={styles.sellers_request_table_data}>
              <div className={styles.table_cell_min}>{id}</div>
              <div className={styles.table_cell_mid}>Elora Barua</div>
              <div className={styles.table_cell_max}>
                <p>elorabarua@gamil.com</p>{" "}
              </div>
              <div className={styles.table_cell_mid}>inactive</div>
              <div className={styles.table_cell_mid}>pending</div>
              <div className={styles.table_cell_mid}>View</div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={50}
          parPage={parPage}
          showItem={4}
        />
      </div>
    );
};

export default SellersRequest;