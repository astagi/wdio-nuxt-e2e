class Page {
  get itemInput () { return $('input[type=text]') }
  get listItems () { return $$('.todolist__item') }

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
}

module.exports = new Page()
