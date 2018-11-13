import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import SignIn from '../signIn';
import TxDetail from '../txDetail';
import Send from '../send';
import Register from '../register';
// import Explore from '../explore';
import Wallet from '../wallet';
import Request from '../request';
import OwnWallet from '../ownWallet';
import Settings from '../settings';
import About from '../about';
import Terms from '../terms';
import EnableBioAuth from '../enableBioAuth';
import DisableBioAuth from '../disableBioAuth';
import PassphraseBackup from '../passphraseBackup';
import Intro from '../intro';
import styles from './styles';
import MenuIcon from './menuIcon';
import Bg from '../headerBackground';
import tabBarOptions from './tabBarOptions';
import { colors } from '../../constants/styleGuide';
import { IconButton } from '../toolBox/button';
import Logo from './logo';

const SettingButton = ({ navigation }) =>
  <IconButton
    icon='settings'
    iconSize={20}
    onPress={() => navigation.navigate({ routeName: 'Settings' })}
    style={styles.settings}
    color={colors.light.white} />;

const placeHolderButton = <IconButton color='transparent' icon='back'/>;
// eslint-disable-next-line new-cap
const Tabs = TabNavigator({
  OwnWallet: {
    screen: OwnWallet,
    navigationOptions: ({ navigation }) => ({
      headerRight: <SettingButton navigation={navigation} />,
      headerLeft: placeHolderButton,
      title: <Logo />,
      tabBarLabel: 'Wallet',
      tabBarIcon: ({ tintColor }) => <MenuIcon name='home' tintColor={tintColor} />, //eslint-disable-line
    }),
  },
  Send: {
    screen: Send,
    navigationOptions: ({ navigation }) => ({
      headerRight: <SettingButton navigation={navigation} />,
      title: <Logo />,
      tabBarLabel: 'Send',
      tabBarIcon: ({ tintColor }) => <MenuIcon name='send' tintColor={tintColor} />, //eslint-disable-line
    }),
  },
  Request: {
    screen: Request,
    navigationOptions: ({ navigation }) => ({
      headerRight: <SettingButton navigation={navigation} />,
      headerLeft: placeHolderButton,
      title: <Logo />,
      tabBarLabel: 'Request',
      tabBarIcon: ({ tintColor }) => <MenuIcon name='request' tintColor={tintColor} />, //eslint-disable-line
    }),
  },
}, {
  tabBarComponent: tabBarOptions,
  tabBarPosition: 'bottom',
  initialRouteName: 'OwnWallet',
  headerMode: 'screen',
});


// eslint-disable-next-line new-cap
export default StackNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: {
        title: <Logo color={colors.light.gray1} />,
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
        headerBackground: <Bg />,
        title: <Logo />,
        headerRight: <SettingButton navigation={navigation} />,
        headerStyle: {
          backgroundColor: 'transparent',
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: () => ({
        headerBackground: <Bg />,
        title: <Logo />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        headerBackground: <Bg />,
        title: <Logo />,
        headerRight: placeHolderButton,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        headerBackground: <Bg />,
        title: <Logo />,
        headerRight: placeHolderButton,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    Terms: {
      screen: Terms,
      navigationOptions: ({ navigation }) => ({
        headerBackground: <Bg />,
        title: <Logo />,
        headerRight: placeHolderButton,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    TxDetail: {
      screen: TxDetail,
      navigationOptions: ({ navigation }) => ({
        headerRight: <SettingButton navigation={navigation} />,
        headerBackground: <Bg />,
        title: <Logo />,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    EnableBioAuth: {
      screen: EnableBioAuth,
      navigationOptions: ({ navigation }) => ({
        headerRight: <SettingButton navigation={navigation} />,
        headerBackground: <Bg />,
        title: <Logo />,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    DisableBioAuth: {
      screen: DisableBioAuth,
      navigationOptions: ({ navigation }) => ({
        headerRight: <SettingButton navigation={navigation} />,
        headerBackground: <Bg />,
        title: <Logo />,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    PassphraseBackup: {
      screen: PassphraseBackup,
      navigationOptions: ({ navigation }) => ({
        headerRight: <SettingButton navigation={navigation} />,
        headerBackground: <Bg />,
        title: <Logo />,
        headerLeft: <IconButton
          icon='back'
          title=''
          onPress={() => navigation.pop()}
          style={styles.back}
          iconButtonTitle={styles.backTitle}
          color={colors.light.white} />,
        headerTintColor: colors.light.white,
        headerStyle: {
          backgroundColor: colors.light.blue,
          overflow: 'hidden',
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      }),
    },
    Intro: {
      screen: Intro,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
    headerLayoutPreset: 'center',
    transitionConfig: (props) => {
      const { scene } = props;
      return (scene.routeName === 'SignIn' || scene.routeName === 'Intro') ?
        {
          transitionSpec: {
            duration: 0,
          },
        } : {
          transitionSpec: {
            duration: 300,
          },
        };
    },
  },
);
