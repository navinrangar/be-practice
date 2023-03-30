import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'boat_goals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
        table.string('boat_name');
        table.bigint('cages');
        table.float('yield');
        table.bigint('weight');
        table.string('specie_name');
        table.string('shift');
        table.string('goal_for');
  

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
