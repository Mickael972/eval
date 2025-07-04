import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GameItem from './GameItem';

interface Game {
  id: number;
  titre: string;
  prix: number;
  genre: string;
}

interface GamesListProps {
  games: Game[];
  onDeleteGame: (id: number) => void;
}

export default function GamesList({ games, onDeleteGame }: GamesListProps) {
  return (
    <ScrollView style={styles.container}>
      {games.map((game) => (
        <GameItem key={game.id} game={game} onDelete={onDeleteGame} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 