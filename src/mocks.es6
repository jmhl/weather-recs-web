let dashboardResponse = {
  temperature: {
    formatted: '70C',
    measure: 70,
    unit: 'C',
  },
  actions: {
    next_day: 'next',
    previous_day: 'previous',
  },
  recommendations: [
    {
      id: 123,
      name: 'Activity',
      uri: 'https://www.google.com',
      icon: 'activity',
      images: {
        1x: 'http://placehold.it/300x200,
        2x: 'http://placehold.it/600x400,
      }
      actions: [
        'accept',
        'decline',
      ],
    },
  ],
};

export default dashboardResponse;
