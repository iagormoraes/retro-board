(this["webpackJsonpretro-board-ui"]=this["webpackJsonpretro-board-ui"]||[]).push([[0],{67:function(e,n,t){e.exports=t(83)},83:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),i=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(31),l=t(24),s=t(27),u=t(20),d=(t(72),t(21));function m(){var e=Object(u.a)(["\n  padding: 8px;\n  transition: background-color 0.2 ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 100px;\n"]);return m=function(){return e},e}function g(){var e=Object(u.a)(["\n  padding: 8px;\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 220px;\n\n  display: flex;\n  flex-direction: column;\n"]);return b=function(){return e},e}var f=d.a.div(b()),p=d.a.h3(g()),k=d.a.div(m(),(function(e){return e.isDraggingOver?"skyblue":"white"})),v=t(61),h=t(30),j=t(105),O=t(107),x=t(42),E=(t(78),t(102)),y=t(106),I=t(59),w=t.n(I),D=function(e){var n=r.a.useState(null),t=Object(s.a)(n,2),a=t[0],o=t[1],i=function(){o(null)},c=Boolean(a),l=c?"emoji-popover":void 0;return r.a.createElement("div",null,r.a.createElement(E.a,{"aria-describedby":l,"aria-label":"emoji-picker",style:{align:"right"},size:"small",variant:"outlined",onClick:function(e){o(e.currentTarget)}},r.a.createElement(w.a,null)),r.a.createElement(y.a,{ref:r.a.createRef(),id:l,open:c,anchorEl:a,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(x.b,{onSelect:function(n){e.onEmojiSelect(n),i()}})))};function S(){var e=Object(u.a)(["\n  margin-right: 4px;\n"]);return S=function(){return e},e}function C(){var e=Object(u.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: ",";\n"]);return C=function(){return e},e}var z=d.a.div(C(),(function(e){return e.isDragging?"lightgreen":"white"})),P=d.a.div(S()),A=function(e){var n=r.a.useState([]),t=Object(s.a)(n,2),a=t[0],o=t[1],i=r.a.useState(0),c=Object(s.a)(i,2),l=c[0],u=c[1],d=function(e){e.reactions++,u(l+1)},m=function(e){var n=a.find((function(n){return n.id===e.id}));n?d(n):(e.reactions=1,o([].concat(Object(v.a)(a),[e])))};return r.a.createElement(h.b,{draggableId:e.task.id,index:e.index},(function(n,t){return r.a.createElement(z,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,isDragging:t.isDragging}),r.a.createElement(j.a,{container:!0,alignItems:"center"},r.a.createElement(j.a,{container:!0,item:!0,xs:11,md:11},e.task.content),r.a.createElement(j.a,{container:!0,justify:"flex-end",item:!0,xs:1,md:1},r.a.createElement(D,{onEmojiSelect:m})),r.a.createElement(j.a,{container:!0,item:!0,alignItems:"center"},a.map((function(e,n){return r.a.createElement(P,{key:"emoji-reaction-".concat(n)},r.a.createElement(O.a,{variant:"outlined",size:"small","aria-label":e.name,label:e.reactions,avatar:r.a.createElement(x.a,{key:"asd",emoji:e,size:18}),onClick:function(){return d(e)}}))})))))}))},B=function(e){return r.a.createElement(f,null,r.a.createElement(p,null,e.column.title),r.a.createElement(h.c,{droppableId:e.column.id},(function(n,t){return r.a.createElement(k,Object.assign({ref:n.innerRef},n.droppableProps,{isDraggingOver:t.isDraggingOver}),e.tasks.map((function(e,n){return r.a.createElement(A,{key:e.id,task:e,index:n})})),n.placeholder)})))},R={tasks:{"task-1":{id:"task-1",content:"Take out the garbage"},"task-2":{id:"task-2",content:"Charge my phone"},"task-3":{id:"task-3",content:"Watch Series"},"task-4":{id:"task-4",content:"Cook Dinner"}},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"In Progress",taskIds:[]},"column-3":{id:"column-3",title:"Done",taskIds:[]}},columnOrder:["column-1","column-2","column-3"]};function T(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return T=function(){return e},e}var W=d.a.div(T()),J=function(){var e=Object(a.useState)(R),n=Object(s.a)(e,2),t=n[0],o=n[1];return r.a.createElement(h.a,{onDragUpdate:function(e){var n=e.destination,a=n?n.index/Object.keys(t.tasks).length:0;document.body.style.backgroundColor="rgba(153, 141, 217, ".concat(a,")")},onDragEnd:function(e){var n;document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var a=e.destination,r=e.source,i=e.draggableId;if(a&&(a.droppableId!==r.droppableId||a.index!==r.index)){var s=t.columns[r.droppableId],u=t.columns[a.droppableId];if(s!==u){var d=Array.from(s.taskIds);d.splice(r.index,1);var m=Object(l.a)({},s,{taskIds:d}),g=Array.from(u.taskIds);g.splice(a.index,0,i);var b=Object(l.a)({},u,{taskIds:g}),f=Object(l.a)({},t,{columns:Object(l.a)({},t.columns,(n={},Object(c.a)(n,m.id,m),Object(c.a)(n,b.id,b),n))});o(f)}else{var p=Array.from(s.taskIds);p.splice(r.index,1),p.splice(a.index,0,i);var k=Object(l.a)({},s,{taskIds:p}),v=Object(l.a)({},t,{columns:Object(l.a)({},t.columns,Object(c.a)({},k.id,k))});o(v)}}}},r.a.createElement(W,null,t.columnOrder.map((function(e){var n=t.columns[e],a=n.taskIds.map((function(e){return t.tasks[e]}));return r.a.createElement(B,{key:n.id,column:n,tasks:a})}))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.89a41a1f.chunk.js.map