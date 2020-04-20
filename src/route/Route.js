import { createAppContainer, } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import splash from './../components/splash'
import prentLogin from './../components/prentLogin'
import signUpParent from './../components/signUpParent'
import DashBoardParent from './DashBoardParent';
import splashFirst from './../components/splashFirst';

const Route = createStackNavigator({
    splashFirst: {
        screen: splashFirst,
        navigationOptions: {
            header: null,
        },
    },
    splash: {
        screen: splash,
        navigationOptions: {
            header: null,
        },
    },
    homeParent:{
        screen: DashBoardParent,
        navigationOptions: {
            header: null,
        },
    },
    prentLogin: {
        screen: prentLogin,
        navigationOptions: {
            header: null,
        },
    },
    
    signUpParent: {
        screen: signUpParent,
        navigationOptions: {
            header: null,
        },
    },
    
},
    {
        initialRouteName: 'splashFirst'
    }
);

export default createAppContainer(Route);