const commandsData = {
  info: {
    icon: "ℹ️",
    title: "Information",
    commands: [
      {
        name: "/help",
        description: "Get help with bot commands and features",
        permission: "All",
      },
      {
        name: "/botinfo",
        description: "Display information about the bot",
        permission: "All",
      },
      {
        name: "/serverinfo",
        description: "Display information about the server",
        permission: "All",
      },
      {
        name: "/userinfo",
        description: "Display information about a user",
        permission: "All",
      },
      {
        name: "/channelinfo",
        description: "Display information about a channel",
        permission: "All",
      },
      {
        name: "/roleinfo",
        description: "Display information about a role",
        permission: "All",
      },
      {
        name: "/ping",
        description: "Check bot latency and response time",
        permission: "All",
      },
      {
        name: "/invite",
        description: "Get bot invite link with custom permissions",
        permission: "All",
      },
      {
        name: "/changelog",
        description: "View recent bot updates and changes",
        permission: "All",
      },
    ],
  },
  ai: {
    icon: "🤖",
    title: "AI",
    commands: [
      {
        name: "/chat",
        description: "Chat with Atsuko's AI powered by Gemini",
        permission: "All",
      },
    ],
  },
  music: {
    icon: "🎵",
    title: "Music",
    commands: [
      {
        name: "/play",
        description: "Play music from various sources",
        permission: "All",
      },
      {
        name: "/pause",
        description: "Pause the current track",
        permission: "All",
      },
      {
        name: "/skip",
        description: "Skip to the next track",
        permission: "All",
      },
      {
        name: "/stop",
        description: "Stop music and clear the queue",
        permission: "All",
      },
      {
        name: "/queue",
        description: "View the current music queue",
        permission: "All",
      },
      {
        name: "/volume",
        description: "Adjust the music volume",
        permission: "All",
      },
      {
        name: "/loop",
        description: "Toggle loop mode for tracks or queue",
        permission: "All",
      },
      {
        name: "/shuffle",
        description: "Shuffle the current queue",
        permission: "All",
      },
      {
        name: "/lyrics",
        description: "Get lyrics for the current track",
        permission: "All",
      },
      {
        name: "/search",
        description: "Search for music tracks",
        permission: "All",
      },
      {
        name: "/playlist",
        description: "Manage your music playlists",
        permission: "All",
      },
      {
        name: "/filters",
        description: "Apply audio filters to music",
        permission: "All",
      },
      {
        name: "/join",
        description: "Join your voice channel",
        permission: "All",
      },
      {
        name: "/leave",
        description: "Leave the voice channel",
        permission: "All",
      },
    ],
  },
  fun: {
    icon: "🎮",
    title: "Fun & Games",
    commands: [
      {
        name: "/games",
        description: "Play various mini-games like 2048, Snake, TicTacToe",
        permission: "All",
      },
      {
        name: "/8ball",
        description: "Ask the magic 8-ball a question",
        permission: "All",
      },
      {
        name: "/activities",
        description: "Start Discord activities in voice channels",
        permission: "All",
      },
      {
        name: "/meme",
        description: "Get random memes from various subreddits",
        permission: "All",
      },
      {
        name: "/ship",
        description: "Ship two users and see their compatibility",
        permission: "All",
      },
      {
        name: "/pp",
        description: "Measure someone's pp size (fun command)",
        permission: "All",
      },
      {
        name: "/impersonate",
        description: "Impersonate another user with webhooks",
        permission: "Manage Webhooks",
      },
    ],
  },
  utility: {
    icon: "🛠️",
    title: "Utility",
    commands: [
      {
        name: "/avatar",
        description: "Get a user's avatar in high quality",
        permission: "All",
      },
      {
        name: "/calculator",
        description: "Perform mathematical calculations",
        permission: "All",
      },
      {
        name: "/color",
        description: "Get information about colors and generate palettes",
        permission: "All",
      },
      {
        name: "/define",
        description: "Get definitions of words",
        permission: "All",
      },
      {
        name: "/translate",
        description: "Translate text between languages",
        permission: "All",
      },
      {
        name: "/weather",
        description: "Get weather information for any location",
        permission: "All",
      },
      {
        name: "/qr",
        description: "Generate QR codes for text or URLs",
        permission: "All",
      },
      {
        name: "/snipe",
        description: "View recently deleted messages",
        permission: "All",
      },
      {
        name: "/koutube",
        description: "Search and get YouTube video information",
        permission: "All",
      },
      {
        name: "/bug-report",
        description: "Report bugs to the developers",
        permission: "All",
      },
      {
        name: "/bot-suggest",
        description: "Suggest new features for the bot",
        permission: "All",
      },
    ],
  },
  moderation: {
    icon: "🛡️",
    title: "Moderation",
    commands: [
      {
        name: "/ban",
        description: "Ban a user from the server",
        permission: "Ban Members",
      },
      {
        name: "/kick",
        description: "Kick a user from the server",
        permission: "Kick Members",
      },
      {
        name: "/timeout",
        description: "Timeout a user for a specified duration",
        permission: "Moderate Members",
      },
      {
        name: "/untimeout",
        description: "Remove timeout from a user",
        permission: "Moderate Members",
      },
      {
        name: "/warn",
        description: "Warn a user for rule violations",
        permission: "Moderate Members",
      },
      {
        name: "/warnings",
        description: "View warnings for a user",
        permission: "Moderate Members",
      },
      {
        name: "/clear",
        description: "Clear messages from a channel",
        permission: "Manage Messages",
      },
      {
        name: "/purge",
        description: "Purge messages with advanced filters",
        permission: "Manage Messages",
      },
      {
        name: "/lock",
        description: "Lock a channel to prevent messages",
        permission: "Manage Channels",
      },
      {
        name: "/unlock",
        description: "Unlock a previously locked channel",
        permission: "Manage Channels",
      },
      {
        name: "/slowmode",
        description: "Set slowmode for a channel",
        permission: "Manage Channels",
      },
      {
        name: "/nick",
        description: "Change a user's nickname",
        permission: "Manage Nicknames",
      },
      {
        name: "/nuke",
        description: "Clone and delete a channel (nuke)",
        permission: "Manage Channels",
      },
      {
        name: "/unban",
        description: "Unban a user from the server",
        permission: "Ban Members",
      },
    ],
  },
  admin: {
    icon: "⚙️",
    title: "Administration",
    commands: [
      {
        name: "/giveaway",
        description: "Create and manage server giveaways",
        permission: "Manage Guild",
      },
      {
        name: "/autorole",
        description: "Set up automatic role assignment",
        permission: "Manage Roles",
      },
      {
        name: "/welcome",
        description: "Configure welcome messages and settings",
        permission: "Manage Guild",
      },
      {
        name: "/serverlogs",
        description: "Configure server logging channels",
        permission: "Manage Guild",
      },
      {
        name: "/setlanguage",
        description: "Set the bot's language for this server",
        permission: "Manage Guild",
      },
      {
        name: "/guildsettings",
        description: "Configure various guild settings",
        permission: "Manage Guild",
      },
      {
        name: "/automod",
        description: "Configure automatic moderation settings",
        permission: "Manage Guild",
      },
    ],
  },
  image: {
    icon: "🖼️",
    title: "Image",
    commands: [
      {
        name: "/image",
        description: "Generate and manipulate images with filters",
        permission: "All",
      },
      {
        name: "/anime",
        description: "Get random anime images and character info",
        permission: "All",
      },
    ],
  },
  minecraft: {
    icon: "⛏️",
    title: "Minecraft",
    commands: [
      {
        name: "/serverStatus",
        description: "Check Minecraft server status and info",
        permission: "All",
      },
      {
        name: "/addSeverStatus",
        description: "Add a Minecraft server to status tracking",
        permission: "Manage Guild",
      },
      {
        name: "/removeServerStatus",
        description: "Remove a server from status tracking",
        permission: "Manage Guild",
      },
      {
        name: "/listServers",
        description: "List all tracked Minecraft servers",
        permission: "All",
      },
      {
        name: "/skin",
        description: "Get Minecraft player skin and info",
        permission: "All",
      },
      {
        name: "/achievement",
        description: "Generate custom Minecraft achievements",
        permission: "All",
      },
    ],
  },
};

