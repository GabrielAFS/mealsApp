import { Platform } from 'react-native';

export function isNewestAndroid() {
    return Platform.OS === 'android' && Platform.Version >= 21
}