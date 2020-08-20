import React, { memo } from "react";
import styled from 'styled-components';

const Panigation = styled.div`
  justify-content: flex-end;
  max-height: 358px !important;
  /* height: 100%; */
  background: transparent;
  padding: 10px 5px 10px 0px;
  display: flex;
  align-items: center;
  label {
    font-size: 14px;
    font-family: 'Rubik', Helvetica, Arial, sans-serif;
    color: #697179;
  }
`;

const ArrowBtn = styled.button`
  background-color: unset;
  outline: none;
  border-color: transparent;
  &:focus {
    border-color: transparent;
    box-shadow: unset;
  }
  &:disabled span {
    color: #e5e5e5;
  }
  &:hover span {
    color: #e5e5e5;
    transition: 0.5s;
  }
  span {
    font-size: 10px;
    color: #205488;
  }
  :hover {
    cursor: pointer;
  }
`;

const PanigationPage =
  ({
    page,
    totalPage,
    getNewPage,
    changePage,
     ...props}) => {

    const handleClickPagination = (e, index) => {
      changePage(index)
    };

  return (
    <Panigation
      {...props}
    >
      <ArrowBtn
        disabled={page <= 1}
        onClick={(e) => handleClickPagination(e, page - 1)}
        >
          <span className="icon-left-arrow" />
      </ArrowBtn>
      <label>{page} / {totalPage}</label>
      <ArrowBtn
        disabled={page >= totalPage}
        onClick={(e) => handleClickPagination(e, page + 1)}
        >
          <span className="icon-right-arrow" />
      </ArrowBtn>
    </Panigation>
  );
};

export default memo(PanigationPage);
