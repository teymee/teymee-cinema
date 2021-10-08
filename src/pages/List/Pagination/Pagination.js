import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationActions } from "../../../store/pagination-slice";

function Pagination(props) {
  const paginationRedux = useSelector((state) => state.pagination);
  const pagInput = useRef(null);
  const dispatch = useDispatch();
  const currentPage = paginationRedux.curPage;
  const maxPageCount = currentPage + 3;
  const minPageCount = currentPage - 3;
  let totalPageNumbers = props.pages;
  let pageNumber = [];

  //DISPAY LIST OF PAGE NUMBERS
  for (let i = currentPage; i < totalPageNumbers; i++) {
    pageNumber.push(i);
  }

  const handleNextbtn = () => {
    dispatch(paginationActions.handleNextbtn(1));
  };

  const handlePrevbtn = () => {
    dispatch(paginationActions.handlePrevbtn(1));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let num = Number(pagInput.current.value);
    if (num === 0) {
      dispatch(paginationActions.changePage(currentPage));
    } else {
      dispatch(paginationActions.changePage(num));
    }
  };
  const pagHandler = (event) => {
    const text = Number(event.target.innerText);
    dispatch(paginationActions.changePage(text));
  };

  const pagination = pageNumber.map((el) => {
    if (el < maxPageCount && el > minPageCount) {
      return (
        <a href="#top" key={el}>
          <li
            onClick={pagHandler}
            className={currentPage === el ? "active" : null}
          >
            {el}
          </li>
        </a>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pageNumber.length > maxPageCount) {
    pageIncrementBtn = <a href="#top"><li onClick={handleNextbtn}> &hellip; </li></a>;
  }

  let pageDecrementBtn = null;
  if (minPageCount >= 1) {
    pageDecrementBtn = <a href="#top"><li onClick={handlePrevbtn}> &hellip; </li> </a> ;
  }

  return (
    <>
    <div className="container2">
      <ul className="pagination">
        {currentPage > 1 && (
          <a href="#top">
            {" "}
            <li onClick={handlePrevbtn} >
              Previous
            </li>{" "}
          </a>
        )}
        {pageDecrementBtn}
        {pagination}
        {pageIncrementBtn}
      

        {currentPage < props.pages && (
          <a href="#top">
            {" "}
            <li onClick={handleNextbtn} href="#top">
              Next
            </li>{" "}
          </a>
        )}
      </ul>

      <form className="pag-input" onSubmit={onSubmitHandler}>
        <p> Go to :</p>
        <input type="number" min="1" placeholder={currentPage} max={totalPageNumbers} ref={pagInput} />
      </form>
    </div>


 
    </>
  );
}

export default Pagination;
