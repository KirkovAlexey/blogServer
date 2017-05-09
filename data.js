module.exports = {
  elements: [
    {
      id: 1,
      image: {
        src: '/images/default.jpg',
        width: 160,
        height: 120,
        style: {
          padding: '5px',
          margin: '5px',
          border: '1px solid black'
        }
      },
      description: { text: 'Winter is comming, first' },
      meta: {
        author: 'Ivan Petrov',
        createdAt: '2017-01-01',
        updatedAt: '2017-01-03',
        count: 3
      }
    },
    {
      id: 2,
      image: {
        src: '/images/default.jpg',
        width: 160,
        height: 120,
        alt: 'Winter'
      },
      description: { text: 'Winter is comming, second' },
      meta: {
        author: 'Peter Petrov',
        createdAt: '2017-04-01',
        updatedAt: '2017-04-04',
        count: 7
      }
    },
    {
      id: 3,
      image: {
        src: '/images/default.jpg',
        width: 160,
        height: 120,
        alt: 'Winter',
        style: {
          padding: '5px',
          margin: '5px',
          border: '1px solid black'
        }
      },
      description: { text: 'Winter is comming, third' },
      meta: {
        author: 'Sidor Petrov',
        createdAt: '2017-04-14',
        updatedAt: '2017-04-15',
        count: 32
      }
    }
  ]
};
