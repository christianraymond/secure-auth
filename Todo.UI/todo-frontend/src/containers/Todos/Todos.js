import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import axios from 'axios';

import Heading from '../../components/UI/Headings/Heading';
import { Container } from '../../hoc/layout/elements';
import InputTodo from './InputTodo/InputTodo';
import Button from '../../components/UI/Forms/Button/Button';
import Loader from '../../components/UI/Loader/Loader';
import Todo from './Todo/Todo';

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  flex-direction: column;
  margin-top: 2rem;
`;

const Todos = props => {
  const items = props.todos;

  const [isCreating, setIsCreating] = useState(false);
  let content;
  if (!items) {
    content = (
      <Content>
        <Loader isWhite />
      </Content>
    );
  } else if (!items[props.token] || !items[props.token].items) {
    content = (
      <Content>
        <Heading color="white" size="h2">
          You have no todos!
        </Heading>
      </Content>
    );
  } else if (items[props.token].items.length === 0) {
    content = (
      <Content>
        <Heading color="white" size="h2">
          You have no todos!
        </Heading>
      </Content>
    );
  } else {
    content = (
      <Content>
        {items[props.token].item
          .slice(0)
          .reverse()
          .map(item => (
            <Todo key={item.id} item={item} />
          ))}
      </Content>
    );
  }

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size="h1" color="white">
            Your Todos
          </Heading>
          <Heading bold size="h4" color="white">
            All you have to do for now...
          </Heading>
          <Button color="main" contain onClick={() => setIsCreating(true)}>
            Create Todo
          </Button>
          <InputTodo opened={isCreating} close={() => setIsCreating(false)} />
          {content}
          {props.item}
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ( state ) => {
  return {
    todos: state.todos,
    token: state.auth.token,
    error: state.todos.error,
    todos: state.todos.items
  }
}

export default connect(mapStateToProps, null)(Todos)