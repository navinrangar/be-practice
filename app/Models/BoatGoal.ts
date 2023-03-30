import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BoatGoal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public boatName: string

  @column()
  public cages: number

  @column()
  public yield: number

  @column()
  public weight: number

  @column()
  public specieName: string

  @column()
  public shift: string

  @column()
  public goalFor: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}