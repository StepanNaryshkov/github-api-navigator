import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './component';
import { getUsers } from '../../redux/actions/user';

export default connect(
  ({ users }) => ({
    user: users.data,
    fetching: users.fetching
  }),
  dispatch =>
    bindActionCreators(
      {
        getUsers
      },
      dispatch
    )
)(Main);
