import React, {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }} >
                {children}
            </Context.Provider>
        )
    };

    // Provider = component that makes all our data available
    // Context = context object we're going to use to access the available data
    return { Context, Provider }
};