export const donutChartData = [
  { 'revisits': 'Top', 'revisitsPerAOI': 29.5 },
  { 'revisits': 'Right', 'revisitsPerAOI': 24 },
  { 'revisits': 'Bottom', 'revisitsPerAOI': 30 },
  { 'revisits': 'Left', 'revisitsPerAOI': 16.5 },
];

export const barChartAxis =['Top', 'Right', 'Bottom', 'Left'];
export const barChartData= [
  { name: 'Hit Count', data: [8, 12, 13, 9] },
  { name: 'Hit Ratio', data: [4.6132, 2.2384, 3.5725, 5.8452] },
  { name: 'Fixation Count', data: [10, 14, 12, 16] }
];

export const gridData = [
  {
      "ID": 1,
      "Name": "Top",
      "DwellTime": 1.5158,
      "FirstFixation": 0.0028,
      "AverageFixation": 1.3543,
      "EntryTime": "0.5324",
  },
  {
      "ID": 2,
      "Name": "Right",
      "DwellTime": 2.4251,
      "FirstFixation": 0.0057,
      "AverageFixation": 2.3654,
      "EntryTime": "1.7532",
  },
  {
      "ID": 3,
      "Name": "Bottom",
      "DwellTime": 1.8662,
      "FirstFixation": 0.0073,
      "AverageFixation": 2.2143,
      "EntryTime": "0.9134",
  },
  {
      "ID": 4,
      "Name": "Left",
      "DwellTime": 0.9313,
      "FirstFixation": 1.0056,
      "AverageFixation": 1.5972,
      "EntryTime": "3.4896",
  }
];

export const panelBarData = {
  'areasOfInterest': [
    {
      aoi: 'Top',
      sequence: '1'
    },
    {
      aoi: 'Right',
      sequence: '2'
    },
    {
      aoi: 'Left',
      sequence: '3'
    },
    {
      aoi: 'Bottom',
      sequence: '4'
    }
  ]
}