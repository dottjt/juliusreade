+++

date = "2016-10-08T11:33:26+11:00"
draft = false
title = "This is mah lovely, lovely post."
layout = "layout"

+++

Server response times, while easy to track and instrument, are ultimately a meaningless performance metric from an end-user perspective. 
Actual end-user response to the word 'microservices'. End-users don't care how fast your super-turbocharged bare-metal Node.js server is - they care about the page being completely loaded as fast as possible. Your boss is breathing down your neck about the site being slow - but your Elixir-based microservices architecture has average server response times of 10 nanoseconds! What's going on?

Well, what does constructing a webpage actually require? The server has to respond with the HTML (along with the network latency involved in the round-trip), the JS, CSS and HTML needs to be parsed, rendered, and painted, and all the Javascript tied to the page ready event needs to be executed. That's actually a lot of stuff. Usually, server response times make up only a small fraction of this total end-user experience, sometimes as little as 10%. In addition, it's very easy for any of these steps to get out of hand very quickly:

Server response times can easily balloon without proper use of caching, both at the application and HTTP layers. Bad SQL queries in certain parts of the application can send times skyrocketing.

JS and CSS assets must be concatenated, minified and placed in the right place in the document, or rendering may be blocked while the browser stops to load external resources (more on this later). In addition, these days when there's a JQuery plugin or CSS mixin for just about anything, most developers have completely lost track of just how much CSS and JS is being loaded on each page. Even if, gzipped and minified, your CSS and JS assets are <100kb, once they're un-gzipped, they still must be parsed and loaded to create the DOM and CSSOM (explained in more detail below). While gzipped size is important when considering how long CSS or JS will take to come across the network, uncompressed size is important for figuring out how long it will take the client to parse these resources and construct the page.

Web developers (especially non-JavaScripters, like Rails devs) have an awful habit of placing tons of code into $(document).ready(); or otherwise tying Javascript to page load. This ends up causing heaps of unnecessary Javascript to be executed on every page, further delaying page loads.
