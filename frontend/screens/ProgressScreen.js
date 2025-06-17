import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, ProgressBar, Divider, List, Avatar } from 'react-native-paper';

export default function ProgressScreen() {
  const progresso = 0.65;

  return (
    <ScrollView style={styles.container}>
      {/* Perfil do usuário */}
      <Card style={styles.card} theme={{ colors: { surface: '#fff' } }}>
        <Card.Title
          title="Gabriel"
          subtitle="Ciclista Nível Intermediário"
          left={(props) => <Avatar.Icon {...props} icon="account" color="#fff" style={styles.avatar} />}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
      </Card>

      {/* Progresso Mensal */}
      <Card style={styles.card} theme={{ colors: { surface: '#fff' } }}>
        <Card.Title title="Meta de Atividade" titleStyle={styles.title} />
        <Card.Content>
          <Paragraph style={styles.label}>Horas pedaladas este mês:</Paragraph>
          <Paragraph style={styles.value}>6h</Paragraph>
          <ProgressBar progress={progresso} color="#009688" style={{ marginTop: 8 }} />
          <Paragraph style={styles.metaTexto}>{Math.round(progresso * 100)}% da meta mensal atingida</Paragraph>
        </Card.Content>
      </Card>

      {/* Estatísticas */}
      <Card style={styles.card} theme={{ colors: { surface: '#fff' } }}>
        <Card.Title title="Resumo dos Trajetos" titleStyle={styles.title} />
        <Card.Content>
          <List.Item title="Total de Trajetos" description="12 percursos registrados" left={props => <List.Icon {...props} icon="map-marker-path" />} />
          <Divider />
          <List.Item title="Distância Total" description="74 km pedalados" left={props => <List.Icon {...props} icon="map" />} />
          <Divider />
          <List.Item title="Média por Trajeto" description="6,2 km por trajeto" left={props => <List.Icon {...props} icon="speedometer" />} />
        </Card.Content>
      </Card>

      {/* Pontuação */}
      <Card style={styles.card} theme={{ colors: { surface: '#fff' } }}>
        <Card.Title title="Pontuação e Recompensas" titleStyle={styles.title} />
        <Card.Content>
          <List.Item title="Pontos Acumulados" description="480 pontos" left={props => <List.Icon {...props} icon="star" />} />
          <Divider />
          <List.Item title="Recompensa Ativa" description="10% de desconto em oficina parceira" left={props => <List.Icon {...props} icon="gift" />} />
        </Card.Content>
      </Card>

      {/* Últimos Trajetos */}
      <Card style={styles.card} theme={{ colors: { surface: '#fff' } }}>
        <Card.Title title="Últimos Trajetos" titleStyle={styles.title} />
        <Card.Content>
          <List.Item title="Centro → Parque do Ingá" description="5.4 km • 30min" left={props => <List.Icon {...props} icon="bike" />} />
          <Divider />
          <List.Item title="Terminal → Vila Olímpica" description="6.2 km • 35min" left={props => <List.Icon {...props} icon="bike" />} />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    padding: 12,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#fff',
  },
  title: {
    color: '#00796B',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
  },
  avatar: {
    backgroundColor: '#00796B',
  },
  metaTexto: {
    marginTop: 8,
    fontWeight: '500',
    color: '#004d40',
  },
  label: {
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
