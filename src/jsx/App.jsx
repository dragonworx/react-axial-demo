import React from 'react'
import Axial from 'react-axial'
import List from './List.jsx'
import app from './_state'

class App extends Axial.Component {
  render () {
    return (
      <div className="app">
        <h1>Remember...</h1>
        <label>
          To:
          <input ref="text" defaultValue={app.entries.last()} onKeyUp={e => {
            if (e.keyCode === 13) {
              const target = e.target;
              const text = target.value;
              app.list.add(text);
              target.value = app.entries.shiftRight();
            }
          }}/>
          <button onClick={() => {
            const text = this.refs.text.value;
            app.list.add(text);
            this.refs.text.value = app.entries.shiftLeft();
          }}>Add </button>
        </label>
        <button onClick={() => app.list.sort()}>Sort</button>
        <p>{app.validation.errors.length} error{app.validation.errors.plural()}</p>
        {app.validation.errors.map(error => <div>{error.message}</div>)}
        <List></List>
      </div>
    )
  }
}

module.exports = App;