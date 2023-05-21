import { View } from 'react-native';
import Text from './component/Text';
import Profile from './screen/profile';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './services/router'; 
const AppNavigator = Routes

function IndexLayout() {
    return (
        <SafeAreaProvider style={{flex:1}} >
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default IndexLayout;