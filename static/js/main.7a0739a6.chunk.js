(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"getHeaders":{"secret-key":"$2b$10$7GYOZwm4BiHe2D29KfVEpeRifXDtCYc0DNylRKf.fZZT9k/LvZG8C","Content-Type":"application/json"},"postHeaders":{"secret-key":"$2b$10$7GYOZwm4BiHe2D29KfVEpeRifXDtCYc0DNylRKf.fZZT9k/LvZG8C","Content-Type":"application/json","private":"true","versioning":"false","name":"undefined"},"putHeaders":{"secret-key":"$2b$10$7GYOZwm4BiHe2D29KfVEpeRifXDtCYc0DNylRKf.fZZT9k/LvZG8C","Content-Type":"application/json","versioning":"false"},"deleteHeaders":{"secret-key":"$2b$10$7GYOZwm4BiHe2D29KfVEpeRifXDtCYc0DNylRKf.fZZT9k/LvZG8C"},"baseAddress":"https://api.jsonbin.io/b","mainEndpoint":"5f1c14e591806166284893c9"}')},22:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),i=a.n(r),o=(a(27),a(3)),l=a(4),d=a(1),c=a(6),u=a(5),p=(a(28),a(29),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.passedTask.map((function(t){return s.a.createElement("div",{className:"listItem",key:t.key},s.a.createElement("link",{rel:"stylesheet",href:"https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"}),s.a.createElement("p",null,s.a.createElement("input",{id:t.key,value:t.value,onChange:function(a){e.props.setUpdate(a.target.value,t.key)}}),s.a.createElement("span",{className:"mdi mdi-delete delIcon",onClick:function(){return e.props.deleteTasks(t.key)}})))}));return s.a.createElement("div",null,t)}}]),a}(s.a.Component)),b=a(8),h=a(9),k=a.n(h),m=a(21),f=(a(31),a(11)),v=a(7),T=f.baseAddress,y=f.mainEndpoint,D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dropDownDisplay:"block",inputDisplay:"none",dropDownSelectedOption:n.props.selectedOption,dropdownOptions:[],textboxValue:"",currentItems:{tableName:"",tableID:"",key:""}},n.getData=n.getData.bind(Object(d.a)(n)),n.addNewTable=n.addNewTable.bind(Object(d.a)(n)),n.updateState=n.updateState.bind(Object(d.a)(n)),n.uploadTextToApi=n.uploadTextToApi.bind(Object(d.a)(n)),n.handleDropdownChange=n.handleDropdownChange.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=this,t=T+"/"+y,a=f.getHeaders;v.get(t,{headers:a}).then((function(t){for(var a=t.data,n=a.length,s=0;s<n;s++){e.setState({currentItems:{tableName:a[s].tableName,tableID:a[s].tableID,key:a[s].key}});var r=e.state.dropdownOptions;r=[].concat(Object(b.a)(r),[e.state.currentItems]),e.setState({dropdownOptions:r})}}))}},{key:"addNewTable",value:function(){this.setState({dropDownDisplay:"none",inputDisplay:"block"})}},{key:"updateState",value:function(e){this.setState({textboxValue:e.target.value})}},{key:"uploadTextToApi",value:function(e){var t=this;e.preventDefault();var a=f.baseAddress,n=f.postHeaders;n.name="Task_"+this.state.textboxValue;var s=JSON.stringify([{key:"DemoKey",value:"DemoValue"}]);v.post(a,s,{headers:n}).then((function(e){var s=e.data.id;t.setState({currentItems:{tableName:t.state.textboxValue,tableID:s,key:Date.now()}});var r=JSON.stringify([].concat(Object(b.a)(t.state.dropdownOptions),[t.state.currentItems])),i=t.state.currentItems.tableName;a=f.baseAddress+"/"+f.mainEndpoint,n=f.putHeaders,v.put(a,r,{headers:n}).then((function(e){console.log("Primary table updated.");var a=t.state.currentItems.tableName;t.props.selectedOption(a)})),t.setState({dropdownOptions:JSON.parse(r),dropDownSelectedOption:i})})),this.setState({dropDownDisplay:"block",inputDisplay:"none"})}},{key:"handleDropdownChange",value:function(e){this.setState({dropDownSelectedOption:e.target.value}),this.props.selectedOption(e.target.value)}},{key:"render",value:function(){var e=this.state.dropdownOptions.map((function(e){return s.a.createElement("option",{key:e.key},e.tableName)}));return s.a.createElement("div",{id:"major"},s.a.createElement("div",{id:"dropdownDiv",style:{display:this.state.dropDownDisplay}},s.a.createElement("select",{name:"dropdown",id:"dropdown",value:this.state.dropDownSelectedOption,onChange:this.handleDropdownChange},e),s.a.createElement("button",{onClick:this.addNewTable},"ADD NEW")),s.a.createElement("div",{id:"inputDiv",style:{display:this.state.inputDisplay}},s.a.createElement("form",{onSubmit:this.uploadTextToApi},s.a.createElement("input",{type:"text",id:"inputBox",placeholder:"Add new task??",onChange:this.updateState}),s.a.createElement("button",null,"ADD"))))}}]),a}(s.a.Component),O=(a(49),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={textboxValue:"",currentTask:{key:"",value:""}},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.addTask=n.addTask.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({textboxValue:e.target.value}),this.setState({currentTask:{key:Date.now(),value:e.target.value}})}},{key:"addTask",value:function(e){e.preventDefault();var t=[].concat(Object(b.a)(this.props.tasks),[this.state.currentTask]);this.props.updateTableState(JSON.stringify(t)),this.setState({textboxValue:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"InputTaskParent"},s.a.createElement("header",null,s.a.createElement("form",{id:"to-do-form",onSubmit:this.addTask},s.a.createElement("hr",null),s.a.createElement("input",{type:"text",placeholder:"Tasks to do..",value:this.state.textboxValue,onChange:this.handleChange}),s.a.createElement("button",null,"TODO"))))}}]),a}(s.a.Component)),g=a(7),S=a.n(g),w=a(11),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dropDownSelectedOption:"",selectedTableData:{tableName:"",tableID:"",key:""},currentTableTasks:[],task:{key:"",value:""}},n.getCurrentSelectedOption=n.getCurrentSelectedOption.bind(Object(d.a)(n)),n.updateCurrentTableTasks=n.updateCurrentTableTasks.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"getCurrentSelectedOption",value:function(e){var t=this,a=w.baseAddress+"/"+w.mainEndpoint,n=w.getHeaders;S.a.get(a,{headers:n}).then((function(s){for(var r=s.data,i=r.length,o=0;o<i;o++)r[o].tableName===e&&t.setState({selectedTableData:{tableName:r[o].tableName,tableID:r[o].tableID,key:r[o].key}});a=w.baseAddress+"/"+t.state.selectedTableData.tableID,S.a.get(a,{headers:n}).then((function(e){for(var a=e.data,n=a.length,s=0;s<n;s++)t.setState({task:{key:a[s].key,value:a[s].value}}),t.setState({currentTableTasks:a}),t.props.stateUpdator(t.state.currentTableTasks)}))}))}},{key:"updateCurrentTableTasks",value:function(e){var t=this,a=JSON.parse(e);if(0===a.length){var n=w.baseAddress+"/"+this.state.selectedTableData.tableID,s=w.deleteHeaders;S.a.delete(n,{headers:s}),n=w.baseAddress+"/"+w.mainEndpoint,s=w.getHeaders,S.a.get(n,{headers:s}).then((function(e){var a=e.data,r=t.state.selectedTableData.tableID,i=a.filter((function(e){return e.tableID!==r}));s=w.putHeaders,S.a.put(n,i,{headers:s})}))}else n=w.baseAddress+"/"+this.state.selectedTableData.tableID,s=w.putHeaders,S.a.put(n,a,{headers:s}).then((function(e){s=w.getHeaders,S.a.get(n,{headers:s}).then((function(e){var a=e.data;t.setState({currentTableTasks:a}),t.props.stateUpdator(t.state.currentTableTasks),t.refs.DropdownComponent.getData()}))}))}},{key:"render",value:function(){return s.a.createElement("div",{id:"inputParent"},s.a.createElement(D,{selectedOption:this.getCurrentSelectedOption,ref:"DropdownComponent"}),s.a.createElement(O,{activeTable:this.state.selectedTableData,tasks:this.state.currentTableTasks,updateTableState:this.updateCurrentTableTasks}))}}]),a}(s.a.Component),C=(a(7),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={taskList:[]},n.updateStateTaskList=n.updateStateTaskList.bind(Object(d.a)(n)),n.deleteTask=n.deleteTask.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"updateStateTaskList",value:function(e){var t=JSON.parse(JSON.stringify(e));this.setState({taskList:t})}},{key:"deleteTask",value:function(e){console.log("TasksList Delete Task");var t=this.state.taskList.filter((function(t){return t.key!==e}));this.refs.child.updateCurrentTableTasks(JSON.stringify(t)),this.setState({taskList:t})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"InputParent"},s.a.createElement(E,{stateUpdator:this.updateStateTaskList,ref:"child"})),s.a.createElement("div",{className:"App"},s.a.createElement(p,{id:"listItem",passedTask:this.state.taskList,deleteTasks:this.deleteTask})))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7a0739a6.chunk.js.map