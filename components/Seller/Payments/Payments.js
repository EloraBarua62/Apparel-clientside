import { forwardRef } from "react";
import dashboardSummary from "@/utils/dashboardSummary";
import styles from "./Payments.module.scss";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

// eslint-disable-next-line react/display-name
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const dashboard_summary = dashboardSummary();
const Payments = () => {

  // Design each row
  const Row = ({ index, style }) => {
    return (
      <div style={style} className={styles.pending_request_table}>
        <div>{index + 1}</div>
        <div>345</div>
        <div>Pending</div>
        <div>17.01.2024</div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.summary_cart_display}>
        {dashboard_summary.map((criteria) => (
          <div key={criteria.value} className={styles.summary_cart_design}>
            <div>
              <h1>{criteria.value}</h1>
              <h3>{criteria.title}</h3>
            </div>
            <div className={styles.icon_design}>
              <criteria.icon />
              {/* <span>{criteria.icon}</span> */}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.payment_section_display}>
        <div className={styles.payment}>
          <h1>Send Request</h1>
          <form>
            <input type="number" name="request" min={0} />
            <button type="submit">Submit</button>
          </form>

          <h1>Pending Request</h1>
          <div>
            <div className={styles.pending_request_table}>
              <div>No</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Date</div>
            </div>
            {
              <List
                style={{ minWidth: "340px" }}
                className="List"
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
        <div className={styles.payment}>
          <div>
            <div className={styles.pending_request_table}>
              <div>No</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Date</div>
            </div>
            {
              <List
                style={{ minWidth: "340px" }}
                className="List"
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
      </div>
    </div>
  );
};

export default Payments;
