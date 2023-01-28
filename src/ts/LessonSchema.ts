type TargetType = 'лк' | '1 пд' | '2 пд' | ''

export default class LessonSchema {
    private _subject: string
    private _target: TargetType
    private _teacher: string
    private _audience: string

    public constructor (
      subject: string,
      target: TargetType,
      teacher: string,
      audience: string
    ) {
      this._subject = subject
      this._target = target
      this._teacher = teacher
      this._audience = audience
    }

    public static empty () : LessonSchema {
      return new LessonSchema('', '', '', '')
    }

    public get subject (): string {
      return this._subject
    }

    public set subject (value: string) {
      this._subject = value
    }

    public get target (): TargetType {
      return this._target
    }

    public set target (value: TargetType) {
      this._target = value
    }

    public get teacher (): string {
      return this._teacher
    }

    public set teacher (value: string) {
      this._teacher = value
    }

    public get audience (): string {
      return this._audience
    }

    public set audience (value: string) {
      this._audience = value
    }
}
