import React, { Component } from 'react';
import SearchProfile from './components/SearchProfile';
import Profile from './components/Profile';
import './App.css';

const URL = 'https://api.github.com/users';

class App extends Component {
  constructor(){
    super()
    //Default state for the state
    this.state = {
      username: 'nikZayn',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: ''
    }
    this.profile = this.profile.bind(this);
  }

  //Profile function for fetching the data from the github api
  profile(username) {
    fetch(`${URL}/${username}`)
        .then(response => {
          return response.json()
        })
        .then(user => {
          this.setState({
            username: user.login,
            name: user.name,
            avatar: user.avatar_url,
            location: user.location,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            homeUrl: user.html_url,
            notFound: user.message
          })
        })
        .catch(user => console.log(`Sorry github account couldn't find it up!`))
}

componentWillMount() {
    //By default my github bio
    this.profile(this.state.username);
}
  render() {
    return (
      <div>
        <section className="card">
          <SearchProfile profile = {this.profile}/>
          <Profile user={this.state}/>
        </section>
      </div>
    );
  }
}

export default App;
