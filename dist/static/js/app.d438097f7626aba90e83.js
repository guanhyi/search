webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("zL8q"),s=a.n(n),r=(a("tvR6"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row",{staticClass:"header",attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:6}},[e("img",{staticClass:"logo",attrs:{src:"static/img/common/logo2020-.png"}})]),this._v(" "),e("el-col",{attrs:{offset:12,span:4}},[e("span",[this._v("使用说明")])])],1)],1)},staticRenderFns:[]});var o={name:"App",components:{Header:a("VU/8")({name:"Header",data:function(){return{}},methods:{}},r,!1,function(t){a("UaDF")},"data-v-71124567",null).exports},data:function(){return{path:""}},mounted:function(){this.path=this.$route.path},watch:{$route:function(t,e){this.path=t.path}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},c=a("VU/8")(o,l,!1,null,null,null).exports,h=a("/ocq"),d=a("XLwt"),u=a.n(d);a("lHA8"),a("c/Tr"),a("fZjL"),a("pFYg");var p={data:function(){return{$_sidebarElm:null}},mounted:function(){var t,e,a,i,n,s,r,o,l,c=this;this.__resizeHandler=(t=function(){c.chart&&c.chart.resize()},e=100,i=void 0,n=void 0,s=void 0,r=void 0,o=void 0,l=function l(){var c=+new Date-r;c<e&&c>0?i=setTimeout(l,e-c):(i=null,a||(o=t.apply(s,n),i||(s=n=null)))},function(){for(var n=arguments.length,c=Array(n),h=0;h<n;h++)c[h]=arguments[h];s=this,r=+new Date;var d=a&&!i;return i||(i=setTimeout(l,e)),d&&(o=t.apply(s,c),s=c=null),o}),window.addEventListener("resize",this.__resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.__resizeHandler),this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},methods:{$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()}}};a("tcAE");var f={mixins:[p],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"100%"},autoResize:{type:Boolean,default:!0},tit:{type:String},foldList:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{foldList:{handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick(function(){t.initChart()})},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=u.a.init(this.$el,"macarons"),this.setOptions(this.foldList)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.data,a=t.yearMax,i=t.yearMin;if(void 0!==e){for(var n=a-i,s=[],r=[],o=[],l=[],c=[],h=0,d=0;d<n+1;d++)s.push(i+d);var u=["85,161,161","187,176,206","127,170,202","223,188,160","191,145,148","149,155,169","174,164,67","142,156,107","140,120,119","191,134,166","112,73,240","250,112,77","1,186,188","255,204,153","255,255,204","51,102,153","0,153,102"];e.forEach(function(t,e){var a={name:t.name,type:"bar",xAxisIndex:e,yAxisIndex:e,barWidth:s.length>5?0:50,itemStyle:{color:"rgba("+u[e]+", 0.8)"},data:[]},i={type:"category",boundaryGap:!0,data:s,show:!e};c.push(i),l.push(t.name),r.push(a)}),e.forEach(function(t,e){for(var a=function(a){var n=0;t.data.forEach(function(t,e){i+a===t.year&&(t.count>h&&(h=t.count),n=t.count)}),r[e].data.push(n)},s=0;s<n+1;s++)a(s);var l={show:!e,type:"value",scale:!0,max:h+2,min:0,boundaryGap:[.2,.2]};o.push(l)}),this.chart.setOption({title:{text:this.tit?this.tit:"",textStyle:{fontSize:12,color:"#000"},bottom:0,left:"center"},legend:{data:l,left:20},dataZoom:{show:!1,start:0,end:100},xAxis:c,grid:{left:10,right:10,bottom:20,top:10,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:o,series:r})}}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},m=a("VU/8")(f,v,!1,null,null,null).exports;a("tcAE");var _={mixins:[p],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},treeData:{type:Object,required:!0},left:{type:String,default:"20%"}},data:function(){return{chart:null}},watch:{treeData:{deep:!0,handler:function(t){this.chart.dispose(),this.initChart()}}},mounted:function(){var t=this;this.$nextTick(function(){t.initChart()})},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){if(this.chart=u.a.init(this.$el,"macarons"),void 0!==this.treeData){this.chart.setOption({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[this.treeData],top:"1%",left:this.left,bottom:"1%",right:"10%",symbolSize:7,itemStyle:{label:{show:!0,formatter:"11"}},label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:!0,initialTreeDepth:2,animationDuration:550,animationDurationUpdate:750}]});var t=this;this.chart.on("click",function(e){console.log(1),"org"===e.value?e.data.collapsed?(t.treeData.children[e.data.index].collapsed=!e.data.collapsed,t.treeData.children[e.data.index].label.formatter="{b0}"):(t.treeData.children[e.data.index].collapsed=!e.data.collapsed,e.data.children.length&&(t.treeData.children[e.data.index].label.formatter="{b0}("+e.data.children.length+")")):"exp"===e.value&&t.$emit("name",e.name)})}}}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},y=a("VU/8")(_,g,!1,null,null,null).exports,b=a("7t+N"),x=a.n(b),w=a("BO1k"),C=a.n(w);function D(t){var e={},a=t.data.filter(function(t){return"Expert"===t.oClass||"Organization"===t.oClass});a=a.map(function(t){return{rid:"#"+t.rid.cluster+":"+t.rid.position,name:t.oData.Name,altName:t.oData.AltName,organization:t.oData.Organization,email:t.oData.Email,id:t.oData.Id}});var i=t.data.filter(function(t){return"ExpertOrganization"===t.oClass});function n(t){var e=!0,i=!1,n=void 0;try{for(var s,r=C()(a);!(e=(s=r.next()).done);e=!0){var o=s.value;if(o.rid===t)return{id:t,name:o.name,children:[]}}}catch(t){i=!0,n=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw n}}}function s(t,e){if(t.id&&t.id===e.id){var a=n(e.pid);return a.children.push(t),t=a}if(t.id)if(t.id===e.pid)t.children.push(n(e.id));else{var i=!0,r=!1,o=void 0;try{for(var l,c=C()(t.children);!(i=(l=c.next()).done);i=!0){s(l.value,e)}}catch(t){r=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(r)throw o}}}else(t=n(e.pid)).children.push(n(e.id));return t}return function(t){var a=!0,i=!1,n=void 0;try{for(var r,o=C()(t);!(a=(r=o.next()).done);a=!0){var l=r.value;e=s(e,l)}}catch(t){i=!0,n=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw n}}return e}(i=i.map(function(t){return{pid:"#"+t.oData.in.cluster+":"+t.oData.in.position,id:"#"+t.oData.out.cluster+":"+t.oData.out.position}}))}var N={name:"home",components:{FoldBarChart:m,TreeChart:y},data:function(){return{searchShow:!1,name:"",org:"",startName:"",startOrg:"",nodeName:"",nodeOrg:"",experts:[],typeInfo:1,foldList:{},showPath:[],left:"20%",treeData:{},isNode:!1,seniorSearch:!1,loading:!1}},methods:{search:function(){if(this.name||this.org){this.loading=!0,this.searchShow=!0,this.typeInfo=1,this.showPath=[];var t={name:this.name||"",org:this.org||""};if(this.showPath.push(t),this.startOrg||this.startName){var e=this.assemblyData(this.name,this.org),a=this.getPid(e),i=this.assemblyData(this.startName,this.startOrg),n={type:"4",p1:a,p2:this.getPid(i)},s={name:this.startName||"",org:this.startOrg||""};this.showPath.push(s),this.getData(n)}else{var r=this.assemblyData(this.name,this.org);this.getData(r)}}else this.$message("必须输入其中一个关键词！")},assemblyData:function(t,e){var a=void 0,i=void 0;switch(t&&e?a="3":!t&&e?a="2":t&&!e&&(a="1"),a){case"1":i={type:a,s_name:t};break;case"2":i={type:a,s_org:e};break;case"3":default:i={type:a,s_name:t,s_org:e}}return i},getData:function(t){var e=this;x.a.ajax({type:"post",url:"http://183.136.237.197/graph_db",data:t,dataType:"json",success:function(t){if(e.loading=!1,t.data.length){var a=D(t);if(!a)return;var i={show:!0,formatter:"{b0}"};console.log(a),a.children.forEach(function(t,e){void 0===t&&a.children.splice(e,1)}),a.children.forEach(function(t,e){a.children[e].label=i,a.children[e].value=t.children.length?"org":"exp",a.children[e].index=e,a.children[e].collapsed=!1}),e.treeData=a,t.data.forEach(function(t,a){"Expert"===t.oClass&&e.experts.push(t.oData)})}else e.$message("无有效合作关系信息！")}})},getPid:function(t){var e=void 0;return x.a.ajax({type:"post",url:"http://183.136.237.197/graph_db",data:t,dataType:"json",async:!1,success:function(t){e=t}}),D(e).id},detail:function(){this.typeInfo=2},clkName:function(t){console.log(t);var e=this,a={type:"1",s_name:t};x.a.ajax({type:"post",url:"http://183.136.237.197/graph_db",data:a,dataType:"json",success:function(a){if(e.loading=!1,a.data.length){var i=D(a);i.children.forEach(function(t,e){void 0===t&&i.children.splice(e,1)});var n={show:!0,formatter:"{b0}"};i.children.forEach(function(t,e){i.children[e].label=n,i.children[e].value=t.children.length?"org":"exp",i.children[e].index=e,i.children[e].collapsed=!1}),e.treeData=i,a.data.forEach(function(t,a){"Expert"===t.oClass&&e.experts.push(t.oData)}),e.showPath.push({name:t})}else e.$message("无有效合作关系信息！"),e.searchShow=!1}})},clkPath:function(t){var e=this.showPath[t];this.showPath.splice(t+1,this.showPath.length-t);var a=this.assemblyData(e.name,e.org);this.getData(a)},nodeSearch:function(){if(this.nodeName||this.nodeOrg){var t=this.treeData.id,e=this.assemblyData(this.nodeName,this.nodeOrg),a={teye:"4",p1:t,p2:this.getPid(e)};this.getData(a);var i={name:this.nodeName||"",org:this.nodeOrg||""};this.showPath.push(i)}else this.$message("必须输入其中一个关键词！")}},mounted:function(){},watch:{seniorSearch:{deep:!0,handler:function(t){this.startName="",this.startOrg=""}},isNode:{deep:!0,handler:function(t){this.nodeOrg="",this.nodeName=""}}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layer"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"home"},[a("div",{staticClass:"home-header MT_50"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("学者合作关系查询")]),t._v(" "),a("div",{staticClass:"home-header-search PR_20 PL_20"},[a("span",[t._v("人名")]),t._v(" "),a("el-input",{staticClass:"ML_30",attrs:{placeholder:"请输入姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("span",{staticClass:"ML_30"},[t._v("机构")]),t._v(" "),a("el-input",{staticClass:"ML_30",attrs:{placeholder:"请输入机构"},model:{value:t.org,callback:function(e){t.org=e},expression:"org"}}),t._v(" "),a("el-button",{staticClass:"ML_30",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-link",{staticClass:"ML_30",attrs:{underline:!1},on:{click:function(e){t.seniorSearch=!t.seniorSearch}}},[t._v("高级搜索")])],1),t._v(" "),t.seniorSearch?a("div",{staticClass:"home-header-search PR_20 PL_20"},[a("span",[t._v("起点人名")]),t._v(" "),a("el-input",{staticClass:"ML_30",attrs:{placeholder:"请输入姓名"},model:{value:t.startName,callback:function(e){t.startName=e},expression:"startName"}}),t._v(" "),a("span",{staticClass:"ML_30"},[t._v("机构")]),t._v(" "),a("el-input",{staticClass:"ML_30",attrs:{placeholder:"请输入机构"},model:{value:t.startOrg,callback:function(e){t.startOrg=e},expression:"startOrg"}})],1):t._e()],1),t._v(" "),a("div",{staticClass:"home-msg MT_50"},[t.experts.length>10?a("span",{staticStyle:{color:"red"}},[t._v("当前查询到的结果较多，您可以通过输入机构进行筛选")]):t._e()]),t._v(" "),t.searchShow?a("div",{staticClass:"home-body row MT_50"},[a("div",{staticClass:"home-body-info MR_50"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("学者信息")]),t._v(" "),1===t.typeInfo?a("div",{staticClass:"info-experts row   PL_20"},t._l(t.experts.slice(0,9),function(e,i){return a("div",{key:i,staticClass:"info-expert PR_20 MT_20 "},[a("img",{attrs:{src:"static/img/common/exp.png"},on:{click:function(e){return t.detail()}}}),t._v(" "),a("div",{staticClass:"expert-text"},[a("span",[t._v(t._s(e.Organization))]),t._v(" "),a("span",[t._v(t._s(e.Name))])])])}),0):a("div",{staticClass:"expert-detail MT_20 ML_20 MR_20"},[a("div",{staticClass:"detail-info row"},[a("img",{staticClass:"MT_20 ",attrs:{src:"static/img/common/exp.png"}}),t._v(" "),a("div",{staticClass:"info-content ML_20"},[a("p",[t._v("李兰娟  浙江大学 院士")]),t._v(" "),a("p",[t._v("KID：1723658326")]),t._v(" "),a("p",[t._v("ISNI：0000-0004-7262-7363")]),t._v(" "),a("p",[t._v("研究方向")]),t._v(" "),a("div",{staticClass:"row content-tag"},t._l(10,function(e){return a("el-tag",{key:e,staticClass:"ML_20 MT_20",attrs:{type:"info"}},[t._v("标签四")])}),1)])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"detail-chart"},[a("FoldBarChart",{staticStyle:{"-webkit-filter":"saturate(0.5)",filter:"saturate(0.5)"},attrs:{foldList:t.foldList||{}}})],1)])],1),t._v(" "),a("div",{staticClass:"home-body-relation "},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("合作关系")]),t._v(" "),t.treeData?a("div",{staticClass:"PL_50 PR_50"},[a("div",{staticClass:"relation-top row "},[a("div",[a("span",[t._v("展示路径：")]),t._v(" "),t._l(t.showPath,function(e,i){return a("span",{key:i,on:{click:function(e){return t.clkPath(i)}}},[t._v(t._s(i>0?"->":"")+t._s(e.name)+" "+t._s(e.org?"("+e.org+")":""))])})],2),t._v(" "),a("el-link",{attrs:{icon:"el-icon-circle-plus",underline:!1},on:{click:function(e){t.isNode=!t.isNode}}},[t._v("添加节点 ")])],1),t._v(" "),t.isNode?a("div",{staticClass:"relation-node row MT_30"},[a("span",[t._v("节点人名")]),t._v(" "),a("el-input",{attrs:{placeholder:"姓名"},model:{value:t.nodeName,callback:function(e){t.nodeName=e},expression:"nodeName"}}),t._v(" "),a("span",[t._v("节点机构")]),t._v(" "),a("el-input",{attrs:{placeholder:"机构"},model:{value:t.nodeOrg,callback:function(e){t.nodeOrg=e},expression:"nodeOrg"}}),t._v(" "),a("el-button",{staticClass:"ML_10",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.nodeSearch}},[t._v("搜索")])],1):t._e(),t._v(" "),a("div",{staticClass:"row relation-echart"},[a("TreeChart",{staticClass:"MT_30",staticStyle:{width:"100%"},attrs:{treeData:t.treeData,left:t.left},on:{name:t.clkName}})],1)]):a("div",{staticClass:"relation-none"},[a("span",[t._v("暂无合作关系")])])],1)]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-intr MT_20 "},[e("span",[this._v("学者简介")]),this._v(" "),e("p",[this._v("孙优贤 (1940.12.23-- ) 工业自动化专家。浙江省诸暨市人。1964年毕业于浙江大学。浙江大学教授，浙江大学现代控制工程研究所所长，浙江大学工业自动化国家工程研究中心主任。国际自控联制浆造纸委员会副主席，中国自动化学会副理事长，中国仪器仪表协会副理事长。在现代控制工程领域取得重大研究成果。针对复杂工业系统的高度不确定性、高度非线性、高度关联性、特大纯滞后和信息不完全性等特点，创造性地提出了一整套系统建模技术、先进控制技术、在线优化技术、故障诊断技术、容错控制技术、系统集成技术和综合自动化技术，并在大型工业装置中得到成功应用，初步建立了现代控制工程的方法论体系。领导建立了我国第一个国家工程研究中心，创造性地解决了制浆、造纸、生物化工等大型生产线计算机控制系统软件总体设计中的重大关键技术，成功地研制了Supcon 集散控制系统、现场总线控制系统、Suny TDCS9200工业控制计算机系统，以及综合自动化系统的硬件平台和软件平台，并实现了产业化，在制浆造纸、生物化工自动化工程领域，针对大型企业的各个生产过程，建立了24种动态数学模型，开发了25种高级控制算法，18种计算机控制系统，研制了6种造纸专用仪表和12个软测量软件，并在20多个省市推广应用，取得了重大的经济效益。获得国家科技进步二、三等各1项，国家教学成果奖2项，省部级科技进步一、二等奖15项。1995年当选为中国工程院院士。")])])}]};var S=a("VU/8")(N,E,!1,function(t){a("yjdz")},null,null).exports;i.default.use(h.a);var O=new h.a({routes:[{path:"/",name:"Home",component:S}]}),L=a("NYxO");i.default.use(L.a);var k=new L.a.Store({state:{bAuth:!1},mutations:{loginStatue:function(t,e){t.bAuth=e}}}),M=(a("j1ja"),a("Yg9U")),P=a.n(M);a("yh13");i.default.config.productionTip=!1,i.default.use(s.a),i.default.use(P.a),O.beforeEach(function(t,e,a){t.meta.requiresAuth?k.state.bAuth?a():(alert("请先登录"),a("/Login")):a(),document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,a()}),new i.default({el:"#app",router:O,components:{App:c},template:"<App/>"})},UaDF:function(t,e){},tvR6:function(t,e){},yh13:function(t,e){},yjdz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d438097f7626aba90e83.js.map