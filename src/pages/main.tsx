import React, { useState } from 'react';
import Form from '../components/form/form';
import Header from '../components/header/header';
import { Container } from '../styles/containerStyled';
import { Section, Headline, Status, TopPosts } from '../styles/mainStyled';

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const onSearch = async (subreddit: string) => {
    setStatus('loading');
    const url = `https://www.reddit.com/r/${subreddit}/top.json`;
    const response = await fetch(url);
    const { data } = await response.json();
    setPosts(data.children);
    setStatus('resolved');
  };

  return (
    <Header>
      <Container>
        <Section>
          <Headline>Find the top posts on Reddit</Headline>
          <Form onSearch={onSearch} />
        </Section>
        {status === 'loading' && <Status>Is loading</Status>}
        {status === 'resolved' && <TopPosts>Number of top posts: {posts.length}</TopPosts>}
      </Container>
    </Header>
  );
};

export default Main;
