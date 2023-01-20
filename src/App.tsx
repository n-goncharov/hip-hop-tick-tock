import { useEffect, useState } from "react";
import AddTimerModal from "./components/AddTimerModal";
import Header from './components/Header';
import Main from './components/Main';
import RecordTrackModal from "./components/RecordTrackModal";

const App = () => {
  const [isMenuActive, setMenuStatus] = useState(false);
  const [isTrackModalOpen, setTrackModalOpen] = useState(false);
  const [isTimerModalOpen, setTimerModalOpen] = useState(false);
  const [timerList, setTimerList] = useState<any[]>([]);
  const [trackList, setTrackList] = useState<any[]>([]);

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
        setMenuStatus={() => setMenuStatus((isMenuActive) => !isMenuActive)}
      />

      <Main
        isMenuActive={isMenuActive}
        showTrackModal={() => setTrackModalOpen(true)}
        showTimerModal={() => setTimerModalOpen(true)}
        timerList={timerList}
        setTimerList={setTimerList}
        trackList={trackList}
        setTrackList={setTrackList}
      />

      <AddTimerModal
        isModalOpen={isTimerModalOpen}
        closeModal={() => setTimerModalOpen(false)}
        title='Выставить новый таймер'
        setTimerList={setTimerList}
        trackList={trackList}
      />

      <RecordTrackModal
        isModalOpen={isTrackModalOpen}
        closeModal={() => setTrackModalOpen(false)}
        title='Записать свой звук'
      />
    </>
  );
}

export default App;
