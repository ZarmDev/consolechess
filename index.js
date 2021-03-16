var turn = 'white';

console.log('This project was made by ZarmDev, read copyright README');

console.log(`Please don't repost without giving credits, if you do, state changes.`);

console.log(` License and copyright notice
 State changes
 Disclose source
 Same license`);

var board = {
  "h1": "♜",
  "g1": "♞",
  "f1": "♝",
  "e1": "♚",
  "d1": "♛",
  "c1": "♝",
  "b1": "♞",
  "a1": "♜",
  "h2": "♟️",
  "g2": "♟️",
  "f2": "♟️",
  "e2": "♟️",
  "d2": "♟️",
  "c2": "♟️",
  "b2": "♟️",
  "a2": "♟️",
  "h3": "_",
  "g3": "_",
  "f3": "_",
  "e3": "_",
  "d3": "_",
  "c3": "_",
  "b3": "_",
  "a3": "_",
  "h4": "_",
  "g4": "_",
  "f4": "_",
  "e4": "_",
  "d4": "_",
  "c4": "_",
  "b4": "_",
  "a4": "_",
  "h5": "_",
  "g5": "_",
  "f5": "_",
  "e5": "_",
  "d5": "_",
  "c5": "_",
  "b5": "_",
  "a5": "_",
  "h6": "_",
  "g6": "_",
  "f6": "_",
  "e6": "_",
  "d6": "_",
  "c6": "_",
  "b6": "_",
  "a6": "_",
  "h7": "♙",
  "g7": "♙",
  "f7": "♙",
  "e7": "♙",
  "d7": "♙",
  "c7": "♙",
  "b7": "♙",
  "a7": "♙",
  "h8": "♖",
  "g8": "♘",
  "f8": "♗",
  "e8": "♔",
  "d8": "♕",
  "c8": "♗",
  "b8": "♘",
  "a8": "♖",
};

for (var x = 0; x < 64; x += 8) {
  if (x !== 0) {
    console.log(`${Object.values(board)[x]} ${Object.values(board)[x + 1]} ${Object.values(board)[x + 2]} ${Object.values(board)[x + 3]} ${Object.values(board)[x + 4]} ${Object.values(board)[x + 5]} ${Object.values(board)[x + 6]} ${Object.values(board)[x + 7]} ${Number(x / 8 + 1)}`);
  } else {
    console.log(`h g f e d c b a`);
    console.log(`${Object.values(board)[x]} ${Object.values(board)[x + 1]} ${Object.values(board)[x + 2]} ${Object.values(board)[x + 3]} ${Object.values(board)[x + 4]} ${Object.values(board)[x + 5]} ${Object.values(board)[x + 6]} ${Object.values(board)[x + 7]} 1`);
  }
}
function loadBoard() {
  for (var x = 0; x < 64; x += 8) {
  if (x !== 0) {
    console.log(`${Object.values(board)[x]} ${Object.values(board)[x + 1]} ${Object.values(board)[x + 2]} ${Object.values(board)[x + 3]} ${Object.values(board)[x + 4]} ${Object.values(board)[x + 5]} ${Object.values(board)[x + 6]} ${Object.values(board)[x + 7]} ${Number(x / 8 + 1)}`);
  } else {
    console.log(`h g f e d c b a`);
    console.log(`${Object.values(board)[x]} ${Object.values(board)[x + 1]} ${Object.values(board)[x + 2]} ${Object.values(board)[x + 3]} ${Object.values(board)[x + 4]} ${Object.values(board)[x + 5]} ${Object.values(board)[x + 6]} ${Object.values(board)[x + 7]} 1`);
  }
}
}


var whiteCaptured = [];

var blackCaptured = [];

while (true) {
  console.log(`turn ${turn}`);
  //
  console.log(`white captured: ${whiteCaptured}`);
  //
  console.log(`black captured: ${blackCaptured}`);
  var ask = prompt('[piece1 (ex: pe4), piece2 (ex: nf6)]');
  /* Check piece */




  
  if (board[`${ask.split(',')[0].trim()}`].includes('♙')) {
    if (ask.split(',')[1][2] > ask.split(',')[0][1] || board[ask.split(',')[1].trim()] !== '_' || ask.split(',')[0][0] !== ask.split(',')[1][1]) {
      console.log('Pawn invalid, error report: ', ask.split(',')[1][2] > ask.split(',')[0][1], board[ask.split(',')[1].trim()] !== '_', board[`${ask.split(',')[1].trim()}`], ask.split(',')[0][0] !== ask.split(',')[1][1]);
      loadBoard()
      continue;
    }
  }
  /* Move Piece */
  if (turn === 'white') {
    if (board[`${ask.split(',')[1].trim()}`].includes('♟️')) {
      whiteCaptured.push('Pawn')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♜')) {
      whiteCaptured.push('Rook')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♞')) {
      whiteCaptured.push('Knight')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♝')) {
      whiteCaptured.push('Bishop')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♚')) {
      whiteCaptured.push('How did you get here?')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♛')) {
      whiteCaptured.push('Queen')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♙')) {
      blackCaptured.push('Pawn')
    }
    board[`${ask.split(',')[1].trim()}`] =  `${board[`${ask.split(',')[0]}`]}`;
    board[`${ask.split(',')[0].trim()}`] = `_`;
    loadBoard()
  } else {
    if (board[`${ask.split(',')[1].trim()}`].includes('♖')) {
      blackCaptured.push('Rook')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♘')) {
      blackCaptured.push('Knight')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♗')) {
      blackCaptured.push('Bishop')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♔')) {
      blackCaptured.push('King')
    } else if (board[`${ask.split(',')[1].trim()}`].includes('♕')) {
      blackCaptured.push(`Queen`)
    }
    board[`${ask.split(',')[1].trim()}`] =  `${board[`${ask.split(',')[0]}`]}`;
    board[`${ask.split(',')[0].trim()}`] = `_`;
    loadBoard()
  }
  if (turn === 'white') {
    turn = 'black';
  } else {
    turn = 'white';
  }
}