import React from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from '../styles/styles';
import UserLocation from '../components/UserLocation'


const HomeScreen = props => {


    return (
        <UserLocation/>
    );
};


HomeScreen.navigationOptions = {
    title: 'Lämpötila'
}

export default HomeScreen;