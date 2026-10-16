# Playwright TypeScript Automation Framework

An automated testing framework built with **Playwright** and **TypeScript**, covering both End-to-End UI tests (SauceDemo) and API integration tests (BookStore API).

---

## 🚀 Features
* **UI Testing**: Comprehensive smoke and sanity tests for shopping cart and inventory modules using Page Object Model (POM).
* **API Testing**: Automated validation of the BookStore API endpoints and error payloads.
* **Global Authentication Setup**: Automated login flow that saves storage state to avoid redundant logins
* **Custom Utilities**: Reusable helper functions for API requests and assertions (`utils/`)
* **Robust Reporting**: HTML report generation and automatic trace capturing on test failure (`trace: 'retain-on-failure'`).
* **CI/CD Integration**: Fully automated pipeline configured via GitHub Actions.

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
