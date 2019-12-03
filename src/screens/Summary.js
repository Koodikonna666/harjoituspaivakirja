import React, { Component, useEffect } from 'react';
import {View, Text, Alert,ScrollView, RefreshControl, Button,FlatList} from 'react-native';
import { styles } from '../styles/styles';
import * as firebase from 'firebase';




const Summary = props => {


const [refreshing, setRefreshing] = React.useState(false);
const [trainings, setTrainings] = React.useState('');

useEffect(() => {
    getTrainings();
    },[])
    

//page reloader
function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getTrainings();
}, [refreshing]);



//getting trainings from firebase
getTrainings = () => {
    firebase.database().ref('trainings/').once('value', function (snapshot) {
       setTrainings(snapshotToArray(snapshot))
    });
}

//this changes the snapshot coming from firebase to right form. It moves key from outside the array inside of it
function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};


    return (
        <View style={styles.background}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
            <FlatList
                data={trainings}
                renderItem={({ item }) => 
                <View style={styles.listSeparator}>

                    <View style={styles.flex}>
                        <View style={styles.datesRowItem}>
                            <Text>Pvm</Text>
                            <Text style={styles.itemText}>{item.date}</Text>
                        </View>
                        <View style={styles.datesRowItem}>
                            <Text>Aika</Text>
                            <Text style={styles.itemText}>{item.time}</Text>
                        </View>
                        <View style={styles.datesRowItem}>
                            <Text>Kesto</Text>
                            <Text style={styles.itemText}>{item.duration}min</Text>
                        </View>
                    </View>

                    <View style={[styles.nameRowItem]}>
                        <Text style={styles.itemTextHeading}>{item.name}</Text>
                        <Text style={styles.itemTextType}>({item.type})</Text>
                    </View>

                    <View style={styles.contentRowItem}>
                        <Text style={styles.itemText}>{item.content}</Text>
                    </View>

                    <View style={styles.flex}>
                        <View style={styles.feelLoadRowItem}>
                            <Text style={styles.itemTextFeelLoad}>{item.feel}</Text>
                        </View>
                        <View style={[styles.feelLoadRowItem,styles.itemTextFeelLoad]}>
                            <Text style={styles.itemText}>Rasitus: </Text>
                            <Text style={styles.itemText}>{item.load}</Text>
                        </View>
                    </View>
                    
                </View>
      }
                keyExtractor={item => item.id}
            />
            
            </ScrollView>
        </View>
    );
};

Summary.navigationOptions = {
    title: 'Yhteenveto'
}

export default Summary;