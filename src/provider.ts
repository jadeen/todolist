import type { InjectionKey } from 'vue'
import type { Todo } from './types'

export const TODO_LIST = Symbol() as InjectionKey<Array<Todo>>
