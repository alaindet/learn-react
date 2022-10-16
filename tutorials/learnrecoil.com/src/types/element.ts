export interface ElementStyle {
  position: {
    top: number;
    left: number;
  }
  size: {
    width: number;
    height: number;
  }
}

export interface Element {
  style: ElementStyle;
}

export interface Position {
  top: number;
  left: number;
}
