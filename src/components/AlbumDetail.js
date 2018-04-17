import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <AlbumDetailText>{album.title}</AlbumDetailText>
    </CardSection>
  </Card>
);

const AlbumDetailText = styled.Text``;

export default AlbumDetail;
