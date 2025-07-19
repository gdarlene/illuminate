# illuminate
Ai based assistance tool for visually impaired individuals helping in navigating the digital workplace through social media and professional networking platforms like linkedin. Build for **NextSteps hackathon july 19th 2025** Illuminate comes in 2 forms which are a react native mobile application supporting both android and ios platforms and a browser based extension for real time detection of the platform in the background and helps the user in step by step independence navigation of the platform and carrying out their activities

## Features

- **Voice navigation:** Illuminate encoporates a smart enhanced voice navigation by using Open Ai's Whisper api for smart text detection and guides the user seamlessly through the user interface on the platform in question 

- **Task scheduling:** Illuminate helps users in various tasks scheduling such as post scheduling through words detected from the user

- **Resume Summary Generation**: Generate concise resume summaries via voice input by capturing the critical essential keywords helping the visually impaired individuals to be included in the digital world if they have the skills like **voive over** jobs

- **Job applications:** Illuminate helps the same users in step by step job application for the job of interest

## Technologies
- **HTML, CSS, JavaScript:** Front-end for the extension’s popup UI and functionality.
- **Web Speech API:** Browser-native API for voice input (speech recognition) and output (text-to-speech). Used for a simle MVP
- **Chrome Extension Framework:** Runs in the background on supported platforms (Instagram, Facebook, LinkedIn).
- **Whisper Api:** Used for advanced voice recognition features supporting background voice in a smart way
- **React Native:** Used for mobile application developement that will be used for advanced mobile application usage for both android and IOS
- **Open Ai's GPT-4 Turbo API:** Used for a more advanced approach of a strong ai model for task generation and automation

# Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/gdarlene/illuminate-extension.git
   ```
2. **Load in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (top right).
   - Click "Load unpacked" and select the `extension` folder.
3. **Test on Supported Sites**:
   - Visit [instagram.com](https://www.instagram.com), [facebook.com](https://www.facebook.com), or [linkedin.com](https://www.linkedin.com).
   - Click the extension icon (puzzle piece) and pin "Illuminate" to open the popup.

# Test the Extension:
**Visit:**
- linkedin.com or
-  instagram.com or
- facebook.com

Click the extension icon (puzzle piece), pin "Illuminate," and open the popup.
Use buttons to:
- Voice Navigation: Say "navigate to profile" or "create post".
- Resume Summary: Say "I’m a developer" or "I’m a marketer".
- Schedule Post/Apply: Say "schedule post tomorrow" or "apply for job".
High-Contrast Mode: Toggle for enhanced visibility.
