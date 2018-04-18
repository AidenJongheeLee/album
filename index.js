import React from 'react';
import styled from 'styled-components';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <AppContainer>
    <Header headerText="Albums" />
    <AlbumList />
  </AppContainer>
);

const AppContainer = styled.View`
  flex: 1;
`;

AppRegistry.registerComponent('albums', () => App);
