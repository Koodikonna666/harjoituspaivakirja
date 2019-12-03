
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomNavigation from './BottomNavigation';
import AuthNavigation from './AuthNavigation'



export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigation,
    Main: BottomNavigation,
  },
  {
    initialRouteName: 'Auth',
    
  }
  )
);
