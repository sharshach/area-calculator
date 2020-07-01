import React from 'react';
import DataInput from './components/DataInput.jsx';
import {SafeAreaView,StatusBar} from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={{flex:1,  backgroundColor: '#aefca7' }}>
      <StatusBar backgroundColor="blue" />
    
      <DataInput/>
    </SafeAreaView>
  );
}
