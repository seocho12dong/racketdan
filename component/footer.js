class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-container">
      <!-- Footer Left Section -->
      <section class="footer-left">
        <h1>Racketdan</h1>
        <p>2024 Ver. Created by 유한진</p>
        <p>사이트 관련 문의 seocho12dong@naver.com</p>
        <p style="white-space: nowrap;">서울특별시 동작구 흑석로 84 중앙대학교 학생회관(107관) 309호<br>
          cau.racketdan@gmail.com</p>
      </section>
      <!-- Footer Right Section -->
      <section class="footer-right">
        <div class="footer-contact">
          <h1 style="margin: 0;">회장</h1>
          <p>김태준 010-4624-2399</p>
        </div>
        <div class="footer-contact">
          <h1 style="margin: 0;">부회장</h1>
          <p>박영주 010-2458-0430</p>
        </div>
      </section>
    </div>
  </div>
  <div style="margin-top: 0.2rem;" class="copyright container">
    <p>&copy;RACKETDAN. All rights reserved.</p>
    <ul class="menu">
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</footer>
    `;
    }
}

customElements.define('footer-component', Footer);
