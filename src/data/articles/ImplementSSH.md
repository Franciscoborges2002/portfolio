---
id: 3
title: "Implementing SSH in a Raspberry Pi"
date: "30/11/2024"
tags: ["SSH", "Raspberry Pi"]
image: "/images/articles/ImplementingSSHRaspberryPi.png"
medium: "https://medium.com/@franciscomsborges2002"
toc: [
    { title: "Introduction", id: "introduction" },
    { title: "What You’ll Need", id: "what-youll-need" },
    { title: "Step 1: Enable SSH", id: "step-1-enable-ssh" },
    { title: "Step 2: Find IP Address", id: "step-2-find-ip" },
    { title: "Step 3: SSH into the Raspberry Pi", id: "step-3-ssh-into-pi" },
    { title: "Step 4: Secure SSH", id: "step-4-secure-ssh" },
    { title: "Conclusion", id: "conclusion" }
]
---

<span id="introduction"></span>

## Introduction

Secure Shell (SSH) is an essential tool for remotely managing your Raspberry Pi without needing a monitor, keyboard, or mouse. Whether you're building a home automation system or just want remote access to your Pi, enabling SSH is one of the first steps. Here's how to set it up.

## What you'll need

- A Raspberry Pi (any model)
- A microSD card with Raspberry Pi OS installed
- A local network (Wi-Fi or Ethernet)
- Power supply for the Pi
- A monitor and keyboard

<span id="step-1-enable-ssh"></span>

## Step 1: Enable SSH

1. Boot up the Raspberry Pi with a display.
2. Go to **_Menu_** → **_Preferences_** → **_Raspberry Pi Configuration_**.
3. Open the **_Interfaced_** tab.
4. Set **_SSH_** to "Enabled".
5. Click **_OK_**.

<span id="step-2-find-ip"></span>

## Step 2: Find the Raspberry Pi’s IP Address

You’ll need the IP address to connect via SSH. You can:

<span id="step-3-ssh-into-pi"></span>

## Step 3: SSH into the Raspberry Pi

From a terminal (macOS/Linux) or using an SSH client like **_PuTTY_** (Windows):

> ssh pi@<your_pi_ip_address>

The default credentials are:

- Username: **_pi_**
- Password: **_raspberry_**

<span id="step-4-secure-ssh"></span>

## Step 4: Secure Your Connection

### 1. Change the default password

> passwd

### 2. Update the system

> sudo apt update && sudo apt upgrade -y

<span id="conclusion"></span>

## Conclusion

With SSH enabled, your Raspberry Pi becomes a truly remote and flexible device. From coding and server setup to IoT applications, SSH opens the door to countless possibilities—all from the comfort of your terminal.

Have fun exploring your Pi remotely!
