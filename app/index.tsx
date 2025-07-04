import React, { useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import AddGame from './components/AddGame';
import FilterSection from './components/FilterSection';
import GamesList from './components/GamesList';
import Header from './components/Header';
import Splash from './splash';

interface Game {
  id: number;
  titre: string;
  prix: number;
  genre: string;
}

const defaultGames: Game[] = [
  {
    "id": 1,
    "titre": "The Last of Us Part II",
    "prix": 25,
    "genre": "Action-Aventure"
  },
  {
    "id": 2,
    "titre": "FIFA 23",
    "prix": 20,
    "genre": "Sport"
  },
  {
    "id": 3,
    "titre": "Call of Duty: Modern Warfare II",
    "prix": 30,
    "genre": "FPS"
  },
  {
    "id": 4,
    "titre": "Horizon Forbidden West",
    "prix": 28,
    "genre": "Action-RPG"
  },
  {
    "id": 5,
    "titre": "Mario Kart 8 Deluxe",
    "prix": 35,
    "genre": "Course"
  },
  {
    "id": 6,
    "titre": "Animal Crossing: New Horizons",
    "prix": 22,
    "genre": "Simulation"
  },
  {
    "id": 7,
    "titre": "Elden Ring",
    "prix": 32,
    "genre": "Action-RPG"
  },
  {
    "id": 8,
    "titre": "God of War Ragnarök",
    "prix": 40,
    "genre": "Action-Aventure"
  },
  {
    "id": 9,
    "titre": "Gran Turismo 7",
    "prix": 27,
    "genre": "Course"
  },
  {
    "id": 10,
    "titre": "Minecraft",
    "prix": 18,
    "genre": "Sandbox"
  },
  {
    "id": 11,
    "titre": "Fortnite",
    "prix": 0,
    "genre": "Battle Royale"
  },
  {
    "id": 12,
    "titre": "Red Dead Redemption 2",
    "prix": 23,
    "genre": "Action-Aventure"
  },
  {
    "id": 13,
    "titre": "Cyberpunk 2077",
    "prix": 15,
    "genre": "RPG"
  },
  {
    "id": 14,
    "titre": "Resident Evil Village",
    "prix": 19,
    "genre": "Horreur"
  },
  {
    "id": 15,
    "titre": "Assassin's Creed Valhalla",
    "prix": 21,
    "genre": "Action-Aventure"
  }
];

export default function Index() {
  const [games, setGames] = useState<Game[]>(defaultGames);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [showSplash, setShowSplash] = useState(true);

  const handleAddGame = (newGame: { titre: string; prix: number; genre: string }) => {
    const game: Game = {
      id: games.length + 1,
      ...newGame,
    };
    setGames([...games, game]);
  };

  const handleDeleteGame = (id: number) => {
    const updatedGames = games.filter(game => game.id !== id);
    setGames(updatedGames);
  };

  let filteredGames = games;
  if (selectedGenre !== '') {
    filteredGames = games.filter(game => game.genre === selectedGenre);
  }

  const handleStart = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <Splash onStart={handleStart} />;
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <Header gameCount={games.length} />
      <ImageBackground 
        source={require('../assets/images/bg.jpg')} 
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <AddGame onAddGame={handleAddGame} />
          <FilterSection 
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
          <GamesList games={filteredGames} onDeleteGame={handleDeleteGame} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.8,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
