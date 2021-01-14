import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SignInScreen = () => {
    const { state, signin } = useContext(Context);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In To Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitText="Sign In"
            />
            <NavLink 
                routeName="SignUp"
                text="Don't have an account? Sign up instead."
            />
        </View>
    )
}

SignInScreen.navigationOptions = () => {
    return {
      headerShown: false
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignInScreen;