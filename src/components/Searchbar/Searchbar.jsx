import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const { query, value } = e.currentTarget;
    this.setState({
      query: value,
    });
  };
  handleSubmit = (e) => {
    const { props, state } = this;
    e.preventDefault();
    props.onSubmit(state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="button-label"></span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
