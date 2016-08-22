import React from 'react'
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from 'spectacle'
// Import theme
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
  primary: "#99ccff"
});
export default class MySlide extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}