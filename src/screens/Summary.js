import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../styles/styles';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import * as firebase from 'firebase';


const Summary = props => {


const [content, setContent] = React.useState('');
const [items, setItems] = React.useState([]);

const saveItem = () => {
    firebase.database().ref('items/').push(
        {'content': content});}

    return (
        <View style={styles.center}>
            <View style={styles.row}>
                <Button 
                    title='Tallenna'
                    onPress={saveItem}
                />             
                    <AutoGrowingTextInput 
                        style={styles.textinput} 
                        placeholder='Harjoituksen sisältö'
                        onChangeText={(content) => setContent(content)}
                        value={content}
                        />
                </View>
        </View>
    );
};

Summary.navigationOptions = {
    title: 'Yhteenveto'
}


export default Summary;