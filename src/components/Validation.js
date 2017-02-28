import Axial from 'react-axial'
import Error from './Error'

const Validation = Axial.define('Validation', {
  hasError: Axial.Boolean,

  errors: Axial.Array(Error),

  onDock (e) {
    e.target.bind('!reject', e => {
      this.errors.add({
        message: e.error.message,
        error: e.error
      });
    })
  }
});

export default Validation