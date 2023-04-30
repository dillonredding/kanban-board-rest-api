const baseUrl = 'http://localhost:3000';

function nextStage(card) {
  if (card.stage === 'To-Do') return 'Doing';
  if (card.stage === 'Doing') return 'Done';
}

async function moveToNextStage(card) {
  const stage = nextStage(card);
  if (stage == null) {
    return;
  }

  const response = await fetch(`${baseUrl}/cards/${card.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ stage })
  });
  return await response.json();
}

async function main() {
  const cards = await fetch(`${baseUrl}/cards`).then((res) => res.json());
  console.log(await Promise.all(cards.map(moveToNextStage)));
}

main();
