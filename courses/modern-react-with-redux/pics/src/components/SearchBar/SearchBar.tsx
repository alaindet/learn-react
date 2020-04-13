import React from 'react';

import './SearchBar.scss';

export default class SearchBar extends React.Component {

  state = {
    term: '',
  };

  private onInputChange(event: React.FormEvent<HTMLInputElement>): void {
    const term = event.currentTarget.value;
    this.setState({ term });
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input
              type="text"
              id="image-search"
              placeholder="Type to search..."
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
