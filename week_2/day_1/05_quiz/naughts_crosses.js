var currentPlayer = 'x'; //Target
var grid = [
    ['x', 'x', 'x'],
    ['o', null, 'o'],
    [null, null, null]
];



function searchList(arrayname, target) {
    for (var x = 0, _pj_a = arrayname.length; x < _pj_a; x += 1) { // Inner loop 
        for (var y = 0, _pj_b = arrayname[x].length; y < _pj_b; y += 1) {
            if (arrayname[x][y] === target) { //condition for checking target
                console.log();
                console.log(x + 1);
                console.log(y + 1);
                break;
            }
        }
    }
}

searchList(grid, currentPlayer)