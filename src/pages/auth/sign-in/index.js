import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
//Import actions
import { login } from '../../../store/actions/auth';
import SignIn from './sign-in';


const mapStateToProps = (state) => {
  return {
    status: state.auth.status,
    error: state.auth.error,
    token: state.auth.token,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
  }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
