import x from './x.js'
import jpg from './assets/1.JPG'

const div = document.querySelector('#app')
div.innerHTML = `
<img id="jpg1" src="${jpg}">
`
console.log(x)

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        module.default()
    }, () => {
        console.log('模块加载错误');
    })
}
div.appendChild(button)