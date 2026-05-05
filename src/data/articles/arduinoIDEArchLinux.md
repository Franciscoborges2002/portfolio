---
id: 6
title: "Installing arduino ide in Archlinux"
date: "15/02/2026"
tags: ["arduino", "arduino IDE", "arch linux", "Omarchy"]
#image: "/images/articles/ImplementingSSHRaspberryPi.png"
#medium: "https://medium.com/@franciscomsborges2002"
toc: [
    { title: "Introduction", id: "introduction" },
    { title: "Using Arduino IDE", id: "using-arduino-ide" },
    { title: "Making the first project", id: "first-project" },
]
---

# Introduction
<span id="introduction"></span>

I recently bought my first Arduino board along with some sensors, and I wanted to start trying them. At the same time, I had recently moved all my development work to Arch Linux, more specifically, Omarchy ([arch linux (more precisely, omercy)](https://fborges.dev/articles/installingOmarchy)).

In this blog post, I will walk through the installation process on arch linux and document of the issues i encountered, along with their solutions.

# Installing IDE
<span id="installing-ide"></span>

Since I wanted do learn more about arch, i decided to install the Arduino IDE using the AUR (Arch User Repository).

First, I navigated to my `download` folder and cloned the `arduino-ide-bin` repository, using the following commnad:

```
git clone https://aur.archlinux.org/arduino-ide-bin.git
```

Next, I entered the directory and build the package:

```
makepkg -si
```

Surprisingly, the installation worked on the first try :) 

After that, I attempted to launch the IDE using:

```
arduino-ide
```

However, nothing appeared. That was my first issue.

After searching for a while, I found a [reddit post](https://www.reddit.com/r/archlinux/comments/1oyevbm/installing_arduino_ide_in_arch_linux/) describing the exact same problem. The suggested solution was to launch the IDE using the `--ozone-platform=x11` flag. Since I am using Hyprland under x11, I start the IDE using the following command:

```
arduino-ide --ozone-platform=x11
```

This time, it open smoothly.

IMAGE ARDUINO IDE

To make things easier, I added an alias to my shell configuration, with the flag:

```
alias arduinox="arduino-ide --ozone-platform=x11"
```

Now, running `arduinox` starts the IDE correctly.

# Using Arduino IDE
<span id="using-arduino-ide"></span>

Installing the IDE was straightforward. Uploading code to the board was not.

I started with the classic Blink example, but when trying to upload it, I encountered the following error:

```
OS error: cannot open port /dev/ttyACM0: Permission denied
Error: unable to open port /dev/ttyACM0 for programmer arduino
Failed uploading: uploading error: exit status 1
```

After about 10 mins searching on the internet, I stumbled upon this [post in arch forum](https://bbs.archlinux.org/viewtopic.php?id=284693), where a user experienced the same issue.
The problem was related to device permissions. The system did not allow access to `/dev/ttyACM0`, which is required to communicate with the Arduino board.

Running the following command resolved the issue:

```
sudo chmod a+rw /dev/ttyACM0
```

After applying this change, it worked :).

The solution is quite understandable, as the port does not have permission to send the arduino sketch to the arduino UNO i was using, so chmod it, made a lot of sense. Altough it works, it's not a permanent change, as to maek a permanent change it's needed to add the the user to the appropriate group.

# Making the first project
<span id="first-project"></span>

To effectively test if everything is working, let's make one of the simplest projects in arduino, a simple [blink light](https://docs.arduino.cc/built-in-examples/basics/Blink/) using the breadboard.

IMAGE PROJECT IRL

With the code provided by arduino

```
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```

And voila, after uploading the sketch, everything worked as expected.

Here is a video of the blink project:

<div class="yt">
  <iframe
    src="https://www.youtube.com/embed/-_mwo4ZX97Q"
    title="Arduino Blink Example"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>