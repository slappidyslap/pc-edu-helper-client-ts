import WeekSchema from './WeekSchema'

export default class GroupSchema {
    private readonly _name: string
    private readonly _weekSchemas = Array<WeekSchema>(6).fill(new WeekSchema())

    constructor (name: string) {
      this._name = name
    }

    public get name (): string {
      return this._name
    }

    public get weekSchemas () {
      return this._weekSchemas
    }
}
