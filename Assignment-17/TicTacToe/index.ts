class TicTacToe {
    board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    table: HTMLElement[];

    computerSymbol: number = -1;
   
    gameRunning: boolean = true;

    constructor(t: HTMLElement[]) {
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    Reset() {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.gameRunning = true;
        for (let i = 0; i < 9; i++) {
            this.table[i].style.color = "white";
            this.table[i].innerHTML = "&nbsp;";
        }
    }

    IsFull(): boolean {
        for (let i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                return false;
            }
        return true;
    }

    ClickCell(x: number, y: number) {
        //3*(x-1)+(y-1)
        let p: number = 3 * (x - 1) + (y - 1);
        if (!this.gameRunning) {
            alert("Game over");
        } else {
            if (this.board[p] == this.computerSymbol) {
                alert("The computer protecting this box!");
            }
            else {
                if (this.board[p] == -this.computerSymbol) {
                    alert("already played");
                }
                else {
                    this.table[p].style.color = "#25bfc4";
                    this.table[p].innerHTML = "X";
                    this.board[p] = 1;
                    if (this.win(this.board) == 1) {
                        this.gameRunning = false;
                        alert("You have won!");
                    } else {
                        if (this.IsFull()) {
                            this.gameRunning = false;
                            alert("Draw match");
                        } else {
                            let v = this.minmax(-1, true);
                            this.board[v] = -1;
                            this.table[v].style.color = "#fac95f";
                            this.table[v].innerHTML = "O";
                            if (this.win(this.board) == -1) {
                                this.gameRunning = false;
                                alert("You have lost!");
                            } else {
                                if (this.IsFull()) {
                                    this.gameRunning = false;
                                    alert("Draw match");
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    win(board: number[]): number {
        var b = board[1];
        if (board[0] == b && b == board[2] && b != 0) return b;
        b = board[4];
        if (board[3] == b && b == board[5] && b != 0) return b;
        b = board[7];
        if (board[6] == b && b == board[8] && b != 0) return b;
        b = board[3];
        if (board[0] == b && b == board[6] && b != 0) return b;
        b = board[4];
        if (board[1] == b && b == board[7] && b != 0) return b;
        b = board[5];
        if (board[2] == b && b == board[8] && b != 0) return b;
        b = board[4];
        if (board[0] == b && b == board[8] && b != 0) return b;
        if (board[2] == b && b == board[6] && b != 0) return b;
        return 0;
    }

    minmax(currentPlayer: number, root: boolean): number {
        let winner = this.win(this.board);
        if (winner != 0)
            if (currentPlayer == -1)
                return winner;
            else
                return -winner;
        //possible moves
        let possibleMoves: number[] = [];
        for (let i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                possibleMoves.push(i);
        }
        let n: number = possibleMoves.length;
        if (n == 0)
            return 0;
        let which: number = -1;
        let v: number = 100;
        for (let j = 0; j < n; j++) {
            let move = possibleMoves[j];
            //play
            this.board[move] = currentPlayer;
            var m = -this.minmax(-currentPlayer, false);
            this.board[move] = 0;
            if (m < v) {
                v = m;
                which = move;
            }
        }
        if (root) {
            return (which)
        }
        else
            return (v)
    }
}


window.onload = () => {
    let cell1: HTMLElement = <HTMLElement>document.getElementById("cell11");
    let cell2: HTMLElement = <HTMLElement>document.getElementById("cell12");
    let cell3: HTMLElement = <HTMLElement>document.getElementById("cell13");
    let cell4: HTMLElement = <HTMLElement>document.getElementById("cell21");
    let cell5: HTMLElement = <HTMLElement>document.getElementById("cell22");
    let cell6: HTMLElement = <HTMLElement>document.getElementById("cell23");
    let cell7: HTMLElement = <HTMLElement>document.getElementById("cell31");
    let cell8: HTMLElement = <HTMLElement>document.getElementById("cell32");
    let cell9: HTMLElement = <HTMLElement>document.getElementById("cell33");
    let reset: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");

    let ttt: TicTacToe = new TicTacToe([cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]);
    cell1.onclick = (e) => { ttt.ClickCell(1, 1); }
    cell2.onclick = (e) => { ttt.ClickCell(1, 2); }
    cell3.onclick = (e) => { ttt.ClickCell(1, 3); }
    cell4.onclick = (e) => { ttt.ClickCell(2, 1); }
    cell5.onclick = (e) => { ttt.ClickCell(2, 2); }
    cell6.onclick = (e) => { ttt.ClickCell(2, 3); }
    cell7.onclick = (e) => { ttt.ClickCell(3, 1); }
    cell8.onclick = (e) => { ttt.ClickCell(3, 2); }
    cell9.onclick = (e) => { ttt.ClickCell(3, 3); }
    reset.onclick = (e) => { ttt.Reset(); }
}