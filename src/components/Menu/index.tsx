import styles from './Menu.module.scss';
import cn from "classnames";
import Toggle from '../Toggle';
import ListBox from '../ListBox';
import AddTrackButton from '../AddTrackButton';
import RecordButton from '../RecordButton';
import TrackItem from '../TrackItem';
import TimerItem from '../TimerItem';
import AddTimerButton from '../AddTimerButton';
import { memo, useMemo, useRef } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

const Menu = memo(({ isMenuActive, setTrackModalActive, setAddTimerModalActive, setEditTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerTitle, setTimerDate, setTrackId, setEditTimerId, setTimerActive, audioRef, timerIdRef, timerDateRef }: any) => {
	const openAddTimerModal = () => {
		setTimerTitle('');
		setTimerDate('');
		setTrackId('');
		setAddTimerModalActive(true);
	}

	const timerButtons = useRef(
		<AddTimerButton onClick={openAddTimerModal} />
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

			setTimerActive={setTimerActive}
			audioRef={audioRef}

			timerIdRef={timerIdRef}
			timerDateRef={timerDateRef}
		/>
	)), [timerList]);

	const trackButtons = useRef([
		<AddTrackButton
			key='addTrackButton'
			setTrackList={setTrackList}
		/>,

		<RecordButton
			key='recordButton'
			onClick={() => setTrackModalActive(true)}
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

			<ThemeContext.Consumer>
				{({ theme, setTheme }: any) => (
					<Toggle
						onChange={() => {
							if (theme === themes.light) {
								setTheme(themes.dark);
							} else {
								setTheme(themes.light);
							}
						}}
						theme={theme}
						themes={themes}
					/>
				)}
			</ThemeContext.Consumer>

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
