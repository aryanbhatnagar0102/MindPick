# MindPick

A web playable card guesser game

## Description

MindPick is a card-guesser game in which you will first choose a random card from the deck of 52 cards and answer few questions that will appear on screen, and MindPick will guess the card you chose.

### Screenshots

<img width="1917" height="971" alt="image" src="https://github.com/user-attachments/assets/56dce5c2-d27f-4c02-a1bc-0d0c27bdb69c" />
<img width="1886" height="965" alt="image" src="https://github.com/user-attachments/assets/0349b93b-49e5-4715-b288-d051999cee4f" />
<img width="1907" height="970" alt="image" src="https://github.com/user-attachments/assets/637b9fd6-fb1c-4dbb-9971-1f9e3d183cba" />

## Features

TinyTools currently includes seven utilities:

**52-Card Deck** — A complete standard deck containing Hearts, Diamonds, Clubs, and Spades, with 13 cards in each suit.
**Binary-Based Guessing** — Uses six binary-weighted card groups to identify the user's chosen card.
**Interactive Interface** — Includes a landing screen, question screens, progress indicator, and final reveal screen.
**Replay Functionality** — Allows users to restart the game and try another card.
**Responsive Design** — Adapts the interface to different screen sizes.

## Tech Stack

- HTML
- CSS
- JavaScript
- Google Fonts (Cinzel)

## How It Works

MindPick uses the concept of binary number representation to identify a card from a standard 52-card deck.The game assigns six binary weights to six different card groups:
1, 2, 4, 8, 16, 32
Each group contains cards whose corresponding binary position is set to 1.
The user thinks of a card and answers YES or NO for each group depending on whether their selected card appears in it.
Whenever the user answers YES, the corresponding binary weight is added to the total.
After all six questions, the calculated number represents the position of the selected card in the deck.
The game then retrieves the card using:

```
deck[guessedNumber - 1]
```
This allows MindPick to identify the selected card without random guessing or external APIs

## Getting Started

### Dependencies

- A modern web browser (Chrome, Firefox, Edge, etc.).
- Visual Studio Code (recommended).
- Live Server extension for VS Code (recommended).

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/aryanbhatnagar0102/MindPick.git
   ```

2. Navigate to the project folder:

   ```bash
   cd MindPick
   ```

3. Open the folder in Visual Studio Code.

### Executing the Program

1. Open `index.html` in VS Code.
2. Right-click anywhere in the editor.
3. Select **Open with Live Server**.
4. MindPick will open in your default browser.

You can also open `index.html` directly in a browser.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
