import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface AddGameProps {
  onAddGame: (game: { titre: string; prix: number; genre: string }) => void;
}

export default function AddGame({ onAddGame }: AddGameProps) {
  const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddGame = () => {
    if (titre && prix && genre) {
      onAddGame({
        titre,
        prix: parseInt(prix),
        genre,
      });
      setTitre('');
      setPrix('');
      setGenre('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un jeu</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Titre du jeu"
        value={titre}
        onChangeText={setTitre}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Prix"
        value={prix}
        onChangeText={setPrix}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleAddGame}>
        <Text style={styles.buttonText}>+ Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 