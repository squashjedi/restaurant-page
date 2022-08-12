const homepage = (main) => {
  const hero = document.createElement('div')
  hero.classList.add('hero')
  main.appendChild(hero)
  hero.innerHTML = "<h1>Fine Wine Dining</h1><h2>Enjoy the calming atmosphere<br />and exquisite cuisine</h2>"
}

export default homepage