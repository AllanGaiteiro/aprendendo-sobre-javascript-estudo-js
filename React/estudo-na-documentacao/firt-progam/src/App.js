import React from 'react';
import ReactDOM from 'react-dom';


/*
ReactDOM.render(
    <h1>Hello,Word</h1>,
    document.getElementById('root')
)
*/

/*
const name = 'Allan Gateiro'
const element = <h1>Hello,{name}</h1>

//ReactDOM.render(//oque // element,// onde//document.getElementById('root')
ReactDOM.render(element,document.getElementById('root')
)
*/
/*
function nameComplet(user){
    return user.fistName + ' ' + user.lastName
}

const user = {
    fistName: 'Allan',
    lastName: 'Gaiteiro'
}

const element=(
    <h1>
        Hello, {nameComplet(user)}!
    </h1>
)

ReactDOM.render(
    element,document.getElementById('root')
)
*/
////////
/*
function nameComplet(user) {
    return user.fistName + ' ' + user.lastName
}

const user = {
    fistName: 'Allan',
    lastName: 'Gaiteiro'
}

function definirUser(user) {
    if (user) {
        return <h1>{nameComplet(user)}</h1>
    }
    return <h1>Hello, Estranho</h1>
}
const element = (
    <div>
        <h1>
            Hello, {definirUser(user)}!
        </h1>
    </div>

)

//const element = React.createElement('h1',{className: 'greeting'},'Hello, world!');
ReactDOM.render(
    element, document.getElementById('root')
)
*/



function tick() {
    const element = (
        <div>
            <h1>Hello,Word!</h1>
            <h2>Hoje é {new Date().toLocaleDateString()}.</h2>
            <h2>agora é {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000)