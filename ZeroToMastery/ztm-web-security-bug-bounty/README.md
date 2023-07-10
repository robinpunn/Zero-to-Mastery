# Web Security & Bug Bounty: Learn Penetration Testing

---
### Table of Contents
1. [Introduction to Bug Bounty](#introduction-to-bug-bounty)
    - [What is Penetration Testing](#what-is-penetration-testing)
    - [What is Bug Bounty](#what-is-bug-bounty)
1. [Web Developer Fundamentals](#web-developer-fundamentals)
1. [Linux Terminal](#linux-terminal)
    - [Linux 1](#linux-1)
    - [Linux 2](#linux-2)
    - [Linux 3](#linux-3)
1. [Networking](#networking)
    - [What is the difference between a public and private IP address?](#what-is-the-difference-between-a-public-and-private-ip-address)
    - [Public IP-address](#public-ip-address)
    - [Private IP-address](#private-ip-address)
    - [What is DNS?](#what-is-dns)
    - [What is DHCP?](#what-is-dhcp)
    - [What is a Router?](#what-is-a-router)
    - [Virtual Box Networking](#virtual-box-networking)
    - [What are TCP & UDP?](#what-are-tcp--udp)
    - [What is Bug Bounty?](#what-is-bug-bounty-1)
    - [What is HTTP?](#what-is-http)
    - [What is a Client?](#what-is-a-client)
    - [What is a Web Server?](#what-is-a-web-server)
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
- ``uname -r``: kernel version of linux

### Networking
#### What is the difference between a public and private IP address?
- All IPv4 IP addresses can be divided into two major groups:
    - global, public, or external
        - this group can also be called 'WAN addresses'
        - those that are used in the Internet
    - private, local, or internal addresses
        - those that are used in the local network (LAN).
- Usually websites will be hosted on Public IP addresses unless they are in production.
    - That is what allows us to type in a public IP inside of our search bar inside of a browser and it will load the website page.

#### Public IP-address
- It is public global addresses that are used in the Internet.
    - A public IP address is an IP address that is used to access the Internet.
    - Public (global) IP addresses are routed on the Internet, unlike private addresses.
- The presence of a public IP address on your router or computer will allow you to organize your own server (VPN, FTP, WEB, etc.), remote access to your computer, video surveillance cameras, and access them from anywhere in the global network
- With a public IP address, you can set up any home server to publish it on the Internet: Web (HTTP), VPN (PPTP/IPSec/OpenVPN), media (audio/video), FTP, NAS network drive, game server, etc.

#### Private IP-address
- Private internal addresses are not routed on the Internet and traffic cannot be sent to them from the Internet.
    - They only work within the local network.
- Private addresses include IP addresses from the following subnets:
    - Range from 10.0.0.0 to 10.255.255.255 - a 10.0.0.0 network with a 255.0.0.0 or an /8 (8-bit) mask
    - Range from 172.16.0.0 to 172.31.255.255 - a 172.16.0.0 network with a 255.240.0.0 (or a 12-bit) mask
    - A 192.168.0.0 to 192.168.255.255 range, which is a 192.168.0.0 network masked by 255.255.0.0 or /16
    - A special range 100.64.0.0 to 100.127.255.255 with a 255.192.0.0 or /10 network mask;

#### What is DNS?
- Domain Name Server (DNS) is a standard protocol that helps Internet users discover websites using human readable addresses.
    - Like a phonebook which lets you look up the name of a person and discover their number, DNS lets you type the address of a website and automatically discover the Internet Protocol (IP) address for that website.
- Without DNS, the Internet would collapse
    - it would be impossible for people and machines to access Internet servers via the friendly URLs they have come to know.

#### What is DHCP?
- Dynamic Host Configuration Protocol (DHCP) is a network management protocol used to automate the process of configuring devices on IP networks.
    - Allows them to use network services such as DNS, NTP, and any communication protocol based on UDP or TCP.
    - A DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.

#### What is a Router?
- A router is a device that communicates between the internet and the devices in your home that connect to the internet.
    - As its name implies, it “routes” traffic between the devices and the internet.
- A router is a physical or virtual appliance that passes information between two or more packet-switched computer networks.
    - A router inspects a given data packet's destination Internet Protocol address (IP address), calculates the best way for it to reach its destination and then forwards it accordingly.
- A router is a common type of gateway.
    - It is positioned where two or more networks meet at each point of presence on the internet.
    - Hundreds of routers might forward a single packet as it moves from one network to the next on the way to its final destination.

#### Virtual Box Networking
- https://www.virtualbox.org/manual/ch06.html
- **NAT - Network Address Translation (NAT)** is the simplest way of accessing an external network from a virtual machine.
    - Usually, it does not require any configuration on the host network and guest system.
    - For this reason, it is the default networking mode in Oracle VM VirtualBox.
    - A virtual machine with NAT enabled acts much like a real computer that connects to the Internet through a router.
        - The router, in this case, is the Oracle VM VirtualBox networking engine, which maps traffic from and to the virtual machine transparently.
        - In Oracle VM VirtualBox this router is placed between each virtual machine and the host.
        - This separation maximizes security since by default virtual machines cannot talk to each other.
    - The disadvantage of NAT mode is that, much like a private network behind a router, the virtual machine is invisible and unreachable from the outside internet.
- With **bridged networking**, Oracle VM VirtualBox uses a device driver on your host system that filters data from your physical network adapter.
    - This driver is therefore called a net filter driver.
    - This enables Oracle VM VirtualBox to intercept datacfrom the physical network and inject data into it, effectively creating a new network interface in software. When a guest is using such a new software interface, it looks to the host system as though the guest were physically connected to the interface using a network cable.
    - The host can send data to the guest through that interface and receive data from it.
        - This means that you can set up routing or bridging between the guest and the rest of your network.

#### What are TCP & UDP?
- https://www.privateinternetaccess.com/blog/tcp-vs-udp-understanding-the-difference/
- TCP and UDP are both transport layer protocols.
- Transmission control protocol (TCP) is a host-to-host connection-based protocol, so it needs an established connection before it can transmit data.
- User datagram protocol (UDP) is a communications-based protocol and operates process-to-process, so it isn’t reliant on connection agreements and doesn’t require packet acknowledgement.

#### What is Bug Bounty?
- Bug bounty programs allow independent security researchers to report bugs to an organization and receive rewards or compensation.
    - These bugs are usually security exploits and vulnerabilities, though they can also include process issues, hardware flaws, and so on.

#### What is HTTP?
- HTTP is a protocol which allows the fetching of resources, such as HTML documents.
- It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser

#### What is a Client?
- The user-agent is any tool that acts on the behalf of the user.
- This role is primarily performed by the Web browser.
    - Other possibilities are programs used by engineers and Web developers to debug their applications.
- To present a Web page, the browser sends an original request to fetch the HTML document that represents the page.
    - It then parses this file, making additional requests corresponding to execution scripts, layout information (CSS) to display, and subresources contained within the page (usually images and videos).
    - The Web browser then mixes these resources to present to the user a complete document, the Web page.
- Scripts executed by the browser can fetch more resources in later phases and the browser updates the Web page accordingly.

#### What is a Web Server?
- A web server stores and delivers the content for a website such as text, images, video, and application data to clients that request it.
    - The most common type of client is a web browser program, which requests data from your website when a user clicks on a link or downloads a document on a page displayed in the browser.
- A web server communicates with a web browser using the Hypertext Transfer Protocol (HTTP).
    - The content of most web pages is encoded in Hypertext Markup Language (HTML).
    - The content can be static (for example, text and images) or dynamic (for example, a computed price or the list of items a customer has marked for purchase).
- To deliver dynamic content, most web servers support server‑side scripting languages to encode business logic into the communication.
    - Commonly supported languages include Active Server Pages (ASP), Javascript, PHP, Python, and Ruby.