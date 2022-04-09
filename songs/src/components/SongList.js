import React, { Component } from 'react';
import { connect } from 'react-redux'; //you need to use connect directly in the component you need to use connect

class SongList extends Component{
    render() {
        console.log(this.props);
        return <div>SongList</div>;
    }
}

const mapStateToProps = (state) => {
    //this function is named mapStateToProps by convention:Take a state object and map it and convert it to props
    //state should have all the reducers
    console.log('state', state)
    return { songs: state.songs} //identical to this.props { songs: state.songs}
}

export default connect(mapStateToProps)(SongList);
//^You need to pass states from Reducers to connect - so you get state from Provider as props




/* Functional cmp

const SongList = () => {
    return <div>SongList</div>;
}

export default connect()(SongList);
*/