import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SubjectTime from './components/SubjectTime';

export default function App() {
  return (
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