function createCategoryButton(key, category) {
  return `
        <div class="bg-white/5 rounded-2xl border border-white/10" id="${key}-container">
            <button class="w-full px-8 py-6 flex justify-between items-center text-2xl font-semibold" 
                    onclick="toggleCategory('${key}')">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        ${category.icon}
                    </div>
                    <span>${category.title}</span>
                </div>
                <svg class="w-6 h-6 transform transition-transform" id="${key}-arrow"
                     xmlns="http:
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="hidden px-8 pb-6 space-y-4" id="${key}-commands">
                <!-- Commands will be loaded here when category is opened -->
            </div>
        </div>
    `;
}

function createCommandHTML(cmd) {
  return `
        <div class="command-card bg-white/5 p-6 rounded-xl border border-white/10">
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-xl font-semibold mb-2">${cmd.name}</h4>
                    <p class="text-white/70">${cmd.description}</p>
                </div>
                <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">
                    ${cmd.permission}
                </span>
            </div>
        </div>
    `;
}

const loadedCategories = new Set();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const container = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);
  const cards = container.querySelectorAll(".command-card");

  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");

    arrow.classList.add("rotate");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("show");
    });

    arrow.classList.remove("rotate");

    setTimeout(() => {
      container.classList.add("hidden");
    }, 300);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

document.addEventListener("DOMContentLoaded", initializeWebsite);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const commandsDiv = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);

  if (!loadedCategories.has(category)) {
    const commandsHTML = commandsData[category].commands
      .map((cmd) => createCommandHTML(cmd))
      .join("");
    commandsDiv.innerHTML = commandsHTML;
    loadedCategories.add(category);
  }

  commandsDiv.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

function initializeWebsite() {
  initHeroAnimations();
  initFeaturesAnimations();
  initScrollAnimations();
  initSmoothScroll();

  const ctaButtons = document.querySelectorAll(".gradient-bg");
  ctaButtons.forEach((button) => button.classList.add("pulse-on-hover"));

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => card.classList.add("shine-effect"));
}
async function updateGitHubStats() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/TunxxVN/atsuko-website",
    );
    const data = await response.json();

    document.getElementById("stars-count").textContent =
      `${data.stargazers_count} Stars`;
    document.getElementById("forks-count").textContent =
      `${data.forks_count} Forks`;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
  }
}

updateGitHubStats();
setInterval(updateGitHubStats, 300000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.querySelector('[onclick="scrollToTop()"]');
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
};

document.addEventListener("DOMContentLoaded", initializeWebsite);
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("commands-container");

  const categoriesHTML = Object.entries(commandsData)
    .map(([key, category]) => createCategoryButton(key, category))
    .join("");

  container.innerHTML = categoriesHTML;
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const menuButton = document.querySelector(".md\\:hidden button");

  if (mobileMenu.classList.contains("hidden")) {
    // Show menu
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-in");
    menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    // Hide menu
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }

  // Stop event propagation
  event.stopPropagation();
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".md\\:hidden button");

  // Only close if menu is open and click is outside menu and button
  if (
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    document
      .querySelector(".menu-icon")
      .setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }
});

// Prevent menu from closing when clicking inside
document.getElementById("mobileMenu")?.addEventListener("click", (e) => {
  e.stopPropagation();
});
