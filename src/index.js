import './x.js'
import png from './assets/1.png'
console.log('hello')
console.log('world')

const div = document.getElementById('app')

div.innerHTML = `
    <img src="${png}">
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        module.default()
    }, () => {})
}

div.appendChild(button)