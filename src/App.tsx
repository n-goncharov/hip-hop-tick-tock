import { useEffect, useState } from "react";
import AddTimerModal from "./components/AddTimerModal";
import Header from './components/Header';
import Main from './components/Main';
import RecordTrackModal from "./components/RecordTrackModal";

const App = () => {
  useEffect(() => {
    console.log('App');
  });

  const [isMenuActive, setMenuStatus] = useState(false);

  const [isTrackModalActive, setTrackModalActive] = useState(false);
  const [isTimerModalActive, setTimerModalActive] = useState(false);

  const [timerList, setTimerList] = useState<any[]>([]);
  const [trackList, setTrackList] = useState<any[]>([]);

  const [timerName, setTimerName] = useState<string>('');
	const [timerDate, setTimerDate] = useState<string | number | readonly string[]>('');
	const [trackId, setTrackId] = useState<string>('');

  useEffect(() => {
    const openRequest = indexedDB.open("db", 1);

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;

      if (!db.objectStoreNames.contains('tracks')) {
        db.createObjectStore('tracks', { keyPath: 'id' });
      }

      if (!db.objectStoreNames.contains('timers')) {
        db.createObjectStore('timers', { keyPath: 'id' });
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const transactionTrack = db.transaction("tracks", "readwrite");
      const transactionTimer = db.transaction("timers", "readwrite");

      const tracks = transactionTrack.objectStore("tracks");
      const requestTracks = tracks.getAll();
      requestTracks.onsuccess = () => {
        setTrackList(requestTracks.result);
      }

      const timers = transactionTimer.objectStore("timers");
      const requestTimers = timers.getAll();
      requestTimers.onsuccess = () => {
        setTimerList(requestTimers.result);
      }
    }
  }, []);

  return (
    <>
      <Header
        isMenuActive={isMenuActive}
        setMenuStatus={setMenuStatus}
      />

      <Main
        isMenuActive={isMenuActive}
        setTrackModalActive={setTrackModalActive}
        setTimerModalActive={setTimerModalActive}
        timerList={timerList}
        setTimerList={setTimerList}
        trackList={trackList}
        setTrackList={setTrackList}
        setTimerName={setTimerName}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}
      />

      <AddTimerModal
        title='Выставить новый таймер'
        isModalActive={isTimerModalActive}
        setModalActive={setTimerModalActive}
        setTimerList={setTimerList}
        trackList={trackList}
        timerName={timerName}
        timerDate={timerDate}
        trackId={trackId}
        setTimerName={setTimerName}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}
      />

      <RecordTrackModal
        title='Записать свой звук'
        isModalActive={isTrackModalActive}
        setModalActive={setTrackModalActive}
      />
    </>
  );
}

export default App;
