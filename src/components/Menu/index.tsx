import ChangeTheme from '../ChangeTheme';
import ListBox from '../ListBox';
import styles from './Menu.module.scss'
import AddTrackButton from '../AddTrackButton';
import RecordButton from '../RecordButton';
import TrackItem from '../TrackItem';

const Menu = ({ isMenuActive }: any) => {
	const timers = [
		'таймер'
	];

	const tracks = [
		{ id: 1, title: 'Замай - Лучший р...', src: 'ссылка на аудио' },
		{ id: 2, title: 'Скрипа - Я бедный', src: 'ссылка на аудио' },
		{ id: 3, title: 'Альянс - На заре', src: 'ссылка на аудио' },
	];

	let tracksItems = tracks.map((track) => (
		<TrackItem key={track.id} title={track.title} />
	));

	return (
		<aside className={`${styles.menu} ${isMenuActive ? styles.menuActive : ''}`}>
			<ChangeTheme />
			<ListBox title='Мои таймеры' buttons={[<AddTrackButton />, <RecordButton />]} />
			<ListBox title='Библиотека треков' buttons='buttons' list={tracksItems} />
		</aside>
	);
}

export default Menu;
