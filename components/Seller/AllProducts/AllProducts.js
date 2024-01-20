import Search from "@/components/Accessories/Search/Search";
import React, { useState } from "react";
import styles from './AllProducts.module.scss'
import { GoPeople } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllProducts = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={styles.all_products_design}>
      <div className={styles.all_products_table}>
        <Search
          setParPage={setParPage}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className={styles.all_products_table_data}>
          <div className={styles.table_cell_min}>Product Id</div>
          <div className={styles.table_cell}>Image</div>
          <div className={styles.table_cell}>Name</div>
          <div className={styles.table_cell}>Category</div>
          <div className={styles.table_cell}>Brand</div>
          <div className={styles.table_cell_min}>Price</div>
          <div className={styles.table_cell_min}>Discount</div>
          <div className={styles.table_cell_min}>Stock</div>
          <div className={styles.table_cell}>Action</div>
        </div>

        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className={styles.all_products_table_data}>
            <div className={styles.table_cell_min}>{index}</div>
            <div className={styles.table_cell}>
              <GoPeople />
            </div>
            <div className={styles.table_cell}>Banarashi Sharee with Canjibaram style</div>
            <div className={styles.table_cell}>Category</div>
            <div className={styles.table_cell}>Brand</div>
            <div className={styles.table_cell_min}>1000</div>
            <div className={styles.table_cell_min}>30%</div>
            <div className={styles.table_cell_min}>129</div>
            <div className={styles.table_cell}>
              <BiSolidEdit />
              <RiDeleteBin6Line />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
