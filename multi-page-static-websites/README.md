# Multi page static websites

- All files are "static" files
- There is **no server** side runtime or processing
- A request is made for _each_ file
- All files are loaded into the web browser

  - HTML is parsed and rendered
  - CSS is parsed and applied
  - JS is parsed and executed

## Static File Servers

- [`python3 -m http.server`](https://docs.python.org/3/library/http.server.html)
- [`http-server`](https://www.npmjs.com/package/http-server), [`live-server`](https://www.npmjs.com/package/live-server), [`lite-server`](https://www.npmjs.com/package/lite-server) global npm commands
- [nginx](https://www.nginx.com/)
- [Apache](https://httpd.apache.org/)
  - [Tomcat](https://tomcat.apache.org/)
- [IIS](https://www.iis.net/) (Internet Information Services)
- [Caddy](https://caddyserver.com/)

## Static File Hosts / Services

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

See a basic example [here](/examples/multi-page-static/).
