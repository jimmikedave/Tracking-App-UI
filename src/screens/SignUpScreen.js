import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <Text>SignUpScreen</Text>
            <Button 
                title="Go to Signin" 
                onPress={() => navigation.navigate('SignIn')}
            />
            <Button 
                title="Go to main flow" 
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    )
}

const styles = StyleSheet.create({

});

export default SignUpScreen;