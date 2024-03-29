import React from "react";
import {StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class Interpolation extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  }

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"]
    })

    const boxAnimatedStyles = {
      backgroundColor: boxInterpolation
    }

    const textAnimatedStyle = {
      color: colorInterpolation
    }

    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, boxAnimatedStyles]}>
              <Animated.Text style={textAnimatedStyle}>
                Hello World!
              </Animated.Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  }
});
