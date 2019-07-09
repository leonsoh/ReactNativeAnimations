import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./HomeScreen";
import TimingOpacity from "./TimingOpacity";
import SizeManipulation from "./SizeManipulation";



const MainNavigator = createStackNavigator({
      Home: {screen: HomeScreen},
      TimingOpacity: {screen: TimingOpacity},
      SizeManipulation: {screen: SizeManipulation}
    },
    { headerMode: 'screen',
      cardStyle: { backgroundColor: '#eee' }

    });




const StackNavigator = createAppContainer(MainNavigator);
export default StackNavigator;