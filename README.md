<div align="center">

# 🧠 AdaptED AI

### AI-Powered Adaptive Learning Platform

[![Hackathon Winner](https://img.shields.io/badge/🏆_Hackathon-Winner-gold?style=for-the-badge)](https://github.com/pranawwwww/adaptedge-assignment-helper)
[![Live Demo](https://img.shields.io/badge/🚀_Live-Demo-purple?style=for-the-badge)](https://pranawwwww.github.io/adaptedge-assignment-helper/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**A smart digital tutor that personalizes learning with real-time help, adaptive feedback, and simplified lessons—making education accessible, engaging, and tailored to you.**

[Live Demo](https://pranawwwww.github.io/adaptedge-assignment-helper/) • [Report Bug](https://github.com/pranawwwww/adaptedge-assignment-helper/issues) • [Request Feature](https://github.com/pranawwwww/adaptedge-assignment-helper/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [AI Learning System](#-ai-learning-system)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [Team](#-team)
- [License](#-license)

---

## 🎯 Overview

**AdaptED AI** is a revolutionary AI-powered learning platform designed to transform how students approach assignments and learning. Built with cutting-edge AI technology, it provides personalized, adaptive learning experiences that cater to individual learning styles and pace.

### 🏆 Hackathon Achievement

This project was developed as a winning submission for a hackathon, showcasing innovation in educational technology and AI integration.

### ✨ What Makes AdaptED AI Special?

- **Adaptive Learning Paths**: Choose from three distinct learning modes based on your needs
- **AI-Powered Insights**: Leverages Google's Generative AI (Gemini) for intelligent content analysis
- **Interactive Learning**: Engage with dynamic flashcards, quizzes, and progressive assessments
- **Multi-Format Support**: Upload various document formats for seamless learning
- **Real-Time Feedback**: Get instant, personalized feedback on your progress

---

## 🚀 Key Features

### 📚 Three Learning Modes

| Mode | Description | Status |
|------|-------------|--------|
| **🎯 Quick Start** | Basic tutorials and straightforward answers for gentle introduction | Coming Soon |
| **⚡ Learn Fast** | Hints, nudges, and partial answers for grasping basics quickly | Coming Soon |
| **🏆 Master It** | Full tutorials and interactive material for comprehensive knowledge | ✅ Available |

### 🔥 Core Features

- **Smart Document Processing**
  - Support for `.pdf`, `.doc`, `.docx`, `.txt`, `.rtf`, `.ppt`, `.pptx`
  - Intelligent content parsing and structuring
  - Automated learning material generation

- **Interactive Learning Tools**
  - AI-powered assignment analysis
  - Dynamic flashcard generation
  - Progressive assessment questions
  - Real-time progress tracking

- **Personalized Experience**
  - Adaptive difficulty levels
  - Custom learning paths
  - Detailed performance analytics
  - Dark/Light mode support

- **Modern UI/UX**
  - Beautiful, responsive design
  - Smooth animations and transitions
  - Glassmorphism effects
  - Mobile-friendly interface

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white) | UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white) | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite&logoColor=white) | Build Tool |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.11-38B2AC?logo=tailwind-css&logoColor=white) | Styling |
| ![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-000000?logo=shadcnui&logoColor=white) | UI Components |

### AI & State Management

| Technology | Purpose |
|------------|---------|
| ![Google AI](https://img.shields.io/badge/Google_AI-Gemini-4285F4?logo=google&logoColor=white) | AI Engine |
| ![React Query](https://img.shields.io/badge/React_Query-5.56.2-FF4154?logo=react-query&logoColor=white) | Data Fetching |
| ![Zustand](https://img.shields.io/badge/Zustand-5.0.3-593D88) | State Management |
| ![React Router](https://img.shields.io/badge/React_Router-6.26.2-CA4245?logo=react-router&logoColor=white) | Routing |

### Additional Libraries

- **UI Enhancement**: Lucide React (icons), Framer Motion (animations)
- **Form Handling**: React Hook Form, Zod validation
- **Markdown**: React Markdown with syntax highlighting
- **Styling**: Class Variance Authority, Tailwind Merge

---

## 🎬 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pranawwwww/adaptedge-assignment-helper.git
cd adaptedge-assignment-helper
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Gemini API Key (Required)
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Development settings (Optional)
VITE_USE_MOCK_DATA=false

# File upload settings (Optional)
VITE_MAX_UPLOAD_SIZE_MB=10
VITE_ALLOWED_FILE_TYPES=.pdf,.doc,.docx,.txt,.rtf,.ppt,.pptx
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to `http://localhost:5173` to see the app running!

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

---

## 📖 Usage

### 1. Choose Your Learning Mode

Select from three learning paths based on your needs:
- **Quick Start**: For rapid understanding
- **Learn Fast**: For efficient learning
- **Master It**: For comprehensive mastery

### 2. Upload Your Materials

- Upload your assignment document
- Optionally add supplementary learning materials
- Supported formats: PDF, DOC, DOCX, TXT, RTF, PPT, PPTX

### 3. Learn & Practice

- Review AI-generated flashcards
- Progress through adaptive learning levels
- Take interactive quizzes and assessments

### 4. Complete Your Assignment

- Get personalized feedback
- Track your progress
- Achieve mastery through guided learning

---

## 📁 Project Structure

```
adaptedge-assignment-helper/
├── public/
│   ├── prompts/          # AI prompt templates for different levels
│   ├── brain-icon.svg    # Application icons
│   └── 404.html          # 404 page
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── AIThinkingLoader.tsx
│   │   ├── CourseSelection.tsx
│   │   ├── FlashcardItem.tsx
│   │   ├── GuidedLearning.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Landing page
│   │   ├── Upload.tsx   # File upload page
│   │   ├── MasterIt.tsx # Learning page
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

---

## 🧠 AI Learning System

AdaptED AI uses a sophisticated **6-level progressive learning system**:

| Level | Focus | Description |
|-------|-------|-------------|
| **Level 0** | Assignment Overview | Initial analysis and breakdown of the assignment |
| **Level 1** | Basic Understanding | Core concepts and fundamental principles |
| **Level 2** | Advanced Understanding | Detailed concept exploration and connections |
| **Level 3** | Practical Application | Real-world applications and examples |
| **Level 4** | Expert Implementation | Advanced problem-solving techniques |
| **Level 5** | Mastery | Comprehensive knowledge synthesis and evaluation |

Each level adapts to your responses, providing personalized guidance and feedback.

---

## 📸 Screenshots

> Add screenshots of your application here to showcase its features

<div align="center">

### Landing Page
[Screenshot Placeholder]

### Upload Interface
[Screenshot Placeholder]

### Learning Dashboard
[Screenshot Placeholder]

### Interactive Flashcards
[Screenshot Placeholder]

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Team

Built with ❤️ by a talented team of developers:

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/pranavkutralingam">
        <img src="https://avatars.githubusercontent.com/u/pranawwwww" width="100px;" alt="Pranav"/>
        <br />
        <sub><b>Pranav Kutralingam</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/namany">
        <img src="https://avatars.githubusercontent.com/u/naman-ranka" width="100px;" alt="Naman"/>
        <br />
        <sub><b>Naman Ranka</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/swatikashyap8">
        <img src="https://avatars.githubusercontent.com/u/swatikashyap8" width="100px;" alt="Swati"/>
        <br />
        <sub><b>Swati Kashyap</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/chandannooli">
        <img src="https://avatars.githubusercontent.com/u/chandannooli" width="100px;" alt="Chandan"/>
        <br />
        <sub><b>Chandan Nooli</b></sub>
      </a>
    </td>
  </tr>
</table>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Google Generative AI for powering our intelligent tutoring system
- Shadcn UI for the beautiful component library
- The open-source community for amazing tools and libraries
- All hackathon organizers and judges

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with 💜 by the AdaptED AI Team

[⬆ Back to Top](#-adapted-ai)

</div>
