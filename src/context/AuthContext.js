import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            // we don't need existing state '...state'
            // reset errorMessage
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
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
        dispatch({ type: 'signin', payload: response.data.token });

        // navigate to main flow
        navigate('TrackList');
    } catch (err) {
        // if signing up fails, we probably need to reflect an error message
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const signin = (dispatch) => async ({ email, password }) => {
        try {
            // try to sign in
            const response = await trackerApi.post('/signin', { email, password }); 
            await AsyncStorage.setItem('token', response.data.token);
            // handle succes by updating state
            dispatch({ type: 'signin', payload: response.data.token });

            navigate('TrackList')
        } catch (err) {
            // handle failure by showing error message
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
        }
    };

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
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
    { signup, signin, signout, clearErrorMessage }, // action functions
    { token: null, errorMessage: '' } // initial state object // no token? not logged in
);