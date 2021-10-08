(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),a=n(5),s=n.n(a),o=(n(14),n(4)),l=n(6),d=n(7),r=n(1),h=n(9),u=n(8),b=(n(15),n(0)),f=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},i.fetchTasks=i.fetchTasks.bind(Object(r.a)(i)),i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i.getCookie=i.getCookie.bind(Object(r.a)(i)),i.startEdit=i.startEdit.bind(Object(r.a)(i)),i.deleteItem=i.deleteItem.bind(Object(r.a)(i)),i.completed=i.completed.bind(Object(r.a)(i)),i}return Object(d.a)(n,[{key:"getCookie",value:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var c=n[i].trim();if(c.substring(0,t.length+1)===t+"="){e=decodeURIComponent(c.substring(t.length+1));break}}return e}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var t=this;console.log("fetching..."),fetch("http://127.0.0.1:8000/api/task-list/").then((function(t){return t.json()})).then((function(e){return t.setState({todoList:e})}))}},{key:"handleChange",value:function(t){var e=t.target.value;this.setState({activeItem:Object(o.a)(Object(o.a)({},this.state.activeItem),{},{title:e})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),console.log("Item:",this.state.activeItem);var n=this.getCookie("csrftoken"),i="http://127.0.0.1:8000/api/task-create/";!0===this.state.editing&&(i="http://127.0.0.1:8000/api/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(t){e.fetchTasks(),e.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(t){console.log("Error: ".concat(t))}))}},{key:"startEdit",value:function(t){this.setState({activeItem:t,editing:!0})}},{key:"deleteItem",value:function(t){var e=this,n=this.getCookie("csrftoken");fetch("http://127.0.0.1:8000/api/task-delete/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}}).then((function(t){e.fetchTasks()}))}},{key:"completed",value:function(t){var e=this;t.completed=!t.completed,console.log("task: ".concat(t.completed));var n=this.getCookie("csrftoken"),i="http://127.0.0.1:8000/api/task-update/".concat(t.id,"/");fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:t.completed,title:t.title})}).then((function(){e.fetchTasks()}))}},{key:"render",value:function(){var t=this.state.todoList,e=this;return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{id:"task-container",children:[Object(b.jsx)("div",{id:"form-wrapper",children:Object(b.jsx)("form",{id:"form",onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{className:"flex-wrapper",children:[Object(b.jsx)("div",{style:{flex:6},children:Object(b.jsx)("input",{className:"form-control",onChange:this.handleChange,id:"title",type:"text",placeholder:"Add Task",name:"title",value:this.state.activeItem.title})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("input",{id:"submit",className:"btn",type:"submit"})})]})})}),Object(b.jsx)("div",{id:"list-wrapper",children:t.map((function(t,n){return Object(b.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(b.jsx)("div",{onClick:function(){return e.completed(t)},style:{flex:7},children:!1===t.completed?Object(b.jsx)("span",{children:t.title}):Object(b.jsx)("strike",{children:t.title})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("button",{onClick:function(){return e.startEdit(t)},className:"btn btn-sm btn-outline-info",children:"Edit"})}),Object(b.jsx)("div",{style:{flex:1},children:Object(b.jsx)("button",{onClick:function(){return e.deleteItem(t)},className:"btn btn-sm btn-outline-dark delete",children:"-"})})]},n)}))})]})})}}]),n}(i.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.68b8bce1.chunk.js.map