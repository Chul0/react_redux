import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render () {
        return <div>Post List</div>;
    }
};

export default connect(
    null, //this should always be mapStateToProp eventually. null is fine as an initial setup
    { fetchPosts }
)(PostList);