# Junior to Senior Web Developer Roadmap

### SSH
1. Introduction to SSH
    - Secure Shell (SSH) is a protocol
        - HTTP is a protocol that allows you to send and receive data over the internet
        - FTP (file transfer protocol) is a protocol that allows you to transfer files over the internet
        - HTTPS is similar to HTTP but it is encrypted
        - SSH allows two computers to communicate securely over an unsecured network
    - SSH allows users to connect to a remote computer and execute commands on it
    - A shell is a program that allows you to interact with the operating system as opposed to a browser which is a program that allows you to interact with the internet
    - The significant advantage of SSH over its predecessors is the use of encryption to secure the communication between host and client
        - Host = remote server being accessed
        - Client = computer that is accessing the remote server
2. SSH Command
    - `ssh [username]@[host]`
    - Easy to use with linux and mac, windows requires a third party program
    - the `ssh` command instructs the computer to open a secure shell connection
    - `[user]` represents the account to be accessed
    - `[host]` represents the remote server to be accessed
3. How SSH Works
    - There are three techniques used in SSH
        - Symmetrical Encryption
        - Asymmetrical Encryption
        - Hashing
4. Symmetric Encyption
    - Symmetric encryption uses the same key to encrypt and decrypt data
    - Key exchange algorithm is used to exchange the key between the client and the server
        - The key is never transmitted over the network
        - Secret key is specific to each session
        - Generated prior to client and server authentication
5. Asymmetric Encryption
    - Uses two keys, a public key and a private key
    - The public key is used to encrypt data and the private key is used to decrypt data
    - Only used during the key exchange process
    - Diffie-Hellman key exchange algorithm is used to exchange the keys
6. Hashing
    - SSH uses both symmetric and asymmetric encryption
        - Assymetric is used to share the symmetric key
        - Key is used by the symmetric encryption
        - The host server creates a message that is encrypted with the public key to prove its identity
    - Hashing solves the man-in-the-middle-problem
        - Hashing is a one-way function
    - Hashes verify the authenticity of the message
        - HMAC (Hash-based Message Authentication Code) is used to verify the integrity of the message
            - Each message transmitted must contain a message authentication code
7. Passwords or SSH?
    - Two ways to authenticate when using SSH
        - Password
        - Public Key
8. SSH into a sever
    - RSA keys are used to authenticate
    - RSA keys are a pair of keys, a public key and a private key
    - The public key is used to encrypt data and the private key is used to decrypt data
    - The private key is never shared
    - The public key is shared with the server
    - The server uses the public key to encrypt a message
    - The client uses the private key to decrypt the message
    - The client then uses the public key to encrypt a message
    - The server uses the private key to decrypt the message
9. Summary
    1. Diffie-Hellman key exchange algorithm is used to exchange the keys
    2. Arrive at a symmetric key
    3. Hashing is used to verify there is no tampering
    4. User is authenticated
        - use password
        - use rsa keys

### Performance Part 1
1. Introduction to Performance Part 1
    - Client + Server relationship
        - Client = browser
        - Server = computer that is serving the website
    - HTML file gives indication of what files are needed from the server
    - Browser requests the files from the server
    - Server sends the files to the browser
    - Browser renders the files
2. Keys to performance
    - Three ways to improve performance
        - Front-end rendering
        - Transfer of files
        - Back-end processing
    - Front-end
        - Critical rendering path
            - HTML -> CSS -> JS
            - Optimized code
            - Progressive web apps
    - Transfer of files
        - Minimize files
        - Minimize delivery
    - Back-end
        - CDNs
        - Caching
        - Load balancing
        - DB scaling
        - Gzip
3. Network Performance
    - Reduce size of files
        - Minimize text and optimize images
4. Image file and formats
    - The best way to reduce the size of an image is by choosing the right format
    - The most common image formats are
        - JPEG
        - PNG
        - GIF
        - SVG
    - JPEG (joint photographic experts group)
        - use for images with many colors
        - use for photos
        - can't have transparency
        - larger file size
    - GIF (graphics interchange format)
        - use for images with few colors
        - small animations
        - can have transparency
        - smaller file size
    - PNG (portable network graphics)
        - limit the number of colors
        - good for logos
        - can have transparency
        - smaller file size
    - SVG (scalable vector graphics)
        - image can be expanded or reduced without losing quality
        - use for logos, simplistic images
        - can have transparency
        - smaller file size
    - Pick the right format and compress the image without losing quality
