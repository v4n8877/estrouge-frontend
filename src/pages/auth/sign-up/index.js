import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import SignUp from './sign-up';


const mapStateToProps = (state) => {
  return {
   
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));