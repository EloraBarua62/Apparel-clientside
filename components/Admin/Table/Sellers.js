import React, { useState } from 'react';
import styles from "./Sellers.module.scss";
import { BsArrowBarDown } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import Pagination from "./Pagination/Pagination";

const Sellers = () => {
    const [parPage, setParPage] = useState(5);
    const [state, setState] = useState(true);
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    // const handleParPage = e => {
    //   setParPage(parseInt(e));
    // }
    console.log("order");

    return (
      <div className={styles.sellers_table}>
        <div className={styles.sellers_table_design}>
          <select onClick={(e) => setParPage(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="5">15</option>
            <option value="5">25</option>
          </select>
          <input type="text" placeholder="search" />

          {/* Table title */}
          <div className={styles.sellers_table_field}>
            <div className={styles.sellers_table_data}>
              <div className={styles.table_cell1}>Order Id</div>
              <div className={styles.table_cell2}>Image</div>
              <div className={styles.table_cell3}>Name</div>
              <div className={styles.table_cell4}>Email</div>
              <div className={styles.table_cell5}>Payment Status</div>
              <div className={styles.table_cell6}>Division</div>
              <div className={styles.table_cell7}>District</div>
              <div className={styles.table_cell8}>Action</div>
            </div>
          </div>
        </div>
        {/*  Table content */}
        <div className={styles.sellers_table_design}>
          
            {/* Main field */}
            <div className={styles.sellers_table_data}>
              <div className={styles.table_cell1}>#237497</div>
              <div className={styles.table_cell2}>
                <GoPeople />
              </div>
              <div className={styles.table_cell3}>Elora Barua</div>
              <div className={styles.table_cell4}>
                <p>elorabarua@gamil.com</p>{" "}
              </div>
              <div className={styles.table_cell5}>active</div>
              <div className={styles.table_cell6}>Chittagong</div>
              <div className={styles.table_cell7}>Chittagong</div>
              <div className={styles.table_cell8}>View</div>
            </div>
            <div className={styles.sellers_table_data}>
              <div className={styles.table_cell1}>#237497</div>
              <div className={styles.table_cell2}>
                <GoPeople />
              </div>
              <div className={styles.table_cell3}>Elora Barua</div>
              <div className={styles.table_cell4}>
                <p>elorabarua@gamil.com</p>{" "}
              </div>
              <div className={styles.table_cell5}>active</div>
              <div className={styles.table_cell6}>Chittagong</div>
              <div className={styles.table_cell7}>Chittagong</div>
              <div className={styles.table_cell8}>View</div>
            </div>
            <div className={styles.sellers_table_data}>
              <div className={styles.table_cell1}>#237497</div>
              <div className={styles.table_cell2}>
                <GoPeople />
              </div>
              <div className={styles.table_cell3}>Elora Barua</div>
              <div className={styles.table_cell4}>
                <p>elorabarua@gamil.com</p>{" "}
              </div>
              <div className={styles.table_cell5}>active</div>
              <div className={styles.table_cell6}>Chittagong</div>
              <div className={styles.table_cell7}>Chittagong</div>
              <div className={styles.table_cell8}>View</div>
            </div>
          

          
            
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

export default Sellers;