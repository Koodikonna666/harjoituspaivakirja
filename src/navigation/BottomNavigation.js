import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
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
    config,
    );
  HomeStack.navigationOptions = {
    tabBarLabel: 'thermometer',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-thermometer${focused ? '' : ''}`: 'md-thermometer' }
      />
    ),   

    
    tabBarOptions:{
     showLabel: false,
     showIcon: true,
     indicatorStyle:{
       backgroundColor: 'white',
     },
     style: {
       backgroundColor: 'white',
       borderTopWidth: 1,
       borderTopColor:'#eeeeee',
     },
    }


  };

  HomeStack.path = '';

  const CalendarStack = createStackNavigator(
    {
      Calendar: CalendarScreen,
      AddTraining: AddTraining,
    },{
      initialRoute:'Calendar',
    },
    config,
  
  );
  
  CalendarStack.navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
    ),
    tabBarOptions:{
        showLabel: false,
        showIcon: true,
        indicatorStyle:{
          backgroundColor: 'white',
        },
        style: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor:'#eeeeee',
        },

       }   
  };
  
  CalendarStack.path = '';

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
        showLabel: false,
        showIcon: true,
          indicatorStyle:{
            backgroundColor: 'white',
          },
        style: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor:'#eeeeee',
        },
       }   
  };
  
  SummaryStack.path = '';
  

const AppNavigator = createMaterialTopTabNavigator({
    HomeStack,
    CalendarStack,
    SummaryStack

},
{
  tabBarPosition:'bottom',
}
);


AppNavigator.path = '';






export default AppNavigator;