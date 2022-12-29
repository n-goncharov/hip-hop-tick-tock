import ChangeTheme from '../ChangeTheme';
import styles from './Sidebar.module.scss'

function Sidebar () {
	return (
		<div className={styles.sidebar}>
			<ChangeTheme />
		</div>
	);
}

export default Sidebar;
