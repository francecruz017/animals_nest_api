import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { User } from './user.entity'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    private jwt: JwtService,
  ) {}

  async register(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10)
    await this.users.save({ email, password: hash })
    return { message: 'User registered successfully' }
  }

  async login(email: string, password: string) {
    const user = await this.users.findOne({
      where: { email },
      select: ['id', 'password'],
    })

    if (!user) throw new UnauthorizedException()

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) throw new UnauthorizedException()

    return {
      access_token: this.jwt.sign({ sub: user.id }),
    }
  }
}
