
function chessBoard() {
    var body = document.getElementById('body');
    var div = document.createElement('div');
    div.className = "task_5_1";
    var table = document.createElement('table');
    table.className = 'chessboard';
    body.appendChild(div);
    div.appendChild(table);

    for (let i = 1; i <= 8; i++) {
        let tr = document.createElement('tr');
        tr.id = `tr${i}`
        if (i % 2 == 1) {
            for (let j = 1; j <= 8; j++) {
                if (j % 2 == 1) {
                    let tdw = document.createElement('td')
                    tdw.className = "white";
                    tr.appendChild(tdw);
                }
                else {
                    let tdb = document.createElement('td');
                    tdb.className = "black";
                    tr.appendChild(tdb);
                }
            }
        }
        else {
            for (let j = 1; j <= 8; j++) {
                if (j % 2 == 0) {
                    let tdw = document.createElement('td')
                    tdw.className = "white";
                    tr.appendChild(tdw);
                }
                else {
                    let tdb = document.createElement('td');
                    tdb.className = "black";
                    tr.appendChild(tdb);
                }
            }
        }
        table.appendChild(tr);
    }

    for (let k = 1; k <= 8; k++) {
        let parent = document.getElementById('tr' + [k]);
        console.log(parent)
        let tdn = document.createElement('td');
        tdn.className = 'num';
        tdn.innerHTML = `${k}`;
        parent.appendChild(tdn);
    }

    for (let i = 9; i <= 9; i++) {
        let tr = document.createElement('tr');
        tr.id = `tr${i}`
        for (let j = 1; j <= 8; j++) {
            let alphabet = '0ABCDEFGH'.split('');
            let tdABC = document.createElement('td')
            tdABC.innerHTML = alphabet[j]
            tr.appendChild(tdABC);
        }
        table.appendChild(tr);
    }

    href = document.getElementById('href');
    body.removeChild(href)
}
