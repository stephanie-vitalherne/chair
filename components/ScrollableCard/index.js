/* eslint-disable comma-dangle */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants';

const ScrollableCard = ({ navigation, productList }) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ItemDetail', { itemInfo: item })}>
      <View style={styles.imageContainer}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />

        <View style={styles.txtContainer}>
          <Text style={styles.title}>Furniture</Text>
          <Text style={styles.product}>{item.productName}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        data={productList}
        renderItem={renderCard}
        keyExtractor={item => item.productId}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: SIZES.padding
  },
  container: {
    marginLeft: SIZES.padding
  },
  imageContainer: {
    width: SIZES.width / 2
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.radius * 2
  },
  txtContainer: {
    position: 'absolute',
    top: 15,
    left: '10%',
    right: '10%'
  },
  title: {
    color: COLORS.lightGray2,
    ...FONTS.h3
  },
  product: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h2
  },
  priceContainer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.transparentLightGray
  },
  price: {
    ...FONTS.h2
  }
});

export default ScrollableCard;
