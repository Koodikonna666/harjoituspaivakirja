import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddTraining from '../screens/AddTraining';
import Summary from '../screens/Summary';
import CalendarScreen from '../screens/CalendarScreen';


const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
    },
    config
  );
  HomeStack.navigationOptions = {
    tabBarLabel: 'thermometer',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-thermometer${focused ? '' : ''}`: 'md-thermometer' }
      />
    ),
    
    tabBarOptions:{
     showLabel: false
    }


  };

  HomeStack.path = '';

  const AddTrainingStack = createStackNavigator(
    {
      AddTraining: CalendarScreen,
    },
    config
  );
  
  AddTrainingStack.navigationOptions = {
    tabBarLabel: 'Add Training',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
    ),
    tabBarOptions:{
        showLabel: false
       }   
  };
  
  AddTrainingStack.path = '';

  const SummaryStack = createStackNavigator(
    {
      Summary: Summary,
    },
    config
  );
  
  SummaryStack.navigationOptions = {
    tabBarLabel: 'Summary',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'} />
    ),
    tabBarOptions:{
        showLabel: false
       }   
  };
  
  SummaryStack.path = '';
  

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    AddTrainingStack,
    SummaryStack

});


AppNavigator.path = '';






export default AppNavigator;