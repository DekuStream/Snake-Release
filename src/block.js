/**
 * ETML
 * Auteur: MRA
 * Date: 28.11.2023
 * Description: Classe block du jeu snake
 */

// Importation des classe et des variables
import { snake } from "./game.js";
import { ctx } from "./game.js";
import { GAME_SIZE } from "./game.js";
import { game_over } from "./game.js";

// Exportation de la classe Block
export class Block {
  constructor(x, y, size, ...additionalParams) {
    this.x = x;
    this.y = y;
    this.oldx = x;
    this.oldy = y;
    this.size = size;
    this.additionalParams = additionalParams;
  }

  // Cette méthode détecte quand le snake est hors des limites du jeu
  isOutOfBounds = () => {
    const maxSize = GAME_SIZE / this.size;
    // Hors des cases ?
    if (this.x < 0 || this.x >= maxSize || this.y < 0 || this.y >= maxSize) {
      clearScreen();
      game_over.style.display = "block";
      snake.alive = false;
    }
  };

  // Cette méthode permet de définir la position
  setPosition = (x, y, ...rest) => {
    this.oldx = this.x;
    this.oldy = this.y;
    this.x = x;
    this.y = y;
    this.additionalParams = rest;
  };

  // Cette méthode permet de dessiner le serpent
  draw = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  };
}
