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
        album, artist, date: new Date(Date.parse(date as any) + 1000 * 60 * 60 * 9), rating, show:
          (!best && !great && !good && !fair) ||
          (best && rating >= 8.1) ||
          (great && rating >= 6.1 && rating < 8.1) ||
          (good && rating >= 4.1 && rating < 6.1) ||
          (fair && rating < 4.1)
      }));
  }, [best, great, good, fair, records]);

  const groupedRecords = React.useMemo(() => {
    return filteredRecords.reduce((acc, elem) => {
      const month = elem.date.getMonth();
      const monthName = elem.date.toLocaleString('en-us', { month: 'long' });
      if (acc[month] === undefined) {
        acc[month] = { [monthName]: [] };
      }
      acc[month][monthName].push(elem);
      return acc;
    }, [] as Array<{ [month: string]: typeof filteredRecords }>).reverse();
  }, [filteredRecords]);

  return <div className='App'>
    <header>
      <h1>albums of 2019</h1>
      <span className={best && 'active' || ''} onClick={setBest}>😍</span>
      <span className={great && 'active' || ''} onClick={setGreat}>😊</span>
      <span className={good && 'active' || ''} onClick={setGood}>🙂</span>
      <span className={fair && 'active' || ''} onClick={setFair}>😐</span>
    </header>
    {groupedRecords.map(group => Object.keys(group).map(monthName => (
      <>
        <h2>{monthName} ({group[monthName].filter(record => record.show).length})</h2>
        <div className='Records'>
          {group[monthName].map(record =>
          <div key={record.artist + record.album} className={record.show ? 'show' : 'hide'}>
            <Record
              {...record}
            />
          </div>)}
        </div>
      </>
    )))}
  </div>;
};

export default App;
