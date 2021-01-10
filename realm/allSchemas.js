import database from '@react-native-firebase/database';
import { AppRegistry } from 'react-native';

database()
    .setPersistenceEnabled(true)
    .then(() => console.log('Realtime Database persistence enabled'));
await database().goOffline();
AppRegistry.registerComponent('app', () => App);

// todo: enable firebase for local storage