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
	city_01: require("../assets/nyc_01.jpg"),
	city_02: require("../assets/nyc_02.jpg"),
	city_03: require("../assets/nyc_03.jpg"),
	city_04: require("../assets/nyc_04.jpg"),
	edit_post: require("../assets/edit_post.jpg"),
	edit_post_zoomed: require("../assets/edit_post_zoomed.jpg"),
	edit_flow: require("../assets/edit_flow.jpg"),
	edit_flow_extras: require("../assets/edit_flow_extras.jpg"),
	confirm_publish_post: require("../assets/confirm_publish_post.jpg"),
	ntp_diagram: require("../assets/ntp_diagram.jpg"),
	scheduled_for: require("../assets/scheduledfor.jpg"),
	scheduling_post: require("../assets/scheduling.jpg"),
	wp_cron_trac: require("../assets/wp_cron_trac.jpg"),
	dif_time_servers: require("../assets/dif_time_servers.jpg"),
	nist_time_servers: require("../assets/nist_time_servers.jpg"),
	publish_notifications: require("../assets/publish_notifications.jpg"),
	editorial_metabox: require("../assets/editorial_metabox.jpg"),
};

const gifs = {
	is_it_ready: require("../assets/is_it_ready_yet.gif"),
	classic: require("../assets/classic.gif"),
	loop_factory: require("../assets/loop_factory.gif"),
	loop_mouse: require("../assets/loop_mouse.gif"),
	loop_bb8: require("../assets/loop_bb8.gif"),
	loop_simpsons_honking: require("../assets/loop_simpsons_honking.gif"),
	loop_wargames: require("../assets/loop_wargames.gif"),
	loop_zoidberg: require("../assets/loop_zoidberg_blinking_futurama.gif"),
	loop_houses: require("../assets/loop_houses.gif"),
	ready_for_this: require("../assets/ready_for_this.gif"),
	pass_out: require("../assets/pass_out.gif"),
	time_is_abstract: require("../assets/time_is_abstract.gif"),
	frantic: require("../assets/frantic.gif"),
	timelord: require("../assets/timelord.gif"),
	whats_happening: require("../assets/whats_happening.gif"),
	waiting: require("../assets/waiting.gif"),
}

preloader(images);

const theme = createTheme({
	// primary: "#ff4081"
	// primary: "#CC3300"
	// primary: "#0099CC"
	// primary: "#996699"
	primary: "#3D72A4",
	purple: "#673AB7",
	light_blue: "#3D72A4",
	light_grey: "#e6e6e6",
	dark_grey: "#464646",
	black: "#111111",
	white: "#fff",
});


