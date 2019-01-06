import * as r from "request-promise-native";
import { lastFmToken } from '../secret';
import { Record } from './dropbox';

export async function getAlbumArtUri({ artist, album }: Record): Promise<string | undefined> {
    const eArtist = encodeURIComponent(artist);
    const eAlbum = encodeURIComponent(album);
    const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo` +
        `&api_key=${lastFmToken}&artist=${eArtist}&album=${eAlbum}&autocorrect=1&format=json`;

    let response: any;
    try {
        response = JSON.parse(await r.get(apiUrl));
    } catch (err) {
        return undefined;
    }

    if (response.error) {
        return undefined;
    } else {
        const imgs = response.album.image;
        const bestImage = imgs[imgs.length - 1]['#text'];
        return bestImage || undefined;
    }
}