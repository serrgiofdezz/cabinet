# Cabinet
Sergio's Personal Cabinet. A lightweight and static html5 page for personal notes, posts and misc documentation

## Serving
Install npm dependencies:
```
npm install
```
To serve the web right away:
```
npm run start
```

## Assets; stripped
In my desire to make a really lightweight but modern html5 website (with pages around 12-60 kB without images), I need to divide stylesheets and scripts so this way I only add the necessary features for each HTML page.

The main stylesheets are:
* [main.css](/assets/main.css) is the main stylesheet which every page need, defined layout and colors
* [blog.css](/assets/blog.css) is the stylesheet for blog headings, featuring the box with the date, topic and title
* [display.css](/assets/display.css) is a stylesheet for showing different content for horz and vert devices, useful for different tables or images (could be implemented in a better way)

For JavaScript, the main ones are:
* [lazysizes.min.js](https://github.com/aFarkas/lazysizes) which implements a SEO-friendly and self-initializing lazyloader for images
* [iframer.js](/assets/iframer.js) is a script for hiding iframes or other content under a button, so it only gets loaded when the user allow it or tap the button for it
