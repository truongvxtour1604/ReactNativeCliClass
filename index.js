/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppClass from './AppClass';
import AppLap from './AppLap';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppLap);
