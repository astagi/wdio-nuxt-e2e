const TodoListPage = require('../pageObjects/main.page')

describe('Todolist', () => {
  it('should open correct app', () => {
    TodoListPage.open()
    expect(browser).toHaveTitle('todolist')
  })
  it('should add items to the list correctly', () => {
    TodoListPage.open()
    TodoListPage.addListItems(['Milk', 'Apples', '1 Banana'])
    expect(TodoListPage.listSize).toEqual(3)
  })
  it('should complete items correctly', () => {
    TodoListPage.open()
    TodoListPage.addListItems(['Milk', 'Apples', '1 Banana', 'Meat'])
    expect(TodoListPage.listSize).toEqual(4)
    expect(TodoListPage.isItemCompletedAt(2)).toBeFalsy()
    TodoListPage.completeItemAt(2)
    expect(TodoListPage.isItemCompletedAt(2)).toBeTruthy()
  })
})
