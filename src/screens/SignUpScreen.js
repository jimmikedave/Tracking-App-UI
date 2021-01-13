import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitText="Sign Up"
            />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead.</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}

// removes the header from the screen
SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1 ,
        justifyContent: 'center',
        marginBottom: 200
    },
    link: {
        color: 'blue'
    }
});

export default SignUpScreen;

