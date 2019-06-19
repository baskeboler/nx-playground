import {
  getGreeting,
  getTodos,
  getAddTodoButton,
  getTodoInput
} from '../support/app.po';

describe('myworkspace', () => {
  beforeEach(() => cy.visit('/'));

  // it('should display welcome message', () => {
  //   getGreeting().contains('Welcome to myworkspace!');
  // });

  it('should have 2 todos', () => {
    getTodos()
      .children()
      .should(c => c.length === 2);
  });

  it('should add a  todo', () => {
    getTodos()
      .children()
      .should(c => c.length === 2);

    getTodoInput().type('a new todo');
    getAddTodoButton().click();

    getTodos()
      .children()
      .should(c => c.length === 3);
    getTodos()
      .children()
      .last()
      .contains('a new todo');
  });
});
