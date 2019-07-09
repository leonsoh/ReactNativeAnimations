import React from "react";
import {View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Button
            style={styles.buttonStyle}
            title="Go to Timing Opacity"
            onPress={() => navigate('TimingOpacity')}/>
          <Button
              style={styles.buttonStyle}
              title="Go to Size Manipulation"
              onPress={() => navigate('SizeManipulation')}/>
          <Button
              style={styles.buttonStyle}
              title="Go to Absolute Position"
              onPress={() => navigate('AbsolutePosition')}/>
        </View>
    );
  }
}


const styles = {
  buttonStyle: {
    width: 250,
    borderWidth: 1,
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#ff0592'
  }
};