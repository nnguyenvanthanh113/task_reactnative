import { StatusBar } from 'expo-status-bar';
// import reactDom from 'react-dom';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}> 01</Text>
              </View>
              <Text style={styles.content}>Lau nha</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>02</Text>
              </View>
              <Text style={styles.content}>Rua chen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>03</Text>
              </View>
              <Text style={styles.content}>Di choi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>02</Text>
              </View>
              <Text style={styles.content}>Rua chen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>03</Text>
              </View>
              <Text style={styles.content}>Di choi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>02</Text>
              </View>
              <Text style={styles.content}>Rua chen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>03</Text>
              </View>
              <Text style={styles.content}>Di choi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>02</Text>
              </View>
              <Text style={styles.content}>Rua chen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>03</Text>
              </View>
              <Text style={styles.content}>Di choi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>02</Text>
              </View>
              <Text style={styles.content}>Rua chen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>03</Text>
              </View>
              <Text style={styles.content}>Di choi</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.Text}>bottom</Text>
      </View>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffff',
  },
  body: {
    paddingHorizontal: 18,
    paddingVertical: 25,
    flex: 5,
  },
  header: {
    color: '#21a3d0',
    fontSize: 21,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  bottom: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#cce0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  content: {
    width: '80%',
    fontSize: 16,
  },
  items: {
    marginTop: 25,
  }

});
