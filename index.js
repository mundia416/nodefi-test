/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './shim.js'

require('@node-fi/react-native-sdk/setup');

AppRegistry.registerComponent(appName, () => App);
