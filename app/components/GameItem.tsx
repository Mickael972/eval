import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Game {
  id: number;
  titre: string;
  prix: number;
  genre: string;
}

interface GameItemProps {
  game: Game;
  onDelete: (id: number) => void;
}

export default function GameItem({ game, onDelete }: GameItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.gameInfo}>
        <Text style={styles.title}>{game.titre}</Text>
        <Text style={styles.price}>{game.prix}€</Text>
        <Text style={styles.genre}>{game.genre}</Text>
      </View>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(game.id)}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  genre: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 3,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 