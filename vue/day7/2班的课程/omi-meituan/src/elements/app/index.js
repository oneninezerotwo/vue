import { define, WeElement } from 'omi'
import logo from './logo.svg'
import '../app-intro'
import 'omiu/button'

import '../mt-header/mt-header.omi.jsx'
import '../mt-navigation/mt-navigation.omi.jsx'

define('my-app', class extends WeElement {
  static css = require('./_index.less')
  name = 'Omi'
  clickHandler = () => {
    this.name = 'Omio'
    this.update()
  }
  render() {
    return (
      <div class="_3titDnO9z79JXkaOV-6j8-">
        <mt-header/>
        <mt-navigation/>
      </div>
    )
  }
})