5. Image Optimizations
    - Minimize Images
    - If you want transparency: use PNG
    - If you want animation: use GIF
    - If you want quality: use JPEG
    - If you want simple icons, logos, and illustrations: use SVG
    - Reduce PNG with PNGQuant, PNGCrush, PNGOut, TinyPNG
    - Reduce JPEG with JPEGMini, JPEGTran, TinyJPG, JPEG-Optimizer
    - Try to use simple illustrations over highly detailed images
    - Always lower jpeg quality (30-60%)... the larger the resolution, the larger the file size
    - Resize images to the size they will be displayed
    - Display different sized images for different backgrounds (media queries)
    - Use CDNs like imgix, cloudinary, and fastly
    - Remove image metadata
    - [View and Remove Exif Online](https://www.verexif.com/en/)
    - [Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
    - [Media Query Cheat Sheet](https://gist.github.com/bartholomej/8415655)
6. Delivery Optimizations
    - Reducing frequency
    - Reducing the amount of files that need to be retrieved
    - [Max Parallel Requests Per Browser](https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser)
        - Chrome: 6
        - Firefox: 6
        - Safari: 6
        - IE: 2
        - Opera: 4
7. Critical Render Path Introduction
    - Critical Render Path
        1. Client requests site and server returns HTML file
        2. HTML file is parsed and DOM(document object model) tree is created
            - DOM describes the structure of the page
        3. CSS files are requested and parsed
            - CSSOM (CSS object model) is created
        4. JS files are requested and parsed
            - JS executes any changes to the DOM and CSSOM
        5. Render tree is created which is a combination of the DOM and CSSOM
        6. Render tree is used to create the visual representation of the page
        7. Images are not part of the critical render path
    - DOM -> CSSOM -> (DOM content loaded) Render Tree -> Layout -> Paint (Load)
8. Critical Render Path Part 1
    - Try to load CSS as soon as possible
    - Try to load JS as late as possible with a few exceptions
        - JS that is needed to render the page
        - JS that is needed to render the page quickly
        - JS that is needed to render the page correctly
    - JS requires HTML and CSS parsing before it can run
    - HTML
        - Load style sheets in the head
        - Load scripts at the bottom of the body
9. Critical Render Path Part 2
    - CSS is render blocking
        - CSS needs to complete before the page can be rendered
    - Try to make CSS as small as possible so the user can see the page as soon as possible
    -CSS
        - Only load whatever is needed
        - Above the fold loading
        - Media attributes
        - Less specificity
10. Critical Render Path 3
    - JavaScript is exectucuted after the DOM and CSSOM are created
    - JavaScript can access and modify the DOM and CSSOM
    - JavaScript is parser blocking
        - JavaScript needs to complete before the page can be rendered
    - JS
        - Load scripts asynchronously
        - Defer loading scripts
        - Minimize DOM manipulation
        - Avoid long running scripts
    - Async and Defer can be used to load files that are non-essential to user experience
        - The difference between async and defer is that async will load the file as soon as possible and defer will load the file after the DOM is created
        - If core functionality of the page is dependent on the file, use async
        - [Script Tag - async and defer](https://stackoverflow.com/questions/10808109/script-tag-async-defer)
11. Critical Render Path 4
    - Render Tree is created from the DOM and CSSOM
    - Browser uses the render tree to create the visual representation of the page
    - The browser paints the page
    - The browser loads the page
    - JavaScript can cause a new rendering by changing the DOM or CSSOM
12. HTTP/2
    - Protocol update to improve network latency
    - Bundling may not have the same effect with HTTP/2 because of multiplexing
        - Multiplexing allows multiple requests to be sent at the same time
    - Binary protocol instead of text
    - Server push... server can push files to the client before the client requests them
    - [Into to HTTP/2](https://web.dev/performance-http2/)
    - [HTTP/3](https://blog.cloudflare.com/http3-the-past-present-and-future/)

### Performance Part 2
1. Section Overview
    - Optimizing code by writing efficient functions
        - Code splitting
    - Progressive Web Apps
        - Trying to make the web more like native mobile apps
2. Optimizing Code
    - JavaScript's heaviest cost is parsing and compiling code (read and understand the code)
    - Chrome Dev tools allows for recording and analyzing performance in the Performance tab
        - The summary tab shows the total time it took to load the page (loading, scripting, rendering, painting, etc.)
    - Sites like [WebPageTest](https://www.webpagetest.org/) and [GTmetrix](https://gtmetrix.com/) can be used to analyze performance
    - Ahead of time compilation
        - Compiling code before it is run
    - Just in time compilation
        - Compiling code as it is run
    - To limit the amount of processing that needs to be done, limit animations and transitions
3. Code Splitting
    - In http1, websites were bundled into a single javascript file
    - Code splitting, or progressive bootstrapping, involves sending a minmally functional page needed for the current route
        - Lazy loading is when code is loaded on demand
    - Vendor files contain all the files from third party libraries that are required for the site to run
    - Production builds are much faster than development builds
        - Minified file that is optimized for production removing debugging tools that might come with third party libraries
4. Code splitting summary
    - Route based chunking
        - Split code based on the route
    - Component based chunking
    - Two options with React: React Router and React Loadable
5. React Performance Optimization
    - /react_perf allows for analyzing performance in the browser
    - Redux can help with performance by limiting the amount of re-rendering
    - React Developer Tools can be used to analyze performance
    - Figure out which components are re-rendering unnecessarily
6. React Performance Optimization 2
    - React components render whenever their parent renders causing unnecessary render cycles
    - React.memo can be used to prevent unnecessary re-renders
7. Optimizing Code Review
    - Only load what's needed
        - Code splittings
        - [Tree shaking](https://web.dev/reduce-javascript-payloads-with-tree-shaking/)
    - Avoid blocking main thread
    - Avoid memory leaks
    - Avoid multiple rerendering
8. Progressive Web Apps
    - A website that allows the user to interact on a browser as if it were a native app
        - Native apps are mobile apps
    - Web apps can be built with HTML, CSS, and JavaScript
    - Native apps are built with native languages like Java, Swift, and objective C
    - Native apps have all the needed files on the user's device
    - They both come with pros and cons, web apps can be updated much easier and are cross platform
    - Progressive web apps improve the user experience and performance
9. PWA - HTTPS
    - Anytime data is sent form client to server, HTTPS should be used
    - Services like Let's Encrypt can be used to get a free SSL certificate
10. PWA - App Manifest
    - The app manifest is a JSON file that contains information about the app
    - The app manifest is used to create a splash screen and add the app to the home screen
    - The app manifest can be used to add a service worker
11. PWA - Service Worker
    - A script that the browser runs in the background
    - The service worker can be used to cache files and make the app work offline
    - The service worker can be used to send push notifications
    - The service worker can be used to intercept network requests
12. PWA - Final Thoughts
    - The goal of of PWA is to make the site faster for the user
    - The site should be responsive and work offline

### Testing
1. Overview
    - Testing is a method in software development where individual units of source code, assets, or programs are tested to deteremine whether they work properly
    - Tests can negatively impact performance, but they can help avoid bugs
2. Types of tests
    - Tests can be grouped into 3 categories
        - Unit tests
        - Integration tests
        - End to end tests
    - Unit tests are the cheapest and easiest tests to run and write
    - Integration tests how different parts of the application work together
    - Automation tests, or UI tests, can be performed by individuals or code
    - Going down the line, these tests become more expensive to implement
3. Testing Libraries
    - Scaffolding is a tool that can be used to create a testing environment
    - Assertion libraries are used to verify that the code is working as expected
    - Test runners are used to run the tests
        - Puppeteer is a library that acts as a headless browser
        - JSdom has DOM-like API that can be used to test code
    - Mock, stub, and spy libraries are used to create fake objects
        - Spies provide information on functions
        - Stubbing is when a function is replaced with a fake function
        - Mocking is when a function is replaced with a fake function that can be controlled
    - Code coverage tools are used to determine how much of the code is being tested
4. Unit Tests
    - Should cover all small pure functions that take an input and return an output
        - A pure function is a function that has no side effects, is deterministic, and does not mutate the input
    - Unit tests don't test the contract(the connection between the function and the outside world)
    - Writing clean functional components makes it easier to write unit tests
5. Integration Tests
    - Deal with cross communication between different units of code
    - Integration tests are more expensive to write and maintain
6. Automation Tests (end to end tests)
    - UI tests that are running in a browser or a browserlike environment
    - Can be used to test the user experience
    - Compared to the other tests, these are the most expensive to write and maintain
        - Most likely will only be used by large companies
    - Two different testing processes: 1) unit and integration tests 2) automation tests
        - Unit and integration tests would run often (like every commit)
        - Automation tests would run less often (like once a day)
---

[Jest Cheatsheet](https://github.com/sapegin/jest-cheat-sheet)

---

7. Mocks and spies
    - We can use "mocks" to let us "spy" on the behavior of a function that is called indirectly by the code we're testing
    - Mocks are fake functions with pre-programmed behavior
    - Spies are functions that record arguments, return values, the value of this and exceptions thrown
8. [Enzyme](https://enzymejs.github.io/enzyme/)
    - Enzyme is a testing library that can be used to test React components created by Airbnb
    ```js
    //setupTests.js
    import { configure } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    configure({ adapter: new Adapter() });
    ```
    ```js
    //Card.test.js
    import { shallow, mount, render } from 'enzyme';
    import React from 'react';
    import Card from './App';

    it('expect to render Card component', ()=> {
        expect(shallow(<Card />).lengthtoEqual(1));
    })
    ```
    - Shallow rendering is used to render a component without rendering its children, will be used most often
    - Mount performs a full DOM rendering and is used to test interaction with the DOM
    - Render is used to generate static HTML using the Cheerio library
    - [Api Reference](https://enzymejs.github.io/enzyme/docs/api/)
9. Snapshot Testing
    ```js
    //Card.test.js
    import { shallow, mount, render } from 'enzyme';
    import React from 'react';
    import Card from './App';

    it('expect to render Card component', ()=> {
        expect(shallow(<Card />)).toMatchSnapshot();
    })
    ```
    - Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them to a file
    - It becomes easier to run tests, if we write modular code with small components

### Typescript
1. Overview
    - JavsScript is a dynamically typed language and TypeScript makes it a statically typed language
2. Dynamic vs Static Typing
    ![Dynamic vs Static](https://res.cloudinary.com/practicaldev/image/fetch/s--6V6DK8ku--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2ABddwVWW6hFU0miT9DCbUWQ.png)