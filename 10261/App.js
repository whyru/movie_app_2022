import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('쓰고싶은말');
  }

  componentDidMount() {
    console.log("DidMount");
  }
  
  componentDidUpdate() {
    console.log("Update");
  }

  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
    this.setState(current => ({count: current.count+1}));
  };

  minus = () => {
    console.log('minus');
    this.setState({count: this.state.count-1});
  };

  reset = () => {
    console.log('reset');
    this.setState({count: 0});
  };

  render() {
    console.log('render');
    return (
    <div>
      <h1> Class Component {this.state.count} </h1>
      <button onClick={this.add}> Add </button>
      <button onClick={this.minus}> Minus </button>
      <button onClick={this.reset}> Reset </button>
    </div>
    );
  }
}

export default App;

