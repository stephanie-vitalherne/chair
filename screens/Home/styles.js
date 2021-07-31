/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  headerContainer: {
    paddingHorizontal: SIZES.padding
  },
  headerIcons: {
    flexDirection: 'row'
  },
  headerBtn: {
    flex: 1
  },
  menuBtn: {
    width: 25,
    height: 25
  },
  cart: {
    flex: 1,
    alignItems: 'flex-end'
  },
  titleContainer: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding
  },
  title: {
    color: COLORS.black,
    ...FONTS.largeTitle
  },
  cardContainer: {
    flex: 1
  },
  footerContainer: {
    height: '19%'
  }
});

export { styles };
