class FixedMenu  extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="fixed-menu">
  <a href="../index.html">
    <img src="../images/icon/icon_home.png" alt="Home" style="width: 24px; height: 24px;" />
    <span>홈</span>
  </a>
  <a href="../pages/introduce.html">
    <img src="../images/icon/icon_intro.png" alt="Search" style="width: 24px; height: 24px;" />
    <span>소개</span>
  </a>
  <a href="../pages/activity.html">
    <img src="../images/icon/icon_gallery.png" alt="Rate" style="width: 24px; height: 24px;" />
    <span>활동내역</span>
  </a>
  <a href="../pages/contact.html">
    <img src="../images/icon/icon_conversation.png" alt="News" style="width: 24px; height: 24px;" />
    <span>문의</span>
  </a>
  <a href="../pages/regulations.html">
    <img src="../images/icon/icon_rule.png" alt="News" style="width: 24px; height: 24px;" />
    <span>회칙</span>
  </a>
  <a href="../pages/recruit.html">
    <img src="../images/icon/icon_apply.jpg" alt="My Page" style="width: 24px; height: 24px;" />
    <span>지원</span>
  </a>
</div>
    `;
    }
}

customElements.define('fixed-menu-component', FixedMenu);
