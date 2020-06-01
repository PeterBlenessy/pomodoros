
# Pomodoros

Yet another Pomodoro timer application for your Mac, Windows and Linux, based on Electron

## Initial setup

```bash
# Create folder for our application project and initiate it for development
mkdir pomodoro && cd pomodoro
yarn init

# Create folders and (empty) files for the application
touch package.json README.md LICENSE main.js index.html .gitignore
mkdir renderer && touch renderer/renderer.js
mkdir resources # We will put logo files here
mkdir main && touch main/{analytics.js, settings.js, tray.js}
mkdir .github/workflows && touch .github/workflows/ci.yml

# Install Electron- version 9.0.0 has issues with signing
yarn add electron@^8.3.0 --dev

# Install electron-builder, a complete solution to build, package, sign and publish the application for macOS, Windows and Linux
yarn add electron-builder --dev

# Install module to support automatic update of the application
yarn add electron-updater

# Install packages so we can notarize the application for macOS
yarn add electron-notarize --dev
yarn add electron-builder-notarize --dev

# Install electron-store, a simple data persistence for our application - Save and load user preferences, app state, cache
yarn add electron-store

# We install nucleus-nodejs for analytics in the application
yarn add nucleus-nodejs

# Install node-keytar, a native Node module to get, add, replace, and delete passwords in system's keychain
# yarn add node-keytar

# We run yarn audit to check that there are no security issues
yarn audit

```