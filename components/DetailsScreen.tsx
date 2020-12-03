import React, {useState, useEffect} from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import {Appbar, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper'

export const DetailsScreen = ({navigation, route}: any) => {
  const { item: {id, userId, title} } = route.params;
  const [data, setData] = useState([]);

  console.log({id, userId, title})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => console.log('something went wrong'))
  }, [])

  console.log(data)
  
  return (
    <Card >
      
      <Card.Content>
        <Title>ID: {id}</Title>
        <Paragraph>User ID: {userId}</Paragraph>
        <Paragraph>Title: {title}</Paragraph>
      </Card.Content>

      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

      <Card.Content>
        <Title>{data.name} / {data.username} - userId: {data.id}</Title>
        <Paragraph>{data.email} / {data.phone}</Paragraph>
        <Paragraph>Address: </Paragraph>
      </Card.Content>

      <Card.Actions>
        <Button onPress={() => navigation.navigate("Home")}>To Home</Button>
        <Button onPress={() => console.log("Link to Website")}>{data.website}</Button>
      </Card.Actions>

    </Card>
  );
}