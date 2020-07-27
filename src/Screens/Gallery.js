import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {requestImages} from './../actions/requestImages';
import {selectImage} from './../actions/selectImage';
const GalleryCell = props => {
  let d = new Date(Date.parse(props.date));
  return (
    <TouchableHighlight
      onPress={() => {
        props.selectImage(props.id);
        props.navigate();
      }}>
      <View style={styles.galleryCell}>
        <Image source={{uri: props.source}} style={styles.image} />
        <Text style={styles.text}> Author {props.author} </Text>
        <Text style={styles.text}> {d.toDateString()}</Text>
      </View>
    </TouchableHighlight>
  );
};

const Gallery = props => {
  props.requestImages();
  let galleryCells = props.images.map((image, idx) => (
    <GalleryCell
      key={idx}
      id={image.id}
      source={image.urls.small}
      author={image.user.name}
      date={image.created_at}
      selectImage={props.selectImage}
      navigate={() =>
        props.navigation.navigate('OnePhoto', {
          source: image.urls.regular,
          author: image.user.name,
          date: image.created_at,
        })
      }
    />
  ));
  return (
    <ScrollView contentContainerStyle={styles.gallery}>
      {galleryCells}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gallery: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: Dimensions.get('window').height / 4 - 10,
  },
  galleryCell: {
    width: Dimensions.get('window').width / 2 - 20,
    margin: 5,
  },
  text: {
    padding: 5,
  },
});

const mapStateToProps = state => {
  return {
    images: state.images.images,
    selectedImageId: state.images.selectedImageId,
  };
};

const mapDispatchToProps = {
  selectImage: selectImage,
  requestImages: requestImages,
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
