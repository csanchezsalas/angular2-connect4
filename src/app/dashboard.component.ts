import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import Connect4 from './lib/index';


@Component({ selector: 'my-dashboard' })
@View({
	directives: [NgFor, NgIf],
	template: `
		<div id="app" class="container">

			<h1>Connect Four</h1>

			<div class="connect4-status">

				<button class="connect4-restart" (click)="restart()">Restart</button>

				<div class="connect4-label connect4-label--failure" *ng-if="!board.isActive">
					Game over!
				</div>

			</div>


			<div class="connect4-board connect4-board--active">
				<div *ng-for="#column of board.grid; #y=index" class="connect4-column">
					<button class="connect4-cell"
						*ng-for="#cell of column"
						[class.connect4-cell--red]="cell == 'red'"
						[class.connect4-cell--blue]="cell == 'blue'"
						(click)="addPiece(y)" />
				</div>
			</div>

		</div>
	`
})
export class DashboardComponent {

	public board;

	constructor() {
		this.restart();
	}

	addPiece(y: number) {

		// Does nothing if board is inactive
    if (!this.board.isActive) {
      return;
    }

		// Adds piece to board
		this.board.addPiece(y, this.board.nextPlayer);
	}

	restart() {
		this.board = new Connect4.Board();
	}


}
