import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./HomeScreen";
import TimingOpacity from "./TimingOpacity";
import SizeManipulation from "./SizeManipulation";
import AbsolutePosition from "./AbsolutePosition";



const MainNavigator = createStackNavigator({
      Home: {screen: HomeScreen},
      TimingOpacity: {screen: TimingOpacity},
      SizeManipulation: {screen: SizeManipulation},
      AbsolutePosition: {screen: AbsolutePosition}
    },
    { headerMode: 'screen',
      cardStyle: { backgroundColor: '#eee' }

    });




const StackNavigator = createAppContainer(MainNavigator);
export default StackNavigator;