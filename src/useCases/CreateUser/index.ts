import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserValidator } from './CreateUserValidator'

const postgresUsersRepository = new PostgresUsersRepository()
const createUserValidator = new CreateUserValidator()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  createUserValidator
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
