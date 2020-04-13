import React from 'react';

import './SearchBar.scss';
import Keyboard from './../../enums/keyboard.enum';

interface Props {
  onSubmit: (term: string) => void;
}

interface State {
  term: string;
}

export default class SearchBar extends React.Component<Props, State> {

  state = {
    term: '',
  };

  private onInputChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      term: event.currentTarget.value
    });
  }

  private onInputEnter(event: any): void {

    // Filter out all keys except "Enter"
    if (event.keyCode !== Keyboard.Enter) {
      return;
    }

    this.onFormSubmit(event);
  }

  private onFormSubmit(event: any): void {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input
              type="text"
              id="image-search"
              placeholder="Type to search..."
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
              onKeyDown={this.onInputEnter.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
