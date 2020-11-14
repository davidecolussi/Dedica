import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import SubjectTime from './components/SubjectTime';

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <View>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

    <View style={styles.container}>
      <ScrollView>
        <SubjectTime style={styles.subjectTime} subject_name="Fondamenti di controlli automatici" cfu="9" dedicaTime="35 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Analisi I" cfu="12" dedicaTime="50 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>
        <SubjectTime style={styles.subjectTime} subject_name="Complementi di Fisica II" cfu="6" dedicaTime="30 ore"/>


      </ScrollView>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  subjectTime: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
