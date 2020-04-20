import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import homeParent from '../components/homeParent';
import SideMenuParent from './SideMenuParent';



const DashBoardParent = createDrawerNavigator({
  homeParent: {
    screen: homeParent,
  },

}, {
  drawerWidth: 300,
  initialRouteName: 'homeParent',
  contentComponent: SideMenuParent,
});


export default (DashBoardParent);

