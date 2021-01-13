import { NavigationActions } from 'react-navigation';

let navigator;

// prop in App.j
// called with a function to set navigator
export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    // tell navigator that we want to change its state
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};