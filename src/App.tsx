import * as React from "react";
import "./App.css";
import Record from './components/Record';
import useLocalPromise from './hooks/useLocalPromise';
import useToggle from './hooks/useToggle';
import { getRecords } from './services/dropbox';

const App = () => {
  const [records] = useLocalPromise("records", () => getRecords(), [], []);

  const [best, setBest] = useToggle();
  const [great, setGreat] = useToggle();
  const [good, setGood] = useToggle();
  const [fair, setFair] = useToggle();

  const filteredRecords = React.useMemo(() => {
    return records.map(({ album, artist, date, rating }) =>
      ({
        album, artist, date, rating, show:
          (!best && !great && !good && !fair) ||
          (best && rating >= 8.1) ||
          (great && rating >= 6.1 && rating < 8.1) ||
          (good && rating >= 4.1 && rating < 6.1) ||
          (fair && rating < 4.1)
      }));
  }, [best, great, good, fair, records]);

  return <div className='App'>
    <header>
      <h1>albums of 2019</h1>
      <span className={best && 'active' || ''} onClick={setBest}>😍</span>
      <span className={great && 'active' || ''} onClick={setGreat}>😊</span>
      <span className={good && 'active' || ''} onClick={setGood}>🙂</span>
      <span className={fair && 'active' || ''} onClick={setFair}>😐</span>
    </header>
    <div className='Records'>
      {filteredRecords.map(record =>
        <div key={record.artist + record.album} className={record.show ? 'show' : 'hide'}>
          <Record
            {...record}
          />
        </div>)}
    </div>
  </div>;
};

export default App;
