import React, { Component } from 'react';
import SearchForm from "../../components/SearchForm/SearchForm";
import RepositoryList from "../../components/RepositoryList/RepositoryList";

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loading: false,
      results: [],
      search: '',
      queried: false
    }
  }

  onSubmit(value) {
    this.setState({ loading: true });

    console.log("value", value);

    setTimeout(() => {
      this.setState({ search: value, loading: false, queried: true, results: [] })
    }, 2000)
  }

  render() {
    return (
      <div className="container">
        <SearchForm onSubmit={ this.onSubmit } search={ this.state.search }  />
        <h1>Busqueda</h1>
        <RepositoryList
          repositories={ this.state.results }
          loading={ this.state.loading }
          queried={ this.state.queried }
          search={ this.state.search } />
      </div>
    );
  }
}

export default SearchContainer;
