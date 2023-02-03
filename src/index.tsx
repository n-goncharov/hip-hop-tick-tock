import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from './components/Root';
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);
