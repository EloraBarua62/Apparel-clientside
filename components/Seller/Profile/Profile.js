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
        <div className={styles.profile_details}>
          {/* Image section */}
          <div>
            {image ? (
              <label htmlFor="img">
                <Image src={profile} alt="" className={styles.image_design}/>
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
        <div></div>
      </div>
    );
};

export default Profile;