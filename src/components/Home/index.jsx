import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Home = () => (
	<div className="container">
		<Header />
		<div className="content"></div>
		<Footer />
	</div>
);

const mapStateToProps = (state) => ({
	data: state.app.home.index,
});

export default connect(mapStateToProps, null)(withRouter(Home));
