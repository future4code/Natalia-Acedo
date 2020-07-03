export class Band {
  constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsible: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getMusicGenre(): string {
    return this.music_genre;
  }

  public getResponsible(): string {
    return this.responsible;
  }
}
