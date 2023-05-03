import styles from './Menu.module.scss';
import cn from "classnames";
import Toggle from '../Toggle';
import ListBox from '../ListBox';
import AddTrackButton from '../AddTrackButton';
import TrackItem from '../TrackItem';
import TimerItem from '../TimerItem';
import AddTimerButton from '../AddTimerButton';
import { FC, MutableRefObject, useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import ITimer from "../../shared/interfaces/timer";
import ITrack from "../../shared/interfaces/track";

interface IMenuProps {
	isMenuActive: boolean;
	setAddTimerModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	setEditTimerModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	timerList: ITimer[];
	setTimerList: React.Dispatch<React.SetStateAction<ITimer[]>>;
	trackList: ITrack[];
	setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
	setTimerTitle: React.Dispatch<React.SetStateAction<string>>;
	setTimerDate: React.Dispatch<React.SetStateAction<string>>;
	setTrackId: React.Dispatch<React.SetStateAction<string>>;
	setEditTimerId: React.Dispatch<React.SetStateAction<string>>;
	setTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
	audioRef: MutableRefObject<HTMLAudioElement | undefined>;
	timerIdRef: MutableRefObject<string>;
	timerDateRef: MutableRefObject<string>;
}

type SetTheme = (theme: string) => void;

interface IThemeContextType {
	theme: string;
	setTheme: SetTheme;
}

const Menu: FC<IMenuProps> = ({
	isMenuActive,
	setAddTimerModalActive,
	setEditTimerModalActive,
	timerList,
	setTimerList,
	trackList,
	setTrackList,
	setTimerTitle,
	setTimerDate,
	setTrackId,
	setEditTimerId,
	setTimerActive,
	audioRef,
	timerIdRef,
	timerDateRef
}) => {
	const openAddTimerModal = () => {
		setTimerTitle('');
		setTimerDate('');
		setTrackId('');
		setAddTimerModalActive(true);
	}

	const timerButtons = <AddTimerButton onClick={openAddTimerModal} />;

	const timers = timerList.map((timer: ITimer) => (
		<TimerItem
			key={timer.id}

			id={timer.id}
			title={timer.title}
			trackId={timer.trackId}
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
	));

	const trackButtons = (
		<AddTrackButton
			key='addTrackButton'
			setTrackList={setTrackList}
		/>
	);

	const tracks = trackList.map((track: ITrack) => (
		<TrackItem
			key={track.id}
			id={track.id}
			title={track.title}
			src={track.src}
			setTrackList={setTrackList}
		/>
	));

	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<aside className={cn(styles.menu, { [styles.menuActive]: isMenuActive })}>

			<Toggle
				onClick={() => {
					if (theme === themes.light) {
						toggleTheme(themes.dark);
					} else {
						toggleTheme(themes.light);
					}
				}}
				theme={theme}
				themes={themes}
			/>


			<ListBox
				title='Мои таймеры'
				buttons={timerButtons}
				items={timers}
			/>

			<ListBox
				title='Библиотека треков'
				buttons={trackButtons}
				items={tracks}
			/>
		</aside>
	);
};

export default Menu;
