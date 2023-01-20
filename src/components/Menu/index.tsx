import styles from './Menu.module.scss';
import cn from "classnames";
import ChangeTheme from '../ChangeTheme';
import ListBox from '../ListBox';
import AddTrackButton from '../AddTrackButton';
import RecordButton from '../RecordButton';
import TrackItem from '../TrackItem';
import TimerItem from '../TimerItem';
import AddTimerButton from '../AddTimerButton';

const Menu = ({ isMenuActive, showTrackModal, showTimerModal, timerList, setTimerList, trackList, setTrackList }: any) => {
	return (
		<aside className={cn(styles.menu, { [styles.menuActive]: isMenuActive })}>

			<ChangeTheme />

			<ListBox
				title='Мои таймеры'
				buttons={
					<AddTimerButton showModal={showTimerModal} />
				}
			>
				{timerList.map((timer: any) => (
					<TimerItem
						key={timer.id}
						id={timer.id}
						title={timer.title}
						setTimerList={setTimerList}
						showModal={showTimerModal}
					/>
				))}
			</ListBox>

			<ListBox
				title='Библиотека треков'
				buttons={
					[
						<AddTrackButton
							key='add-track-button'
							setTrackList={setTrackList}
						/>,
						<RecordButton
							key='record-button'
							showModal={showTrackModal}
						/>
					]
				}
			>
				{trackList.map((track: any) => (
					<TrackItem
						key={track.id}
						id={track.id}
						title={track.title}
						src={track.src}
						setTrackList={setTrackList}
					/>
				))}
			</ListBox>
		</aside>
	);
}

export default Menu;
