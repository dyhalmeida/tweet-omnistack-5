import React, { Component } from 'react'
import api from '../service/api'
import twitterLogo from '../twitter.svg'
import './Timeline.css';

export default class Timeline extends Component {
    ENTER = 13;
    state = {
        newTweet: '',
    };
    handleLogout = () => {
        localStorage.removeItem('@tweet:username');
        window.location.href = '/';
    }
    handleNewTweet = async (e) => {
        if (e.keyCode !== this.ENTER) return;
        const content = this.state.newTweet;
        const author = localStorage.getItem("@tweet:username");
        await api.post('tweets', { author, content });
        this.setState({ newTweet: '' });
    };
    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value });
    };
    render() {
        return (
            <div className="timeline-wrapper">
                <button className="logout-button" onClick={this.handleLogout}>Sair</button>
                <img  height={24} src={twitterLogo} alt="Twitter logo" />
                <form> 
                    <textarea value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder="O que está acontecendo?"
                    />
                </form>
            </div>

        )
    }
}
