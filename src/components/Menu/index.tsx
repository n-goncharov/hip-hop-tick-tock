import ChangeTheme from '../ChangeTheme';
import styles from './Menu.module.scss'

const Menu = ({ isMenuActive }: any) => {
	return (
		<aside className={`${styles.menu} ${isMenuActive ? styles.menuActive : ''}`}>
			<ChangeTheme />
		</aside>
	);
}

export default Menu;
