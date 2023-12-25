import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, WP, size } from '../../../utils';
const { width, height } = Dimensions.get('window');
import appStyles from '../../appStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  subText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    marginVertical: 20,
  },
  textNormal: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white,
  },
  textNormalWithColor: {
    color: colors.primary,
    textDecorationColor: colors.primary,
    fontSize: 17,
    fontWeight: '700',
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: "contain",
    marginVertical: "12%"
  },
  emailinput: {
    borderRadius: 40,
    ...Shadows.shadow3,
    paddingTop: 0,
    marginVertical: 10,
    // backgroundColor:'red'
  },
  btn: {
    ...appStyles.margin2Percent,
  },
  btntext: {
    ...appStyles.family_Poppins_Bold,
  },
});

export default styles;
