class LoginPage {
  constructor(page) {
    this.page = page;

    this.email = '#username';
    this.password = '#password';
    this.loginBtn = '#submit-btn';
  }

  async open() {
    await this.page.goto('/login.php');
  }

  async login(email, password) {
    await this.page.fill(this.email, email);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }
}

module.exports = LoginPage;