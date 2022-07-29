import { ICreateUserRequestDTO } from './CreateUserDTO'
const validator = require('validator')

export class CreateUserValidator {
  async validate(data: ICreateUserRequestDTO) {
    if (validator.isEmpty(data.name)) throw new Error('Name is required')

    if (validator.isEmpty(data.email)) throw new Error('Email is required')

    if (!validator.isEmail(data.email)) throw new Error('Invalid email')

    if (validator.isEmpty(data.password))
      throw new Error('Password is required')

    if (validator.isEmpty(data.level)) throw new Error('Level is required')

    if (!validator.isIn(data.level, ['admin', 'user']))
      throw new Error('Invalid level')
  }
}
