import { format } from 'date-fns'

export const isEmpty = (value: any) =>
  value === undefined ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)

export const formatDate = (date: string) =>
  format(new Date(date), 'yyyy-MM-dd HH:MM')
