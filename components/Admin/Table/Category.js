import React, { useState } from "react";
import styles from "./Category.module.scss";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import Pagination from "./Pagination/Pagination";
import { CiImageOn } from "react-icons/ci";

const Category = () => {
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  console.log("category");
  return (
    <div className={styles.category_page_design}>
      {/* Left side content: Category */}
      <div className={styles.category_left_table}>
        <div className={styles.category_left_table_design}>
          <select onClick={(e) => setParPage(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="5">15</option>
            <option value="5">25</option>
          </select>
          <input type="text" placeholder="search" />

          {/* Table title */}
          <div className={styles.category_left_table_data}>
            <div className={styles.title_cell1}>Order Id</div>
            <div className={styles.title_cell2}>Category</div>
            <div className={styles.title_cell2}>Subcategory</div>
            <div className={styles.title_cell3}>Image</div>
            <div className={styles.title_cell5}>Action</div>
          </div>
        </div>

        {/*  Table content */}
        <div className={styles.category_left_table_design}>
          {/* Main field */}
          <div className={styles.category_left_table_data}>
            <div className={styles.table_cell1}>#237497</div>
            <div className={styles.table_cell2}>Women's Fashion</div>
            <div className={styles.table_cell3}>Sharee</div>
            <div className={styles.table_cell4}>
              <GoPeople />
            </div>
            <div className={styles.table_cell5}>
              <BiSolidEdit />
              <RiDeleteBin6Line />
            </div>
          </div>
          {/* Main field */}
          <div className={styles.category_left_table_data}>
            <div className={styles.table_cell1}>#237498</div>
            <div className={styles.table_cell2}>Men's Ware</div>
            <div className={styles.table_cell3}>Shirt</div>
            <div className={styles.table_cell4}>
              <GoPeople />
            </div>
            <div className={styles.table_cell5}>
              <BiSolidEdit />
              <RiDeleteBin6Line />
            </div>
          </div>
          {/* Main field */}
          <div className={styles.category_left_table_data}>
            <div className={styles.table_cell1}>#237499</div>
            <div className={styles.table_cell2}>Baby's Care</div>
            <div className={styles.table_cell3}>Sweater</div>
            <div className={styles.table_cell4}>
              <GoPeople />
            </div>
            <div className={styles.table_cell5}>
              <BiSolidEdit />
              <RiDeleteBin6Line />
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

      {/* Right side content:  Add Category*/}
      <div className={styles.category_right_table}>
        <form action="">
          {/*  Category name */}
          <label
            htmlFor="category"
            className={styles.category_right_table_title}
          >
            Enter Category Name
          </label>
          <input
            type="text"
            name="category"
            className={styles.input_field}
            placeholder="Category name"
          />

          {/* Subcategory name */}
          <label
            htmlFor="subcategory"
            className={styles.category_right_table_title}
          >
            Enter Sub-Category Name
          </label>
          <input
            type="text"
            name="subcategory"
            className={styles.input_field}
            placeholder="Sub-Category name"
          />

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className={styles.category_right_table_image}
            >
              <span>
                <CiImageOn />
              </span>
              <span>
                Select Image
              </span>
            </label>
          </div>

          {/* <h1 className={styles.category_right_table_title}>Image</h1> */}
          <input type="file" name="image" className={styles.image_file} placeholder="Image" />
        
        <input type="submit" value="Add Category" className={styles.submit}/>
        </form>
      </div>
    </div>
  );
};

export default Category;
