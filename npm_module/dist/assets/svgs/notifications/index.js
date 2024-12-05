'use strict';

var React = require('react');

function BugIcon({ className = 'text-orange', style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'none', viewBox: '0 0 16 16', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M5.111 3h5.778c.061 0 .111-.05.111-.111 0-.556-.122-1.065-.36-1.501A2.56 2.56 0 009.613.36 3.116 3.116 0 008.11 0H7.89c-.556 0-1.065.122-1.502.36A2.56 2.56 0 005.36 1.388c-.238.436-.36.945-.36 1.5 0 .062.05.112.111.112z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M15.853 7.645h-2.715v-1.88c1.409 0 2.55-1.17 2.55-2.615a.15.15 0 00-.147-.15h-1.1a.15.15 0 00-.147.15c0 .655-.518 1.185-1.156 1.185H2.862c-.638 0-1.156-.53-1.156-1.185A.15.15 0 001.56 3H.459a.15.15 0 00-.147.15c0 1.445 1.141 2.614 2.55 2.614v1.88H.147A.15.15 0 000 7.796v1.053c0 .083.066.15.147.15h2.715v1.806c0 .122.004.245.013.363A3.616 3.616 0 00.734 14.49c0 .083.066.15.147.15h1.027a.15.15 0 00.147-.15c0-.831.439-1.559 1.094-1.95.11.323.25.632.416.921a5.229 5.229 0 001.844 1.89c.53.318 1.12.542 1.749.649a.15.15 0 00.147-.15V7.118a.15.15 0 01.146-.15h1.101a.15.15 0 01.147.15v8.73c0 .082.066.15.147.15a5.043 5.043 0 001.748-.649 5.228 5.228 0 001.845-1.89c.166-.291.306-.6.416-.921a2.275 2.275 0 011.09 1.952c0 .083.066.15.147.15h1.027a.15.15 0 00.147-.15 3.616 3.616 0 00-2.141-3.323c.007-.12.013-.24.013-.363V9h2.715a.15.15 0 00.147-.15V7.794a.15.15 0 00-.147-.15z' }), "\n    "));
}
function CheckIcon({ className = 'text-green', style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'none', viewBox: '0 0 16 16', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M8 .5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15.5 3.86 12.14.5 8 .5zM5.968 11.217L3.275 8.525a.747.747 0 111.057-1.058L6.5 9.628l5.16-5.16a.747.747 0 111.057 1.058l-5.692 5.692a.747.747 0 01-1.058 0z' }), "\n    "));
}
function ErrorIcon({ className = 'text-red', style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '14', fill: 'none', viewBox: '0 0 14 14', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M9.797.25H4.202L.25 4.202v5.595l3.952 3.953h5.595l3.953-3.953V4.202L9.797.25zm.953 9.555l-.945.945L7 7.945 4.195 10.75l-.945-.945L6.055 7 3.25 4.195l.945-.945L7 6.055 9.805 3.25l.945.945L7.945 7l2.805 2.805z' }), "\n    "));
}
function InfoIcon({ className = 'text-blue', style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'none', viewBox: '0 0 16 16', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M8 16A8 8 0 108 0a8 8 0 000 16z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', d: 'M8 3c-.833 0-1.5.709-1.5 1.547 0 .86.667 1.547 1.5 1.547.813 0 1.5-.688 1.5-1.547C9.5 3.709 8.812 3 8 3zM6 11.744c0-.207.167-.375.417-.375h.416V8.65h-.416c-.25 0-.417-.169-.417-.375v-.9C6 7.169 6.167 7 6.417 7H8.75c.23 0 .417.169.417.375v3.994h.416c.23 0 .417.168.417.375v.881c0 .225-.188.375-.417.375H6.417c-.25 0-.417-.15-.417-.375v-.881z' }), "\n    "));
}
function NoteIcon({ className, style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'none', viewBox: '0 0 16 16', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#767676', d: 'M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', d: 'M13 3H3v1h10V3zM13 6H3v1h10V6zM13 9H3v1h10V9zM13 12H3v1h10v-1z' }), "\n    "));
}
function TipIcon({ className = 'text-purple', style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'none', viewBox: '0 0 16 16', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', d: 'M12.425 4c-.956.055-2.852.251-4.017.984a.28.28 0 00-.139.232v6.505c0 .214.226.34.418.25 1.2-.626 2.938-.804 3.79-.84a.558.558 0 00.522-.554v-6.04c.018-.304-.26-.554-.574-.536zm-4.834.984C6.426 4.25 4.531 4.054 3.574 4A.542.542 0 003 4.537v6.04c0 .286.226.536.522.554.852.036 2.59.214 3.79.84.192.09.418-.036.418-.25V5.216a.28.28 0 00-.14-.232z' }), "\n    "));
}
function WarningIcon({ className = 'text-orange', style, onClick }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '15', fill: 'none', viewBox: '0 0 18 15', className: className, onClick: onClick, style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M.75 14.75h16.5L9 .5.75 14.75zm9-2.25h-1.5V11h1.5v1.5zm0-3h-1.5v-3h1.5v3z' }), "\n    "));
}

exports.BugIcon = BugIcon;
exports.CheckIcon = CheckIcon;
exports.ErrorIcon = ErrorIcon;
exports.InfoIcon = InfoIcon;
exports.NoteIcon = NoteIcon;
exports.TipIcon = TipIcon;
exports.WarningIcon = WarningIcon;
