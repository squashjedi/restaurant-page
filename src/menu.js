const menu = (main) => {
  const hero = document.createElement('div')
  hero.classList.add('hero')
  main.appendChild(hero)
  hero.innerHTML = "<h1>Menu</h1>"
}
export default menu