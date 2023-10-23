# Gideon (AI Summarizer App)

Gideon is a powerful AI web application designed to streamline your reading experience. It offers a smart solution for summarizing lengthy articles with just a few clicks. Simply provide the URL of the article you'd like to digest, and Gideon will generate a concise summary, saving you valuable time. Whether you're a student, researcher, or a curious reader. Gideon is your shortcut to grasping the essence of complex articles effortlessly.

## Features

- **Article Summarization:** Summarize long articles provided via URL to save time and offer concise information.
- **User-Friendly Interface:** A clean and intuitive web interface for easy interaction.
- - **Copy to Clipboard:** Copy the generated summaries to your clipboard.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_RAPID_API_ARTICLE_KEY`
`VITE_HANKO_API_URL`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Ayomide0123/gideon_ai.git
```

Go to the project directory

```bash
  cd gideon_ai
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

The application should now be running at <http://localhost:5173>

## Tech Stack

**Client:** React, React-Router, TailwindCSS

**Auth:** Hanko

## Screenshots

![Login Page](https://github.com/Ayomide0123/gideon_ai/blob/main/src/assets/screenshots/login_page.png)

![Landing Page](https://github.com/Ayomide0123/gideon_ai/blob/main/src/assets/screenshots/landing_page.png)
