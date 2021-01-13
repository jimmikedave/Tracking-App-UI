import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

/**ACTION FUNCTIONS */
const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to sign up with email and password

        // if we sign up, modify our state, and say that we are authenticated

        // if signing up fails, we probably need to reflect an error message
    };
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
    { signup, signin, signout },
    { isSignedIn: false }
);