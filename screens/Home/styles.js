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
    height: '19%',
    justifyContent: 'flex-end'
  },
  promoContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    padding: SIZES.radius,
    height: 110,
    borderRadius: 20,
    backgroundColor: COLORS.white
  },
  sofaContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray2,
    borderRadius: 20
  },
  sofa: {
    width: '60%',
    height: '60%'
  },
  wordContainer: {
    flex: 1,
    marginLeft: SIZES.radius,
    justifyContent: 'center'
  },
  wordTitle: {
    ...FONTS.h2
  },
  wordCart: {
    ...FONTS.body3
  },
  wordBtnContainer: {
    marginRight: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wordBtn: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: 40,
    borderRadius: 10
  },
  wordImage: {
    width: '50%',
    height: '50%'
  }
});

export { styles };
