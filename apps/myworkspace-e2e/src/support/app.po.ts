export const getGreeting = () => cy.get('h1');

export const getTodos = () => cy.get('.todo-list ul');
export const getAddTodoButton = () => cy.get('#add-todo');

export const getTodoInput = () => cy.get('.todo-list #tinput');
