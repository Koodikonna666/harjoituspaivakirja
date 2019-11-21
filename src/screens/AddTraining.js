import React from 'react';
import * as firebase from'firebase';
import {View, TextInput, Button, Text, ScrollView} from 'react-native';
import { styles } from '../styles/styles';
import DatePicker from 'react-native-datepicker'
import  { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { LinearGradient } from 'expo-linear-gradient';



const firebaseConfig = {
    apiKey: "AIzaSyCgbQp1p7rS29sPd-9DRD2soMD4AuS5pxA",
    authDomain: "harjoituspaivakirja-e4d80.firebaseapp.com",
    databaseURL: "https://harjoituspaivakirja-e4d80.firebaseio.com",
    projectId: "harjoituspaivakirja-e4d80",
    storageBucket: "harjoituspaivakirja-e4d80.appspot.com",
    messagingSenderId: "1006808097684",
    appId: "1:1006808097684:web:9e3f94c367b46441a36581",
    measurementId: "G-LXG479VFVN"
  };
  
  if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  

  

const AddTraining = props => {

const [date, setDate] = React.useState('');
const [time, setTime] = React.useState('');
const [duration, setDuration] = React.useState(0);
const [name, setName] = React.useState('');
const [type, setType] = React.useState('');
const [content, setContent] = React.useState('Heippa homot');
const [training, setTraining] = React.useState([]);
const [trainings, setTrainings] = React.useState([]);





let typeData = [{
    label: 'Nopeus',
    value: 'nopeus'
  }, {
    label: 'Nopeuskestävyys',
    value: 'nopeuskestavyys'
  }, {
    label: 'Kuntopiiri',
    value: 'kuntopiiri'
  }];

addTraining = () => {

   setTraining([...training, {key: date, time: time, duration: duration, name: name,type: type,content: content}]);
    setTrainings([...trainings, {key: date+time, training: training}])

    firebase.database().ref('trainings/').push(
        {'trainings': trainings}
    )
    setDate('');
    setName('');
    setTime('');
    setType('');
    setContent('');
    setDuration(0);


    console.log(trainings)
}


    return (

<KeyboardAwareScrollView>
    <ScrollView >
    <LinearGradient
          colors={['#0098ff','#0098ff','#4ab6ff','#6fc5ff','#94d4ff','#b9e3ff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />
        <View>
            
            <View  style={styles.width80}>
                <View style={[styles.dates, styles.row]}> 
                    <DatePicker
                        style={styles.datepicker}
                        mode="datetime"
                        placeholder="Päivämäärä"
                        date={date}
                        minDate="01-01-2000"
                        maxDate="01-01-2100"
                        format='DD-MM-YYYY'
                        confirmBtnText="Valitse"
                        cancelBtnText="Peruuta"
                        customStyles={{
                        dateIcon: {
                            display: 'none'
                        },
                        dateInput: {
                            borderWidth:0,
                        }
                        }}
                        onDateChange={date => setDate(date)}
                    />
                    <DatePicker
                        style={styles.datepicker}
                        mode="time"
                        placeholder="Aika"
                        date={time}
                        confirmBtnText="Valitse"
                        cancelBtnText="Peruuta"
                        customStyles={{
                        dateIcon: {
                            display: 'none'
                        },
                        dateInput: {
                            borderWidth:0,
                        }
                        }}
                        onDateChange={time => setTime(time)}
                    />
                    <TextInput 
                        style={styles.datepicker}
                        placeholder='Kesto (min)'
                        keyboardType='numeric'
                        onChangeText={duration => setDuration(duration)}
                        value={duration}
                    />
                </View>
        
                <View style={styles.row}>           
                    <TextInput
                        placeholder='Harjoituksen nimi'
                        style={styles.textinput}
                        onChangeText={(name) => setName(name)}
                        value={name}
                    />
                </View>

                <View style={styles.row}> 
                    <Text style={[styles.textcenter, styles.heading1]}>Sisältö</Text>         
                </View>

                <View style={styles.row}>
                    <Dropdown
                        label='Harjoituksen tyyppi'
                        data={typeData}
                        onChangeText={(type) => setType(type)}
                        value={type}
                    />
                </View>

                <View style={styles.row}>             
                    <AutoGrowingTextInput 
                        style={styles.textinput} 
                        placeholder='Harjoituksen sisältö'
                        onChangeText={(content) => setContent(content)}
                        value={content}
                        />
                </View>   

            <Button title='Lisää' onPress={addTraining}/>
            </View>
        </View>
    </ScrollView>
</KeyboardAwareScrollView>



    );
};
AddTraining.navigationOptions = {
    title: 'Lisää harjoitus'
}



export default AddTraining;