import React from "react";
import styles from "./Header.module.css";

const Header = ({ configDetails }) => {
	return (
		<header className={styles.header}>
			<h1 style={{ margin: 0, fontSize: "3rem" }}>Trivia craze</h1>
			{configDetails.userName ? (
				<h3
					style={{
						margin: "0",
						fontSize: "3rem",
						background: "white"
					}}
				>
					Hey, {configDetails.userName} !
				</h3>
			) : null}
		</header>
	);
};

export default Header;
