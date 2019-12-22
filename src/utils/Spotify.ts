import RecentTrack from '../api/RecentTrack';

enum Endpoints {
    Authorize = 'https://accounts.spotify.com/authorize?',

    RandomPic = '/api/Spotify/GetRandomPicture?',
    Recent = '/api/Spotify/GetRecent?',
    GetNewPlaylist = '/api/Spotify/GetNewPlaylist?',
    CreatePlaylist = '/api/Spotify/CreatePlaylist?',
}

export default class Spotify {
    private static readonly baseUrl = 'https://spot-the-playlist.herokuapp.com';
    public static readonly redirectUri = Spotify.baseUrl + '/auth-success';
    private static readonly clientId = '1b35587a25184c8abd7d16856effe095';
    private static readonly scope = [
        'user-read-playback-state',
        'user-library-read',
        'user-read-recently-played',
        'playlist-modify-private',
    ];

    static readonly AuthLink =
        Endpoints.Authorize
        + 'client_id=' + Spotify.clientId
        + '&redirect_uri=' + Spotify.redirectUri
        + '&response_type=token'
        + '&scope=' + Spotify.scope.join(' ');

    Token: string;

    constructor(token: string) {
        if (!token) throw new Error('empty token!');

        this.Token = token;
    }

    async get(url: string | Endpoints) {
        const resp = await fetch(Spotify.baseUrl + url + 'token=' + this.Token);
        const json = await resp.json();
        return json;
    }

    post(url: string | Endpoints, data?: any) {
        // return axios.post(Spotify.baseUrl + url + 'token=' + this.Token, data);
        return {}
    }

    async getRandomBackgroundUrl(): Promise<string | null> {
        const data = await this.get(Endpoints.RandomPic);

        if (!data || !data.backgroundUrl) return null;

        return data.backgroundUrl;
    }

    async getRecentTracks(): Promise<RecentTrack[]> {
        const data = await this.get(Endpoints.Recent);

        if (!data || !data.Tracks) return [];

        return data.Tracks;
    }

    async getNewPlaylist(): Promise<any[]> {
        const data = await this.get(Endpoints.GetNewPlaylist);

        if (!data || !data.Tracks) return [];

        return data.Tracks;
    }

    async createPlaylist(trackIds: string[], playlistName?: string): Promise<any> {
        // const data = await this.post(Endpoints.CreatePlaylist, {trackIds, playlistName});

        // return data;
    }
}