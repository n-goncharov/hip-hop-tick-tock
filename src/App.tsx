import { useState } from "react";
import Header from './components/Header'
import Main from './components/Main';

const App = () => {
  const [isMenuActive, setMenuStatus] = useState(false);

  return (
    <>
      <Header isMenuActive={isMenuActive} setMenuStatus={setMenuStatus} />
      <Main isMenuActive={isMenuActive} />
    </>
  );
}

export default App;
