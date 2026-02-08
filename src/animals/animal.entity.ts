import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  species: string

  @Column({ nullable: true })
  age: number
}
