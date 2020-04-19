import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
  
  return  <View>
  <ImageDetail title={'Mountain'} imageSource={require('../../assets/beach.jpg')} imageScore={12}/>
  <ImageDetail title={'Forest'} imageSource={require('../../assets/forest.jpg')}imageScore={22}/>
  <ImageDetail title={'Sea'} imageSource={require('../../assets/mountain.jpg')} imageScore={32}/>
</View>
};

const styles = StyleSheet.create({});

export default ImageScreen;