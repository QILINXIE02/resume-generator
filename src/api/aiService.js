// src/api/aiService.js
import axios from 'axios';

const generateContent = async (prompt) => {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt,
    max_tokens: 100,
  }, {
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`
    }
  });

  return response.data.choices[0].text;
};

export default generateContent;
