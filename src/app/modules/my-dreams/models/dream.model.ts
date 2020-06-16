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
  public deleteGoal(index: number): void{
    this.goals.splice(index, 1);
  }
  public setGoalStatus(index: number, checked: boolean): void{
    this.goals[index].setGoalStatus(checked);
  }
  public setAccomplishedStatus(){
    this.accomplished = this.goals.length > 0 &&  !this.goals.some(goal => {
      return goal.accomplished === false;
    });
  }
  public addGoal(goalName: string): void{
    this.goals.push(new GoalsModel(goalName));
  }
}
export class GoalsModel{
  public name: string;
  public accomplished: boolean;
  constructor(name: string) {
    this.name = name;
    this.accomplished = false;
  }
  public setGoalStatus(checked: boolean): void{
    this.accomplished = checked;
  }
}
