import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./HomeScreen";
import TimingOpacity from "./TimingOpacity";



const MainNavigator = createStackNavigator({
      Home: {screen: HomeScreen},
      TimingOpacity: {screen: TimingOpacity}
    },
    { headerMode: 'screen',
      cardStyle: { backgroundColor: '#eee' }

    });




const StackNavigator = createAppContainer(MainNavigator);
export default StackNavigator;