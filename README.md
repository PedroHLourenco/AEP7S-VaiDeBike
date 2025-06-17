# VaiDeBike Maringá 🚴️

Aplicativo voltado para a promoção da mobilidade urbana ativa em Maringá, incentivando o uso da bicicleta como meio de transporte sustentável, seguro e conectado com a cidade.

## 🚀 Visão Geral

O VaiDeBike Maringá é um aplicativo desenvolvido com React Native e JavaScript, que oferece uma experiência interativa para ciclistas urbanos. Ele integra funcionalidades essenciais para quem pedala pela cidade, incluindo mapas, rotas seguras, pontos de apoio e acompanhamento de progresso.

## 🔄 Funcionalidades

### 🌍 Mapa Interativo

Visualização de ciclovias e rotas seguras.

Marcadores de pontos de apoio, como:

Bebedouros

Bombas de ar

Banheiros

Bicicletários

Interface amigável e responsiva com botões de navegação para telas de progresso e ranking.

### 📊 Meu Progresso

Visualização do número de trajetos completados.

Tempo total de atividade mensal.

Barra de progresso para metas mensais.

Pontuação acumulada.

Novo: distância total pedalada e dias ativos no mês.

### 🏆 Ranking de Ciclistas

Lista dos top ciclistas da comunidade.

Exibição de pontos acumulados.

Estímulo com desafios mensais e recompensas simbólicas.

Exibição da sua posição no ranking.

### ⚠️ Dicas de Segurança

Recomendações para deslocamentos mais seguros (em fase de implementação).

## 📑 Tecnologias Utilizadas

React Native

JavaScript

React Navigation

react-native-maps

react-native-paper

Axios (para integração com backend)

## 🚫 Requisitos

Node.js

Expo CLI

Android Studio / Xcode (para testes em emulador ou dispositivo físico)

## ⚖️ Licença

Este projeto é de uso educacional e colaborativo, desenvolvido para promover a sustentabilidade urbana.

## ▶️ Como Rodar o Projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/VaiDeBike-Maringa.git
cd VaiDeBike-Maringa
Instale as dependências do frontend:

bash
Copiar
Editar
cd frontend
npm install
Inicie o app com o Expo:

bash
Copiar
Editar
npx expo start
Isso abrirá uma aba no navegador com o QR Code. Use o app Expo Go no celular ou um emulador Android/iOS para visualizar.

(Opcional) Subir o backend (caso esteja incluso):

bash
Copiar
Editar
cd ../backend
npm install
npm run dev
O backend precisa estar rodando para as funcionalidades de login funcionarem corretamente. Certifique-se de atualizar o IP no arquivo LoginScreen.js se for necessário.
