import React, { useState } from 'react';
import styles from './AddProducts.module.scss'
import { categoryList } from '@/utils/demoData';
import { BsImage } from 'react-icons/bs';
import Image from 'next/image';
const AddProducts = () => {
  

  const [state, setState] = useState({
    name:"",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: ""
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const [cateshow, setCateShow] = useState(false);
  const [category, setCategory] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [allCategory, setAllCategory] = useState(categoryList);

  const categorySearch =(e) => {
    const value = e.target.value;
    setSearchValue(value);
    if(value){
      let srcValue = allCategory.filter(each => each.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      setAllCategory(srcValue);
    }
    else{
      setAllCategory(categoryList)
    }
  }

  const [images, setImages] = useState([])
  const [imagesShow, setImagesShow] = useState([])
  const imageHandle = (e) => {
    const files = e.target.files
    console.log(files)
    const length = files.length;
    if(length > 0){
      setImages([...images,...files])
      let imageUrl = []

      for(let i=0 ; i<length ; i++){
        imageUrl.push({url: URL.createObjectURL(files[i])})
      }
      setImagesShow([...imagesShow, ...imageUrl])
    }
  }
   console.log(images)
   console.log(imagesShow)

  const changeImage = (img, index) => {
    if(img){
      let tempUrl = imagesShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = {url: URL.createObjectURL(img)}
      setImagesShow([...tempUrl])
      setImages([...tempImages])
    }
  }
   
    return (
      <div className={styles.add_products_table}>
        <div className={styles.add_products_header}>
          <h1>Add Product</h1>
          <button>Products</button>
        </div>

        <form>
          {/* Product details */}
          <div className={styles.form_field_design}>
            <input
              type="text"
              name="name"
              value={state.name}
              placeholder="Enter Product Name"
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
              value={category}
              onChange={inputHandle}
              placeholder="Category"
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
              <div>
                <input onChange={categorySearch} type="text" name="" />
              </div>
              <div>
                {allCategory.map((each, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setCateShow(false);
                      setCategory(each.name);
                      setSearchValue("");
                      setAllCategory(categoryList);
                    }}
                  >
                    {each.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.number_field_display}>
            <div className={styles.number_field}>
              <label htmlFor="price">Price</label>
              <input type="number" name="price" min="0" />
            </div>
            <div className={styles.number_field}>
              <label htmlFor="price">Stock</label>
              <input type="number" name="price" min="0" />
            </div>
            <div className={styles.number_field}>
              <label htmlFor="price">Discount</label>
              <input type="number" name="price" min="0" />
            </div>
          </div>

          <div className={styles.text_field}>
            <label htmlFor="price">Discription</label>
            <textarea name="discription" cols="30" rows="10"></textarea>
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

          <button className={styles.submit_button}>Add Product</button>
        </form>
      </div>
    );
};

export default AddProducts;