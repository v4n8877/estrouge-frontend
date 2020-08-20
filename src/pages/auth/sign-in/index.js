import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import SignIn from './sign-in';


const mapStateToProps = (state) => {
  return {
   
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
