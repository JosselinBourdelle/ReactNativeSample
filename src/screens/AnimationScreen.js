import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {

    state = {
        topX: new Animated.Value(0),
      }

  static navigationOptions = {
    title: 'Animation',
  };

  componentDidMount() {
    this.goDown(); 
  }

  goDown(){
    Animated.timing(                
        this.state.topX,           
        {
          toValue: 200,
          easing: Easing.ease,            
          duration: 1000             
        }
      ).start(() => this.goTop());
  }

  goTop(){
    Animated.timing(                
        this.state.topX,           
        {
          toValue: 0,
          easing: Easing.ease,            
          duration: 1000             
        }
      ).start(() => this.goDown());
  }
  

  render() {
    let { topX } = this.state;
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animation, {top:topX}]}>
                <Image style={styles.image} source={{uri: 'http://www.tshirt-grossesse.com/wp-content/uploads/2013/07/haut-bas-bleu.jpg'}}/>
            </Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        alignContent:'center'
    },
    image:{
        width:300,
        height:300  
    }
});