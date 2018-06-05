var board = new Array();
var score = 0;
var has_conflicted = new Array();
var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;
var success_string = 'Success';
var gameover_string = 'GameOver';


$(document).ready(function() {
    prepare_for_mobile();
    new_game();
});

function new_game() {
    init();
    
    generate_one_number();
    generate_one_number();
}

function init() {
    for (var i=0 ; i<4 ; i++){
        for (var j=0 ; j<4 ; j++) {
            var grid_cell = $('#grid_cell_' + i + '_' + j);
            grid_cell.css('top',get_pos_top(i,j));
            grid_cell.css('left',get_pos_left(i,j));
        }
    }
    for (var i=0 ; i<4 ; i++) {
        board[i] = new Array();
        has_conflicted[i] = new Array();
        for (var j=0 ; j<4 ; j++) {
            board[i][j] = 0;
            has_conflicted[i][j] = false;
        }
    }
    update_board_view();
    socre = 0;
    update_score(score);
}

