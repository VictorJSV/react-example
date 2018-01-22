import React, { Component } from 'react';


// Componente presencial
class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search: ''
    }
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }

  // Outputs
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return <form onSubmit={ this.onSubmit }>
      <label>Search a Repository</label>
      <input type="text" className="u-full-width" placeholder="Search ..."
       onChange={ this.onChange } defaultValue={ this.state.search } />
      <p>
        <button type="submit" className="btn-primary">Search</button>
      </p>
    </form>;
  }
}

export default SearchForm;