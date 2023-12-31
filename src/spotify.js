// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectURI = "https://ritik-bansal2662.github.io/spotify-clone/";

const clientId = "a0d0b5d1141a419f80da195f5c37c4b0"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
