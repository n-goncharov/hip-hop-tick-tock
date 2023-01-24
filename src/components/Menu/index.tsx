import styles from './Menu.module.scss';
import cn from "classnames";
import ChangeTheme from '../ChangeTheme';
import ListBox from '../ListBox';
import AddTrackButton from '../AddTrackButton';
import RecordButton from '../RecordButton';
import TrackItem from '../TrackItem';
import TimerItem from '../TimerItem';
import AddTimerButton from '../AddTimerButton';
import { memo, useEffect, useMemo, useRef } from 'react';

const Menu = memo(({ isMenuActive, setTrackModalActive, setAddTimerModalActive, setEditTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerTitle, setTimerDate, setTrackId, setEditTimerId }: any) => {
	useEffect(() => {
		// console.log('Menu');
	});

	const timerButtons = useRef(
		<AddTimerButton setModalActive={setAddTimerModalActive} />
	);

	const timers = useMemo(() => timerList.map((timer: any) => (
		<TimerItem
			key={timer.id}

			id={timer.id}
			title={timer.title}
			trackId={timer.track_id}
			date={timer.date}

			setTimerList={setTimerList}

			setModalActive={setEditTimerModalActive}

			setTimerTitle={setTimerTitle}
			setTimerDate={setTimerDate}
			setTrackId={setTrackId}

			setEditTimerId={setEditTimerId}
		/>
	)), [timerList]);

	const trackButtons = useRef([
		<AddTrackButton
			key='addTrackButton'
			setTrackList={setTrackList}
		/>,

		<RecordButton
			key='recordButton'
			setModalActive={setTrackModalActive}
		/>
	]);

	const tracks = useMemo(() => trackList.map((track: any) => (
		<TrackItem
			key={track.id}
			id={track.id}
			title={track.title}
			src={track.src}
			setTrackList={setTrackList}
		/>
	)), [trackList]);

	return (
		<aside className={cn(styles.menu, { [styles.menuActive]: isMenuActive })}>

			<ChangeTheme />

			<ListBox
				title='Мои таймеры'
				buttons={timerButtons.current}
				items={timers}
			/>

			<ListBox
				title='Библиотека треков'
				buttons={trackButtons.current}
				items={tracks}
			/>
		</aside>
	);
});

export default Menu;
