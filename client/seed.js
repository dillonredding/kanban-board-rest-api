const cards = [
  {
    description: 'Laundry',
    stage: 'To-Do'
  },
  {
    description: 'Dishes',
    stage: 'Doing'
  },
  {
    description: 'Play video games',
    stage: 'Doing'
  },
  {
    description: 'Cook dinner',
    stage: 'Done'
  }
];

cards.forEach((card) =>
  fetch('http://localhost:3000/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(card)
  }).then((res) => {
    console.log(`Response: ${res.status}`);
  })
);
