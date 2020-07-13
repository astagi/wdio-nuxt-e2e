const Page = require('../pageObjects/main.page')

describe('Example test', () => {
  it('should open correct app', () => {
    Page.open()
    expect(browser).toHaveTitle('todolist')
  })
  it('should add items to the list correctly', () => {
    Page.open()
    Page.addListItems(['Milk', 'Apples', '1 Banana'])
    expect(Page.listItems.length).toEqual(3)
  })
  it('should remove items from list correctly', () => {
    Page.open()
    Page.addListItems(['Milk', 'Apples', '1 Banana', 'Meat'])
    expect(Page.listItems.length).toEqual(4)
    expect(Page.listItems[2].getAttribute('class')).not.toContain('done')
    Page.listItems[2].click()
    expect(Page.listItems[2].getAttribute('class')).toContain('done')
  })
})
