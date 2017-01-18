exports.config = {
	files: {
		javascripts: {
			joinTo: {
			"js/app.js": /^(web\/static\/js)/,
			"js/vendor.js": [
				'bower_components/jquery/dist/jquery.js',
				'bower_components/angular/angular.js',
				'bower_components/angular-ui-router/release/angular-ui-router.js'
				]
			},
			order: {
				before: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/angular/angular.js',
					'bower_components/angular-ui-router/release/angular-ui-router.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				"css/app.css": [
					/^(web\/static\/css)/,
					/^(web\/static\/scss)/,
				]
			}
		}
	},
	conventions: {
		assets: /^(web\/assets)/
	},

	paths: {
		watched: ['web/static', 'web/assets'],
		public: "public"
	},

	plugins: {
		babel: {
			ignore: [/bower_components/, /web\/static\/vendor/, /node_modules/]
		},
		sass: {
			mode: 'native'
		}
	},

	modules: {
		autoRequire: {
			"js/app.js": ["web/static/js/app"]
		}
	},

	npm: {
		enabled: true
	}
};
