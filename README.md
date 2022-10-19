# Types of Websites

- Multi page static websites
  - All files are "static" files
    - There is no server side runtime or processing
    - A request is made for a file
    - All files are loaded into the web browser
      - HTML is parsed and rendered
      - CSS is parsed and applied
      - JS is parsed and executed
  - Static File Servers
    - [`python3 -m http.server`](https://docs.python.org/3/library/http.server.html)
    - [`http-server`](https://www.npmjs.com/package/http-server), [`live-server`](https://www.npmjs.com/package/live-server), [`lite-server`](https://www.npmjs.com/package/lite-server) global npm commands
    - [nginx](https://www.nginx.com/)
    - [Apache](https://httpd.apache.org/)
      - [Tomcat](https://tomcat.apache.org/)
    - [IIS](https://www.iis.net/) (Internet Information Services)
    - [Caddy](https://caddyserver.com/)
  - Static File Hosts / Services
    - [Surge](https://surge.sh/)
    - [AWS S3](https://aws.amazon.com/s3/)
      - Use [AWS Cloudfront](https://aws.amazon.com/cloudfront/) on top
    - [GitHub Pages](https://pages.github.com/)
    - [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
    - [Vercel](https://vercel.com/) CDN
    - [Netlify](https://www.netlify.com/) CDN
    - [Cloudflare Pages](https://pages.cloudflare.com/)
    - [Azure Blob](https://azure.microsoft.com/products/storage/blobs/)
      - Use [Azure CDN](https://azure.microsoft.com/products/cdn/) on top
    - [Firebase Hosting](https://firebase.google.com/docs/hosting)
    - [Google Cloud Storage](https://cloud.google.com/storage/docs/hosting-static-website)
    - [Render (static sites)](https://render.com/docs/static-sites)
- Server Side Rendered Website (Dynamic Server)

  - How This Works
    1. A request is made to the server
    1. The server runs code to handle the request
    1. The server responds with generated HTML
    1. The server can respond with static files as well...
    - That is not the main use of this kind of server
  - Web Frameworks
    - [Node.js](https://nodejs.org/) (Runtime) (JavaScript)
      - [Express](https://expressjs.com/)
      - [Hapi](https://hapi.dev/)
      - [Koa](https://koajs.com/)
      - [Fastify](https://www.fastify.io/)
    - Template Languages
      - [Handlebars](https://handlebarsjs.com/)
        - [Mustache](https://mustache.github.io/)
      - [EJS](https://ejs.co/)
      - [Pug](https://pugjs.org/) (Jade)
      - [Jinja](https://jinja.palletsprojects.com/)
      - [Swig](https://node-swig.github.io/swig-templates/)
    - [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) (Java Virtual Machine - Runtime)
      - Languages
        - [Kotlin](https://kotlinlang.org/)
        - [Clojure](https://clojure.org/)
        - [Java](https://dev.java/)
        - [Scala](https://www.scala-lang.org/)
        - [Groovy](https://groovy-lang.org/)
      - Frameworks
        - [Spring](https://spring.io/)
        - [Jakarta EE](https://jakarta.ee/)
    - [Python](https://www.python.org/) (Language and Runtime)
      - [Django](https://www.djangoproject.com/)
      - [Bottlepy](https://bottlepy.org/)
      - [Flask](https://flask.palletsprojects.com/)
      - [Fastapi](https://fastapi.tiangolo.com/)
    - [.NET](https://dotnet.microsoft.com/) (Runtime) Typically [C#](https://learn.microsoft.com/dotnet/csharp/) (Language)
      - [ASP.NET](https://asp.net/) MVC
      - [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
    - [PHP](https://www.php.net/) (Language and Runtime)
      - [Laravel](https://laravel.com/)
      - [Slim](https://www.slimframework.com/)
      - [Symfony](https://symfony.com/)
      - [Codeigniter](https://www.codeigniter.com/)
      - [Zend](https://www.zend.com/)
      - [CakePHP](https://cakephp.org/)
      - [Yii](https://www.yiiframework.com/)
      - [Wordpress](https://wordpress.com/)
    - [Elixir](https://elixir-lang.org/) (Language) [Erlang](https://www.erlang.org/) VM (Runtime)
      - [Phoenix](https://www.phoenixframework.org/)
    - [Go](https://go.dev/) (Language and Runtime)
      - [gin](https://gin-gonic.com/)
      - [fiber](https://gofiber.io/)
      - [chi](https://go-chi.io/)
      - [net/http](https://pkg.go.dev/net/http)
      - [mux gorilla](https://pkg.go.dev/github.com/gorilla/mux)
      - [echo](https://echo.labstack.com/) kit
      - [hugo](https://gohugo.io/)
    - [Rust](https://www.rust-lang.org/) (Language and Runtime)
      - [Rocket](https://rocket.rs/)
      - [Zola](https://www.getzola.org/)
    - [Lua](https://www.lua.org/)
      - [Lapis](https://leafo.net/lapis/)
    - [Ruby](https://www.ruby-lang.org/) (Language and Runtime)
      - [Rails](https://rubyonrails.org/)
      - [Sinatra](https://sinatrarb.com/)
  - Dynamic Hosts

    Most of these hosts will let you run your express app directly... some will require you to use something like [serverless-http](https://www.npmjs.com/package/serverless-http)

    - Cloud Development Environments / Playground IDEs
      - [Glitch](https://glitch.com/)
      - [codesandbox](https://codesandbox.io/)
      - [gitpod](https://www.gitpod.io/)
      - [github codespaces](https://github.com/features/codespaces)
      - [stackblitz](https://stackblitz.com/)
      - [replit](https://replit.com/)
    - PaaS ([Platform as a Service](https://en.wikipedia.org/wiki/Platform_as_a_service))
      - [Vercel](https://vercel.com/) (Serverless Function or Edge Function)
      - [Netlify Functions](https://www.netlify.com/products/functions/)
      - [fly.io](https://fly.io/)
      - [Render](https://render.com/)
      - [Railway](https://railway.app/)
      - [Heroku](https://www.heroku.com/)
      - [Google App Engine](https://cloud.google.com/appengine)
      - [Google Cloud Run](https://cloud.google.com/run)
    - IaaS ([Infrastructure as a Service](https://en.wikipedia.org/wiki/Infrastructure_as_a_service))
      - Could host your own PaaS
        - [dokku](https://dokku.com/)
      - Provides VPS (Virtual Private Server)
        - [AWS EC2](https://aws.amazon.com/ec2/)
        - [AWS Lightsail](https://aws.amazon.com/lightsail/)
        - [DigitalOcean Droplet](https://www.digitalocean.com/products/droplets)
        - [Linode](https://www.linode.com/)
        - [GCP - Compute Engine](https://cloud.google.com/compute)
        - [Azure VMs](https://azure.microsoft.com/products/virtual-machines/)
        - [IBM Cloud Server](https://www.ibm.com/cloud/virtual-servers)
    - Dedicated Servers
      - You own the whole box...

- Single page "application" (SPA)
  - CSR (Client Side Rendering)
  - Client Side Routing
  - Deployed the same way as "Multi page static website"
  - All generated code is client side code
  - Frameworks / Libraries
    - [Vue](https://vuejs.org/)
      - [Vue Router](https://router.vuejs.org/) (Core Team)
    - [Angular](https://angular.io/)
      - [Angular Router](https://angular.io/guide/router) (Core Team/Built In)
    - Vanilla JS
      - Find one..
    - [React](https://reactjs.org/)
      - [React Router](https://reactrouter.com/)
      - Find another one
    - [Svelte](https://svelte.dev/)
      - Find a router...
    - [SolidJS](https://www.solidjs.com/)
      - [Solid Router](https://github.com/solidjs/solid-router) (Core Team)
- Static Site Generation (SSG)

  Deployed the same way as "Multi page static website"

  - "[JamStack](https://jamstack.org/)"
  - Frameworks
    - [Astro](https://astro.build/)
    - [Gatsby](https://www.gatsbyjs.com/)
    - [Gridsome](https://gridsome.org/)
    - [Vuepress](https://vuepress.vuejs.org/)
    - [Hugo](https://gohugo.io/)
    - And [more](https://jamstack.org/generators/)...

- Hybrid Server Side Rendering

  Combine (SSR and SPA and SSG)

  - Web Frameworks
    - [Nextjs](https://nextjs.org/) (React)
    - [Remix](https://remix.run/) (React)
    - [Nuxt](https://nuxtjs.org/) (Vue)
    - [Sveltekit](https://kit.svelte.dev/) (Svelte)
    - [Angular Universal](https://angular.io/guide/universal) (Angular)
    - [Solid Start](https://start.solidjs.com/) (Solid)
