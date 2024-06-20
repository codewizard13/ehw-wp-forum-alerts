# WordPress Support Tracker Chrome Extension

**Creator**: Eric Hepperle  
**Date**: 2024-06-07  

## Purpose

The WordPress Support Tracker Chrome Extension is designed to help users monitor new responses on WordPress.org support topics they have created or replied to. The extension displays the number of new responses directly on the browser icon, providing a convenient way to stay updated without manually checking the forums.

## Directory Tree

```
ehw-wp-forum-alerts/
│
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│
├── popup/
│   ├── popup.html
│   ├── popup.js
│
├── background.js
├── manifest.json
├── README.md
```

## Installation

1. **Download the Extension**:
    - Clone or download the repository to your local machine.

2. **Load the Extension**:
    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" (toggle switch in the top right corner).
    - Click "Load unpacked" and select the `ehw-wp-forum-alerts/` directory.

3. **Log In**:
    - Click on the extension icon in the Chrome toolbar.
    - Enter your WordPress.org username and password in the popup form to log in.

## Usage

- Once logged in, the extension will periodically check for new responses to your support topics every 5 minutes.
- The number of new responses will be displayed on the extension icon in the toolbar.

## Troubleshooting

### Common Issues

- **Login Fails**:
  - Ensure that you are entering the correct WordPress.org username and password.
  - Verify that your network connection is stable.
  - Check if there are any updates to the extension or WordPress.org API changes that might affect functionality.

- **Badge Count Not Updating**:
  - Check the console for errors by right-clicking the extension icon, selecting "Inspect Popup", and then "Console".
  - Ensure that you are logged in correctly and that your session has not expired.
  - Verify that the WordPress.org support forum structure has not changed, as this could affect the parsing logic.

### How to Report Issues

- If you encounter any issues not covered here, please report them by opening an issue on the GitHub repository.

## Pitfalls to Watch Out For

- **Security**:
  - Ensure that your login credentials are stored securely. The extension uses `chrome.storage.sync` to store credentials, but consider additional encryption if needed.
  - Be cautious of phishing attempts or entering credentials on unsecured networks.

- **Rate Limiting**:
  - Be aware of potential rate limiting by WordPress.org when making frequent requests. Adjust the check interval if necessary to avoid being blocked.

- **API Changes**:
  - The extension relies on the structure of WordPress.org's support forum pages. If these structures change, the extension may break. Regular maintenance and updates are recommended.

## Contributing

If you would like to contribute to the development of this extension, please fork the repository, make your changes, and submit a pull request. Contributions are welcome and appreciated!

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries or support, please contact Eric Hepperle at [your-email@example.com].

---

Thank you for using the WordPress Support Tracker Chrome Extension!