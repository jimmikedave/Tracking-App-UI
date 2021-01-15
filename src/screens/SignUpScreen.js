import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = () => {
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    // automatically signs in if a token exists
    useEffect(() => {
        tryLocalSignin();
    }, [])

    return (
        <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitText="Sign Up"
            />
            <NavLink 
                routeName="SignIn"
                text="Already have an account? Sign in instead."
            />
        </View>
    )
}

// removes the header from the screen
SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false
    };
  };

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1 ,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignUpScreen;

