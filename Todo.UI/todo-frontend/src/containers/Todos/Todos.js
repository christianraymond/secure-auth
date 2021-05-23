import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import Heading from "../../components/UI/Headings/Heading";
import { Container } from "../../hoc/layout/elements";
import InputTodo from "./InputTodo/InputTodo";
import Button from "../../components/UI/Forms/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import Todo from "./Todo/Todo";
import { getTodos } from "../../store/actions/todoActions";

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

const Todos = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  // debugger
  const { todos, token } = props;

  useEffect(() => {
    getTodos(props.token);
    console.log('mounted !')
  }, [todos]);

  let content;
  if (!todos) {
    content = (
      <Content>
        <Loader isWhite />
      </Content>
    );
  } else if (!todos[token] || !todos[token].todos) {
    content = (
      <Content>
        <Heading color="white" size="h2">
          You have no todos!
        </Heading>
      </Content>
    );
  } else if (todos[token].todos.length === 0) {
    content = (
      <Content>
        <Heading color="white" size="h2">
          You have no todos!!
        </Heading>
      </Content>
    );
  } else {
    content = (
      <Content>
        {todos[token].todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
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
          <Button color="main" contain onClick={() => setIsAdding(true)}>
            Add Todo
          </Button>
          <InputTodo opened={isAdding} close={() => setIsAdding(false)} />
          {todos}
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  token: state.auth.token,
  error: state.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
