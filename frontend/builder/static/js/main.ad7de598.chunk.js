(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i),c=n(5),o=n.n(c),s=(n(14),n(4)),d=n(6),l=n(7),r=n(1),h=n(9),p=n(8),u=(n(15),n(0)),m=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},i.fetchTasks=i.fetchTasks.bind(Object(r.a)(i)),i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i.getCookie=i.getCookie.bind(Object(r.a)(i)),i.startEdit=i.startEdit.bind(Object(r.a)(i)),i.deleteItem=i.deleteItem.bind(Object(r.a)(i)),i.completed=i.completed.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"getCookie",value:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var a=n[i].trim();if(a.substring(0,t.length+1)===t+"="){e=decodeURIComponent(a.substring(t.length+1));break}}return e}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var t=this;console.log("fetching..."),fetch("https://djangoxreact-todo-app.herokuapp.com/api/task-list/").then((function(t){return t.json()})).then((function(e){return t.setState({todoList:e})}))}},{key:"handleChange",value:function(t){var e=t.target.value;this.setState({activeItem:Object(s.a)(Object(s.a)({},this.state.activeItem),{},{title:e})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),console.log("Item:",this.state.activeItem);var n=this.getCookie("csrftoken"),i="https://djangoxreact-todo-app.herokuapp.com/api/task-create/";!0===this.state.editing&&(i="https://djangoxreact-todo-app.herokuapp.com/api/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(t){e.fetchTasks(),e.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(t){console.log("Error: ".concat(t))}))}},{key:"startEdit",value:function(t){this.setState({activeItem:t,editing:!0})}},{key:"deleteItem",value:function(t){var e=this,n=this.getCookie("csrftoken");fetch("https://djangoxreact-todo-app.herokuapp.com/api/task-delete/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}}).then((function(t){e.fetchTasks()}))}},{key:"completed",value:function(t){var e=this;t.completed=!t.completed,console.log("task: ".concat(t.completed));var n=this.getCookie("csrftoken"),i="https://djangoxreact-todo-app.herokuapp.com/api/task-update/".concat(t.id,"/");fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:t.completed,title:t.title})}).then((function(){e.fetchTasks()}))}},{key:"render",value:function(){var t=this.state.todoList,e=this;return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{id:"task-container",children:[Object(u.jsx)("div",{id:"form-wrapper",children:Object(u.jsx)("form",{id:"form",onSubmit:this.handleSubmit,children:Object(u.jsxs)("div",{className:"flex-wrapper",children:[Object(u.jsx)("div",{style:{flex:6},children:Object(u.jsx)("input",{className:"form-control",onChange:this.handleChange,id:"title",type:"text",placeholder:"Add Task",name:"title",value:this.state.activeItem.title})}),Object(u.jsx)("div",{style:{flex:1},children:Object(u.jsx)("input",{id:"submit",className:"btn",type:"submit"})})]})})}),Object(u.jsx)("div",{id:"list-wrapper",children:t.map((function(t,n){return Object(u.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(u.jsx)("div",{onClick:function(){return e.completed(t)},style:{flex:7},children:!1===t.completed?Object(u.jsx)("span",{children:t.title}):Object(u.jsx)("strike",{children:t.title})}),Object(u.jsx)("div",{style:{flex:1},children:Object(u.jsx)("button",{onClick:function(){return e.startEdit(t)},className:"btn btn-sm btn-outline-info",children:"Edit"})}),Object(u.jsx)("div",{style:{flex:1},children:Object(u.jsx)("button",{onClick:function(){return e.deleteItem(t)},className:"btn btn-sm btn-outline-dark delete",children:"-"})})]},n)}))})]})})}}]),n}(i.Component);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ad7de598.chunk.js.map