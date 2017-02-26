// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/nyc_01.jpg"),
  classic_gif: require("../assets/classic.gif"),
};

preloader(images);

const theme = createTheme({
  // primary: "#ff4081"
  // primary: "#CC3300"
  // primary: "#0099CC"
  // primary: "#996699"
  primary: "#673AB7"
  // primary: "#3D72A4"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        	<Slide transition={["zoom"]} bgColor="primary" id="welcome">
        	    <Heading size={1} fit caps lineHeight={1} textColor="black">
        	        How Schedules Posts
        	    </Heading>
        	    <Heading size={1} fit caps>
        	         Wordpress
        	    </Heading>
        	</Slide>

        	<Slide transition={["zoom"]} bgColor="primary" id="what-is-cron">
        	    <Heading size={1} fit caps lineHeight={1} textColor="black">
        	        What is Cron?
        	    </Heading>
        	    <Heading size={1} fit caps>
        	         Wordpress
        	    </Heading>
        	</Slide>

        </Deck>
      </Spectacle>
    );
  }
}
