import React from "react";
import {StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class Interpolation extends React.Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
  };

  startAnimation = () => {
    Animated.parallel([
        Animated.timing(this.state.colorAnimation, {
          toValue: 1,
          duration: 500
      }),

      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300
      })
    ]).start();
  }

  render() {
    const backgroundColorInterpolation = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })

    const colorInterpolation = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"]
    })

    const boxAnimatedStyles = {
      backgroundColor: backgroundColorInterpolation,
      transform: [
        { scale: this.state.scaleAnimation }
      ]
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
