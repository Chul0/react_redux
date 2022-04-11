import React, { Component } from 'react';
import { connect } from 'react-redux'; //you need to use connect directly in the component you need to use connect
import { selectSong } from '../actions'

class SongList extends Component{
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className='ui button primary'
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    }
    render() {
        // console.log(this.props);
        return <div className='ui divided list'>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    //this function is named mapStateToProps by convention:Take a state object and map it and convert it to props
    //The first argument:state should have all the reducers
    // console.log('--mapStateToProps', state)
    return { songs: state.songs} //identical to this.props { songs: state.songs}
}

export default connect(mapStateToProps, { 
    selectSong //(es15 syntax) same as selectSong: selectSong
})(SongList);
//^You need to pass states from Reducers to connect - so you get state from Provider as props




/* Functional cmp

const SongList = () => {
    return <div>SongList</div>;
}

export default connect()(SongList);
*/