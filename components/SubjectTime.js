import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SubjectTime extends React.Component {

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.subjectText}>{this.props.subject_name}</Text>
            <Text style={styles.cfuText}>Cfu dichiarati: {this.props.cfu}</Text>
            <Text style={styles.dedicaText}>Tempo di studio effettivo da dedicare: {this.props.dedicaTime}</Text>
          </View>
        );
    };
}

const styles = StyleSheet.create({
  container: {
    'marginBottom': 10
  },
  subjectText: {
    'backgroundColor': "#fff00f",
  },
  cfuText: {
    'backgroundColor': "lightblue"
  },
  dedicaText: {
    'backgroundColor': "lightgreen"
  }
});
export default SubjectTime;
