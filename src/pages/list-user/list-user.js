import React, { Component }from 'react';
import TableUser from './tablesUser';

class ListUser extends Component {

  componentDidMount() {
    this.props.getListUsers();
  }

  render() {
    const { listUsers } = this.props;
    return(
    <>
      <TableUser dataUsers={listUsers}/>
    </>
    )
  }
}

export default ListUser;