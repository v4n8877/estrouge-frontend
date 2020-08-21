import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import ListUser from './list-user';

const mapStateToProps = (state) => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListUser));