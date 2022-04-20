import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        //You want to fetch data from api when this cmp is mounted
    }

    render() {
        const user = this.props.users.find((user) => user.id === this.props.userId);

        if(!user) {
            return null;
            //when this cmp is first loaded, it will have an empty [] as it's set in usersReducer.
        }
        return <div className='header'>{user.name}</div>;
    }
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);