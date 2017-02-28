import React from 'react'
import Axial from 'react-axial'
import app from './_state'

class List extends Axial.Component {
  render() {
    return app.list.items.length === 0
      ?
      <li className="empty not-completed">Empty!</li>
      :
      <ul>
        {
          app.list.items.map(item => {
              return (
                <li data-transition-end={this.onTransitionEnd(e => {
                  if (e.property === 'opacity' && e.value === 0) {
                    item.remove();
                  }
                })}
                    className={item.completed ? 'completed' : 'not-completed'} key={item}>
                  {
                    item.text
                  }
                  <button onClick={() => item.completed = true}>Complete</button>
                  <button onClick={() => item.moveDown()} disabled={item.index() === app.list.items.length - 1}>Down</button>
                  <button onClick={() => item.moveUp()} disabled={item.index() === 0}>Up</button>
                </li>
              )
            }
          )
        }
      </ul>
  }
}

module.exports = List;