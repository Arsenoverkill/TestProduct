namespace TODO {
  type GetResponse = Todo[];
  type GetRequest = void;

  type PostResponse = Todo[];
  type PostRequest = Todo;

  type deleteResponse = Todo[];

  type deleteRequest = number;
  type EditResponse = Todo[];
  type EditRequest = {
    _id?: number;
    newData: Todo;
  };
}
