/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst application_1 = __webpack_require__(/*! ./src/application */ \"./src/application.ts\");\nconst PORT = process.env.PORT || '8080';\nconst app = new application_1.Application(PORT, express);\napp.run();\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/application.ts":
/*!****************************!*\
  !*** ./src/application.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst RoutesLoader_1 = __webpack_require__(/*! ./routes/RoutesLoader */ \"./src/routes/RoutesLoader.ts\");\nclass Application {\n    get getPort() {\n        return this._port;\n    }\n    constructor(port, express) {\n        this._express = express;\n        this._port = port;\n        this.routesLoader = new RoutesLoader_1.RoutesLoader();\n    }\n    run() {\n        const app = this._express();\n        this.applicationConfig(app);\n        app.listen(this._port, () => {\n            console.log(`Server is working on : ${this.getPort}`);\n        });\n        this.routesLoader.load(app);\n    }\n    applicationConfig(app) {\n        app.use(bodyParser.json());\n    }\n}\nexports.Application = Application;\n\n\n//# sourceURL=webpack:///./src/application.ts?");

/***/ }),

/***/ "./src/database/DBConnection.ts":
/*!**************************************!*\
  !*** ./src/database/DBConnection.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst knex = __webpack_require__(/*! knex */ \"knex\");\nclass DBConnection {\n    constructor(client, host, user, password, database) {\n        this.client = client;\n        this.host = host;\n        this.user = user;\n        this.password = password;\n        this.database = database;\n    }\n    getKnex() {\n        return knex({\n            client: this.client,\n            connection: this.getConnection(),\n        });\n    }\n    getConnection() {\n        return {\n            host: this.host,\n            user: this.user,\n            password: this.password,\n            database: this.database,\n        };\n    }\n}\nexports.DBConnection = DBConnection;\n\n\n//# sourceURL=webpack:///./src/database/DBConnection.ts?");

/***/ }),

/***/ "./src/database/DatabaseConfig.ts":
/*!****************************************!*\
  !*** ./src/database/DatabaseConfig.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst DatabaseParameter_1 = __webpack_require__(/*! ./DatabaseParameter */ \"./src/database/DatabaseParameter.ts\");\nconst DBConnection_1 = __webpack_require__(/*! ./DBConnection */ \"./src/database/DBConnection.ts\");\nclass DatabaseConfig {\n    constructor() {\n        this.connection = new DBConnection_1.DBConnection(DatabaseParameter_1.DatabaseParameter.client, DatabaseParameter_1.DatabaseParameter.host, DatabaseParameter_1.DatabaseParameter.user, DatabaseParameter_1.DatabaseParameter.password, DatabaseParameter_1.DatabaseParameter.database);\n    }\n    async createTable(tableName) {\n        try {\n            const knex = this.connection.getKnex();\n            knex.schema.createTable(tableName, (table) => {\n                table.increments();\n                table.string('name');\n                table.timestamps();\n            }).then(() => {\n                return true;\n            });\n        }\n        catch (e) {\n            throw new Error(e);\n        }\n    }\n    async createRow(tableName, data) {\n        try {\n            const knex = this.connection.getKnex();\n            knex(tableName).insert(data).then(() => {\n                return true;\n            });\n        }\n        catch (e) {\n            throw new Error(e);\n        }\n    }\n}\nexports.DatabaseConfig = DatabaseConfig;\n\n\n//# sourceURL=webpack:///./src/database/DatabaseConfig.ts?");

/***/ }),

/***/ "./src/database/DatabaseParameter.ts":
/*!*******************************************!*\
  !*** ./src/database/DatabaseParameter.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DatabaseParameter;\n(function (DatabaseParameter) {\n    DatabaseParameter[\"client\"] = \"mysql\";\n    DatabaseParameter[\"host\"] = \"127.0.0.1\";\n    DatabaseParameter[\"user\"] = \"root\";\n    DatabaseParameter[\"password\"] = \"password\";\n    DatabaseParameter[\"database\"] = \"Rekrutacja\";\n})(DatabaseParameter = exports.DatabaseParameter || (exports.DatabaseParameter = {}));\n\n\n//# sourceURL=webpack:///./src/database/DatabaseParameter.ts?");

/***/ }),

/***/ "./src/routes/RoutesLoader.ts":
/*!************************************!*\
  !*** ./src/routes/RoutesLoader.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst DatabaseConfig_1 = __webpack_require__(/*! ../database/DatabaseConfig */ \"./src/database/DatabaseConfig.ts\");\nclass RoutesLoader {\n    constructor() {\n        this.database = new DatabaseConfig_1.DatabaseConfig();\n    }\n    load(app) {\n        app.post('/createTable', this.getMiddleware(), (req, res) => {\n            this.database.createTable('Tabeleczka');\n            res.send('Table created ! ');\n        });\n        app.post('/createRow', this.getMiddleware(), (req, res) => {\n            this.database.createRow('Rekrutacja', JSON.parse(JSON.stringify(req.body)));\n            console.log(JSON.parse(req.body));\n            res.send(`Wstawione dane ! ${req.body}`);\n        });\n    }\n    getMiddleware() {\n        return (req, res, next) => {\n            res.set('Content-Type', 'application/json');\n            res.status(200);\n            next();\n        };\n    }\n}\nexports.RoutesLoader = RoutesLoader;\n\n\n//# sourceURL=webpack:///./src/routes/RoutesLoader.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ })

/******/ });