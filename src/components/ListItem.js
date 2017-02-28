import Axial from 'react-axial'

const ListItem = Axial.define('ListItem', {
  list: Axial.Reference,
  text: 'Item',
  completed: false,

  complete () {
    this.completed = true;
  },

  unComplete () {
    this.completed = false;
  },

  remove () {
    this.list.items.remove(this);
  },

  moveUp () {
    this.list.items.moveUp(this);
  },

  moveDown () {
    this.list.items.moveDown(this);
  },

  index () {
    return this.list.items.indexOf(this);
  }
});


export default ListItem;