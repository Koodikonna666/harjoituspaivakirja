import React from 'react';
import * as firebase from'firebase';
import {View, TextInput, TouchableOpacity, Text, ScrollView, Alert,RefreshControl} from 'react-native';
import { styles } from '../styles/styles';
import DatePicker from 'react-native-datepicker'
import  { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
const [feel, setFeel] = React.useState('');
const [load, setLoad] = React.useState('');
const [content, setContent] = React.useState('');
const [training, setTraining] = React.useState([]);




//page refreshing not working. Just does nothing
const [refreshing, setRefreshing] = React.useState(false);

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
}, [refreshing]);




let typeData = [ {
    label: 'Aerobia',
    value: 'aerobia'
  },{
    label: 'Hieronta',
    value: 'hieronta'
  },{
    label: 'Kuntopiiri',
    value: 'kuntopiiri'
  },{
    label: 'Maksimikestävyys',
    value: 'maksimikestävyys'
  },{
    label: 'Liikkuvuus',
    value: 'liikkuvuus'
  },{ 
    label: 'Muu',
    value: 'muu'
  },{
    label: 'Nopeus',
    value: 'nopeus'
  },{
    label: 'Nopeuskestävyys',
    value: 'nopeuskestavyys'
  },{
    label: 'Kuntopiiri',
    value: 'kuntopiiri'
  },{
    label: 'Nopeuskestävyys',
    value: 'nopeuskestavyys'
  },{
    label: 'Peruskestävyys',
    value: 'peruskestävyys'
  }];

  let feelData = [{
    label: '5. Erittäin onnistunut',
    value: 'erittäin onnistunut'
  }, {
    label: '4. Onnistunut',
    value: 'onnistunut'
  },  {
    label: '3. Neutraali',
    value: 'neutraali'
  },  {
    label: '2. Epäonnistunut',
    value: 'epäonnistunut'
  }, {
    label: '1. Erittäin epäonnistunut',
    value: 'erittäin epäonnistunut'
  }];

  let loadData = [{
    label: '10. maksimaalinen',
    value: 10
  }, {
    label: '9.',
    value: 9
  },  {
    label: '8.',
    value: 8
  },  {
    label: '7.',
    value: 7
  }, {
    label: '6.',
    value: 6
  }, {
    label: '5. kova',
    value: 5
  },  {
    label: '4.',
    value: 4
  },  {
    label: '3.',
    value: 3
  }, , {
    label: '2.',
    value: 2
  },  {
    label: '1. erittäin helppo',
    value: 1
  }];



//adding training to the database and navigating back to calendar screen
addTraining = () => {

    firebase.database().ref('trainings/').push(
        {'date': date, 'time': time, 'duration': duration, 'name': name,'type': type,'content': content, 'load': load, 'feel': feel}
    );

    
    //navigation is working but it wont let you add training if you go to the calendar screen between you add two trainings
    props.navigation.navigate('Calendar');
    Alert.alert('Treeni lisätty');

}


    return (

<KeyboardAwareScrollView
refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
}>
    <ScrollView
    
    >
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
        <View>

            
            
            <View  style={styles.width80}>
            <View style={styles.row}> 
                <Text style={[styles.textcenter, styles.heading1]}>Ajankohta</Text>         
            </View>
                <View style={[styles.dates, styles.row]}> 
                    <DatePicker
                        style={styles.datepicker}
                        mode="date"
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
                        },
                        dateText:{
                            color:'white'
                        },
                        placeholderText:{
                            color:'rgba(255,255,255,0.2)'
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
                        },
                        dateText:{
                            color:'white'
                        },
                        placeholderText:{
                            color:'rgba(255,255,255,0.2)'
                        }
                        }}
                        onDateChange={time => setTime(time)}
                    />
                    <TextInput 
                        style={styles.datepicker}
                        placeholder='Kesto (min)'
                        placeholderTextColor='rgba(255,255,255,0.2)'
                        keyboardType='numeric'
                        onChangeText={duration => setDuration(duration)}
                        value={duration}
                    />
                </View>
        
                <View style={styles.row}> 
                    <Text style={[styles.textcenter, styles.heading1]}>Sisältö</Text>         
                </View>

                <View style={styles.row}>           
                    <TextInput
                        placeholder='Harjoituksen nimi'
                        placeholderTextColor='rgba(255,255,255,0.2)'
                        style={styles.textinput}
                        onChangeText={(name) => setName(name)}
                        value={name}
                    />
                </View>

                <View style={styles.row}>
                    <Dropdown
                        label='Harjoituksen tyyppi'
                        baseColor='white'
                        selectedItemColor='black'
                        textColor='white'
                        data={typeData}
                        onChangeText={(type) => setType(type)}
                        value={type}
                    />
                </View>

                <View style={styles.row}>             
                <TextInput
                        placeholder='Harjoituksen sisältö'
                        placeholderTextColor='rgba(255,255,255,0.2)'
                        multiline={true}
                        style={styles.textinput}
                        onChangeText={(content) => setContent(content)}
                        value={content}
                    />
                </View>  

                <View style={styles.row}>
                    <Dropdown
                        label='Fiilis'
                        baseColor='white'
                        selectedItemColor='black'
                        textColor='white'
                        data={feelData}
                        onChangeText={(feel) => setFeel(feel)}
                        value={feel}
                    />
                </View>  
                
                <View style={styles.row}>
                    <Dropdown
                        label='Kuormitus'
                        baseColor='white'
                        selectedItemColor='black'
                        textColor='white'
                        data={loadData}
                        onChangeText={(load) => setLoad(load)}
                        value={load}
                    />
                </View> 


               
                    <TouchableOpacity
                            style={styles.addTrainingButton}
                            onPress={addTraining}>
                            <Text style={styles.addTrainingButtonText}>Lisää harjoitus</Text>
                    </TouchableOpacity>
               

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