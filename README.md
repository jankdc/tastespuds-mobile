# Tastepuds Mobile

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

# .env and .env.production

These two files should contain env variables that should be set
according to how react-native-dotenv likes it. These are the variables
that need setting:

- ASSETS_URL
- AUTH0_DOMAIN
- AUTH0_AUDIENCE
- AUTH0_CLIENT_ID
- PLATFORM_DOMAIN
- STREAMJS_APP_ID
- STREAMJS_API_KEY
- SENTRY_DSN

# Required Environment Variables

These variables are required for devops purposes and need to be at the shell level.

- EXPO_APPLE_ID: Username for uploading standalone builds to the Apple Store
- EXPO_APPLE_PASSWORD: Password for uploading standalone builds to the Apple Store
- SENTRY_AUTH_TOKEN: For uploading source maps to Sentry
