import React from 'react';
import styled from 'styled-components';
import { Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <ImageContainer>
          <ThumbnailImage source={{ uri: thumbnail_image }} />
        </ImageContainer>
        <TextContainer>
          <AlbumDetailText title>{title}</AlbumDetailText>
          <Text>{artist}</Text>
        </TextContainer>
      </CardSection>

      <CardSection>
        <AlbumImage source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const AlbumDetailText = styled.Text`
  font-size: ${props => (props.title ? '18px' : '12px')};
`;
const ImageContainer = styled.View`
  margin-right: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.View`
  justify-content: space-around;
  flex-direction: column;
`;
const ThumbnailImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const AlbumImage = styled.Image`
  height: 300px;
  flex: 1;
  width: null;
`;

export default AlbumDetail;
