import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render () {
        console.log(this.props.posts);
        return <div>Post List</div>;
    }
};

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(
    mapStateToProps, //this should always be mapStateToProps eventually. null is fine as an initial setup
    { fetchPosts }
)(PostList);