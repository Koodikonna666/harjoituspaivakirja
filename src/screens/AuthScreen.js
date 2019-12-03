import React from 'react';
import {View, Text, Button, TextInput, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import { styles } from '../styles/styles';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';



const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


const AuthScreen = props => {


const [ email, setEmail] = React.useState('');
const [ password, setPassword] = React.useState('');


//Kirjaudutaan sisään firebasen kautta sähköpostilla sekä salasanalla
login = () => {
try {
    firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
       props.navigation.navigate('Main')
    })
} catch (error) {
    Alert.alert('error')
}
}


signup = () => {
try {
    if(password.length<6){
        Alert.alert('Salasanan pitää olla vähintään 6 merkkiä')
    }
    firebase.auth().createUserWithEmailAndPassword(email,password)
} catch (error) {
    Alert.alert(error)
}


Alert.alert('Käyttäjä luotu', 'Voit nyt kirjautua sisään tekemilläsi tunnuksilla, ja käyttää jatkossa niitä kirjautumiseen')
setEmail('');
setPassword('');


}


    return (

<DismissKeyboard>
    <View>
             <LinearGradient
                colors={['#2e6e87','#25637b','#1d586f','#144d63','#0c4257']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                }}
            />
            <View style={styles.authContainer}>
                <TextInput
                    style={[styles.loginTextInput]}
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    type='email'
                    onChangeText={email => setEmail(email)}
                    value = {email}
                />

                <TextInput
                    style={[styles.loginTextInput]}
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    type = 'password'
                    keyboardType='default'
                    textContentType='password'
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={password => setPassword(password)}
                    value = {password}
                />
                <View style={styles.loginButtonsBox}>
                    <TouchableOpacity
                          style={styles.loginButtons}
                        onPress={login}>
                        <Text style={styles.loginButtonText}>Kirjaudu sisään</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.marginLeft, styles.loginButtons]}
                        onPress={signup}>
                        <Text style={styles.loginButtonText}>Luo käyttäjä</Text>
                    </TouchableOpacity>
                </View>   
            </View>
    </View>
</DismissKeyboard>
    );
};

AuthScreen.navigationOptions ={
    header: null
}

export default AuthScreen;