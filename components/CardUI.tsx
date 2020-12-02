import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Appbar, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper'

export const CardUI = (props: { children: { title: any; userId: any}; }) => {
  const {title, userId} = props.children;
  return (
    <Card>
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
    </Card>
  )
};
