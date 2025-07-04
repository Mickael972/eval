import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FilterSectionProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export default function FilterSection({ selectedGenre, onGenreChange }: FilterSectionProps) {
  const genres = ['Tous', 'Action-Aventure', 'Sport', 'FPS', 'Action-RPG', 'Course', 'Simulation', 'Sandbox', 'Battle Royale', 'RPG', 'Horreur'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrer par catégorie</Text>
      <View style={styles.buttonContainer}>
        {genres.map((genre) => {
          let isSelected = false;
          if (genre === 'Tous') {
            isSelected = selectedGenre === '';
          } else {
            isSelected = selectedGenre === genre;
          }
          
          return (
            <TouchableOpacity
              key={genre}
              style={[styles.button, isSelected && styles.selectedButton]}
              onPress={() => {
                if (genre === 'Tous') {
                  onGenreChange('');
                } else {
                  onGenreChange(genre);
                }
              }}
            >
              <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
                {genre}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: '#e9ecef',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  selectedButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  buttonText: {
    fontSize: 12,
    color: '#495057',
  },
  selectedButtonText: {
    color: 'white',
  },
}); 