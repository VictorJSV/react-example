import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepositoryList extends Component {

  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  };

  renderMessage() {
    let text = '', count = this.props.repositories.length;

    if(this.props.loading) {
      text = 'Buscando ...'
    } else if (count === 0 && this.props.queried) {
      text = 'No hay nada =(';
    } else {
      text = 'Busca algo =)';
    }

    return <p>{ text }</p>
  }

  renderTable() {
    if (!this.props.repositories.length) return null;

    return <table>
      <thead>
        <tr>
          <td>repo</td>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  }

  render() {
    return <section className="repository-list">
      { this.renderMessage() }
      { this.renderTable() }
    </section>
  }
}

export default RepositoryList;