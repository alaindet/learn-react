import React, { RefObject } from 'react';
import Props from './ImageCardProps.interface';

interface State {
  spans: number;
}

enum ImageCell {
  Width = 150,
  Height = 10,
  GapVertical = 1,
  GapHorizontal = 10,
}

export default class ImageCard extends React.Component<Props, State> {

  state: State = {
    spans: 0,
  }

  imageRef: RefObject<HTMLImageElement>;

  constructor(props: Props) {
    super(props);
    this.imageRef = React.createRef<HTMLImageElement>();
  }

  public componentDidMount(): void {
    if (this.imageRef && this.imageRef.current) {
      this.imageRef.current.addEventListener('load', this.setSpans);
    }
  }

  setSpans = () => {
    if (this.imageRef && this.imageRef.current) {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / ImageCell.Height);
      this.setState({ spans });
    }
  }

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={urls.thumb}
          alt={alt_description}
        />
      </div>
    );
  }
}
