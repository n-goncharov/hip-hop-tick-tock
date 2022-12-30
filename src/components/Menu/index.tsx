import ChangeTheme from '../ChangeTheme';
import styles from './Menu.module.scss'

const Sidebar = ({ isMenuActive }: any) => {
	return (
		<aside className={isMenuActive ? styles.menu : `${styles.menu} ${styles.unactive}`}>
			<ChangeTheme />
		</aside>
	);
}

export default Sidebar;
