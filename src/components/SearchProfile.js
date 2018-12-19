import React, { Component } from 'react';
import './SearchProfile.css';

class SearchProfile extends Component {
    constructor(props){
        super(props);

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(event) {
        event.preventDefault();
        let username = this.refs.username.value
        this.props.profile(username)       
    }

    render() {  
        return (
            <div className="root">
                <form onSubmit={this.onHandleSubmit}>
                <label>
                <input 
                    type="text" 
                    ref="username"
                    placeholder="Type your username"
                />
                </label>
                </form>
            </div>
        );
    }
}

export default SearchProfile;