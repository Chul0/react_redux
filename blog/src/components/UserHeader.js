import React from 'react';
import { connect } from 'react-redux';
class UserHeader extends React.Component {
    render() {
        // const user = this.props.users.find((user) => user.id === this.props.userId);
        const { user } = this.props;

        if(!user) {
            return null;
            //when this cmp is first loaded, it will have an empty [] as it's set in usersReducer.
        }

        return <div className='header'>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId ) };
    //mapStateToProps has a second argument:ownProps that refers to the props of this cmp
};

export default connect(mapStateToProps)(UserHeader);