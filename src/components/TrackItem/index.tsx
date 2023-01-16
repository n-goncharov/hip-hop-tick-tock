import styles from './Track.module.scss'
import ListItem from "../ListItem";

const TrackItem = ({ id, title, src, handleRemove }: any) => {
	return (
		<>
			<div className={styles.track}>
				<ListItem
					title={title}
					id={id}
					handleRemove={handleRemove}
				/>
				<audio className={styles.audio} src={src} controls ></audio>
			</div>
		</>
	);
}

export default TrackItem;
