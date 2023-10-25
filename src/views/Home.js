import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import Skeleton from 'components/molecules/Skeleton/Skeleton';

const getUsers = gql`
  {
    users(options: { paginate: { limit: 8 } }) {
      data {
        id
        name
        email
        phone
        website
        company {
          name
          catchPhrase
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px;
  gap: 30px;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.black};
  padding: 10px;

  ${({ theme }) => theme.mq.tablet} {
    width: 45%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 23%;
  }
`;

const Paragraph = styled.p`
  font-weight: ${({ theme, isBold }) => isBold && theme.font.weight.bold};
  margin: 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
  background-color: ${({ theme }) => theme.white};
  padding: 20px 0;
  margin: 40px 0 20px;
  border: 2px solid ${({ theme }) => theme.black};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.black};
`;

const Home = () => {
  const [users, setUsers] = useState([]);

  const { loading, error, data } = useQuery(getUsers);

  useEffect(() => {
    if (!loading) {
      setUsers(data.users.data);
    }
  }, [loading]);

  return (
    <Wrapper>
      <h1 style={{ width: '100%' }}>React Developer Recruitment Task</h1>
      <p style={{ width: '100%' }}>
        App with posts of users with ability to manage posts and comments.
      </p>
      {loading && <Skeleton />}
      {users.map(({ id, name, email, phone, website, company }) => (
        <Card key={id}>
          <Paragraph isBold>{name}</Paragraph>
          <LinksWrapper>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone.split(' ')[0]}`}>{phone.split(' ')[0]}</a>
            <a rel="noreferrer" target="_blank" href={website}>
              {website}
            </a>
          </LinksWrapper>
          <Paragraph>{company.name}</Paragraph>
          <Paragraph>{company.catchPhrase}</Paragraph>
          <Button>Details</Button>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Home;
