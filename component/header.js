class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header id="header">
        <h1><a href="../pages/home.html">라켓단</a></h1>
        <nav id="nav">
          <ul>
            <li><a href="../pages/home.html">HOME</a></li>
            <li><a href="../pages/introduce.html">소개</a></li>
            <li><a href="../pages/activity.html">활동내역</a></li>
            <li><a href="../pages/contact.html">문의</a></li>
            <li><a href="../pages/regulations.html">회칙</a></li>
            <li><a href="../pages/recruit.html">지원하기</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
}

customElements.define('header-component', Header);
