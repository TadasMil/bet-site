type Status = 'OPENED' | 'WON' | 'LOST'

type StatusType = {
  [status in Status]: string
}

export const BET_STATUS: StatusType = {
  OPENED: 'OPENED',
  WON: 'WON',
  LOST: 'LOST',
}

export interface IBetCategory {
  type: string
  name: string
  id: number
  selection: string
}

export interface IBettingGame {
  type: string
  homeTeam: string
  awayTeam: string
  date: string
  betCategory: IBetCategory
}

export interface IBetStatus {
  type: string
  label: string
}

export interface IBetType {
  type: string
  label: string
}

export interface IBetHistory {
  id: number
  type: IBetType
  status: IBetStatus
  date: string
  odd: number
  stake: number
  possibleWin: number
  game: IBettingGame
}
