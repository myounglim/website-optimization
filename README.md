# Website Performance Optimization project

This optimizes two different webpages to achieve a target score of 90+ on Google's [PageSpeed Insights] (https://developers.google.com/speed/pagespeed/insights/) and for the app to be able to run at 60 fps. Some approaches used include

* Use Chrome's DevTools Timeline
* Minify HTML/CSS/JavaScript/Image files by using Grunt
* Load critical styles inline and use media queries for others
* Load scripts asynchronously
* Address forced synchronous layouts by doing layout calculations outside of loops that set styles
* Using faster selectors in JavaScript
* Getting rid of unnecessarily complex calculations

## Getting Started

You can visit the sites first site [here] (https://myounglim.github.io/website-optimization/release/index.html) and the second site [here] (https://myounglim.github.io/website-optimization/views/pizza.html). Alternatively, you can download the repo and navigate to the _release_ folder and open _index.html_ for the first site. The second site can be found at the _views_ folder and open _pizza.html_.

