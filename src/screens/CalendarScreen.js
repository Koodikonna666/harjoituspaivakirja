import React from 'react';
import {View, Alert, TouchableOpacity, Text, ScrollView, RefreshControl} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { styles } from '../styles/styles';


LocaleConfig.locales['fr'] = {
  monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
  monthNamesShort: ['Tam','Hel','Maa','Huh','Tou','Kes','Hei','Elo','Syy','Lok','Mar','Jou'],
  dayNames: ['Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai','Sunnuntai'],
  dayNamesShort: ['Ma','Ti','Ke','To','Pe','La','Su'],
  today: 'Tänään\'Tnä'
};
LocaleConfig.defaultLocale = 'fr';
  


const CalendarScreen = props => {

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
    
dayPressed = () => {
Alert.alert('Tämän päivän harjoitukset', 'Nopeuskestävyys')
}

goAddTraining = () => {
    props.navigation.navigate('AddTraining')
    }

    return (

        <View style={styles.marginTop}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
            <CalendarList
            horizontal={true}
            pagingEnabled={true}
            futureScrollRange={4}
            onDayPress={(day) => dayPressed()}
            markedDates={{
                '2019-11-21': {marked: true, selectedColor: 'blue'},
                '2019-11-22': {marked: true, selectedColor: 'blue'},
                '2019-11-24': {marked: true, selectedColor: 'blue'},
                '2019-11-25': {marked: true, selectedColor: 'blue'},
                '2019-11-26': {marked: true, selectedColor: 'blue'},
                '2019-11-28': {marked: true, selectedColor: 'blue'},
                '2019-11-29': {marked: true, selectedColor: 'blue'},
                '2019-11-30': {marked: true, selectedColor: 'blue'},
                '2019-12-01': {marked: true, selectedColor: 'blue'},
                '2019-12-02': {marked: true, selectedColor: 'blue'},
                '2019-12-03': {marked: true, selectedColor: 'blue'},
                '2019-12-05': {marked: true, selectedColor: 'blue'},
                '2019-12-06': {marked: true, selectedColor: 'blue'},
                '2019-12-07': {marked: true, selectedColor: 'blue'},
            }}
            />
            <View style={styles.borderTop}>
                <TouchableOpacity
                style={styles.goAddTraining}
                onPress={goAddTraining}
                >
                <Text style={styles.goAddTrainingText}>Lisää harjoitus</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>

    );
};
CalendarScreen.navigationOptions = {
    title: 'Kalenteri'
}


export default CalendarScreen;