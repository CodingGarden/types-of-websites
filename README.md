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
    
* Single page "application" (SPA)
  * Vanilla JS
  * React
  * Vue
  * Svelte
  * Angular
  * Solid
* Multi page server side rendered
