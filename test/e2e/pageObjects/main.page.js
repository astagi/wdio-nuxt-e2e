class TodoListPage {
  get itemInput () { return $('input[type=text]') }
  get listItems () { return $$('.todolist__item') }
  get listSize () { return this.listItems.length }

  open (path = '/') {
    browser.url(path)
  }

  addListItem (item) {
    this.itemInput.setValue(`${item}\n`)
  }

  addListItems (items) {
    items.map((item) => {
      this.addListItem(item)
    })
  }

  isItemCompletedAt (position) {
    return this.listItems[position].getAttribute('class').includes('done')
  }

  completeItemAt (position) {
    this.listItems[position].click()
  }
}

module.exports = new TodoListPage()
