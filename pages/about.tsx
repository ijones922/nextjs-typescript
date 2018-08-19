import Layout from '../components/MyLayout'
import React from 'react';

export default class About extends React.Component<any, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
         <p>This is the about page</p>
      </Layout>
    )
  }
}
