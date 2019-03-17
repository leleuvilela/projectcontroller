'use strict'

const Antl = use('Antl')

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      street: 'required',
      city: 'required',
      state: 'required',
      number: 'number'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = User
