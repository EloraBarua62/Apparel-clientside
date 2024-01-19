import { useState } from 'react';
import styles from './ChatSeller.module.scss';
import { IoMdClose } from "react-icons/io";


const ChatSeller = () => {
    const [show , setShow] = useState(false);
    return (
      <div className={styles.chatseller_content}>
        <div className={styles.chatseller_content_design}>
          <div
            className={`${
              show ? styles.seller_profile_open : styles.seller_profile_close
            }`}
          >
            {/* seller profile */}
            <div className={styles.seller_profile_design}>
              <h2>Sellers</h2>
              <span onClick={() => setShow(true)}>
                <IoMdClose />
              </span>
            </div>
          </div>

          {/* text bar */}
          <div className={styles.seller_text}>
            
          </div>
        </div>
      </div>
    );
};

export default ChatSeller;