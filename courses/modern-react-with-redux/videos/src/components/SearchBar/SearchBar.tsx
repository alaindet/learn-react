import React from 'react';

import Props from './Props.interface';
import State from './State.interface';
import './SearchBar.css';

export default class SearchBar extends React.Component<Props, State> {

  state: State = {
    term: '',
  }

  onInputChange(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({
      term: event.currentTarget.value
    });
  }

  onFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }


  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
