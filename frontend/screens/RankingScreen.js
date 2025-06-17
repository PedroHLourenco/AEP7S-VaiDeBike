import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Surface, Text, Title, List, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RankingScreen() {
  const ranking = [
    { nome: 'Gabriel', pontos: 750, distancia: '120 km', tempo: '10h' },
    { nome: 'Ana', pontos: 680, distancia: '110 km', tempo: '9h' },
    { nome: 'Lucas', pontos: 640, distancia: '95 km', tempo: '8h' },
    { nome: 'Carla', pontos: 600, distancia: '90 km', tempo: '7h' },
    { nome: 'João', pontos: 590, distancia: '85 km', tempo: '6h' },
  ];

  const getTrophyIcon = (index) => {
    const colors = ['gold', '#C0C0C0', '#cd7f32']; // ouro, prata, bronze
    return (
      <MaterialCommunityIcons
        name="trophy"
        size={28}
        color={colors[index] || '#00796B'}
        style={{ marginRight: 8 }}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Surface style={styles.card}>
        <Title style={styles.title}>Ranking de Ciclistas</Title>
        <Divider style={styles.divider} />

        {ranking.map((item, index) => (
          <View key={index} style={styles.item}>
            {getTrophyIcon(index)}
            <View>
              <Text style={styles.name}>{`${index + 1}º ${item.nome}`}</Text>
              <Text style={styles.detail}>{`${item.pontos} pontos • ${item.distancia} • ${item.tempo}`}</Text>
            </View>
          </View>
        ))}
      </Surface>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: '#00796B',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    marginBottom: 12,
    backgroundColor: '#00796B40',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
});
