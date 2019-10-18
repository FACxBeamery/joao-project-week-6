import React from "react";
import styles from "./Header.module.css";

const Header = ({ points }) => {
	return (
		<header className={styles.header}>
			<h1 style={{ margin: 0, fontSize: "3rem" }}>Trivia craze</h1>
		</header>
	);
};

export default Header;
