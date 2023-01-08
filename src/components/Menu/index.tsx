import styles from './Menu.module.scss'
import ChangeTheme from '../ChangeTheme';
import ListBox from '../ListBox';
import AddTrackButton from '../AddTrackButton';
import RecordButton from '../RecordButton';
import TrackItem from '../TrackItem';
import TimerItem from '../TimerItem';
import AddTimerButton from '../AddTimerButton';

const Menu = ({ isMenuActive }: any) => {
	const timers = [
		{ id: 1, title: 'Утро', src: 'ссылка на аудио' },
		{ id: 2, title: 'Похавать', src: 'ссылка на аудио' },
		{ id: 3, title: 'Иди в военкомат', src: 'ссылка на аудио' },
	];

	const tracks = [
		{ id: 1, title: 'Замай - Лучший рэпер вселенной', src: 'ссылка на аудио' },
		{ id: 2, title: 'Скрипа - Я бедный', src: 'ссылка на аудио' },
		{ id: 3, title: 'Альянс - На заре', src: 'ссылка на аудио' },
	];

	return (
		<aside className={`${styles.menu} ${isMenuActive ? styles.menu_active : ''}`}>
			<ChangeTheme />

			<ListBox title='Мои таймеры' buttons={<AddTimerButton />}>
				{timers.map(timer => (
					<TimerItem key={timer.id} title={timer.title} />
				))}
			</ListBox>

			<ListBox title='Библиотека треков' buttons={[<AddTrackButton key='add-track-button' />, <RecordButton key='record-button' />]}>
				{tracks.map(track => (
					<TrackItem key={track.id} title={track.title} />
				))}
			</ListBox>
		</aside>
	);
}

export default Menu;
