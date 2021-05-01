export function manageFriends(state = [], action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return ({
                ...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]
            })
        case 'REMOVE_FRIEND':
            const removeFriendId = state.friends.findIndex( friend => friend.id === action.id )
            return (
                {...state,
                friends: [
                    ...state.friends.slice(0, removeFriendId),
                    ...state.friends.slice(removeFriendId + 1)
                ]}
            )
        default:
            return state;
    }
}
