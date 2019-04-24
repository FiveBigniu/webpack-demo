import _ from 'lodash'
import './style.css'
import Icon from './wx.jpg'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());