/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from '../../constants';
import { styles } from './styles';
import { data, tabs } from './data';

// COMPONENTS
import { ScrollableTab, ScrollableCard } from '../../components';

const Home = ({ navigation }) => {
  const [tabList, setTabList] = useState(data);
  const [selectedTab, setSelectedTab] = useState(tabs);

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

      {renderTitle(selectedTab.title)}

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={item => setSelectedTab(item)}
      />

      <View style={styles.cardContainer}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      {/* Footer - Promotion Card */}
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
};

export default Home;
