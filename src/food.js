/**
 * ETML
 * Auteur: MRA
 * Date: 28.11.2023
 * Description: Classe food du jeu snake
 *
 */

// Importation des classe et des variables
import { ctx } from "./game.js";
import { SQUARE_SIZE } from "./game.js";
import { GAME_SIZE } from "./game.js";

// Exportation de la classe Food
export class Food {
  constructor(size) {
    this.size = SQUARE_SIZE;

    this.setRandomPosition();
  }

  // Cette méthode génére un chiffre aléatoire pour l'axe x / y pour placer le "fruit"
  setRandomPosition() {
    const maxSize = GAME_SIZE / this.size - 1;

    // Exemple : 0,1562 * 600 = 93.72 arrondi à 94 / Modulo 29 sur 94 = 7
    this.x = Math.round(Math.random() * GAME_SIZE) % maxSize;

    this.y = Math.round(Math.random() * GAME_SIZE) % maxSize;
  }

  // Cette méthode déssine le "fruit"
  draw() {
    ctx.fillStyle = "red";

    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
