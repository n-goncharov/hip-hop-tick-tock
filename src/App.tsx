import { useEffect, useRef, useState } from "react";
import Header from './components/Header';
import Main from './components/Main';
import AddTimerModal from "./components/AddTimerModal";
import EditTimerModal from "./components/EditTimerModal";
import RecordTrackModal from "./components/RecordTrackModal";

const App = () => {
  useEffect(() => {
    // console.log('App');
  });

  const [isMenuActive, setMenuStatus] = useState(false);

  const [isAddTimerModalActive, setAddTimerModalActive] = useState(false);
  const [isEditTimerModalActive, setEditTimerModalActive] = useState(false);
  const [isTrackModalActive, setTrackModalActive] = useState(false);

  const [timerList, setTimerList] = useState<any[]>([]);
  const [trackList, setTrackList] = useState<any[]>([]);

  const [timerTitle, setTimerTitle] = useState<string>('');
  const [timerDate, setTimerDate] = useState<string | number | readonly string[]>('');
  const [trackId, setTrackId] = useState<string>('');

  const [editTimerId, setEditTimerId] = useState('');

  useEffect(() => {
    const openRequest = indexedDB.open("db", 1);

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;

      if (!db.objectStoreNames.contains('tracks')) {
        db.createObjectStore('tracks');
      }

      if (!db.objectStoreNames.contains('timers')) {
        db.createObjectStore('timers');
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
      };

      const timers = transactionTimer.objectStore("timers");
      const requestTimers = timers.getAll();
      requestTimers.onsuccess = () => {
        setTimerList(requestTimers.result);
      };
    };
  }, []);

  const [isTimerActive, setTimerActive] = useState(false);

  let audio = useRef<HTMLAudioElement>();

  const stopAudio = () => {
    audio.current?.pause();
  };

  return (
    <>
      <Header
        isMenuActive={isMenuActive}
        setMenuStatus={setMenuStatus}
      />

      <Main
        isMenuActive={isMenuActive}

        setTrackModalActive={setTrackModalActive}
        setAddTimerModalActive={setAddTimerModalActive}
        setEditTimerModalActive={setEditTimerModalActive}

        timerList={timerList}
        setTimerList={setTimerList}

        trackList={trackList}
        setTrackList={setTrackList}

        setTimerTitle={setTimerTitle}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}

        setEditTimerId={setEditTimerId}

        isTimerActive={isTimerActive}
        setTimerActive={setTimerActive}

        audio={audio}
        stopAudio={stopAudio}
      />

      <AddTimerModal
        title='Добавить таймер'

        isModalActive={isAddTimerModalActive}
        setModalActive={setAddTimerModalActive}

        setTimerList={setTimerList}

        trackList={trackList}

        timerTitle={timerTitle}
        timerDate={timerDate}
        trackId={trackId}

        setTimerTitle={setTimerTitle}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}
      />

      <EditTimerModal
        title='Отредактировать таймер'

        isModalActive={isEditTimerModalActive}
        setModalActive={setEditTimerModalActive}

        setTimerList={setTimerList}

        trackList={trackList}

        timerTitle={timerTitle}
        timerDate={timerDate}
        trackId={trackId}

        setTimerTitle={setTimerTitle}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}

        editTimerId={editTimerId}

        setTimerActive={setTimerActive}
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
