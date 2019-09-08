export const donutChartData = [
  { 'revisits': 'Top', 'revisitsPerAOI': 29.5 },
  { 'revisits': 'Right', 'revisitsPerAOI': 24 },
  { 'revisits': 'Bottom', 'revisitsPerAOI': 30 },
  { 'revisits': 'Left', 'revisitsPerAOI': 16.5 },
];

export const barChartAOI =['Top', 'Right', 'Bottom', 'Left'];
export const barChartMonthlyPercentages = [
  { name: 'Hit Count', data: [8, 12, 13, 9] },
  { name: 'Hit Ratio', data: [4.6132, 2.2384, 3.5725, 5.8452] },
  { name: 'Fixation Count', data: [10, 14, 12, 16] }
];

export const gridData = [
  {
      "ProductID": 1,
      "ProductName": "Top",
      "CategoryID": 1,
      "QuantityPerUnit": "10 boxes x 20 bags",
      "UnitPrice": 1.5158,
      "UnitsInStock": 0.0028,
      "UnitsOnOrder": 1.3543,
      "Category": {
          "CategoryID": 1,
          "CategoryName": "0.5324",
          "Description": "Soft drinks, coffees, teas, beers, and ales"
      },
      "FirstOrderedOn": new Date(1996, 8, 20)
  },
  {
      "ProductID": 2,
      "ProductName": "Right",
      "CategoryID": 1,
      "QuantityPerUnit": "24 - 12 oz bottles",
      "UnitPrice": 2.4251,
      "UnitsInStock": 0.0057,
      "UnitsOnOrder": 2.3654,
      "Category": {
          "CategoryID": 1,
          "CategoryName": "1.7532",
          "Description": "Soft drinks, coffees, teas, beers, and ales"
      },
      "FirstOrderedOn": new Date(1996, 7, 12)
  },
  {
      "ProductID": 3,
      "ProductName": "Bottom",
      "CategoryID": 2,
      "QuantityPerUnit": "12 - 550 ml bottles",
      "UnitPrice": 1.8662,
      "UnitsInStock": 0.0073,
      "UnitsOnOrder": 2.2143,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "0.9134",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 8, 26)
  },
  {
      "ProductID": 4,
      "ProductName": "Left",
      "CategoryID": 2,
      "QuantityPerUnit": "48 - 6 oz jars",
      "UnitPrice": 0.9313,
      "UnitsInStock": 1.0056,
      "UnitsOnOrder": 1.5972,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "3.4896",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 9, 19)
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