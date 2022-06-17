export const bettingHistoryData = [
  {
    id: 1,
    type: {
      type: 'SINGLE',
      label: 'Single',
    },
    status: {
      type: 'OPENED',
      label: 'Opened',
    },
    date: '2022-01-01T15:00:00.000Z',
    odd: 1.5,
    possibleWin: 3,
    stake: 1.5,
    game: {
      type: 'Football',
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      date: '2022-01-15T15:00:00.000Z',
      betCategory: {
        name: 'Total Goals',
        id: 1,
        selection: 'Under (2)',
      },
    },
  },
  {
    id: 2,
    type: {
      type: 'MULTIPLE',
      label: 'Multiple',
    },
    status: {
      type: 'WON',
      label: 'Won',
    },
    date: '2022-03-01T15:00:00.000Z',
    odd: 1.5,
    possibleWin: 3,
    stake: 1.5,
    game: {
      type: 'Basketball',
      homeTeam: 'Lakers',
      awayTeam: 'Heat',
      date: '2022-04-22T15:00:00.000Z',
      betCategory: {
        type: 'Total Score',
        name: 'Score',
        id: 1,
        selection: 'Lakers +2',
      },
    },
  },
]

export const casinoHistoryData = [
  {
    id: 1,
    date: '2022-01-01T15:00:00.000Z',
    game: 'Crystals of Power',
    winnings: '1.50',
  },
  {
    id: 2,
    date: '2022-02-03T15:00:00.000Z',
    game: 'Crystals of Nature',
    winnings: '-2.50',
  },
  {
    id: 3,
    date: '2022-03-05T15:00:00.000Z',
    game: 'Crystals of Fire',
    winnings: '-1.50',
  },
  {
    id: 4,
    date: '2022-04-07T15:00:00.000Z',
    game: 'Crystals of Water',
    winnings: '25.00',
  },
]
