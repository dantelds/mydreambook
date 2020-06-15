export class DreamModel{
  public name: string;
  public accomplished: boolean;
  public id: number;
  public description: string;
  public goals: GoalsModel[];
  constructor(name: string) {
    this.name = name;
    this.accomplished = false;
    this.id = Date.now();
    this.description = '';
    this.goals = [];
  }
}
export class GoalsModel{
  public name: string;
  public accomplished: boolean;
  constructor(name: string) {
    this.name = name;
    this.accomplished = false;
  }
}
