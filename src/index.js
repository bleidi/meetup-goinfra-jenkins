import head from '../node_modules/headjs/dist/1.0.0/head';
import Reveal from '../node_modules/reveal.js/js/reveal';

Reveal.initialize({
	dependencies: [
		{ src: 'highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
	]
});