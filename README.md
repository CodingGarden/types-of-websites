# Types of Websites

* Multi page static websites
  * All files are "static" files
    * There is no server side runtime or processing
    * A request is made for a file
    * All files are loaded into the web browser
      * HTML is parsed and rendered
      * CSS is parsed and applied
      * JS is parsed and executed
  * Static File Servers
    * `python3 -m http.server`
    * `http-server`, `live-server`, `lite-server` global npm commands
    * nginx
    * Apache
      * Tomcat
    * IIS (Internet Information Services)
    * Caddy
  * Static File Hosts / Services
    * surge.sh
    * AWS S3
      * Use AWS Cloudfront on top
    * github pages
    * gitlab pages
    * vercel CDN
    * netlify CDN
    * cloudflare pages
    * azure blob
      * Use Azure CDN on top
    * firebase static hosting
    * gcp object storage
    * render (static sites)
* Server Side Rendered Website (Dynamic Server)
  * How This Works
    1. A request is made to the server
    1. The server runs code to handle the request
    1. The server responds with generated HTML
    1. The server can respond with static files as well...
      * That is not the main use of this kind of server
  * Web Frameworks
    * Node.js (Runtime) (JavaScript)
      * Express
      * Hapi
      * Koa
      * Fastify
    * Template Languages
      * Handlebars
        * Mustache
      * EJS
      * Pug (Jade)
      * Jinja
      * Swig
    * JVM (Java Virtual Machine - Runtime)
      * Languages
        * Kotlin
        * Clojure
        * Java
        * Scala
        * Groovy
      * Spring
      * Jakarta EE
    * Python (Language and Runtime)
      * Django
      * Bottlepy
      * Flask
      * Fastapi
    * .NET (Runtime) Typically C# (Language)
      * ASP.NET MVC
      * Blazor
    * PHP (Language and Runtime)
      * Laravel
      * Slim
      * Symfony
      * Codeigniter
      * Zen
      * CakePHP
      * Yii
      * Wordpress
    * Elixir (Language) Erlang VM (Runtime)
      * Phoenix
    * Go (Language and Runtime)
      * gin
      * fiber
      * chi
      * net/http
      * mux gorilla
      * echo kit
      * hugo
    * Rust (Language and Runtime)
      * Rocket
      * Zola
    * Lua
      * Lapis
    * Ruby (Language and Runtime)
      * Rails
      * Sinatra
  * Dynamic Hosts
    * Most of these hosts will let you run your express app directly... some will require you to use something like [serverless-http](https://www.npmjs.com/package/serverless-http)
    * Cloud Development Environments / Playground IDEs
      * Glitch
      * codesandbox
      * gitpod
      * github codespaces
      * stackblitz
      * replit
    * PaaS (Platform as a Service)
      * Vercel (Serverless Function or Edge Function)
      * Netlify Functions
      * fly.io
      * render.com
      * Railway.app
      * Heroku
      * Google AppEngine
      * Google Cloud Run
    * IaaS (Infrastructure as a Service)
      * Could host your own PaaS
        * dokku
      * Provides VPS (Virtual Private Server)
        * AWS EC2
        * AWS Lightsail
        * Digital Ocean Droplet
        * Linode
        * GCP - Compute Engine
        * Azure VMs
        * IBM Cloud Server
    * Dedicated Servers
      * You own the whole box...
* Single page "application" (SPA)
  * CSR (Client Side Rendering)
  * Client Side Routing
  * Deployed the same way as "Multi page static website"
  * All generated code is client side code
  * Frameworks / Libraries
    * Vue
      * Vue Router (Core Team)
    * Angular
      * Angular Router (Core Team/Built In)
    * Vanilla JS
      * Find one..
    * React
      * React Router
      * Find another one
    * Svelte
      * Find a router...
    * Solid
      * Solid Router (Core Team)
* Static Site Generation (SSG)
  * "JamStack"
  * Deployed the same way as "Multi page static website"
  * Frameworks
    * Astro
    * Gatsby
    * Gridsome
    * Vuepress
    * Hugo
    * And more... https://jamstack.org/generators/
* Hybrid Server Side Rendering
  * Combine (SSR and SPA and SSG)
  * Web Frameworks
    * Nextjs
      * React
    * Remix
      * React
    * Nuxt
      * Vue
    * Sveltekit
      * Svelte
    * Angular Universal
      * Angular
    * Solid Start
      * Solid
