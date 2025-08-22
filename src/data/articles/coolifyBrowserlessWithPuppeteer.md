---
id: 3
title: "Generate Images with HTML with Puppeteer and Browserless"
date: "28/05/2025"
tags: ['Puppeteer', 'Browserless', 'Generate Image via HTML',]
toc: [
    { title: "Introduction", id: "introduction" },
    { title: "Problem", id: "problem" },
    { title: "Step 2: Find IP Address", id: "step-2-find-ip" },
    { title: "Step 3: SSH into the Raspberry Pi", id: "step-3-ssh-into-pi" },
    { title: "Step 4: Secure SSH", id: "step-4-secure-ssh" },
    { title: "Conclusion", id: "conclusion" }
]
---

## Introduction
<span id="introduction"></span>

This a walk-through the way I implemented an system to get screenshots with [Puppeteer](https://github.com/puppeteer/puppeteer) (more specifically Puppeteer-core) for my leetcode stats card project, which links are:
- [GitHub](https://github.com/Franciscoborges2002/leetStatsCard)
- [Website](https://leetcodestatscard.fborges.dev/)

As in this project ([LeetCodeStatsCard](https://github.com/Franciscoborges2002/leetStatsCard)) i want people to share their own  [leetcode.com](https://www.leetcode.com) stats online though an image. To handle this I needed an way to generate an image through HTML, more precisely a [react component](https://react.dev/reference/react/Component) as I already had a component for the card, and i only needed an efficient way to generate the image.

## Requirements & Constraints
<span id="problem"></span>

- **Environment:** A VPS with Dockerized services.

- **Library choice:** [puppeteer-core](https://www.npmjs.com/package/puppeteer-core) instead of full Puppeteer (lighter, lets me control which Chromium build I install).

- **Output:** High-quality PNG/JPEG screenshots.

- **Constraints:**
    - Must run in headless mode.

    - Must not consume too much CPU/memory (since it runs alongside other containers).

## Problem
<span id="problem"></span>


Thus, there are another alternatives that i could do to approach the feature i wanted to add, i choose this one not because 

Whtas was the problem i was encoutering?
> I use an VPS to send to production my projects (being all contanerized), so an error was consistently appearing, one that

## 