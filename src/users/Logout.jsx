import React, { Component } from 'react';
import axios from 'axios';

class Logout extends Component {

	handleLogout = (e) => {
		console.log(e)
		e.preventDefault()
		axios.post('/logout')
			.then(res => {
				let data = { isAuthed: false }
				this.props.handleUserAuth(data)
			})
	}
    render() {
        return (
            <div>
            	<button onClick={this.handleLogout}>Logout</button>
            </div>            
        );
    }
}

export default Logout;
