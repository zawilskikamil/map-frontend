import React, { Component } from 'react';
import MapList from './app/components/mapList';

class App extends Component {

  state = {
    mapPoints: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/map')
        .then(res => res.json())
        .then((data) => {
          this.setState({ mapPoints: data })
        })
        .catch(console.log)
  }

  render() {
    return (
        <MapList mapList={this.state.mapPoints} />
    );
  }
}

export default App;
