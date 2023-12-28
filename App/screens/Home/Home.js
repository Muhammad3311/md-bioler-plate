import React from 'react';
import {View, Text} from 'react-native';

import Style from './HomeStyle';

const Home = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Welcome to MD Bioler Plate</Text>
    </View>
  );
};

export default Home;
