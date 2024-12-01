export const en = {
  name: 'Test task',
  taskButton: 'Task',
  mapButton: 'Map',
} as const

export const ru = {
  name: 'Тестовое задание',
  taskButton: 'Задание',
  mapButton: 'Карта',
} as const

export type DictionaryDefinition = keyof typeof en | keyof typeof ru

export const dictionaries = {
  en,
  ru,
}
