/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com', 'www.slideshare.net', 'www.hulu.com', 'videopress.com/embed/']
});

// Smooth scrolling anchor links
if (document.querySelector('a[href*="#"]')) {
	var scroll = new SmoothScroll('a[href*="#"]');
}

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp(function (data) {
		if (data.result !== 'error') {
			window.location.href = 'https://gomakethings.com/newsletter-success';
		}
	});
}

// Add table of contents
if (document.querySelector('#table-of-contents')) {
	tableOfContents('#table-of-contents', 'h2', '<h2>Table of Contents</h2>', null, 'ol');
}

// Anchor links on posts
if (document.body.matches('.js-anchors')) {
	addHeadingLinks('h2, h3, h4, h5, h6', '#', 'link-no-underline');
}