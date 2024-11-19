export const DATA_URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const simpleClockIn = async (): Promise<Todo> => {
  const data: Todo = await fetch(DATA_URL).then(res => res.json());

  return data;
};
