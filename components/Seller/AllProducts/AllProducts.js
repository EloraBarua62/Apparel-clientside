import Search from "@/components/Accessories/Search/Search";
import React, { useEffect, useState } from "react";
import styles from './AllProducts.module.scss'
import { GoPeople } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdateState from "@/components/Accessories/UpdateState/UpdateState";
import { productGet } from "@/app/Reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Details from "@/components/Admin/Details";
import { Button } from "flowbite-react";
import Link from "next/link";

const AllProducts = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [productInfoUpdate, setProductInfoUpdate] = useState({});
  const { products, totalproducts } = useSelector((state) => state.product);
  const [openRightSidebar, setOpenRightSidebar] = useState(false);

  
  
  const dispatch = useDispatch();
  const handleUpdate = (product) => {
    setProductInfoUpdate(product);
    setOpenRightSidebar(!openRightSidebar)
  };

  //  Fetching Category list
  useEffect(() => {
    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(productGet(obj));
  }, [parPage, currentPage,searchValue]);
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

        {products.map((each, index) => (
          <div key={index} className={styles.all_products_table_data}>
            <div className={styles.table_cell_min}>{index + 1}</div>
            <div className={styles.table_cell}>
              <Image
                src={each.images[0]}
                alt=""
                fill="true"
                className={styles.product_image}
              ></Image>
            </div>
            <div className={styles.table_cell}>{each.name}</div>
            <div className={styles.table_cell}>{each.category}</div>
            <div className={styles.table_cell}>{each.brand}</div>
            <div className={styles.table_cell_min}>{each.price}</div>
            <div className={styles.table_cell_min}>{each.discount}</div>
            <div className={styles.table_cell_min}>{each.stock}</div>
            <div className={styles.table_cell}>
              <Button onClick={() => handleUpdate(each)}>
                <BiSolidEdit />
              </Button>              
              <RiDeleteBin6Line />
              
            </div>
          </div>
        ))}
      </div>

      {/* {Object.keys(productInfoUpdate).length != 0 &&
        productInfoUpdate.constructor === Object && (
          <UpdateState productInfoUpdate={productInfoUpdate} />
        )} */}

      {openRightSidebar ? (
        <UpdateState
          openRightSidebar={openRightSidebar}
          setOpenRightSidebar={setOpenRightSidebar}
          productInfoUpdate={productInfoUpdate}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AllProducts;
