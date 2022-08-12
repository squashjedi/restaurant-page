const navBar = () => {
  const content = document.querySelector('#content')
  content.innerHTML = `
    <header>
      <nav>
        <div class="container">
          <div class="logo-title">Lassiter's</div>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
    <main></main>
  `
}

export default navBar