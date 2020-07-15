import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import config from 'react-native-ultimate-config';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        <Text style={styles.title}>{config.APP_NAME}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: config.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
