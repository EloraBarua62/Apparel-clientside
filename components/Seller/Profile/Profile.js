import { BsImages } from "react-icons/bs";
import styles from "./Profile.module.scss";
import { FadeLoader } from "react-spinners";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, profile_image_upload } from "@/app/Reducers/authReducer";
import { useEffect, useState } from "react";

const Profile = () => {
  const { userInfo, loader, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    division: "",
    district: "",
    shopName: "",
    sub_district: "",
  });

  const add_image = (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      dispatch(profile_image_upload(formData));
    }
  };


  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
   return (
    <div className={styles.profile_table}>
      {/* Seller's profile details: image, name and description */}
      <div className={styles.profile_details}>
        {/* Image section */}
        <div>
          {userInfo?.image ? (
            <label htmlFor="img">
              <Image
                src={userInfo.image}
                alt=""
                fill={true}
                className={styles.image_design}
              />
              {/* {!loader && (
                  <div className={styles.loader_design}>
                    <span>
                      <FadeLoader />
                    </span>
                  </div>
                )} */}
            </label>
          ) : (
            <label htmlFor="img">
              <span>
                <BsImages />
              </span>
              <span>Select Image</span>
              {loader && (
                <div className={styles.loader_design}>
                  <span>
                    <FadeLoader />
                  </span>
                </div>
              )}
            </label>
          )}
          <input type="file" id="img" onChange={add_image} />
        </div>

        {/* Seller Profile info */}
        <div className={styles.seller_info}>
          <span className={styles.edit_icon}>
            <FaEdit />
          </span>

          <div>Name: {userInfo?.name}</div>
          <div>Email: {userInfo?.email}</div>
          <div>Role: {role}</div>
          <div>Status: {userInfo?.status}</div>
        </div>
        {/* Seller Profile info */}
        <div className={styles.seller_info}>
          <span className={styles.edit_icon}>
            <FaEdit />
          </span>

          <div>Shop Name: {userInfo?.shopInfo?.shop_name}</div>
          <div>Division: {userInfo?.shopInfo?.division}</div>
          <div>District: {userInfo?.shopInfo?.district}</div>
          <div>Sub District: {userInfo?.shopInfo?.sub_district}</div>
        </div>
      </div>

      {/* Change password */}
      <div className={styles.update_password}>
        <h1>Change Password</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="old_password">Old Password</label>
          <input type="old_password" name="old_password" id="" />
          <label htmlFor="new_password">New Password</label>
          <input type="new_password" name="new_password" id="" />
          <button type="submit"> Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
