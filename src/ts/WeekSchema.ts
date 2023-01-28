import LessonPairSchema from './LessonPairSchema'

export default class WeekSchema {
    private readonly _lessonPairSchemas = new Array<LessonPairSchema>(8).fill(new LessonPairSchema())

    public get lessonPairsSchemas () {
      return this._lessonPairSchemas
    }
}
