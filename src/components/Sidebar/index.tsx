import ChangeTheme from '../ChangeTheme';
import styles from './Sidebar.module.scss'

function Sidebar () {
	return (
		<aside className={styles.sidebar}>
			<ChangeTheme />
		</aside>
	);
}

export default Sidebar;
