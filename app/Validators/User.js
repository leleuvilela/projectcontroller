'use strict'

const Antl = use('Antl')

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      'addresses.*.street': 'required',
      'addresses.*.city': 'required',
      'addresses.*.state': 'required',
      'addresses.*.number': 'number'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = User
