import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
let MySlide ;
export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = { mount : false } //To rerender
  }
  componentDidMount () {
    //require.ensure([], function(require) {
       MySlide = require("../client/myslide.js");
       let {Spectacle} = require("spectacle");
    //});
    this.setState( { mount : true }); //To rerender.
  }
  render () {
    if (MySlide !== undefined ) {
      return (
        <MySlide/>
      )
    } else {
      return (
        null
      )
    }
  }
}
