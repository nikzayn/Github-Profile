import React, { Component } from 'react';
import './SearchProfile.css';
import './Profile.css';

class Profile extends Component {
    render() {
            //Checking if user exist or not through props
                if(this.props.user.notFound === "Not Found")
                    return (
                        <div className="root">
                        <div className="info">
                        <div className="notFound">
                            <h2>Sorry!</h2>
                            <p>We can't find this user!!</p>
                        </div>
                        </div>
                        </div>
                    )
                else{   
                    return(
                        <div className="root">
                         <div className="info">
                            <a href={this.props.user.avatar_url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={this.props.user.avatar} 
                                    alt="Profile"
                                />
                            </a>    
                            <h2>
                                <a href={this.props.user.homeUrl} target="_blank" rel="noopener noreferrer">{this.props.user.name}</a>
                            </h2>
                            <h3>{this.props.user.location}</h3>
                        </div>

                        <div className="state">
                            <ul>
                            <li>
                                <a href={this.props.user.followers_url} target="_blank" rel="noopener noreferrer">
                                <i>{this.props.user.followers}</i>
                                <span>Followers</span>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.user.repos_url} target="_blank" rel="noopener noreferrer">
                                <i>{this.props.user.repos}</i>
                                <span>Repositories</span>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.user.following_url} target="_blank" rel="noopener noreferrer">
                                <i>{this.props.user.following}</i>
                                <span>Following</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    )
                }
    }
}

export default Profile;