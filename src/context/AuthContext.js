import { AsyncStorage } from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
            case 'signup':
                // we don't need existing state '...state'
                // reset errorMessage
                return {errorMessage: '', token: action.payload} 
        default:
            return state;
    }
};

/**ACTION FUNCTIONS */
const signup = (dispatch) => async ({ email, password }) => {
    try {
        // make api request to sign up with email and password
        const response = await trackerApi.post('/signup', { email, password });
        // if we sign up, modify our state, and say that we are authenticated
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token })
    } catch (err) {
        // if signing up fails, we probably need to reflect an error message
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to sign in

        // handle succes by updating state

        // handle failure by showing error message
    };
};

const signout = (dispatch) => {
    return ({ email, password }) => {
        // sign user out

        // handle success by updating state

        // handle failure by showing error message

    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout }, // action functions
    { token: null, errorMessage: '' } // initial state object // no token? not logged in
);