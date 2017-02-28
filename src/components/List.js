import Axial from 'react-axial'
import ListItem from './ListItem'

const List = Axial.define('List', {
  init: function () {
    this.items.forEach(item => item.list = this);
  },

  items: Axial.Array(ListItem),

  add (text) {
    if (text.length) {
      this.items.push({
        list: this,
        text: text,
        completed: false
      });
    }
  },

  sort () {
    this.items.sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);
  }
});

export default List;