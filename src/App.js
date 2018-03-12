import React, { Component } from 'react';
import getStories from './api';
import Story from './Story';
import userMap from './user_map';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      started: [],
      finished: [],
      delivered: []
    }
  }

  componentDidMount() {
    getStories().
      then( data => {
        this.setState({
          started: data
        });
        console.log(this.state);
      });

    getStories('finished').
      then( data => {
        this.setState({
          finished: data
        });
        console.log(this.state);
      })

    getStories('delivered').
      then( data => {
        this.setState({
          delivered: data
        });
        console.log(this.state);
      })
  }

  render() {

    const started = this.state.started.map(story => {
      return <Story key={story.id} story={story} />;
    });

    const finished = this.state.finished.map(story => {
      return <Story key={story.id} story={story} />;
    });

    const delivered = this.state.delivered.map(story => {
      return <Story key={story.id} story={story} />;
    });


    return (
      <div>
        <section className="section">
          <div className="container">
            <h2 className='title'>Currently working on</h2>
            { started }
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className='title'>Recently finished</h2>
            { finished }
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className='title'>Recently delivered</h2>
            { delivered }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
