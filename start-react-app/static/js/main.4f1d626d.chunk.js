(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},104:function(e,a,t){},1293:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(86),o=t.n(i),l=(t(101),t(9)),c=t(13),s=t(15),m=t(14),u=t(16),d=(t(102),t(103),t(104),t(1297)),p=t(1298),f=t(1299),b=t(7),h=t(8),v="Awesome App",g=function(e){var a=e.onToggle,t=e.children;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark static-top"},r.a.createElement("a",{className:"navbar-brand mr-1",href:"index.html"},v),r.a.createElement("button",{className:"btn btn-link btn-sm text-white order-1 order-sm-0",onClick:a},r.a.createElement(h.a,{icon:b.faBars})),t)},E=t(1295),w={title:{display:"inline-block",marginLeft:"0.5rem"}},N=function(e){var a=e.title,t=e.faIcon,n=e.link;return r.a.createElement("li",{className:"nav-item active"},r.a.createElement(E.a,{className:"nav-link bg-secondary border",to:n},r.a.createElement(h.a,{icon:b[t]}),r.a.createElement("span",{style:w.title},a)))},y=function(e){var a=e.title,t=e.faIcon,n=e.type,i=void 0===n?"primary":n;return r.a.createElement("div",{className:"col-xl-3 col-sm-6 mb-3"},r.a.createElement("div",{className:"card text-white o-hidden h-100 bg-".concat(i)},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-body-icon"},r.a.createElement(h.a,{icon:b[t]})),r.a.createElement("div",{className:"mr-5"},a)),r.a.createElement("a",{className:"card-footer text-white clearfix small z-1",href:"./#"},r.a.createElement("span",{className:"float-left"},"View Details"),r.a.createElement("span",{className:"float-right"},r.a.createElement(h.a,{icon:b.faAngleRight})))))},k=[{title:"26 New Messages!",type:"primary",faIcon:"faComments"},{title:"10 New Tasks!",type:"warning",faIcon:"faList"},{title:"123 New Orders!",type:"success",faIcon:"faShoppingCart"},{title:"13 New Tickets!",type:"danger",faIcon:"faLifeRing"}],x=t(87),q=t.n(x),O=t(55),j=t(88),M=["January","February","March","April","May","June","July","August","September","October","November","December"],S={labels:M,datasets:[{label:"First Dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:M.map(function(){return Math.floor(100*Math.random())})}]},I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state=S,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var a=e.state.datasets[0],t=M.map(function(){return Math.floor(100*Math.random())}),n=Object(O.a)({},a);n.data=t;var r=Object(O.a)({},S,{datasets:[n]});e.setState(r)},3e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid bg-light"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"./#"},v)),r.a.createElement("li",{className:"breadcrumb-item active"},"Random Line Chart")),r.a.createElement(j.a,{data:this.state}))}}]),a}(n.Component),D=t(90),A=t.n(D),C=t(91),T=t.n(C),L=t(53),F=t.n(L),B=t(19),J=t.n(B),R=function e(){Object(l.a)(this,e),this.id=null,this.name="",this.position="",this.office="",this.age=0,this.startDate=new Date,this.salary=1},H=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego"],V=[{dataField:"name",text:"Employee Name",sort:!0,headerStyle:{width:"20%"}},{dataField:"position",text:"Job Title",sort:!0,headerStyle:{width:"25%"}},{dataField:"office",text:"Office Location",sort:!0,headerStyle:{width:"15%"}},{dataField:"age",text:"Age",sort:!0,headerStyle:{width:"10%"}},{dataField:"startDate",text:"startDate",sort:!0,headerStyle:{width:"10%"},formatter:function(e){return F()(e).format("YYYY-MM-DD")}},{dataField:"salary",text:"Salary",sort:!0,headerStyle:{width:"15%"},formatter:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}],Y={bootstrap4:!0,condensed:!0,hover:!0,striped:!0},P=[{title:"Dashboard",faIcon:"faTachometerAlt",link:"/",view:function(){return r.a.createElement("div",{className:"container-fluid bg-light"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"./#"},v)),r.a.createElement("li",{className:"breadcrumb-item active"},"Dashboard")),r.a.createElement("div",{className:"row"},k.map(function(e){return r.a.createElement(y,Object.assign({key:e.title},e))})))}},{title:"Information",faIcon:"faFolder",link:"/info",view:function(){return r.a.createElement("div",{className:"container-fluid bg-light"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"./#"},v)),r.a.createElement("li",{className:"breadcrumb-item active"},"Information")),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:q.a,alt:"light bulb",width:"35%",align:"left",style:{marginRight:"10px"}}),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa corporis harum enim, cupiditate, tempora iure dolorem aliquid aut unde quaerat, sit consequuntur qui vero sapiente! Debitis illum distinctio ipsum voluptas obcaecati perspiciatis, adipisci in, magni quo voluptate officia consectetur maxime laboriosam autem. Illum, vitae? Quibusdam ex nemo tenetur veniam dignissimos porro obcaecati cupiditate suscipit non aliquid exercitationem harum autem ipsum delectus earum repudiandae aspernatur, reprehenderit possimus mollitia! Molestias dignissimos aspernatur earum architecto blanditiis fugit praesentium dolor necessitatibus quo dolorem, iste qui voluptates repellat, numquam id alias facilis ex? Molestias, pariatur? Quidem adipisci hic nostrum quia? Facere nihil labore qui voluptates, fuga repudiandae nesciunt hic, quos, sunt nobis odio sit placeat necessitatibus sequi laboriosam. Minima, quaerat omnis asperiores quisquam, fuga esse totam distinctio iure ratione explicabo architecto mollitia quam nostrum quo porro laudantium, dolore dignissimos debitis et autem quasi sapiente? Dolorem magni libero placeat architecto earum harum repudiandae voluptatem, omnis beatae veniam dolore quaerat provident voluptas corrupti aspernatur eaque saepe cum commodi nostrum id nemo reprehenderit eum? Quis, at minima beatae porro debitis nemo earum neque, velit magni dolorum quos quibusdam impedit incidunt nobis commodi hic eveniet! Quisquam velit minus commodi eos officia nihil, facilis expedita, accusamus a cum at unde quas tempore perferendis quasi voluptas dolor impedit. Ab quis, consectetur iure officia, molestiae ad tempora deserunt earum debitis doloribus, soluta praesentium maxime? Officiis consectetur voluptates fuga nobis perspiciatis minima laudantium asperiores facere minus id? Maiores pariatur illum facere tenetur molestiae nulla unde neque, rem eligendi suscipit doloremque, earum optio?")))}},{title:"Fancy Chart",faIcon:"faChartArea",link:"/chart",view:I},{title:"Data Table",faIcon:"faTable",link:"/table",view:function(){var e=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,a=[],t=0;t<e;t++){var n=new R;n.id=J.a.random.uuid(),n.name=J.a.name.findName(),n.position=J.a.name.jobTitle(),n.office=H[Math.floor(Math.random()*H.length)],n.age=J.a.random.number({min:20,max:80}),n.startDate=J.a.date.between("1980-01-01","2018-12-31"),n.salary=J.a.random.number({min:2e4,max:2e5,precision:2}),a.push(n)}return a}(100),a=T()({sizePerPage:10,showTotal:!0});return r.a.createElement("div",{className:"container-fluid bg-light"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"./#"},v)),r.a.createElement("li",{className:"breadcrumb-item active"},"Employee Table")),r.a.createElement("div",null,r.a.createElement(A.a,Object.assign({keyField:"id",data:e,columns:V},Y,{pagination:a}))))}}],Q=function(e){var a=e.toggled;return r.a.createElement("ul",{className:"sidebar navbar-nav bg-white pt-3 ".concat(a)},P.map(function(e){return r.a.createElement(N,{key:e.title,title:e.title,faIcon:e.faIcon,link:e.link})}))},W=function(){return r.a.createElement("form",{className:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for..."}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},r.a.createElement(h.a,{icon:b.faSearch})))))},U=t(1296),z={badge:{display:"inline-block",marginLeft:"-5px"}},$=function(e){var a=e.faIcon,t=e.badge,n=void 0===t?null:t,i=e.type,o=void 0===i?"danger":i;return r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"./#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement(h.a,{icon:b[a]}),n?r.a.createElement(U.a,{variant:o,style:z.badge},n):null)},G=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isVisible:!1},t.showMenu=function(){t.setState({isVisible:!0})},t.hideMenu=function(){t.setState({isVisible:!1})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.faIcon,t=e.badge,n=this.state.isVisible?"show":"";return r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1",onMouseEnter:this.showMenu,onMouseLeave:this.hideMenu},r.a.createElement($,{faIcon:a,badge:t}),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right ".concat(n),"aria-labelledby":"alertsDropdown"},this.props.children))}}]),a}(n.Component),K=function(){return r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement(G,{faIcon:"faBell",badge:"9+"},r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Something else here")))},X=function(){return r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement(G,{faIcon:"faEnvelope",badge:"7"},r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Something else here")))},Z=function(){return r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement(G,{faIcon:"faUserCircle"},r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Settings"),r.a.createElement("a",{className:"dropdown-item",href:"./#"},"Activity Log"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"./#","data-toggle":"modal","data-target":"#logoutModal"},"Logout")))},_=function(){return r.a.createElement("ul",{className:"navbar-nav ml-auto ml-md-0"},r.a.createElement(K,null),r.a.createElement(X,null),r.a.createElement(Z,null))},ee=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={sideMenu:""},t.onToggle=function(){var e=t.state.sideMenu?"":"toggled";t.setState({sideMenu:e})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{onToggle:this.onToggle},r.a.createElement(W,null),r.a.createElement(_,null)),r.a.createElement("div",{id:"wrapper"},r.a.createElement(Q,{toggled:this.state.sideMenu}),r.a.createElement("div",{id:"content-wrapper"},this.props.children)))}}]),a}(n.Component),ae=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/start-react-app"},r.a.createElement(ee,null,r.a.createElement(p.a,null,P.map(function(e){return r.a.createElement(f.a,{key:e.title,exact:!0,path:e.link,render:function(){return r.a.createElement(e.view,null)}})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,a,t){e.exports=t.p+"static/media/light-bulb.29c5346e.jpg"},96:function(e,a,t){e.exports=t(1293)}},[[96,1,2]]]);
//# sourceMappingURL=main.4f1d626d.chunk.js.map