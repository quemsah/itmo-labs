import smth from './module.js'
     const qv = x => x * x;
     const sc = x => x + 1;
document.getElementById('answer').innerHTML += 'qv(sc(5)) = ' + qv(sc(5)) + '<br>';
document.getElementById('answer').innerHTML += 'sc(qv(5)) = ' + sc(qv(5)) + '<br>';
document.getElementById('answer').innerHTML += smth(qv(5)) + '<br>';
document.getElementById('answer').innerHTML += smth(sc(5)) + '<br>';
document.getElementById('answer').innerHTML += smth(qv(sc(5))) + '<br>';
document.getElementById('answer').innerHTML += smth(sc(qv(5))) + '<br>';
document.getElementById('answer').innerHTML += smth + '<br>';


