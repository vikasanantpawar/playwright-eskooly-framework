class DashboardPage {
  constructor(page) {
    this.page = page;

    this.dashboardText = 'text=Dashboard';
  }

  async verifyDashboard() {
    await this.page.waitForSelector(this.dashboardText);
  }
}

module.exports = DashboardPage;