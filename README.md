# 🤖 Discord Bot Website Template

> A sleek, modern landing page template for Discord bots powered by HTML, TailwindCSS, and GSAP animations.

![Website Status](https://api.netlify.com/api/v1/badges/c3f8e046-5b06-4397-b7cc-d53f36ae60bf/deploy-status)
![License](https://img.shields.io/badge/license-MIT-red.svg)
![HTML](https://img.shields.io/badge/HTML-5-red.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-red.svg)
![GSAP](https://img.shields.io/badge/GSAP-3-red.svg)

![image](https://github.com/user-attachments/assets/30a3d0c9-df7a-4a16-b3f7-198962dce80b)


## ✨ Features

- 🎨 &nbsp;Modern gradient design
- 📱 &nbsp;Responsive layout
- ⚡ &nbsp;GSAP animations
- 🎯 &nbsp;Expandable command categories
- 🌙 &nbsp;Dark theme + blur effects
- 🔄 &nbsp;Loading animations
- 📊 &nbsp;Live GitHub stats
- 💫 &nbsp;Interactive UI elements

## 🚀 Quick Start

```bash
# Clone repository
git clone github.com/redolenthalo/discord-bot-website-template

# Navigate to directory
cd discord-bot-website-template

# Open in browser
open index.html
```

## ⚙️ Customization

### Basic Setup

1. **Bot Info**
   ```html
   <!-- Update in index.html -->
   <title>Your Bot Name</title>
   <meta name="description" content="Your bot description">
   ```

2. **Assets**
   ```bash
   # Replace with your images
   /images/
   ├── logo.png     # Bot logo
   └── user.png     # Testimonial avatars
   ```

3. **Colors**
   ```css
   /* Modify in styles.css */
   .gradient-bg {
     background: linear-gradient(-45deg, #dc2626, #991b1b);
   }
   ```

### 📝 Command Structure

```javascript
// Configure in script.js
const commandsData = {
  moderation: {
    icon: "🛡️",
    title: "Moderation",
    commands: [
      {
        name: "/ban",
        description: "Ban a user",
        permission: "ADMINISTRATOR"
      }
    ]
  }
};
```

---
[![Star Repo](https://img.shields.io/github/stars/redolenthalo/discord-bot-website-template?style=social)](https://github.com/redolenthalo/discord-bot-website-template)

> 💝 A star would be greatly appreciated!
