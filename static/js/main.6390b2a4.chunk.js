(this.webpackJsonpcheckers=this.webpackJsonpcheckers||[]).push([[0],{10:function(e,c,o){},11:function(e,c,o){},13:function(e,c,o){"use strict";o.r(c);var i=o(1),r=o.n(i),l=o(5),n=o.n(l),s=(o(10),o(2)),a=o(3),p=(o(11),o(0)),u=function(e){var c,o=e.id,i=(e.setBoard,e.pieceColor);return"black"==i&&(c="p1"),"red"==i&&(c="p2"),Object(p.jsx)("div",{className:"piece ".concat(c),id:o,draggable:"true",onDragStart:function(e){return function(e){e.dataTransfer.setData("text",o),e.dataTransfer.setData("color",i)}(e)}})},t=function(e){var c=e.color,o=e.number,i=e.populated,r=e.setBoard,l=e.pieceColor,n=e.pieceIsKing;var s="black"===c?"#954535":"#d2a56d",a="black"===c?"white":"black";return Object(p.jsx)("div",{id:"square"+o,draggable:"false",onDragOver:function(e){return o=e,void("black"==c&&o.preventDefault());var o},onDrop:function(e){return function(e){console.log(e.target.id),console.log(e.dataTransfer.getData("text")),r(e.target.id.replace("square",""),e.dataTransfer.getData("text"),e.dataTransfer.getData("color"))}(e)},className:"square",onClick:function(){console.log(i)},style:{backgroundColor:s,color:a},children:i?Object(p.jsx)(u,{pieceIsKing:n,pieceColor:l,id:o,setBoard:r}):null})},b=function(e){var c=e.boardState,o=e.setBoard;return Object(p.jsx)("div",{className:"board",children:c.map((function(e,c){return Object(p.jsx)(t,{number:e.number,pieceColor:e.pieceColor,pieceIsKing:e.pieceIsKing,setBoard:o,color:e.color,populated:e.hasPiece,rowNum:Math.floor(e.number/8)},c)}))})},h=function(){return Object(p.jsxs)("span",{className:"move-arrows grid-item",children:[Object(p.jsx)("span",{className:"chevron left"})," \xa0",Object(p.jsx)("span",{className:"chevron right"})]})},g=function(e){var c=e.player;return Object(p.jsxs)("div",{className:"dashboard",children:[Object(p.jsxs)("span",{className:"player-info grid-item",children:[c?"Player one's turn":"Player two's turn"," ",Object(p.jsx)("span",{className:c?"p1 ex":"p2 ex",children:"\xa0"})]}),Object(p.jsx)(h,{})]})};var m=function(){var e="white",c="black",o=Object(i.useState)(!0),r=Object(a.a)(o,2),l=r[0],n=r[1],u=Object(i.useState)([]),t=Object(a.a)(u,2),h=(t[0],t[1],Object(i.useState)([{number:0,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:1,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:2,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:3,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:4,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:5,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:6,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:7,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:8,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:9,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:10,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:11,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:12,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:13,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:14,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:15,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:16,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:17,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:18,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:19,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:20,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:21,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:22,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:23,hasPiece:!0,color:c,pieceColor:"red",pieceIsKing:!1},{number:24,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:25,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:26,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:27,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:28,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:29,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:30,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:31,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:32,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:33,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:34,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:35,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:36,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:37,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:38,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:39,hasPiece:!1,color:c,pieceColor:null,pieceIsKing:!1},{number:40,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:41,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:42,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:43,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:44,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:45,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:46,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:47,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:48,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:49,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:50,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:51,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:52,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:53,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:54,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:55,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:56,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:57,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:58,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:59,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:60,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:61,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1},{number:62,hasPiece:!0,color:c,pieceColor:"black",pieceIsKing:!1},{number:63,hasPiece:!1,color:e,pieceColor:null,pieceIsKing:!1}])),m=Object(a.a)(h,2),C=m[0],P=m[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h2",{className:"header",children:"React Checkers"}),Object(p.jsx)(b,{boardState:C,setBoard:function(e,c,o){console.log(o),e!=c&&("black"==o&&0==l||"red"==o&&1==l||1!=C[e].hasPiece&&(console.log(e),console.log(c),n(!l),P(C.map((function(o,i){return i==e?Object(s.a)(Object(s.a)({},o),{},{hasPiece:!0,pieceColor:C[c].pieceColor}):i==c?Object(s.a)(Object(s.a)({},o),{},{hasPiece:!1,pieceColor:null}):o})))))}}),Object(p.jsx)(g,{player:l})]})};n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6390b2a4.chunk.js.map