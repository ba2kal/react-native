import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './component/Button';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.default}>SaharaCat</Text>
      </View>
      <View style={styles.content1}>
        <Image
          style={styles.mainImage} 
          source={require('./images/main-cat.jpg')}/>
      </View>
      <View style={styles.content2}>
        <Button></Button>
      </View>
      <View style={styles.AD}>
        <Text>광고자리다!!!!!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.default}>by Kim DongHyun</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width:'100%',
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  content1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content2: {
    width:'100%',
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  AD: {
    width:'100%',
    height:'7%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  footer: {
    width: '100%',
    height:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  default: {
    color: 'black',
  },
  mainImage: {
    height:'100%',
    width:'100%', 
    resizeMode:'contain',
  }

});
