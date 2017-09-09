process.env.DISABLE_NOTIFIER = true;
var gulp = require('gulp');
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.scripts(
		[
			"jquery.min.js",
			"bootstrap.js",
			"bootstrap-notify.min.js",
			"bootstrap-datepicker.js",
			"mustache.js",
			"is.js",
			"app.js",
			"gridlist.js",
			"commonmark.min.js",
			"jquery-ui.min.js",
			"jquery.mjs.nestedSortable.js"
		],
		"public/js/app.js"
	).scripts(
		[
			"stock_purchase.js"
		],
		"public/js/stock_purchase.js"
	).scripts(
		[
			"assets.js"
		],
		"public/js/assets.js"
	).scripts(
		[
			"stock_sale.js"
		],
		"public/js/stock_sale.js"
	).scripts(
		[
			"ledger.js"
		],
		"public/js/ledger.js"
	).scripts(
		[
			"convert.js"
		],
		"public/js/convert.js"
	).less(
		[
			"app.less",
			"jquery-ui.min.less"
		],
		"public/css/app.css"
	).less(
		[
			"style.less",
			"gridlist.less",
			"custom.less",
			"media-queries.less",
			"media-news.less"
		],
		"public/css/custom.css"
	).version(
		[
			"js/app.js",
			"js/stock_purchase.js",
			"js/stock_sale.js",
			"js/convert.js",
      "js/ledger.js",
			"js/assets.js",
			"css/app.css",
			"css/custom.css"
		],
		"public/build"
	).copy(
		"resources/fonts",
		"public/build/fonts"
	).copy(
		"resources/assets/less/images",
		"public/build/css/images"
	);
});
