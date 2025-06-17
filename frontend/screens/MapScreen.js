import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Modal, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, IconButton } from 'react-native-paper';

export default function MapScreen({ navigation }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.420999,
          longitude: -51.933056,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Rotas seguras */}
        <Polyline
          coordinates={[
            { latitude: -23.420999, longitude: -51.933056 },
            { latitude: -23.418, longitude: -51.930 },
            { latitude: -23.415, longitude: -51.927 }
          ]}
          strokeColor="#009688"
          strokeWidth={5}
        />

        {/* Pontos de apoio */}
        <Marker coordinate={{ latitude: -23.418, longitude: -51.930 }} title="Bicicletário">
          <MaterialCommunityIcons name="bike" size={28} color="#009688" />
        </Marker>
        <Marker coordinate={{ latitude: -23.415, longitude: -51.927 }} title="Posto de Apoio">
          <MaterialCommunityIcons name="tools" size={28} color="#00796B" />
        </Marker>
        <Marker coordinate={{ latitude: -23.419, longitude: -51.931 }} title="Bebedouro">
          <MaterialCommunityIcons name="cup-water" size={28} color="#00796B" />
        </Marker>
        <Marker coordinate={{ latitude: -23.417, longitude: -51.928 }} title="Banheiro">
          <MaterialCommunityIcons name="toilet" size={28} color="#00796B" />
        </Marker>
      </MapView>

      {/* Modal de Dicas de Segurança */}
      <Modal visible={showTips} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Dicas de Segurança</Text>
            <Text>• Use capacete e iluminação noturna.</Text>
            <Text>• Sinalize suas manobras com o braço.</Text>
            <Text>• Faça revisões periódicas na bicicleta.</Text>
            <Text>• Evite fones de ouvido durante o trajeto.</Text>
            <Button onPress={() => setShowTips(false)} style={{ marginTop: 16 }}>
              Fechar
            </Button>
          </View>
        </View>
      </Modal>

      {/* Botões flutuantes */}
      <View style={styles.floatingButtons}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Progresso')}
        >
          Ver Meu Progresso
        </Button>
        <Button
          mode="outlined"
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('Ranking')}
        >
          Ver Ranking
        </Button>
      </View>

      {/* Botão flutuante no canto superior direito */}
      <IconButton
        icon="help-circle"
        size={28}
        style={styles.tipsButton}
        onPress={() => setShowTips(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  floatingButtons: {
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
    gap: 8,
  },
  button: {
    backgroundColor: '#00796B',
  },
  buttonSecondary: {
    borderColor: '#00796B',
  },
  tipsButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    backgroundColor: 'white',
    elevation: 3,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 24,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 12,
  },
});
