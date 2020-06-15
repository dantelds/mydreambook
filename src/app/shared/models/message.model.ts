export enum TYPE {
  ERROR = 'ERROR',
  MESSAGE = 'MESSAGE'
}
export class MessageModel {
  type: TYPE;
  message: string;
  constructor(type: TYPE, message: string) {
    this.type = type;
    this.message = message;
  }

}
