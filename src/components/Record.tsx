import * as React from 'react';
import useLocalPromise from 'src/hooks/useLocalPromise';
import useToggle from '../hooks/useToggle';
import { Record } from '../services/dropbox';
import { getAlbumArtUri } from '../services/lastfm';
import './Record.css';

const RecordCompB = (record: Record) => {
    const { artist, album, rating } = record;

    const [albumArtUri, loading, error] = useLocalPromise(
        encodeURIComponent(`${artist}_${album}`),
        () => getAlbumArtUri(record),
        undefined,
        [artist, album]
    );

    const [detail, setDetail] = useToggle();

    const empty = !loading && !albumArtUri;

    const emoji: string = {
        10: '😍',
        8: '😊',
        6: '🙂',
        4: '😐'
    }[rating] || '🙂';

    return <div
        className={'Record' + (empty ? ' empty' : '')}
        onClick={setDetail}>
        {albumArtUri && <img src={albumArtUri} />}
        {(loading && !albumArtUri) && <div className="Details">
            <h1>loading</h1>
            <h2>album art</h2>
        </div>}
        {(detail || empty || error) && <div className="Details">
            <h1>{artist}</h1>
            <h2>{album}</h2>
            <span className="emoji">{emoji}</span>
        </div>}
    </div>;
};

const RecordComp = React.memo(RecordCompB);
export default RecordComp;