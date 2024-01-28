import { Button, Modal } from "flowbite-react";
import styles from "./UpdateState.module.scss";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { categoryGet } from "@/app/Reducers/categoryReducer";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { productUpdate } from "@/app/Reducers/productReducer";

const UpdateState = ({
  openRightSidebar,
  setOpenRightSidebar,
  productInfoUpdate,
}) => {


  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.product
  );

  const [state, setState] = useState({
    name: productInfoUpdate.name,
    category: productInfoUpdate.category,
    description: productInfoUpdate.description,
    discount: productInfoUpdate.discount,
    price: productInfoUpdate.price,
    brand: productInfoUpdate.brand,
    stock: productInfoUpdate.stock,
    images: productInfoUpdate.images,
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [cateshow, setCateShow] = useState(false);
  const [category, setCategory] = useState(productInfoUpdate.category);
  const [searchValue, setSearchValue] = useState("");
  const [allCategory, setAllCategory] = useState(categories);

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue = allCategory.filter(
        (each) => each.category.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categories);
    }
  };

  const [images, setImages] = useState(productInfoUpdate.images);
  const [imagesShow, setImagesShow] = useState(productInfoUpdate.images);
  const imageHandle = (e) => {
    const files = e.target.files;

    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];

      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }

      setImagesShow([...imagesShow, ...imageUrl]);
    }
    console.log(images);
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imagesShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImagesShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    state.category = category;
    state.images = images;
    console.log(state)
    
    const productId = productInfoUpdate._id;
    dispatch(productUpdate({ state, productId }));
  };

  // Display toaster for update
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        description: "",
        discount: 0,
        price: 0,
        brand: "",
        stock: 0,
      });
      setImagesShow([]);
      setImages([]);
      setCategory("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);

  //  Fetching Category list
  useEffect(() => {
    const obj = {
      parPage: "",
      page: "",
      searchValue: "",
    };
    dispatch(categoryGet(obj));
  }, [dispatch]);

  return (
    <div className={styles.background_design}>
      <HiOutlineExclamationCircle
        className={styles.cross_design}
        onClick={() => setOpenRightSidebar(!openRightSidebar)}
      />

      {/* {keys.map((each, index) => (
        <div key={index}>
          <label htmlFor={index}>{each}</label>
          <input type="text" />
        </div>
      ))} */}
      <form onSubmit={handleUpdate}>
        {/* Product details */}
        <div className={styles.form_field_design}>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter Product Name"
            onChange={inputHandle}
          />
          <input
            onChange={inputHandle}
            type="text"
            name="brand"
            value={state.brand}
            placeholder="Enter Brand"
          />
        </div>

        {/* Catgory details */}
        <div className={styles.category_design}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="name"
            id="category"
            value={category}
            onChange={inputHandle}
            placeholder="Select Category"
            className={styles.category_title_design}
            readOnly
            onClick={() => setCateShow(!cateshow)}
          />

          {/* Category display */}
          <div
            className={`${
              cateshow ? styles.cateshow_design : styles.cateshow_design_off
            }`}
          >
            <div className={styles.category_name_inputfield}>
              <input
                value={searchValue}
                onChange={categorySearch}
                type="text"
                name=""
                placeholder="search"
              />
            </div>
            <div className={styles.category_name_display}>
              {allCategory.map((each, i) => (
                <div
                  key={i}
                  className={styles.category_field}
                  onClick={() => {
                    setCateShow(false);
                    setCategory(each.category);
                    setSearchValue("");
                    setAllCategory(categories);
                  }}
                >
                  {each.category}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price, Stock, discount fields */}
        <div className={styles.number_field_display}>
          <div className={styles.number_field}>
            <label htmlFor="price">Price</label>
            <input
              onChange={inputHandle}
              type="number"
              name="price"
              min="0"
              value={state.price}
            />
          </div>
          <div className={styles.number_field}>
            <label htmlFor="stock">Stock</label>
            <input
              onChange={inputHandle}
              type="number"
              name="stock"
              min="0"
              value={state.stock}
            />
          </div>
          <div className={styles.number_field}>
            <label htmlFor="discount">Discount</label>
            <input
              onChange={inputHandle}
              type="number"
              name="discount"
              min="0"
              value={state.discount}
            />
          </div>
        </div>

        <div className={styles.text_field}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={inputHandle}
            value={state.description}
            name="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        {/* Image Section */}
        <div className={styles.images_upload_section}>
          {imagesShow.map((img, i) => (
            <div key={i} className={styles.image_field}>
              <label htmlFor={i} className={styles.image_content_design}>
                <Image
                  src={img.url}
                  alt=""
                  fill={true}
                  className={styles.image_design}
                />
              </label>
              <input
                type="file"
                id={i}
                onChange={(e) => changeImage(e.target.files[0], i)}
              />
            </div>
          ))}
          <div className={styles.image_field}>
            <label htmlFor="picture">
              <span>
                <BsImage />
              </span>
              <span>Select Image</span>
            </label>
            <input
              multiple
              onChange={imageHandle}
              type="file"
              name="picture"
              id="picture"
            />
          </div>
        </div>

        {/* <button className={styles.submit_button}>Add Product</button> */}
        <button disabled={loader ? true : false} className="access_form_submit">
          {loader ? (
            <ScaleLoader
              color="#17706E"
              width="2px"
              height="16px"
              cssOverride={{}}
            />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateState;
