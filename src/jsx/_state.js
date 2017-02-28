import App from '../components/App'
import Validation from '../components/Validation'

module.exports = App.new({
  'list.items': [
    {text:'get milk'},
    {text:'post letter'},
    {text:'buy bread'}
  ],
  validation: Validation.new()
});