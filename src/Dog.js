import React, {Component} from 'react';

class Dog extends Component {
  constructor(props) {
    super(props)
    this.state = {breed:"Chihuahua"}
  }

  changeState = () => {
    this.setState({breed: "Golden"})
  }

  render() {
    return (
      <div>
        <p>
          I am the dog component.
        </p>
        <p>
          The dog type is {this.state.breed}
        </p>
        <p>
          The name of the dog is {this.props.name}
        </p>
        <button onClick={this.changeState}>Click me</button>
      </div>
    )
  }
}

export default Dog;