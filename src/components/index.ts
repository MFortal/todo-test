export * from './Footer/Footer';
export * from './TodoPanelAdd/TodoPanelAdd';
export * from './Todo';

export const FILTER = {
  ALL:'ALL',
  ACTIVE:'ACTIVE',
  COMPLETED:'COMPLETED'
}


export const DEFAULT_TASKS = [
  {
    id: "dc724d29-c713-4428-8e32-aef5d78fcbe8",
    name: "Выполнить тестовое задание",
    completed: false,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190664",
    name: "Причесать код",
    completed: false,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190665",
    name: "Покрыть тестами",
    completed: true,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190666",
    name: "Погладить кота",
    completed: false,
  },
];