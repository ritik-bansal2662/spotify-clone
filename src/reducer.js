export const initialState = {
    user: null,
    playlist: [],
    item: null,
    playing: false,
    // token: "BQDs_JWe26LQMxJ-Lj9n2NEX71kNbIpE6wul0CVj31maw-Sq13hatyk8-65aBBpU4CYF2vBQ1RiysDyfc6g8IIZ05KvslG9ct6_IUl2BqvSeSqiJz4XkhSYzxEWizHulAFHpaflvBNOe-avcCKoS1kAwNFulGDU5QLVLkqxwTBY5lfxccoRsSZe9Cr5gI-ok5hfnT6xcSb8efOajcEWc",
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state
    }
}

export default reducer
