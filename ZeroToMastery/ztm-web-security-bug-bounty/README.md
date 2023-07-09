# Web Security & Bug Bounty: Learn Penetration Testing

---
### Table of Contents
1. [Introduction to Bug Bounty](#introduction-to-bug-bounty)
    - [What is Penetration Testing](#what-is-penetration-testing)
    - [What is Bug Bounty](#what-is-bug-bounty)
1. [Web Developer Fundamentals](#web-developer-fundamentals)
1. [Linux Terminal](#linux-terminal)

---

### Introduction to Bug Bounty
#### What is Penetration Testing
- Penetration Testing: an action to enumarate and discover vulnerabilities
- The process of penetration testing is the same regardless of the target
    1. Gather Information
        - We want to know as much about our target as possible
        - Allows us to plan our attack
        - Active: gathering information interacting with the target
        - Passive: gathering information without interacting with target
    2. Scanning
        - Scanning is a deepr form of information gathering
        - It is done actively retrieving technical information
        - Perform a vulnerability analysis with the information gathered
- Penetration testing can be divided into two main groups
    1. Network Penetration Testing
    2. Website Penetration Testing

#### What is Bug Bounty
- Discovering vulnerabitlites in a web page.
- Create a virtual enviornment
    - We create a virtual maching for hacking purposes so we don't have to hack sites without permission
    - Kali Linux is an OS penetration tester use
- It is important to have basic website structure knowledge
    - Being aware of different programming languages in web development helps

### Web Developer Fundamentals
- IP address sends a request to a server, the server returns files
- A traceroute provides a map of how data on the internet travels from its source to its destination
    - When you connect with a website, the data you get must travel across multiple devices and networks along the way, particularly routers.
- HTTP: Hypertext transfer protocol
    - A protocol which allows the fetching of resources
    - A common language the client and server can use to communicate
    - HTTP allows us to communicate to servers... messages from the client are requests and messages from the server are responses
- Request
    - GET: client requests information from server
    - POST: client posts information to server
    - PUT: client requests to update data on server
    - DELETE: client requests to delete data from server
- Response
    - [Status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Various languages help create website: HTML/CSS/JavaScript/SQL/PHP
- PHP is an open source scripting language with the main purpose being web development
    - PHP can be embedded into HTML

### Linux Terminal
#### Linux 1
- Using the terminal allows us to navigate and control the system
- The inital path shown on the terminal depends on where the terminal was opened
    - The terminal can be opened from any directory
- ``pwd``: shows full path to current directory
- ``ls``: contents of current directory
- ``cd /directory-name``: change to directory
- ``cd ..``: go back one directory
- ``touch filename``: create file
- ``mkdir foldername``: create folder
- ``cp filename location``: copy a file and chose location to create copy
- ``mv filename location``: move file to location
- ``echo "text"``: prints text to console
- ``echo "text" >> filename``: sends text to file
- ``cat filename``: prints contents of file to console
- ``rm filename``: remove file
- ``rm foldername -r``: remove a directory

#### Linux 2
- ``sudo``: allows us to run certain commands as the root (admin) account
    - creating a file with ``sudo`` will only allow ``sudo`` to edit it
- ``nano filename``: opens file with nano a text editor
    - ``control o``: save a file in nano
    - ``control x``: to exit nano
- ``sudo su``: use root terminal
    - have to be careful using this terminal as any file can be deleted
    - type ``exit`` to leave root terminal
- ``clear``: clears the terminal

#### Linux 3
- ``ifconfig``: gives an output of all networking interfaces as well as ip addresses
    - ``eth0``: how device connects to internet
    - ``inet``: ip address
- ``apt-get install tool/package``: command to install package or tool
- ``nslookup target``: get the ip address of the target
- ``host target``: similar to nslookup, gives us IPv4
- ``sudo netdiscover``: scans all ranges of local ip addresses, ouputs all ip addresses on local network