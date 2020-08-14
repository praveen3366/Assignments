var TicTacToe = /** @class */ (function () {
    function TicTacToe(t) {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.computerSymbol = -1;
        this.gameRunning = true;
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    TicTacToe.prototype.Reset = function () {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.gameRunning = true;
        for (var i = 0; i < 9; i++) {
            this.table[i].style.color = "white";
            this.table[i].innerHTML = "&nbsp;";
        }
    };
    TicTacToe.prototype.IsFull = function () {
        for (var i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                return false;
        }
        return true;
    };
    TicTacToe.prototype.ClickCell = function (x, y) {
        //3*(x-1)+(y-1)
        var p = 3 * (x - 1) + (y - 1);
        if (!this.gameRunning) {
            alert("Game over");
        }
        else {
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
                    }
                    else {
                        if (this.IsFull()) {
                            this.gameRunning = false;
                            alert("Draw match");
                        }
                        else {
                            var v = this.minmax(-1, true);
                            this.board[v] = -1;
                            this.table[v].style.color = "#fac95f";
                            this.table[v].innerHTML = "O";
                            if (this.win(this.board) == -1) {
                                this.gameRunning = false;
                                alert("You have lost!");
                            }
                            else {
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
    };
    TicTacToe.prototype.win = function (board) {
        var b = board[1];
        if (board[0] == b && b == board[2] && b != 0)
            return b;
        b = board[4];
        if (board[3] == b && b == board[5] && b != 0)
            return b;
        b = board[7];
        if (board[6] == b && b == board[8] && b != 0)
            return b;
        b = board[3];
        if (board[0] == b && b == board[6] && b != 0)
            return b;
        b = board[4];
        if (board[1] == b && b == board[7] && b != 0)
            return b;
        b = board[5];
        if (board[2] == b && b == board[8] && b != 0)
            return b;
        b = board[4];
        if (board[0] == b && b == board[8] && b != 0)
            return b;
        if (board[2] == b && b == board[6] && b != 0)
            return b;
        return 0;
    };
    TicTacToe.prototype.minmax = function (currentPlayer, root) {
        var winner = this.win(this.board);
        if (winner != 0)
            if (currentPlayer == -1)
                return winner;
            else
                return -winner;
        //possible moves
        var possibleMoves = [];
        for (var i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                possibleMoves.push(i);
        }
        var n = possibleMoves.length;
        if (n == 0)
            return 0;
        var which = -1;
        var v = 100;
        for (var j = 0; j < n; j++) {
            var move = possibleMoves[j];
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
            return (which);
        }
        else
            return (v);
    };
    return TicTacToe;
}());
window.onload = function () {
    var cell1 = document.getElementById("cell11");
    var cell2 = document.getElementById("cell12");
    var cell3 = document.getElementById("cell13");
    var cell4 = document.getElementById("cell21");
    var cell5 = document.getElementById("cell22");
    var cell6 = document.getElementById("cell23");
    var cell7 = document.getElementById("cell31");
    var cell8 = document.getElementById("cell32");
    var cell9 = document.getElementById("cell33");
    var reset = document.getElementById("reset");
    var ttt = new TicTacToe([cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]);
    cell1.onclick = function (e) { ttt.ClickCell(1, 1); };
    cell2.onclick = function (e) { ttt.ClickCell(1, 2); };
    cell3.onclick = function (e) { ttt.ClickCell(1, 3); };
    cell4.onclick = function (e) { ttt.ClickCell(2, 1); };
    cell5.onclick = function (e) { ttt.ClickCell(2, 2); };
    cell6.onclick = function (e) { ttt.ClickCell(2, 3); };
    cell7.onclick = function (e) { ttt.ClickCell(3, 1); };
    cell8.onclick = function (e) { ttt.ClickCell(3, 2); };
    cell9.onclick = function (e) { ttt.ClickCell(3, 3); };
    reset.onclick = function (e) { ttt.Reset(); };
};
