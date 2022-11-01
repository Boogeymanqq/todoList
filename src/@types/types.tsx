export interface todoTypes {
  id: string;
  title: string;
  // clickHanler: (i: number, elem: object) => void;
  completed: Boolean;
}

export interface propsTodo {
  todo: todoTypes;
  onClick: () => void;
}

export interface propsIndicator {
  todos: todoTypes[] | [];
  setTodos: (todos: todoTypes[]) => void;
  setActiveTodo: (todos: todoTypes[]) => void;
  active: number;
  setActive: (i: number) => void;
}

export interface propsAdd {
  onSubmit: (value: string) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
