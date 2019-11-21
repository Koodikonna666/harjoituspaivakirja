import React from 'react';
import {View, Alert} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { styles } from '../styles/styles';
import AddTraining from './AddTraining'



LocaleConfig.locales['fr'] = {
  monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
  monthNamesShort: ['Tam','Hel','Maa','Huh','Tou','Kes','Hei','Elo','Syy','Lok','Mar','Jou'],
  dayNames: ['Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai','Sunnuntai'],
  dayNamesShort: ['Ma','Ti','Ke','To','Pe','La','Su'],
  today: 'Tänään\'Tnä'
};
LocaleConfig.defaultLocale = 'fr';
  



const CalendarScreen = props => {

const [treenit, setTreenit] = React.useState('Hapoton')


    return (

        <View style={styles.marginTop}>

            <CalendarList
            horizontal={true}
            pagingEnabled={true}

            futureScrollRange={4}

            onDayPress={(day) => {Alert.alert('Tehdyt harjoitukset', treenit)}}

            />
            
        </View>

    );
};
CalendarScreen.navigationOptions = {
    title: 'Kalenteri'
}


export default CalendarScreen;