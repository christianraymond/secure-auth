import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Forms/Input/Input';
import Message from '../../../components/UI/Message/Message';
import { StyledForm } from '../../../hoc/layout/elements';

import * as actions from '../../../store/actions';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .required('The todo is required.')
    .min(4, 'Too short.'),
  description: Yup.string()
    .required('The description is required.')
    .min(4, 'Too short.'),
});

const InputTodo = ({ editTodo, close, opened, createTodo, loading, error, editTodoAction, token}) => {

  const loadingText = editTodo ? 'Editing...' : 'Creatinging...';

  return (
    <>
      <Modal opened={opened} close={close}>
        <Heading noMargin size="h1" color="white">
          {editTodo ? 'Edit your todo' : 'Create your new todo'}
        </Heading>
        <Heading bold size="h4" color="white">
          {editTodo
            ? 'Edit your todo and tap edit'
            : 'Type your todo and press create'}
        </Heading>
        <Formik
          initialValues={{
            // title: editTodo ? editTodo.title : '',
            title: '',
            description: '',
            isComplete: [],
          }}
          validationSchema={TodoSchema}
          onSubmit={async (todoValues, { setSubmitting, resetForm }) => {
            const res = editTodo ? await editTodoAction(editTodo.id, todoValues) : await createTodo(todoValues, token);
            if (res) {
              close();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <Field
                type="text"
                name="title"
                placeholder="Write your todo..."
                component={Input}
              />
             <Field
                type="text"
                name="description"
                placeholder="Description..."
                component={Input}
              />
              <label>
              isComplete &nbsp;&nbsp;
              <Field
                type="checkbox"
                name="isComplete"
                value="isComplete"
              />
              </label>
              <ButtonsWrapper>
                <Button
                  contain
                  color="main"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={loading ? loadingText : null}
                >
                  {editTodo ? 'Edit todo' : 'Create todo'}
                </Button>
                <Button
                  type="button"
                  color="main"
                  contain
                  onClick={() => {
                    close();
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => { 
 return {
  loading: state.loading,
  error: state.error,
  token: state.auth.token,
  initialValues: state.todos.selectedTodo
 }
}

const mapDispatchToProps = {
  createTodo: actions.createTodo,
  editTodoAction: actions.editTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTodo);
