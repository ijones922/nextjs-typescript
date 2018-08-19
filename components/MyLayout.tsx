import Header from './Header';
import React from 'react';

export default class Layout extends React.Component<any, any> {

  layoutStyle: object = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  }

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div style={this.layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }

}
