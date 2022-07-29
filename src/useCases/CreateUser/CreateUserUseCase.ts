import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import { CreateUserValidator } from './CreateUserValidator'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private createUserValidator: CreateUserValidator
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    await this.createUserValidator.validate(data)

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadyExists) throw new Error('User already exists')

    const user = new User(data)
    await this.usersRepository.save(user)
  }
}
