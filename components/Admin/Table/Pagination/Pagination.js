import React from 'react';
import styles from "./Pagination.module.scss";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Pagination = ({pageNumber, setPageNumber, totalItem, parPage, showItem}) => {
    
    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber
    let dif = totalPage - pageNumber

    if(dif <= showItem){
        startPage = totalPage - showItem
    }

    let endPage = startPage<0 ? showItem : showItem + startPage;

    if(startPage <= 0){
        startPage = 1
    }

    const createBtn = () => {
        const btns = [];

        for(let i=startPage ; i<endPage ; i++){
            btns.push(
               <li onClick={() => setPageNumber(i)} className={`${pageNumber === i? styles.active_page : styles.inactive_page}`}>
                {i}
               </li>
            )
        }
        return btns;
    }
    return (
      <ul className={styles.arrow_pagination_set}>
        {pageNumber > 1 && (
          <div
            onClick={() => setPageNumber(pageNumber - 1)}
            className={styles.arrow}
          >
            <BsChevronDoubleLeft />
          </div>
        )}
        <div className={styles.pagination}>{createBtn()}</div>
        {pageNumber < totalPage && (
          <div
            onClick={() => setPageNumber(pageNumber + 1)}
            className={styles.arrow}
          >
            <BsChevronDoubleRight />
          </div>
        )}
      </ul>
    );
};

export default Pagination;