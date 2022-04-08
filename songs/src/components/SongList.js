import React, { Component } from 'react';
import { connect } from 'react-redux'; //you need to use connect directly in the component you need to use connect

class SongList extends Component{
    render() {
        return <div>SongList</div>;
    }
}

export default connect()(SongList);




/* Functional cmp

const SongList = () => {
    return <div>SongList</div>;
}

export default connect()(SongList);
*/