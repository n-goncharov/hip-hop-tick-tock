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

const Menu = memo(({ isMenuActive, setTrackModalActive, setTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerName, setTimerDate, setTrackId }: any) => {
	useEffect(() => {
		console.log('Menu');
	});

	const timerButtons = useRef(<AddTimerButton setModalOpen={setTimerModalActive} />);

	const timers = useMemo(() => timerList.map((timer: any) => (
		<TimerItem
			key={timer.id}
			id={timer.id}
			title={timer.title}
			setTimerList={setTimerList}
			setModalActive={setTimerModalActive}
			setTimerName={setTimerName}
			setTimerDate={setTimerDate}
			setTrackId={setTrackId}
		/>
	)), [timerList]);

	const trackButtons = useRef([
		<AddTrackButton
			key='add-track-button'
			setTrackList={setTrackList}
		/>,
		<RecordButton
			key='record-button'
			setModalOpen={setTrackModalActive}
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
