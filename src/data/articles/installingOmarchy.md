---
id: 5
title: "My Journey to Install Omarchy (Arch linux)"
date: "01/02/2026"
tags: ["linux", "Omarchy"]
#image: "/images/articles/ImplementingSSHRaspberryPi.png"
#medium: "https://medium.com/@franciscomsborges2002"
toc:
  [
    { title: "Introduction", id: "introduction" },
    { title: "Reasons", id: "reasons" },
    { title: "The Begind", id: "begin" },
    { title: "The Big Shift", id: "big-shift" },
    {
      title: "Instaling omarchy via Arch linux (Manual Installation)",
      id: "manual-installation",
    },
    { title: "First Attempt", id: "manual-installation-first" },
    { title: "Second Attempt", id: "manual-installation-second" },
    { title: "Third Attempt", id: "manual-installation-third" },
    { title: "Bootloader Problem (Limine)", id: "bootloader-problem" },
    { title: "Conclusion", id: "conclusion" },
  ]
---

<span id="introduction"></span>

## Introduction

After using windows for most part of my life and sometimes hoping between linux distros, I decidedto make a bolder move. This time, I wanted to shift all my software development work to Linux, more specifically to [Arch linux](https://archlinux.org/).

<span id="reasons"></span>

## Reasons

Arch linux is known as one of the hardest Linux distros for beginners, but the struggle is where you learn the most. This mindset was the main reason I decided to start learning Arch Linux.

Windows is not a bad environment to develop at all. Most things work out of the box. However , the recent changes, like being forced to use a Microsoft account, syncing files to the cloud, and pushihg AI features that nobody asked for, slowly pushed me away.

<span id="begin"></span>

## The Begin

At first I instaled Arch linux, using the official ISO image. Even making the pc connect to the internet was a pain. I had to understand how the `iwctl` (iNet Wireless Daemon control) command works just to set up a basic wi-fi connection.

This is where I hit my first major roadblock. My wireless hardware had a malfunction and it didn't start correctly during the first instalation. When I tried to view the available stations with the `iwctl` command, using:

```
iwctl
```

and then:

```
station list
```

nothing appeared on the screen.

I felt frustrated, as this is literaly the basic groundwork needed to install Arch linux using `archinstall` command.

### The solution

The fix was triviial. I let the computer fully run out of battery and then started it again. This reset all the hardware components.

It was an easy solution, but it took me ~2 hours to figure it out.

After succefully fixed the wi-fi problem, I installed arched linux with the famous `archinstall`, selecting everything I felt important for my setup.

<span id="big-shift"></span>

## The Big shift

Even though I was already using Arch linux, I felt that something was missing. I wanted something cleaner, something nicer to look at, and something I actually enjoyed working in. It was when I discovered about tiling window managers such as [i3](https://i3wm.org/), [hyprland](https://hypr.land), among others.

After some more digging, I found about [omarchy](https://omarchy.org/), an arch linux based distro that already offered a good set of tools out of the box. I decided to switch to omarchy and give it a try.

I did a fresh install, following the same process as before: download the ISO image, flash it into a USB drive, boot from it, and install. It was one of the easiest OS (Operating System) installations I've ever done. However, the omarchy installer only allows installing on an entire disk. I didn’t know this at first, and it was not what I wanted for my setup.

My goal was to keep a dual boot system: a linux distro for my developing ecosystem, and windows for my gaming setup.

<span id="manual-installation"></span>

## Instaling omarchy via Arch linux (Manual Installation)

I wanted omarchy on a specific partition so I could keep my dual boot setup. Since the omarchy ISO installer only works with a full disk, I followed the manual installation method instead.

<span id="manual-installation-first"></span>

### First Attempt

For my first attempt, I installed arch linux again and followed the [omarchy manual installation guide](https://learn.omacom.io/2/the-omarchy-manual/96/manual-installation) from omacom. The guide itself is clear and easy to follow. However, I ignored the disk requirements and used `ext4` as the filesystem. This happened because of my lack of research and understading what omarchy required to be used.

After finishing the arch installation, I ran the Omarchy install command from within Arch Linux:

```
curl -fsSL https://omarchy.org/install | bash
```

Well, it clearly didn't work, because omarchy requires to have the [btrfs](https://pt.wikipedia.org/wiki/Btrfs), and also expects the disk to be encrypted using [LUKS (Linux Unified Key Setup)](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup).

<span id="manual-installation-second"></span>

### Second Attempt

Ok, lesson learned, **do not skip important details in an installation guide** :)

On the second try, I used `fdisk` comand to create the three needed partitions:

- EFI boot Partition
- Btrfs file system for linux partition
- Winows partition

Easy enough, instaled again arch linux and omarchy. But this time, I ran into another problem. I didn't know that btrfs requires subvolumes to be created for the root filesystem (`/`). Because of this, the installation still failed.

<span id="manual-installation-third"></span>

### Third Attempt

Third time lucky.

I started everything from scratch once again, but this time creating correctly the subvolumes in btrfs, and **_voilà_** it worked like a charm, omarchy was finally installed in my computer 🎉🎉.

<span id="bootloader-problem"></span>

## Bootloader Problem (Limine)

After a clean installation on the first try :), I just need to reboot the computer and start using omarchy.

Well, not so fast

Everything looked fine, but limine was not configured correctly. After rebooting, only the EFI fallback entry appeared, and I couldn't boot into omarchy.

After some research, I found a solution: boot into my Omarchy system using an ISO image on a USB drive and check if everything was set up correctly.

### Mount an linux OS

First step was unlock and mount the LUKS encrypted and EFI partitions. I used `cryptsetup` and `mount`, then i chrooted my way into the system with `arch-chroot /mnt`. This allowed me to access the installed system.

After some more back and forwad online, I discovered that I needed to change limine config file (`limine.conf`) as it dind't point to the correct UUID of the encrypted partition, adding this:

```
DEFAULT_ENTRY=Arch Linux (Encrypted)

:Arch Linux (Encrypted)
    PROTOCOL=linux
    KERNEL_PATH=boot:///vmlinuz-linux
    INITRD_PATH=boot:///initramfs-linux.img
    CMDLINE=cryptdevice=UUID=REPLACE_ME:cryptroot root=/dev/mapper/cryptroot rw
```

and using the `blkid` command to get the correct UUID of the partition, then I replaced the "REPLACE_ME" to the actual UUID in the `limine.conf` file.

After that, I unmounted the system using `umount`, rebooted the computer, and everything worked 🥲

<span id="conclusion"></span>

## Conclusion

After four days of working on this mostly at night, I finally managed to install omarchy and start using it for my side projects. Reaching that point felt very rewarding after so many retries and small failures.

Even though the journey had many bumps, it was completely worth it. I didn’t just install a Linux distro—I learned how Linux systems really work. I now understand more about disks, encryption, filesystems, and the boot process, especially when installing from an Arch ISO.

This experience reminded me that breaking things, fixing them, and trying again is often the best way to learn.
