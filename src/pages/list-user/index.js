import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { getListUsers } from '../../store/actions/listUsers';
import ListUser from './list-user';

const mapStateToProps = (state) => {
  return {
    status: state.listUsers.status,
    error: state.listUsers.error,
    listUsers: state.listUsers.listUsers,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getListUsers,
  }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListUser));