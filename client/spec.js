import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
var Spectacle, Deck, Slide, Heading ;
//https://github.com/webpack/react-starter/issues/37
export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = { mount : false }
  }
  componentDidMount () {
    //require.ensure([], function(require) {
       Spectacle = require("spectacle").Spectacle;
       console.log("mount");
       console.log(Spectacle);
       Deck =require("spectacle").Deck;
       Slide =require("spectacle").Slide;
       Heading =require("spectacle").Heading;
    //});
   this.setState( { mount : true });
  }
  render () {
    console.log(Spectacle);
    if (Spectacle !== undefined ) {
      return (
      <Spectacle>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
      )
    } else {

      return (
        <div>Hello</div>
      )
    }
  }
}