export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["zoom", "slide"]} transitionDuration={500}>

					<Slide transition={["zoom"]} bgColor="primary" id="welcome" bgImage={images.city_01.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} bold textColor="purple">
								A thorough explanation of
							</Heading>
							<Heading size={1} caps lineHeight={1} textColor="white">
								How WordPress
							</Heading>
							<Heading size={1} fit caps lineHeight={1} textColor="light_grey">
									 schedules Automatic Posts
							</Heading>
					</Slide>



					<Slide transition={["fade"]} bgColor="light_blue" bgImage={images.city_04.replace("/", "")}>
							<Heading size={1} caps textColor="white" textFont="primary">
								Context
							</Heading>
							<Layout>
									<Fill>
											<Image transition={["fade", "zoom"]} src={images.scheduling_post.replace("/", "")} margin="36px 8px 0" />
									</Fill>
									<Fill>
											<Image transition={["fade", "zoom"]} src={images.scheduled_for.replace("/", "")} margin="36px 8px 0" />
									</Fill>
							</Layout>
					</Slide>

					<Slide transition={["fade"]} bgColor="light_blue" bgImage={images.city_04.replace("/", "")}>
							<Heading size={1} caps textColor="white" textFont="primary">
								Expectations
							</Heading>
					</Slide>

					<Slide transition={["fade"]} bgImage={images.city_04.replace("/", "")}>
						<Image transition={["fade"]} src={gifs.time_is_abstract.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgColor="white" bgImage={images.city_04.replace("/", "")}>
						<Layout bgColor="white">
							<Fill>
								<Heading size={1} fit caps lineHeight={1} textColor="white">
									Network Time Protocol (NTP)
								</Heading>
								<Text textColor="" lineHeight={1.25} textSize={32}  padding="18px" bgColor="white">
									is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. (<Link textColor="primary" href="https://en.wikipedia.org/wiki/Network_Time_Protocol">ref</Link>)
								</Text>
							</Fill>
							<Fill>
								<Image transition={["fade"]} src={images.ntp_diagram.replace("/", "")} height="280" />
							</Fill>
						</Layout>
					</Slide>

					<Slide transition={["fade"]} bgImage={images.city_04.replace("/", "")}>
						<Heading size={1} fit caps lineHeight={1} textColor="white">
							NIST Time Servers
						</Heading>
						<Image transition={["fade"]} src={images.nist_time_servers.replace("/", "")} width="100%" />
						<Text textAlign="right" lineHeight={0.25} textSize={0.5}>
							<Link textColor="white" href="http://tf.nist.gov/tf-cgi/servers.cgi">url</Link>
						</Text>
					</Slide>

					<Slide transition={["fade"]} bgImage={images.city_04.replace("/", "")}>
						<Heading size={1} fit caps lineHeight={1} textColor="white">
							Desktop at Home
						</Heading>
						<Image transition={["fade"]} src={images.dif_time_servers.replace("/", "")} width="100%" />
					</Slide>






					<Slide transition={["fade"]} bgColor="light_blue">
						<Image transition={["fade"]} src={images.edit_post.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgColor="primary">
							<Heading size={1} caps lineHeight={1} textColor="white">❄️</Heading>
							<Heading size={1} fit caps lineHeight={1} textColor="white">Custom Workflows</Heading>
							<Text textColor="light_grey" bold>
								Occasionally clients will use plugins or custom functionality in the theme to achieve their desired workflow
							</Text>
					</Slide>

					<Slide transition={["fade"]} bgColor="light_blue">
						<Image transition={["fade", "zoom"]} src={images.confirm_publish_post.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgImage={images.city_04.replace("/", "")}>
						<Heading size={1} fit caps lineHeight={1} textColor="white">
							Enter Edit Flow
						</Heading>
						<Image transition={["fade"]} src={images.edit_flow.replace("/", "")} width="100%" />
						<Text textAlign="right" lineHeight={0.25} textSize={0.5}>
							<Link textColor="white" href="http://editflow.org/">plugin homepage</Link>
						</Text>
					</Slide>

					<Slide transition={["fade"]} bgImage={images.city_04.replace("/", "")}>
						<Image transition={["fade", "zoom"]} src={images.edit_flow_extras.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgColor="light_blue">
						<Image transition={["fade", "zoom"]} src={images.edit_post_zoomed.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgImage={gifs.waiting.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									What we expect
							</Heading>
					</Slide>


					<Slide transition={["fade"]} bgColor="primary">
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									WordPress Default Behavior
							</Heading>
							<Image transition={["fade", "zoom"]} src={images.wp_cron_trac.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgColor="primary">
							<Heading size={1} fit caps lineHeight={1} textColor="black">

							</Heading>
							<Image transition={["fade", "zoom"]} src={images.wp_cron_trac.replace("/", "")} width="100%" />
					</Slide>

					<Slide transition={["fade"]} bgColor="primary">
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									What is a Cron job?
							</Heading>
							<Text textColo="white" lineHeight={1.25}>
								is a Linux utility which schedules a command or script on your server to run automatically at a specified time and date.
							</Text>
					</Slide>

					<Slide transition={["fade"]} bgColor="primary">
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									Low Traffic v.s. High Traffic
							</Heading>
					</Slide>



					<Slide transition={["fade"]} bgImage={gifs.loop_factory.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									Reality
							</Heading>
					</Slide>


					<Slide transition={["fade"]} bgImage={gifs.loop_simpsons_honking.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} textColor="white">
									Pantheon
							</Heading>
					</Slide>

					<Slide transition={["fade"]} bgImage={gifs.loop_simpsons_honking.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} textColor="white">
									VIP Classic
							</Heading>
					</Slide>

					<Slide transition={["fade"]} bgImage={gifs.loop_bb8.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									VIP Go
							</Heading>
					</Slide>

					<Slide transition={["fade"]} bgImage={gifs.loop_wargames.replace("/", "")}>
							<Heading size={1} fit caps lineHeight={1} textColor="black">
									3rd Party Services
							</Heading>

					</Slide>


					<Slide transition={["fade"]}  bgImage={gifs.loop_houses.replace("/", "")}>
						<Heading size={1} fit caps lineHeight={1} textColor="white">
								Thank you
						</Heading>
					</Slide>

					<Slide transition={["fade"]} bgImage={gifs.loop_houses.replace("/", "")}>
						<Heading size={1} fit caps lineHeight={1} textColor="white">
								Any Questions?
						</Heading>
					</Slide>


				</Deck>
			</Spectacle>
		);
	}
}
