import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderList() {
        //renderList is a method on the class which is invoked IMMEDIATELY! and is not a CALLBACK or an event handler, so "this" already refers to the instance of the class. No arrow function or binding is necessary in this case.
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }
    
    render () {
        console.log('--api',this.props.posts)
        return <div className='ui relaxed divided list'>{this.renderList()}</div>;
    }
};

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(
    mapStateToProps, //this should always be mapStateToProps eventually. null is fine as an initial setup
    { fetchPosts }
)(PostList);