import * as r from "request-promise-native";
import { fileUri } from '../secret';

export interface Record {
    readonly date: Date;
    readonly artist: string;
    readonly album: string;
    readonly rating: number;
}

export async function getRecords(): Promise<Record[]> {
    const response: string = await r.get(fileUri);
    return response
        .split('\n')
        .map(line => line.split(','))
        .map(([date, artist, album, rating]) => ({
            album,
            artist,
            date: new Date(Date.parse(date)),
            rating: Number(rating),
        }));
}