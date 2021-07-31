/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  background: {
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    marginTop: SIZES.padding * 2,
    marginHorizontal: SIZES.padding
  },
  header: {
    flexDirection: 'row'
  },
  menu: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.white
  },
  search: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  productContainer: {
    position: 'absolute',
    top: '45%',
    left: '15%',
    borderRadius: 80,
    backgroundColor: COLORS.transparentLightGray1,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tag: {
    borderRadius: 20,
    backgroundColor: COLORS.blue,
    height: 10,
    width: 10
  },
  productTag: {
    position: 'absolute',
    top: '43%',
    left: '30%',
    flexDirection: 'row',
    padding: SIZES.radius * 1.5,
    backgroundColor: COLORS.transparentLightGray1,
    width: '50%',
    borderRadius: 10
  },
  name: {
    flex: 2
  },
  nameTxt: {
    color: COLORS.darkGray,
    ...FONTS.h3
  },
  priceContainer: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  price: {
    color: COLORS.darkGreen,
    ...FONTS.h3
  },
  furnContainer: {
    position: 'absolute',
    bottom: '20%',
    left: SIZES.padding,
    right: SIZES.padding
  },
  furnTxt: {
    color: COLORS.lightGray2,
    ...FONTS.body2
  },
  furnName: {
    marginTop: SIZES.radius,
    color: COLORS.white,
    ...FONTS.h1
  },
  footerContainer: {
    position: 'absolute',
    bottom: '5%',
    left: SIZES.padding,
    right: SIZES.padding,
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLORS.white,
    borderRadius: 35
  },
  foot1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foot2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray
  },
  middleBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary
  },
  middle: {
    width: 20,
    height: 20,
    tintColor: COLORS.white
  }
});

export { styles };
