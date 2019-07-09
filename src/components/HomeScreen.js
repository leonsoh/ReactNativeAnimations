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
              title="Go to Other Animations"
              onPress={() => navigate('TimingOpacity')}/>

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