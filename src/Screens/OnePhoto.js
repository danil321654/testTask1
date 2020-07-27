import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';

const OnePhoto = props => {
  let d = new Date(Date.parse(props.route.params.date));
  return (
    <View style={styles.photoFlow}>
      <Image source={{uri: props.route.params.source}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  photoFlow: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: Dimensions.get('window').height*0.9
  },
  image: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height / 2 - 10,
    margin: 5,
  //  transform: [{rotateX: '90deg'}],
  },
});

export default OnePhoto;
