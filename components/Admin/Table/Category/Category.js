import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import Pagination from "../Pagination/Pagination";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { categoryAdd } from "@/app/Reducers/categoryReducer";
import toast from "react-hot-toast";
import {
  messageClear,
} from "@/app/Reducers/categoryReducer";



const Category = () => {
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageShow, setImageShow] = useState("");
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    category: '',
    sub_category: '',
    image: ''
  })
  

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state))
  }
  const handleImage = (e) => {
    let files = e.target.files;
    if(files.length > 0){
      setImageShow(URL.createObjectURL(files[0]));
      setState({...state, image: files[0]})
    }
    
  }


  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    } 
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage, dispatch]);

  return (
    <div className={styles.category_page_design}>
      {/* Left side content: Category */}
      <div className={styles.category_left_table}>
        <div className={styles.category_left_table_design}>
          {/* <select onClick={(e) => setParPage(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="5">15</option>
            <option value="5">25</option>
          </select>
          <input type="text" placeholder="search" /> */}

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
        <form onSubmit={handleForm}>
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
            value={state.category}
            onChange={(e) => setState({ ...state, category: e.target.value })}
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
            value={state.sub_category}
            onChange={(e) =>
              setState({ ...state, sub_category: e.target.value })
            }
          />

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className={styles.category_right_table_image}
            >
              {imageShow ? (
                <Image
                  src={imageShow}
                  alt=""
                  fill={true}
                  className={styles.image_design}
                />
              ) : (
                <>
                  <span>
                    <CiImageOn />
                  </span>
                  <span>Select Image</span>
                </>
              )}
            </label>
          </div>

          {/* <h1 className={styles.category_right_table_title}>Image</h1> */}
          <input
            type="file"
            name="image"
            id="image"
            className={styles.image_file}
            placeholder="Image"
            onChange={handleImage}
          />

          <button disabled={loader ? true : false} className={styles.submit}>
            {loader ? (
              <ScaleLoader
                color="#17706E"
                width="2px"
                height="16px"
                cssOverride={{}}
              />
            ) : (
              "Add Category"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
