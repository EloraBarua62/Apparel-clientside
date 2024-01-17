import { forwardRef } from 'react';
import styles from './PaymentRequest.module.scss';
import {FixedSizeList as List} from 'react-window';

function handleOnWheel({deltaY}){
    console.log('handleOnWheel', deltaY)
}

// eslint-disable-next-line react/display-name
const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props}/>
))

const PaymentRequest = () => {
    const array = [1,2,3,4,5];

    // Design each row
    const Row = ({index, style}) => {
        return (
          <div style={style} className={styles.payment_details_field}>
            <div className={styles.table_cell_min}>{index+1}</div>
            <div className={styles.table_cell_mid}>#345</div>
            <div className={styles.table_cell_max}>Pending</div>
            <div className={styles.table_cell_max}>17.01.2024</div>
            <div className={styles.table_cell_max}><button className={styles.button_design}>Confirm</button></div>
          </div>
        );
    }
    return (
      <div className={styles.payment_table}>
            <h1 className={styles.title_design}>Transfer Payment to Seller's Account</h1>

            <div className={styles.payment_details}>
                <div className={styles.payment_details_field}>
                    <div className={styles.table_cell_min}>No</div>
                    <div className={styles.table_cell_mid}>About</div>
                    <div className={styles.table_cell_max}>Status</div>
                    <div className={styles.table_cell_max}>Date</div>
                    <div className={styles.table_cell_max}>Action</div>
                </div>

                {
                    <List 
                     style={{minWidth: '340px'}}
                     className='List'
                     height={350}
                     itemCount={10}
                     itemSize={35}
                     outerElementType={outerElementType}
                    >
                        {Row}
                    </List>
                }
            </div>
      </div>
    );
};

export default PaymentRequest;