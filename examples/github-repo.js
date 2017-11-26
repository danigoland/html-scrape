// Require scrape
var scrape = require('../lib');

// Setup elements

var elements = {
  title: { start: '<title>', end: '</title>' },
    url: { el: '#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.file-navigation.in-mid-page > details > div > div > div.mt-2 > a',prop:'href' }
}

// Run scrape:

scrape ('https://github.com/danigoland/html-scrape', elements, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
