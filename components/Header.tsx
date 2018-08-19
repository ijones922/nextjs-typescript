import Link from 'next/link';
import React from 'react';

export default class Header extends React.Component<any, any> {

  linkStyle: object = {
    marginRight: 15
  }

  constructor(props) {
    super(props);
  }

  public render() {

    return (
      <div>
          <Link href="/">
            <a style={this.linkStyle}>Home</a>
          </Link>
          <Link href="/about">
            <a style={this.linkStyle}>About</a>
          </Link>
      </div>
    )
  }

}
