/* eslint-disable comma-dangle */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from '../../constants';
import { styles } from './styles';

const ItemDetail = ({ route, navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => console.log('Menu')}>
            <Image
              style={styles.icon}
              source={icons.menu}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.search}
            onPress={() => console.log('Menu')}>
            <Image
              style={styles.icon}
              source={icons.search}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderInfo() {
    let { itemInfo } = route.params;
    if (itemInfo) {
      return (
        <ImageBackground
          source={itemInfo.image}
          resizeMode="cover"
          style={styles.background}>
          {renderHeader()}

          {/* Product Tag */}
          <View style={styles.productContainer}>
            <View style={styles.tag} />
          </View>
          <View style={styles.productTag}>
            <View style={styles.name}>
              <Text style={styles.nameTxt}>{itemInfo.productName}</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>${itemInfo.price.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.furnContainer}>
            <Text style={styles.furnTxt}>Furniture</Text>
            <Text style={styles.furnName}>{itemInfo.productName}</Text>
          </View>
        </ImageBackground>
      );
    } else {
      <View />;
    }
  }

  return <View style={styles.mainContainer}>{renderInfo()}</View>;
};

export default ItemDetail;
