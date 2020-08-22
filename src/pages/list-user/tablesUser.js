import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
//Imports element
import { ContentTable } from './style';
import { Table, Row, Cell } from 'components/stripedTable';

const TableUser = ({ dataUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 7;
  const startPage = (currentPage - 1) * 7;
  const endPage = currentPage * perPage;

  return(
    <ContentTable>
      <h4>List of users</h4>
      <Table>
        <Row header="true">
          <Cell>User</Cell>
          <Cell>First name</Cell>
          <Cell>Email</Cell>
          <Cell>Phone</Cell>
        </Row>
        {
          dataUsers.slice(startPage, endPage).map((user) => {
            return(
              <Row key={user.id}>
                <Cell>
                  <img src={user.avatar} alt="user"/>
                </Cell>
                <Cell>{user.name}</Cell>
                <Cell>{user.email}</Cell>
                <Cell>{user.phone}</Cell>
              </Row>
            );
          })
        }
      </Table>
      <Pagination
          currentPage={currentPage}
          totalSize={dataUsers.length}
          sizePerPage={7}
          changeCurrentPage={(pageNumber)=> setCurrentPage(pageNumber)}
          theme="border-bottom"
        />
    </ContentTable>
  );
}

TableUser.propTypes = {
  dataUsers: PropTypes.array,
}

TableUser.defaultProps = {
  dataUsers: [],
}

export default memo(TableUser);