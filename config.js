// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://ghost.rangeandroam.com',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        mail: {
	    transport: 'SES',
            options: {
                AWSAccessKeyID: 'AKIAJSFDTYBQHMCAOMEQ',
                AWSSecretKey: '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'
            }
	},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: 'ec2-54-201-46-208.us-west-2.compute.amazonaws.com',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://ghost.rangeandroam.com',
        mail: {
	    transport: 'SES',
            options: {
                AWSAccessKeyID: 'AKIAJSFDTYBQHMCAOMEQ',
                AWSSecretKey: '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'
            }
	},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: 'ec2-54-201-46-208.us-west-2.compute.amazonaws.com',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through Github
    travis: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
