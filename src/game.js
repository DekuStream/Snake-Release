/**
 * ETML
 * Auteur: MRA
 * Date: 28.11.2023
 * Description: Classe game du jeu snake :
 *
 * fonctions :
 *  détection des touches, effacement écran, boucle de jeu,
 *
 * proprieter :
 *
 * Taille du jeu, taille des d'une case,
 */

// Importation des classe et des variables
import { Snake } from "./snake.js";
import { Food } from "./food.js";
import "../CSS/style.css";

// Déclaration des variables
export const GAME_SIZE = 600;
export const SQUARE_SIZE = 20;
const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
export let game_over = document.getElementById("gameover");
export const snake = new Snake(SQUARE_SIZE);
export const food = new Food();
export let currentDirection = "down";

/**
 *Change la direction de currentDirection avec les touches Arrow
 *@param -
 */
function deteckKeyPressed() {
  document.addEventListener("keydown", function (event) {
    console.log(event.key);

    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
      case "ArrowUp":
        currentDirection = "up";
        break;
      case "ArrowDown":
        currentDirection = "down";
        break;
      default:
        break;
    }
  });
}

/**
 * Effacement de l'écran
 * @param -
 */
function clearScreen() {
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

/**
 * Affichage du jeu
 * @param -
 */
function update() {
  clearScreen();
  food.draw();
  snake.update();
  if (snake.alive) {
    setTimeout(update, 150);
  }
}

/**
 * Toute les function qui sont appeller une seule fois
 * @param
 */
function start() {
  deteckKeyPressed();
  update();
  game_over.style.display = "none";
}

start();
