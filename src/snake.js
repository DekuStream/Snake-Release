/**
 * ETML
 * Auteur: MRA
 * Date: 28.11.2023
 * Description: Classe snake du jeu snake
 *
 * fonctions :
 * -
 *
 * proprieter :
 *
 */

// Importation des classe et des variables
import { Block } from "./block.js";
import { SQUARE_SIZE } from "./game.js";
import { ctx } from "./game.js";
import { currentDirection } from "./game.js";
import { food } from "./game.js";
import { game_over } from "./game.js";

// Exportation de la class Snake
export class Snake {
  constructor(size) {
    this.x = 0;
    this.y = 0;
    this.blockSize = SQUARE_SIZE;
    this.blocks = [];
    this.addBlock(this.x, this.y);
    console.log(this.blocks);
    this.alive = true;
    this.score = 0;
  }

  // méthode qui rajoute un bloc au snake et affiche le score
  addBlock(x, y) {
    const block = new Block(x, y, this.blockSize);
    this.blocks.push(block);
    this.score = this.blocks.length - 1;
    console.log(this.score);
    let elt = document.querySelector("a");
    console.log(elt.textContent + this.score);
    elt.textContent + this.score;
    document.querySelector("#Score").textContent = this.score;
  }

  // méthode qui fait bouger la tête
  moveHead() {
    const head = this.blocks[0];
    head.oldx = head.x;
    head.oldy = head.y;
    switch (currentDirection) {
      case "left":
        head.x -= 1;
        break;
      case "right":
        head.x += 1;
        break;
      case "up":
        head.y -= 1;
        break;
      case "down":
        head.y += 1;
      default:
        break;
    }
    head.isOutOfBounds();
  }

  // méthode qui fait suivre le corps du serpent
  calculateNewBlockPosition(head) {
    let { x, y } = this.blocks[this.blocks.length - 1];

    switch (currentDirection) {
      case "left":
        // Si la direction est "left", incrémenter la coordonnée x (déplacement vers la gauche)
        x += 1;
        break;
      case "right":
        // Si la direction est "right", décrémenter la coordonnée x (déplacement vers la droite)
        x -= 1;
        break;
      case "up":
        // Si la direction est "up", incrémenter la coordonnée y (déplacement vers le haut)
        y += 1;
        break;
      case "down":
        // Si la direction est "down", décrémenter la coordonnée y (déplacement vers le bas)
        y -= 1;
        break;
      default:
        // Si la direction n'est aucune des valeurs attendues, ne rien faire (cas par défaut)
        break;
    }

    switch (currentDirection) {
      case "left":
        // Si la direction est "left", décrémente la coordonnée x (déplace vers la gauche)

        x -= 1;

        break;

      case "right":
        // Si la direction est "right", incrémente la coordonnée x (déplace vers la droite)

        x += 1;

        break;

      case "up":
        // Si la direction est "up", décrémente la coordonnée y (déplace vers le haut)

        y -= 1;

        break;

      case "down":
        // Si la direction est "down", incrémente la coordonnée y (déplace vers le bas)

        y += 1;

        break;

      default:
        // Si la direction n'est aucune des valeurs attendues, ne rien faire (cas par défaut)

        break;
    }

    return { x, y };
  }

  // méthode quand le snake mange
  eat() {
    const head = this.blocks[0];
    if (head.x === food.x && head.y === food.y) {
      food.setRandomPosition();
      const { x, y } = this.calculateNewBlockPosition(head);
      this.addBlock(x, y);
    }
  }

  // méthode qui regarde si le serpent ce mort la queu
  blockTouchHead(block) {
    const head = this.blocks[0];
    const headX = head.x;
    const headY = head.y;

    return headX === block.x && headY === block.y;
  }

  // méthode qui mets
  update() {
    this.moveHead();
    this.eat();

    // Parcourts les éléments du serpent
    for (const [index, block] of this.blocks.entries()) {
      if (index > 0) {
        const { oldx, oldy } = this.blocks[index - 1];
        block.setPosition(oldx, oldy);
        // Véréfie si le serpent se mort la queue
        if (this.blockTouchHead(block)) {
          clearScreen();
          this.alive = false;
          game_over.style.display = "block";
        }
      }

      block.draw();
    }
  }
}
