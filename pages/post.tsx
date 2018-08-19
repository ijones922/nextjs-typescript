import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import React from 'react';

export default class Post extends React.Component<any, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
         <h1>{this.props.show.name}</h1>
         <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
         <img src={this.props.show.image.medium}/>
      </Layout>
    )
  }

  static async getInitialProps(ctx: any) {
    const { id } = ctx.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show: any = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
  }
}
