import React, { Component } from "react";
import Footer from "./Footer"
import Header from "./Header"

class MainContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  /* COPIED FROM CLASS ACTIVITY (20-React, 03-Stu_AJAX) IN CASE WE CAN USE IT


  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  */

  
  render() {
    return (
      <MainContainer>
        <Header />
        //Enter JSX here
        <Footer />
      </MainContainer>
    );
  }
}

export default MainContainer;
