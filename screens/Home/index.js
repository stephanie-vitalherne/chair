/* eslint-disable comma-dangle */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from '../../constants';
import { styles } from './styles';

const Home = () => {
  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={() => console.log('Menu')}>
            <Image
              resizeMode="contain"
              source={icons.menu}
              style={styles.menuBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cart}
            onPress={() => console.log('Cart')}>
            <Image
              resizeMode="contain"
              source={icons.cart}
              style={styles.menuBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Collection of</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderHeader()}
      {renderTitle('Test')}
    </SafeAreaView>
  );
};

export default Home;
