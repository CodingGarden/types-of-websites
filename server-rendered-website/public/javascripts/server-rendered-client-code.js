console.log('Hello World (on the client only...)');

// const h1Text = $('h1').text();

const h1Text = document.querySelector('h1').textContent;
console.log('THE H1 is:', h1Text);