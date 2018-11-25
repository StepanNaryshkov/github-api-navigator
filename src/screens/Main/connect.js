import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './component';
import { getUsers } from '../../redux/actions/user';

export default connect(
  ({ users }) => ({
    users
  }),
  dispatch =>
    bindActionCreators(
      {
        getUsers
      },
      dispatch
    )
)(Main);
