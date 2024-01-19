export class TodoModel {
  id: string | null;
  titleTask: string;
  deadline: string;
  status: string;
  createdAt: string;

  constructor(id: string | null, title: string, deadline: string, status: string, createdAt: string) {
    this.id = id;
    this.titleTask = title;
    this.deadline = deadline;
    this.status = status;
    this.createdAt = createdAt;
  }


}
