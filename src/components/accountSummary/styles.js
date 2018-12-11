import { themes, colors } from '../../constants/styleGuide';

export default () => ({
  common: {
    container: {
      width: '100%',
      height: 170,
      overflow: 'hidden',
    },
    avatar: {
      top: 0,
      left: '50%',
      marginLeft: -30,
      position: 'absolute',
      zIndex: 4,
      elevation: 4,
      overflow: 'hidden',
    },
    address: {
      width: '100%',
      paddingTop: 10,
      paddingBottom: 3,
      marginTop: 60,
      textAlign: 'center',
      zIndex: 2,
    },
    addressContainer: {
      justifyContent: 'center',
    },
    addressP: {
      lineHeight: 25,
    },
    balance: {
      height: 32,
      width: '100%',
      alignItems: 'center',
      zIndex: 2,
      elevation: 2,
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      height: 200,
      width: '100%',
      overflow: 'hidden',
    },
    blurWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 45,
    },
    blur: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginTop: -18,
      zIndex: 2,
      opacity: 0,
    },
    visibleBlur: {
      opacity: 1,
    },
    invisibleTitle: {
      color: 'transparent',
    },
    blurBig: {
      width: 150,
      height: 45,
      marginLeft: -75,
    },
    blurMedium: {
      width: 116,
      height: 45,
      marginLeft: -58,
    },
    blurSmall: {
      width: 91,
      height: 45,
      marginLeft: -45,
    },
    fiat: {
      width: '100%',
      alignItems: 'center',
      zIndex: 2,
    },
    fiatValue: {},
    actionBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 45,
      width: '100%',
      paddingHorizontal: 12,
    },
    bookmarkButton: {
      marginHorizontal: 8,
      minWidth: 45,
      height: 45,
      borderWidth: 1,
      borderColor: colors.light.blue,
      flexGrow: 1,
      textAlign: 'center',
    },
    sendButton: {
      marginHorizontal: 8,
      minWidth: 200,
      height: 45,
      borderWidth: 1,
      borderColor: colors.light.blue,
      flexGrow: 1,
      textAlign: 'center',
    },
  },
  [themes.light]: {
    homeContainer: {
      backgroundColor: colors.light.brandingBlue,
    },
    walletContainer: {
      backgroundColor: colors.light.navigationBg,
    },
    bg: {
      opacity: 1,
    },
    homeBalance: {
      color: colors.light.white,
    },
    walletBalance: {
      color: colors.light.blue,
    },
    homeAddress: {
      color: colors.light.gray5,
    },
    walletAddress: {
      color: colors.light.gray1,
    },
    fiatValue: {
      color: colors.light.gray5,
    },
  },
  [themes.dark]: {
    homeContainer: {
      backgroundColor: colors.dark.navigationBg,
    },
    walletContainer: {
      backgroundColor: colors.dark.navigationBg,
    },
    bg: {
      opacity: 0.6,
    },
    homeAddress: {
      color: colors.dark.gray2,
    },
    walletAddress: {
      color: colors.dark.gray2,
    },
    homeBalance: {
      color: colors.dark.white,
    },
    walletBalance: {
      color: colors.dark.white,
    },
    fiatValue: {
      color: colors.dark.gray2,
    },
  },
});
