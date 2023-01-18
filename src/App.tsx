import { useState } from "react";
import AddTimerModal from "./components/AddTimerModal";
import Header from './components/Header';
import Main from './components/Main';
import RecordTrackModal from "./components/RecordTrackModal";

const App = () => {
  const [isMenuActive, setMenuStatus] = useState(false);
  const [isTrackModalOpen, setTrackModalOpen] = useState(false);
  const [isTimerModalOpen, setTimerModalOpen] = useState(false);
  const [timerList, updateTimerList] = useState<{ id: string, title: string, audio_id: string }[]>([]);

  return (
    <>
      <Header
        isMenuActive={isMenuActive}
        setMenuStatus={setMenuStatus}
      />

      <Main
        isMenuActive={isMenuActive}
        showTrackModal={() => setTrackModalOpen(true)}
        showTimerModal={() => setTimerModalOpen(true)}
        timerList={timerList}
        updateTimerList={updateTimerList}
      />

      <AddTimerModal
        isModalOpen={isTimerModalOpen}
        closeModal={() => setTimerModalOpen(false)}
        title='Выставить новый таймер'
        timerList={timerList}
        updateTimerList={updateTimerList}
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
