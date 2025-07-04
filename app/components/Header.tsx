import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  gameCount: number;
}

export default function Header({ gameCount }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.pseudo}>Madaboy</Text>
      <Text style={styles.count}>{gameCount} jeux</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2c3e50',
    borderBottomWidth: 2,
    borderBottomColor: '#34495e',
  },
  pseudo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  count: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
}); 