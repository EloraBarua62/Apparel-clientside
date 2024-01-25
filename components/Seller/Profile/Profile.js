import { BsImages } from 'react-icons/bs';
import styles from './Profile.module.scss';
import { FadeLoader } from 'react-spinners';
import Image from 'next/image';
import profile from '../../../public/profile.jpg'
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
    const image = true;
    const loader = true;
    return (
      <div className={styles.profile_table}>
        {/* Seller's profile details: image, name and description */}
        <div className={styles.profile_details}>
          {/* Image section */}
          <div>
            {image ? (
              <label htmlFor="img">
                <Image src={profile} alt="" className={styles.image_design} />
                {!loader && (
                  <div className={styles.loader_design}>
                    <span>
                      <FadeLoader />
                    </span>
                  </div>
                )}
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
            <input type="file" id="img" />
          </div>

          {/* Seller Profile info */}
          <div className={styles.seller_info}>
            <span className={styles.edit_icon}>
              <FaEdit />
            </span>

            <div>Name: Elora Barua</div>
            <div>Email: elorabarua@gmail.com</div>
            <div>Role: Seller</div>
            <div>Status: Active</div>
          </div>
          {/* Seller Profile info */}
          <div className={styles.seller_info}>
            <span className={styles.edit_icon}>
              <FaEdit />
            </span>

            <div>Name: Elora Barua</div>
            <div>Email: elorabarua@gmail.com</div>
            <div>Role: Seller</div>
            <div>Status: Active</div>
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