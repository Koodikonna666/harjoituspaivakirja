import React, { useEffect, useState } from 'react';
import {View, Alert, TouchableOpacity, Text} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { styles } from '../styles/styles';
import * as firebase from'firebase';




LocaleConfig.locales['fr'] = {
  monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
  monthNamesShort: ['Tam','Hel','Maa','Huh','Tou','Kes','Hei','Elo','Syy','Lok','Mar','Jou'],
  dayNames: ['Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai','Sunnuntai'],
  dayNamesShort: ['Ma','Ti','Ke','To','Pe','La','Su'],
  today: 'Tänään\'Tnä'
};
LocaleConfig.defaultLocale = 'fr';
  



const CalendarScreen = props => {


//     const [trainings, setTrainings] = useState([])

// useEffect(() => {
//     firebase.database().ref('trainings/').on('value', snapshot=> {
//         const data= snapshot.val ();
//         const prods= Object.values(data);
//         setTrainings(prods);
//     });
// }, []);


dayPressed = () => {
Alert.alert('Tämän päivän harjoitukset', 'Nopeuskestävyys')
}
goAddTraining = () => {
    Alert.alert('Siirtymä', 'Lisää harjoitus')
    }

    return (

        <View style={styles.marginTop}>

            <CalendarList
            horizontal={true}
            pagingEnabled={true}

            futureScrollRange={4}

            onDayPress={(day) => dayPressed()}
            

            markedDates={{
                '2019-11-25': {marked: true, selectedColor: 'blue'},

            }}

            />
            <View>
                <TouchableOpacity
                style={styles.goAddTraining}
                onPress={goAddTraining}
                >
                <Text style={styles.goAddTrainingText}>Lisää tehty harjoitus</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
};
CalendarScreen.navigationOptions = {
    title: 'Kalenteri'
}


export default CalendarScreen;