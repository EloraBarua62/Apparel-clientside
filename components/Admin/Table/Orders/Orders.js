import React, { useState } from "react";
import styles from "./Orders.module.scss";
import { BsArrowBarDown } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";

const Orders = () => {
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
    <div className={styles.order_table}>
      <div className={styles.order_table_design}>
        <select onClick={(e) => setParPage(parseInt(e.target.value))}>
          <option value="5">5</option>
          <option value="5">15</option>
          <option value="5">25</option>
        </select>
        <input type="text" placeholder="search" />

        {/* Table title */}
        <div className={styles.order_table_field}>
          <div className={styles.order_table_data}>
            <div className={styles.table_cell1}>Order Id</div>
            <div className={styles.table_cell2}>Price</div>
            <div className={styles.table_cell3}>Payment Status</div>
            <div className={styles.table_cell4}>Order Status</div>
            <div className={styles.table_cell5}>Action</div>
            <div className={styles.table_cell6}>
              <BsArrowBarDown />
            </div>
          </div>
        </div>
      </div>
      {/*  Table content */}
      <div className={styles.order_table_design}>
        {/* Single field */}
        <div className={styles.order_table_field}>
          {/* Main field */}
          <div className={styles.order_table_data}>
            <div className={styles.table_cell1}>#237497</div>
            <div className={styles.table_cell2}>$347</div>
            <div className={styles.table_cell3}>Pending</div>
            <div className={styles.table_cell4}>Pending</div>
            <div className={styles.table_cell5}>view</div>
            <div className={styles.table_cell6}>
              <BsArrowBarDown onClick={() => setShow(!show)} />
            </div>
          </div>

          {/* Sub field */}
          <div
            className={`${
              show ? styles.order_table_data_inner : styles.close_show
            }`}
          >
            <div className={styles.table_cell1}>
              <span>#237499</span>
            </div>
            <div className={styles.table_cell2}>$347</div>
            <div className={styles.table_cell3}>Pending</div>
            <div className={styles.table_cell4}>Pending</div>
          </div>
        </div>

        <div className={styles.order_table_field}>
          <div className={styles.order_table_data}>
            <div className={styles.table_cell1}>#845431</div>
            <div className={styles.table_cell2}>$894</div>
            <div className={styles.table_cell3}>Paid</div>
            <div className={styles.table_cell4}>Placed</div>
            <div className={styles.table_cell5}>view</div>
            <div className={styles.table_cell6}>
              <BsArrowBarDown />
            </div>
          </div>
        </div>
        <div className={styles.order_table_field}>
          <div className={styles.order_table_data}>
            <div className={styles.table_cell1}>Order Id</div>
            <div className={styles.table_cell2}>Price</div>
            <div className={styles.table_cell3}>Payment Status</div>
            <div className={styles.table_cell4}>Order Status</div>
            <div className={styles.table_cell5}>Action</div>
            <div className={styles.table_cell6}>
              <BsArrowBarDown />
            </div>
          </div>
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

export default Orders;
