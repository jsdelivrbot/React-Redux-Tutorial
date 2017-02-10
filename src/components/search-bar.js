import React, { Component } from 'react';
// equivalent to const Component = React.Component;

//define a new class called SearchBar and give it acesss to all functionality from React.Component class
class SearchBar extends Component {

  //this is how we define state in class-based component
  //all JS classes have special fn called constructor, it is called automatically when new instance of class is created
  constructor(props) {
    super(props); //if we don't call super, we end up with error

    //setting the state
    this.state = { term: ''}; //this is a property we use to reference the search term
  }
  //render is a method on SearchBar
  render() {
    //create a new input element and pass it as a property on change with a value of this.onInputChange
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
