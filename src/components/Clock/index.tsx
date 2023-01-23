import { memo, useEffect } from "react";
import styles from "./Clock.module.scss"

const Clock = memo(() => {
	useEffect(() => {
		console.log('Clock');
	});

	return (
		<div></div>
	);
});

export default Clock;
