"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var TouchSpace = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n  position: absolute;\n  /* left: ", "px; */\n  transform:translateX(", "px);\n  top: 0;\n  transition: all ", ";\n  z-index:0;\n"], ["\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n  position: absolute;\n  /* left: ", "px; */\n  transform:translateX(", "px);\n  top: 0;\n  transition: all ", ";\n  z-index:0;\n"])), function (props) { return props.left; }, function (props) { return props.left - 8; }, function (props) { return props.isTouch ? '0.05s' : '0.5s ease-in-out'; });
var Temp = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow:hidden;\n"], ["\n  overflow:hidden;\n"])));
var eventToPos = function (e) {
    var _a, _b;
    return { x: (_a = e.touches[0]) === null || _a === void 0 ? void 0 : _a.clientX, y: (_b = e.touches[0]) === null || _b === void 0 ? void 0 : _b.clientY };
};
var Touch = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var children = _a.children;
    var touchSpace = react_1.useRef(null);
    var _h = react_1.useState({
        start: { y: Number((_b = touchSpace.current) === null || _b === void 0 ? void 0 : _b.offsetTop), x: Number((_c = touchSpace.current) === null || _c === void 0 ? void 0 : _c.offsetLeft) },
        move: { y: Number((_d = touchSpace.current) === null || _d === void 0 ? void 0 : _d.offsetTop), x: Number((_e = touchSpace.current) === null || _e === void 0 ? void 0 : _e.offsetLeft) },
        end: { y: Number((_f = touchSpace.current) === null || _f === void 0 ? void 0 : _f.offsetTop), x: Number((_g = touchSpace.current) === null || _g === void 0 ? void 0 : _g.offsetLeft) },
        isTouch: false
    }), touch = _h[0], setTouch = _h[1];
    var _j = react_1.useState(0), left = _j[0], setLeft = _j[1];
    react_1.useEffect(function () {
        var element = touchSpace.current;
        var handleTouchStart = function (e) {
            setTouch(__assign(__assign({}, touch), { start: eventToPos(e), isTouch: true }));
        };
        var handleTouchMove = function (e) {
            var _a;
            var pos = ((_a = e.touches[0]) === null || _a === void 0 ? void 0 : _a.clientX) - touch.start.x;
            setLeft(pos > 0 ? 0 : pos);
            setTouch(__assign(__assign({}, touch), { move: eventToPos(e) }));
        };
        var handleTouchEnd = function (e) {
            setTouch(__assign(__assign({}, touch), { end: eventToPos(e), isTouch: false }));
            if (screen.width / 2 <= (left * -1)) {
                setLeft(-1 * screen.width);
            }
            else {
                setLeft(0);
            }
        };
        element === null || element === void 0 ? void 0 : element.addEventListener('touchstart', handleTouchStart);
        element === null || element === void 0 ? void 0 : element.addEventListener('touchmove', handleTouchMove);
        element === null || element === void 0 ? void 0 : element.addEventListener('touchend', handleTouchEnd);
        return function () {
            element === null || element === void 0 ? void 0 : element.removeEventListener('touchstart', handleTouchStart);
            element === null || element === void 0 ? void 0 : element.removeEventListener('touchmove', handleTouchMove);
            element === null || element === void 0 ? void 0 : element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [touch, left]);
    return (React.createElement("div", null,
        React.createElement(Temp, null,
            React.createElement(TouchSpace, { left: left, isTouch: touch.isTouch, ref: touchSpace }, children))));
};
exports["default"] = Touch;
var templateObject_1, templateObject_2;
