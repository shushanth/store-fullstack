import { Provider } from 'react-redux';
import rootStore from './store/rootStore';
import './App.css';
import Pages from './pages/Pages';

const App = () => {
  return (
    <Provider store={rootStore}>
      <Pages data-testid="pages-component" />
    </Provider>
  );
};

export default App;
