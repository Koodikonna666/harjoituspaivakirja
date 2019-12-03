import React, { useEffect } from 'react';
import {Text, View, Button, FlatList, Alert} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import { styles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';




 export default function UserLocation(props){

    
    const [location, setLocation] = React.useState(null);
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');
    const [weather, setWeather] = React.useState(null);
    const [temperature, setTemperature] = React.useState(0);
    const [windSpeed, setWindSpeed] = React.useState('');



//Haetaan käyttäjän sijainti koordinaatteina


  useEffect(() =>{
    getWeather();
   
  },[])


    getWeather = async () => {
        //Check permission
        let  { status } =  await Permissions.askAsync(Permissions.LOCATION);
        
        if (status !== 'granted'){
            Alert.alert('No permission to access location');
    }
        else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
    }
    
    // Haetaan säätiedot api
    
    const url ='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=e7a4070c5c5b54f94d450692d38ca976';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setWeather(responseJson);

    })
     .catch((error) => {
       Alert.alert('Error', error);
     });
     setTemperature(Math.round(weather.main.temp - 273))
    ;
  }
  

  


return(
    <View style={[styles.center, styles.backgroung]}>
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
 <Text style={styles.saa}>{temperature} °C</Text>
 <Button
  title='Sää'
  onPress={getWeather}
 />

 
    </View>
);


}
