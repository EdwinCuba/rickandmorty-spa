const Header= () => {
  const view = `
    <section class="header__logo">
      <a href="/rickandmorty-spa">
        <img 
          src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" 
          alt="Logo"/>
      </a>
    </section>
    <section class="header__nav">
      <a href="#/about/">About</a>
    </section>
  `;

  return view;
}

export default Header;