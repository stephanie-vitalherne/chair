/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { images, icons } from '../../constants';
import { styles } from './styles';
import { data, tabs } from './data';

// COMPONENTS
import { ScrollableTab, ScrollableCard } from '../../components';

const Home = ({ navigation }) => {
  const [tabList] = useState(data);
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

  function renderPromotionCard() {
    return (
      <View style={[styles.promoContainer, styles.shadow]}>
        <View style={styles.sofaContainer}>
          <Image
            source={images.sofa}
            resizeMode="contain"
            style={styles.sofa}
          />
        </View>

        {/* Wording */}
        <View style={styles.wordContainer}>
          <Text style={styles.wordTitle}>Special Offer</Text>
          <Text style={styles.wordCart}>Adding to your cart</Text>
        </View>

        {/* Button */}
        <View style={styles.wordBtnContainer}>
          <TouchableOpacity
            style={styles.wordBtn}
            onPress={() => console.log('Button')}>
            <Image
              style={styles.wordImage}
              source={icons.chevron}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
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
      <View style={styles.footerContainer}>{renderPromotionCard()}</View>
    </SafeAreaView>
  );
};

export default Home;
