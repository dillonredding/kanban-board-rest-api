const baseUrl = 'http://localhost:3000';

async function main() {
  fetch(`${baseUrl}/cards`)
    .then((res) => res.json())
    .then((cards) =>
      cards.forEach((card) => {
        if (card.stage !== 'Done') {
          moveToNextStage(card).then((card) => {
            console.log(`Updated ${card.id} to ${card.stage}`);
          });
        }
      })
    );
}

async function moveToNextStage(card) {
  const stage = nextStage(card);
  if (stage == null) return;

  const response = await fetch(`${baseUrl}/cards/${card.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ stage })
  });
  return await response.json();
}

function nextStage(card) {
  if (card.stage === 'To-Do') return 'Doing';
  if (card.stage === 'Doing') return 'Done';
  return null;
}

main();
