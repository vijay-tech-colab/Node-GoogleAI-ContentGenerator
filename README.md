# Node with Google Generative AI

This project is a Node.js application that uses the Google Generative AI API to generate content based on user prompts. It uses Express.js for routing and requires an API key to interact with the AI model.

## Features
- Accepts a prompt from the user through a POST request.
- Uses Google Generative AI to generate content based on the prompt.
- Returns the generated content as a JSON response.

## Technologies
- Node.js
- Express.js
- Google Generative AI
- dotenv

## Prerequisites
- Node.js (v14 or higher)
- Google Generative AI API key

## Setup and Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/vijay-tech-colab/Node-GoogleAI-ContentGenerator/node_with_ai.git
    cd node_with_ai
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Google Generative AI API key:
    ```plaintext
    API_KEY=your_google_ai_api_key
    ```

4. Start the server:
    ```bash
    node index.js
    ```

## Usage
1. Send a POST request to `http://localhost:3000/api/content` with the following JSON body:
    ```json
    {
      "content": "Your prompt here"
    }
    ```

2. The server will respond with the generated content in JSON format.

## Example Request
```bash
curl -X POST http://localhost:3000/api/content -H "Content-Type: application/json" -d "{\"content\": \"Hello AI!\"}"
