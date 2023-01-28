import LessonSchema from './LessonSchema'

export default class LessonPairSchema {
    private readonly _firstLessonSchema = LessonSchema.empty()
    private readonly _secondLessonSchema = LessonSchema.empty()

    public get firstLessonSchema () {
      return this._firstLessonSchema
    }

    public get secondLessonSchema () {
      return this._secondLessonSchema
    }
}
