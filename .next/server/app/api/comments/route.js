"use strict";
(() => {
var exports = {};
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 91105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/comments/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./src/utils/connect.js
var connect = __webpack_require__(49101);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__(31198);
;// CONCATENATED MODULE: ./src/app/api/comments/route.js



const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const { postSlug } = searchParams.get("postSlug");
    try {
        const comments = await connect/* default */.Z.comment.findMany({
            where: {
                ...postSlug && {
                    postSlug
                }
            },
            include: {
                user: true
            }
        });
        return new next_response/* default */.Z(JSON.stringify(comments, {
            status: 200
        }));
    } catch (error) {
        console.log(error);
        return new next_response/* default */.Z(JSON.stringify({
            message: "something went wrong"
        }, {
            status: 500
        }));
    }
};
const POST = async (req)=>{
    const session = await (0,auth/* getAuthSession */.P)();
    if (!session) {
        return new next_response/* default */.Z(JSON.stringify({
            message: "You are not authenticated"
        }, {
            status: 401
        }));
    }
    try {
        const body = await req.json();
        const comment = await connect/* default */.Z.comment.create({
            data: {
                ...body,
                userEmail: session?.user?.email
            }
        });
        return new next_response/* default */.Z(JSON.stringify(comment, {
            status: 200
        }));
    } catch (error) {
        console.log(error);
        return new next_response/* default */.Z(JSON.stringify({
            message: "something went wrong"
        }, {
            status: 500
        }));
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcomments%2Froute&name=app%2Fapi%2Fcomments%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcomments%2Froute.js&appDir=D%3A%5Cmern%20applications%5Cblog-app%5Csrc%5Capp&appPaths=%2Fapi%2Fcomments%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/comments/route",
        pathname: "/api/comments",
        filename: "route",
        bundlePath: "app/api/comments/route"
    },
    resolvedPagePath: "D:\\mern applications\\blog-app\\src\\app\\api\\comments\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/comments/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,335,549,198], () => (__webpack_exec__(91105)));
module.exports = __webpack_exports__;

})();