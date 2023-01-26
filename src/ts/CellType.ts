type CellField = {
    width: string
}

export default class CellType {
    public static readonly SUBJECT = new CellType('SUBJECT', { width: '170px' })
    public static readonly TARGET = new CellType('TARGET', { width: '50px' })
    public static readonly TEACHER = new CellType('TEACHER', { width: '170px' })
    public static readonly AUDIENCE = new CellType('AUDIENCE', { width: '50px' })

    // eslint-disable-next-line no-useless-constructor
    private constructor (
        public readonly key: string,
        public readonly value: CellField
    ) {
    }

    toString () {
      return `CellType [key: ${this.key}, value: ${this.value}]`
    }
}
