import Axial from 'react-axial'
import List from './List'
import Validation from './Validation'

const App = Axial.define('App', {
  entries: Axial.Array(Axial.String)
    .value(['pick up laundry', 'pick up cake', 'drop off suite', 'get car fixed']),

  entryText: Axial.String,

  list: List,

  validation: Validation
});

export default App;