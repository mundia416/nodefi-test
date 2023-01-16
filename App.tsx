/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NodeKitProvider} from '@node-fi/react-native-sdk';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

const API_KEY = 'd4760799-e94d-4424-89dd-322d5c84694f';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NodeKitProvider apiKey={API_KEY}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NodeKitProvider>
  );
}

export default App;
