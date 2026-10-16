# Playwright TypeScript Automation Framework

An automated testing framework built with **Playwright** and **TypeScript**, covering both End-to-End UI tests (SauceDemo) and API integration tests (BookStore API).

---

## 🚀 Features
- **UI Testing**: Comprehensive smoke and sanity tests for shopping cart and inventory modules using Page Object Model (POM).
- **API Testing**: Automated validation of the BookStore API endpoints and error payloads.
- **Global Authentication Setup**: Automated login flow that saves storage state to avoid redundant logins.
- **Custom Utilities**: Reusable helper functions for API requests and assertions (`utils/`).
- **Robust Reporting**: HTML report generation and automatic trace capturing on test failure (`trace: 'retain-on-failure'`).
- **CI/CD Integration**: Fully automated pipeline configured via GitHub Actions.

---

## 📁 Project Structure

```text
playwright-ts-framework/
├── .github/workflows/        # GitHub Actions CI pipeline configuration
├── fixtures/                 # Custom Playwright test fixtures
├── pages/                    # Page Object Model (POM) classes
├── tests/                    
│   ├── api/                  # API test specs (e.g., books.spec.ts)
│   └── ui/                   # UI test specs (cart & inventory smoke/sanity)
├── utils/                    # Reusable helper functions and custom assertions
├── playwright.config.ts      # Playwright test runner configuration
└── .env.example              # Template for environment variables
```

---

## 🛠️ Prerequisites & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/joshridavis/playwright-ts-framework.git
   cd playwright-ts-framework
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install --with-deps
   ```

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory (matching `.env.example`) and configure your environment variables:

```env
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://demoqa.com
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD={copy-paste the password from https://www.saucedemo.com/}
```

*(Note: When running tests via GitHub Actions, add these exact keys as **Repository Secrets** in your GitHub repository settings under Settings > Secrets and variables > Actions).*

---

## 🏃‍♂️ How to Use This Repo (Running Tests)

* **Run all tests (UI & API):**
  ```bash
  npx playwright test
  ```

* **Run UI tests only:**
  ```bash
  npx playwright test tests/ui
  ```

* **Run API tests only:**
  ```bash
  npx playwright test tests/api
  ```

* **Run tests with UI Mode (Interactive):**
  ```bash
  npx playwright test --ui
  ```

---

## 📊 Viewing Reports & Traces

After test execution, an HTML report is automatically generated. To view the report and inspect failure traces:

```bash
npx playwright show-report
