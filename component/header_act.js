class HeaderAct extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header id="header">
        <h1><a href="../home.html">라켓단</a></h1>
        <nav id="nav">
          <ul>
            <li><a href="../home.html">HOME</a></li>
            <li><a href="../introduce.html">소개</a></li>
            <li><a href="../activity.html">활동내역</a></li>
            <li><a href="../contact.html">문의</a></li>
            <li><a href="../regulations.html">회칙</a></li>
            <li><a href="../recruit.html">지원하기</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
}

customElements.define('header-act-component', HeaderAct);
