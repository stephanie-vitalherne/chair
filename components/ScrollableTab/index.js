/* eslint-disable comma-dangle */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

const ScrollableTab = ({ tabList, onPress, selectedTab }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Text style={styles.name}>{item.name}</Text>
      {selectedTab.id === item.id && (
        <View style={styles.inner}>
          <View style={styles.circle} />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        data={tabList}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
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
    marginHorizontal: SIZES.padding
  },
  name: {
    color: COLORS.secondary,
    ...FONTS.body2
  },
  inner: {
    alignItems: 'center',
    marginTop: SIZES.base
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.blue
  }
});

export default ScrollableTab;
