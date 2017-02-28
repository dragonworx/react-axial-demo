import Axial from 'react-axial'

const Error = Axial.define('Error', {
  message: Axial.String,
  error: Axial.Object
});

export default Error