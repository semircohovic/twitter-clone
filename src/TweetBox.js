import React, { useState } from 'react'
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase.js';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Semir Cohovic',
            username: 'semir',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://instagram.ftgd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17267304_734637353363573_584513824573358080_a.jpg?_nc_ht=instagram.ftgd1-1.fna.fbcdn.net&_nc_ohc=pgr94iTMNAIAX8H1M1U&oh=ce5bf27f8ff02ca10b08c9dfab0e746f&oe=5F68A2D7',
        })
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?" type="text" />

                </div>
                <input className="tweetBox__imageInput"
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    placeholder="Enter image URL here" type="text" />
                <Button onClick={sendTweet} tpye="submit" className="tweetBox__tweetButton" placeholder="Optional: Enter image url">Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox
