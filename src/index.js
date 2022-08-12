// import navbar from './navbar'
import homepage from './homepage'
import menu from './menu'
import contact from './contact'

const content = document.querySelector('#content')
const header = document.createElement('header')
const nav = document.createElement('nav')
const container = document.createElement('div')
container.classList.add('container')
const logoTitle = document.createElement('div')
logoTitle.classList.add('logo-title')
const ul = document.createElement('ul')
const liHome = document.createElement('li')
const liMenu = document.createElement('li')
const liContact = document.createElement('li')
const main = document.createElement('main')
content.appendChild(header)
header.appendChild(nav)
nav.appendChild(container)
container.appendChild(logoTitle)
logoTitle.textContent = "Lassiter's"
container.appendChild(ul)
ul.appendChild(liHome).textContent = 'Home'
ul.appendChild(liMenu).textContent = 'Menu'
ul.appendChild(liContact).textContent = 'Contact'
content.appendChild(main)
homepage(main)

liHome.addEventListener('click', () => {
  homepage(main)
})
liMenu.addEventListener('click', () => {
  menu(main)
})
liContact.addEventListener('click', () => {
  contact(main)
})

