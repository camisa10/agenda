(function(t){function a(a){for(var o,s,r=a[0],l=a[1],c=a[2],d=0,v=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(a);while(v.length)v.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],o=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(o=!1)}o&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var o={},n={app:0},i=[];function s(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)s.d(e,o,function(a){return t[a]}.bind(null,o));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/agenda/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"36d1":function(t,a,e){"use strict";var o=e("852b"),n=e.n(o);n.a},3747:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Navbar"),e("v-main",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},i=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-toolbar",{staticClass:"grey lighten-4",attrs:{elevation:"0"}},[e("v-app-bar-nav-icon",{on:{click:function(a){t.drawer=!t.drawer}}}),e("v-toolbar-title",[e("span",{staticClass:"font-weight-light light-blue--text text--lighten-3"},[t._v("AGENDA")]),e("span",{staticClass:"light-blue--text text--darken-4"},[t._v("Culto")])]),e("v-spacer")],1),e("v-content"),e("v-navigation-drawer",{staticClass:"grey lighten-3",attrs:{app:"",temporary:"",absoluty:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"pa-2"},[e("v-btn",{attrs:{block:"",color:"light-blue darken-4 white--text"}},[e("span",[t._v("sair")]),e("v-icon",[t._v("mdi-exit-to-app")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",[e("v-list-item",[e("v-avatar",{attrs:{size:"128",rounded:"true"}},[e("v-img",{attrs:{src:"http://3.bp.blogspot.com/-eo-4mMmjtrY/U2RKG9eT6iI/AAAAAAAACuk/rQUfyuFKv9I/s1600/espinho+na+carne+de+paulo.jpg"}})],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title light-blue--text text--darken-4"},[t._v("Paulo")]),e("v-list-item-subtitle",{staticClass:"light-blue--text text--darken-4"},[t._v("paulo@12apostolos.com")])],1)],1),e("v-divider"),e("v-list-item-group",t._l(t.links,(function(a,o){return e("v-list-item",{key:o,attrs:{router:"",to:a.route}},[e("v-list-item-icon",[e("v-icon",{staticClass:"light-blue--text text--darken-4"},[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"light-blue--text text--darken-4",domProps:{textContent:t._s(a.text)}})],1)],1)})),1)],1),e("v-spacer")],1)],1)},r=[],l={data:function(){return{drawer:!1,razaosocialbarra:"IGREJA AD TIMBO",links:[{icon:"mdi-home",text:"Início",route:"/"},{icon:"mdi-view-dashboard",text:"Meus cultos",route:"/meuscultos"},{icon:"mdi-cog",text:"Configurações",route:"/config"}]}}},c=l,u=e("2877"),d=e("6544"),v=e.n(d),m=e("5bc1"),p=e("8212"),f=e("8336"),h=e("a75b"),g=e("ce7e"),b=e("132d"),x=e("adda"),C=e("8860"),k=e("da13"),_=e("5d23"),V=e("1baa"),w=e("34c3"),y=e("f774"),E=e("2fa4"),D=e("71d9"),O=e("2a7f"),L=Object(u["a"])(c,s,r,!1,null,null,null),T=L.exports;v()(L,{VAppBarNavIcon:m["a"],VAvatar:p["a"],VBtn:f["a"],VContent:h["a"],VDivider:g["a"],VIcon:b["a"],VImg:x["a"],VList:C["a"],VListItem:k["a"],VListItemContent:_["a"],VListItemGroup:V["a"],VListItemIcon:w["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:y["a"],VSpacer:E["a"],VToolbar:D["a"],VToolbarTitle:O["a"]});var A={name:"App",components:{Navbar:T},data:function(){return{}}},S=A,F=e("7496"),j=e("a523"),I=e("f6c4"),M=Object(u["a"])(S,n,i,!1,null,null,null),P=M.exports;v()(M,{VApp:F["a"],VContainer:j["a"],VMain:I["a"]});var $=e("8c4f"),B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-content",[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},scopedSlots:t._u([{key:"action",fn:function(a){var o=a.attrs;return[e("v-btn",t._b({attrs:{elevation:"0",text:"",color:"white"},on:{click:function(a){t.snackbar=!1}}},"v-btn",o,!1),[t._v("Fechar")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[e("span")]),e("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",outlined:"","max-width":"600"}},[e("v-card-title",[e("div",[e("span",[t._v("Login")])])]),e("v-card-text",{staticClass:"text--primary"},[e("v-form",{ref:"form"},[e("div",[e("span",[t._v("Entre com os dados abaixo para entrar no sistema ")])]),e("div",[e("v-text-field",{attrs:{label:"E-mail",placeholder:"Digite seu e-mail",rules:t.rulesFields,required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{label:"Senha",placeholder:"Digite sua senha",rules:t.rulesFields,required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("v-spacer"),e("div",[e("v-btn",{staticClass:"mt-3",attrs:{large:"",color:"primary",block:"",dense:"",loading:!1},on:{click:function(a){return t.salvarConvidadoListaEvento()}}},[t._v(" Login ")])],1)],1)],1),e("v-card-actions")],1)],1)],1)},z=[],N={},q=N,J=e("b0af"),R=e("99d9"),G=e("4bd4"),H=e("2db4"),U=e("8654"),Y=Object(u["a"])(q,B,z,!1,null,null,null),K=Y.exports;v()(Y,{VBtn:f["a"],VCard:J["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VContent:h["a"],VForm:G["a"],VSnackbar:H["a"],VSpacer:E["a"],VTextField:U["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"eventos"},[e("h1",{staticClass:"subtitle-1 light-blue--text text--darken-4"},[t._v("Cultos - AD Timbó")]),e("v-container",{staticClass:"my-5"},[e("v-layout",{staticClass:"mb-3",attrs:{row:""}},[e("v-btn",{staticClass:"grey--text",attrs:{small:"",elevation:"0"},on:{click:function(a){return t.sortBy("title")}}},[e("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),e("span",{staticClass:"caption text-lowercase grey--text"},[t._v("Por culto")])],1),e("v-btn",{staticClass:"grey--text ml-4",attrs:{small:"",elevation:"0"},on:{click:function(a){return t.sortBy("due")}}},[e("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-account")]),e("span",{staticClass:"caption text-lowercase grey--text"},[t._v("Por data")])],1),e("v-spacer"),e("FormAgenda",{on:{projectAdded:function(a){t.snackbar=!0}}})],1),t._l(t.projects,(function(a,o){return e("v-card",{key:o,attrs:{flat:"",color:"#FFFFFF",tile:"",elevation:"0"}},[e("v-layout",{class:"pa-3 project "+a.status,attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Culto")]),e("div",[t._v(t._s(a.title))])]),e("v-flex",{attrs:{md:"auto"}},[e("div",{staticClass:"caption grey--text"},[t._v("Data")]),e("div",[t._v(t._s(a.due))])]),e("v-flex",{attrs:{md:"auto"}},[e("div",{staticClass:"caption grey--text"},[t._v("Hora")]),e("div",[t._v(t._s(a.time))])]),e("v-flex",{attrs:{md:"auto"}},[e("div",{staticClass:"caption grey--text"},[t._v("Vagas")]),e("div",[t._v(t._s(a.vagasdisp))])]),e("v-flex",{attrs:{md:"auto"}},[e("div",[e("v-chip",{class:"v-chip--active white--text caption my-2",attrs:{small:"",color:""+a.status}},[t._v(t._s(a.status))])],1)]),e("v-flex",{attrs:{md:"auto"}},[e("div",{staticClass:"caption grey--text"},[t._v("Ação")]),e("div",[e("v-btn",{staticClass:"light-blue darken-4 white--text",attrs:{small:"",tile:"",elevation:"0"}},[e("v-icon",{},[t._v("mdi-pencil")])],1),e("v-btn",{attrs:{small:"",tile:"",elevation:"0",color:"error"}},[e("v-icon",[t._v("mdi-trash-can")])],1)],1)])],1),e("v-divider")],1)}))],2)],1)},Q=[],W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-btn",t._g({staticClass:"light-blue darken-4",attrs:{small:"",elevation:"0"}},o),[e("span",{staticClass:"caption text-lowercase white--text"},[t._v("Novo culto")])])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("h2",[t._v("Criar novo culto")])]),e("v-card-text",[e("v-form",{staticClass:"px-3"},[e("v-text-field",{attrs:{label:"Culto",color:"light-blue darken-4"},model:{value:t.titulo,callback:function(a){t.titulo=a},expression:"titulo"}}),e("v-text-field",{attrs:{label:"Vagas disponíveis",color:"light-blue darken-4"},model:{value:t.vagasdisp,callback:function(a){t.vagasdisp=a},expression:"vagasdisp"}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-text-field",t._g({attrs:{value:t.computedDateFormatted,label:"Data",readonly:"",hint:"Formato em DD/MM/YYYY",color:"light-blue darken-4"}},o))]}}]),model:{value:t.menudata,callback:function(a){t.menudata=a},expression:"menudata"}},[e("v-date-picker",{attrs:{"no-title":"",locale:"pt-br"},on:{input:function(a){t.menudata=!1}},model:{value:t.dataevento,callback:function(a){t.dataevento=a},expression:"dataevento"}})],1)],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-text-field",{attrs:{label:"Hora",type:"time",color:"light-blue darken-4"},model:{value:t.horaevento,callback:function(a){t.horaevento=a},expression:"horaevento"}})],1)],1),e("v-spacer"),e("p"),e("v-btn",{attrs:{elevation:"0",color:"light-blue darken-4"},on:{click:function(a){return t.submit()}}},[e("span",{staticClass:"caption white--text"},[t._v("Gravar dados")])])],1)],1)],1)],1)},X=[],tt=(e("99af"),e("ac1f"),e("1276"),e("3835")),at={data:function(){return{dialog:!1,menudata:!1,titulo:"",descricao:"",lider:"",vagasdisp:"",dataevento:null,horaevento:null,lideres:["Jesus","Pedro","Tiago","Felipe","João","André","Mateus","Judas Tadeu","Bartolomeu"]}},computed:{computedDateFormatted:function(){return this.formatDate(this.dataevento)}},methods:{submit:function(){console.log(this.titulo,this.descricao,this.dataevento,this.computedDateFormatted),this.titulo="",this.descricao="",this.dialog=!1,this.dataevento=null,this.lider="",this.vagasdisp="",this.horaevento=null,this.$emit("projectAdded")},formatDate:function(t){if(!t)return null;var a=t.split("-"),e=Object(tt["a"])(a,3),o=e[0],n=e[1],i=e[2];return"".concat(i,"/").concat(n,"/").concat(o)}}},et=at,ot=e("62ad"),nt=e("2e4b"),it=e("169a"),st=e("e449"),rt=e("0fd9"),lt=Object(u["a"])(et,W,X,!1,null,null,null),ct=lt.exports;v()(lt,{VBtn:f["a"],VCard:J["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:ot["a"],VDatePicker:nt["a"],VDialog:it["a"],VForm:G["a"],VMenu:st["a"],VRow:rt["a"],VSpacer:E["a"],VTextField:U["a"]});var ut={components:{FormAgenda:ct},data:function(){return{projects:[{title:"Eu sou o caminho",person:"Jesus",due:"1 Jan 2019",time:"18:30",vagasdisp:"100",status:"realizado",content:""},{title:"Dev full stack",person:"Jefferson",due:"13 Mar 2019",time:"20:30",vagasdisp:"100",status:"realizado",content:""},{title:"Oração forte",person:"Antonio",due:"25 Feb 2019",time:"16:00",vagasdisp:"100",status:"realizado",content:""},{title:"Vida em Cristo",person:"Mateus",due:"13 Feb 2019",time:"18:30",vagasdisp:"100",status:"realizado",content:""},{title:"Jejum de 10 dias",person:"Bartolomeu",due:"20 Dez 2019",time:"08:30",vagasdisp:"100",status:"cancelado",content:""},{title:"Igreja Santa do Timbó",person:"Paulo",due:"8 Jun 2020",time:"15:00",vagasdisp:"100",status:"realizado",content:""},{title:"Espírito de Luz",person:"Felipe",due:"28 Aug 2019",time:"21:00",vagasdisp:"100",status:"realizado",content:""},{title:"Na paz do senhor",person:"Tiago",due:"13 Jun 2020",time:"18:30",vagasdisp:"100",status:"aberto",content:""}]}},methods:{sortBy:function(t){this.projects.sort((function(a,e){return a[t]<e[t]?-1:1}))}}},dt=ut,vt=(e("7bfd"),e("cc20")),mt=e("0e8f"),pt=e("a722"),ft=Object(u["a"])(dt,Z,Q,!1,null,null,null),ht=ft.exports;v()(ft,{VBtn:f["a"],VCard:J["a"],VChip:vt["a"],VContainer:j["a"],VDivider:g["a"],VFlex:mt["a"],VIcon:b["a"],VLayout:pt["a"],VSpacer:E["a"]});var gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"subtitle-1 light-blue--text text--darken-4"}),e("v-spacer"),e("v-card",{staticClass:"mx-auto"},[e("v-toolbar",{staticClass:"primary white--text",attrs:{flat:""}},[e("v-btn",{staticClass:"white--text",attrs:{icon:"",router:"",to:"/meuscultos"}},[e("v-icon",[t._v("mdi-chevron-left")])],1),e("v-toolbar-title",[t._v("Lista de Presença")]),e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{icon:""},on:{click:function(a){return t.showSearch()}}},[e("v-icon",[t._v("mdi-magnify")])],1),e("v-btn",{staticClass:"mr-4 white--text",attrs:{icon:""},on:{click:function(a){return t.imprimirLista()}}},[e("v-icon",[t._v("mdi-printer")])],1)],1),e("div",{staticClass:"mx-4",attrs:{id:"lista-presenca"}},[e("v-card-title",[t._v("Culto: "+t._s(this.tituloEvento))]),e("v-card-text",{staticClass:"text--primary"},[e("div",[e("strong",[t._v("Data:")]),t._v(" "+t._s(t.formatDate(this.dataEvento))+" ")]),e("div",[e("strong",[t._v("Hora:")]),t._v(" "+t._s(this.horaEvento)+" ")]),e("div",[e("strong",[t._v("Total de lugares:")]),t._v(" "+t._s(this.totalVagas)+" ")]),e("v-spacer"),1==t.showSearchBar?e("div",[e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Pesquisar","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1):t._e()],1),e("v-card-text"),e("v-data-table",{staticClass:"mx-4",attrs:{headers:t.headers,items:t.listaConvidados,search:t.search,"items-per-page":-1,loading:t.loading,"loading-text":"Aguarde, carregando dados.","footer-props":t.footerprops},scopedSlots:t._u([{key:"item.actions",fn:function(a){var o=a.item;return[1==t.showActionOnPrint?e("div",[e("v-icon",{staticClass:"mr-2",attrs:{smal:""},on:{click:function(a){return t.deleteConvidadoNaLista(o)}}},[t._v(" mdi-delete ")])],1):t._e()]}}])})],1)],1)],1)},bt=[],xt=(e("4160"),e("c975"),e("a434"),e("159b"),e("5530")),Ct=e("59ca"),kt=e.n(Ct),_t=(e("e71f"),{apiKey:"AIzaSyCGw1ZA0H7r4mH9MLBhDd22q-WIIaq0BfU",authDomain:"agenda-culto-c8cd1.firebaseapp.com",databaseURL:"https://agenda-culto-c8cd1.firebaseio.com",projectId:"agenda-culto-c8cd1",storageBucket:"agenda-culto-c8cd1.appspot.com",messagingSenderId:"686898331135",appId:"1:686898331135:web:0a84e4919e7c23f428bbca",measurementId:"G-41ZFB33DL6"});kt.a.initializeApp(_t);var Vt=kt.a.firestore(),wt=Vt,yt={data:function(){return{headers:[{text:"Nome",value:"nome_convidado",class:"light-blue--text text--darken-4"},{text:"Telefone",value:"fone_convidado",class:"light-blue--text text--darken-4"},{text:"Acões",value:"actions",sortable:!1,class:"light-blue--text text--darken-4"}],footerprops:{"items-per-page-all-text":"tudo","items-per-page-text":"Pessoas por página","items-per-page-options":[5,10,15,30,50,100,-1]},eventoId:this.$route.params.eventid,tituloEvento:"",dataEvento:null,horaEvento:null,totalVagas:0,convidado:{nome:"",telefone:""},listaConvidados:[],loading:!1,search:"",showSearchBar:!1,showActionOnPrint:!0}},methods:{getListaConvidadosEvento:function(){var t=this;this.loading=!0,wt.collection("listaconvidados").where("evento_id","==",this.$route.params.eventid).get().then((function(a){a.empty||(t.listaConvidados.splice(0,t.listaConvidados.length),a.forEach((function(a){t.listaConvidados.push(Object(xt["a"])(Object(xt["a"])({},a.data()),{},{id:a.id})),console.log("lista de convidados: ",a.data())}))),t.loading=!1})).catch((function(t){console.error("ocorreu um erro ao tentar buscar esse lista!",t)}))},getDadosEvento:function(){var t=this;wt.collection("meuscultos").where(kt.a.firestore.FieldPath.documentId(),"==",this.$route.params.eventid).get().then((function(a){a.forEach((function(a){console.log(a.data()),t.tituloEvento=a.data().culto,t.dataEvento=a.data().data,t.horaEvento=a.data().hora,t.totalVagas=a.data().vagas}))})).catch((function(t){console.error("ocorreu um erro ao tentar buscar esse registro!",t)}))},deleteConvidadoNaLista:function(t){var a=confirm("Você tem certeza de que gostaria de excluir essa pessoa da lista de presença?");if(1==a){var e=this.listaConvidados.indexOf(t);wt.collection("listaconvidados").doc(t.id).delete().then((function(){console.log("Convidado selecionado removido!",t.id)})).catch((function(t){console.error("Ocorreu um erro ao tentar remover o convidado: ",t)})),this.listaConvidados.splice(e,1)}},imprimirLista:function(){this.showActionOnPrint=!1,window.print(),this.showActionOnPrint=!0},formatDate:function(t){if(!t)return null;var a=t.split("-"),e=Object(tt["a"])(a,3),o=e[0],n=e[1],i=e[2];return"".concat(i,"/").concat(n,"/").concat(o)},showSearch:function(){this.showSearchBar=!this.showSearchBar}},created:function(){this.getListaConvidadosEvento(),this.getDadosEvento()}},Et=yt,Dt=e("8fea"),Ot=Object(u["a"])(Et,gt,bt,!1,null,null,null),Lt=Ot.exports;v()(Ot,{VBtn:f["a"],VCard:J["a"],VCardText:R["b"],VCardTitle:R["c"],VDataTable:Dt["a"],VIcon:b["a"],VSpacer:E["a"],VTextField:U["a"],VToolbar:D["a"],VToolbarTitle:O["a"]});var Tt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v("configurações")])])}],St={},Ft=St,jt=Object(u["a"])(Ft,Tt,At,!1,null,null,null),It=jt.exports,Mt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},scopedSlots:t._u([{key:"action",fn:function(a){var o=a.attrs;return[e("v-btn",t._b({attrs:{elevation:"0",text:"",color:"white"},on:{click:function(a){t.snackbar=!1}}},"v-btn",o,!1),[t._v("Fechar")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[e("span",[t._v(t._s(t.snackTitle))])]),e("h1",{staticClass:"subtitle-1 light-blue--text text--darken-4"}),e("v-spacer"),e("v-card",{staticClass:"mx-auto"},[e("v-card-title",[t._v(" Meus Cultos "),e("v-spacer"),e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Pesquisa",placeholder:"Digite sua pesquisa aqui","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("v-data-table",{attrs:{headers:t.headers,items:t.listacultos,search:t.search,"items-per-page":-1,loading:t.loading,"loading-text":"Aguarde, carregando dados.","footer-props":t.footerprops},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,n=a.attrs;return[e("div",{attrs:{align:"right"}},[e("v-btn",t._g(t._b({staticClass:"mb-2 mr-3",attrs:{color:"primary",dark:"",small:""}},"v-btn",n,!1),o),[t._v("Novo culto")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",[e("v-text-field",{attrs:{label:"Culto"},model:{value:t.meuculto.culto,callback:function(a){t.$set(t.meuculto,"culto",a)},expression:"meuculto.culto"}}),e("v-text-field",{attrs:{label:"Lugares"},model:{value:t.meuculto.vagas,callback:function(a){t.$set(t.meuculto,"vagas",a)},expression:"meuculto.vagas"}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-text-field",t._g({attrs:{value:t.meuculto.data,label:"Data",readonly:"",required:""}},o))]}}]),model:{value:t.menucalendario,callback:function(a){t.menucalendario=a},expression:"menucalendario"}},[e("v-date-picker",{attrs:{"no-title":"",locale:"pt-br"},on:{input:function(a){t.menucalendario=!1}},model:{value:t.meuculto.data,callback:function(a){t.$set(t.meuculto,"data",a)},expression:"meuculto.data"}})],1)],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-text-field",{attrs:{label:"Status",type:"time"},model:{value:t.meuculto.hora,callback:function(a){t.$set(t.meuculto,"hora",a)},expression:"meuculto.hora"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"error"},on:{click:function(a){return t.close()}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.save()}}},[t._v("Gravar")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialogLink,callback:function(a){t.dialogLink=a},expression:"dialogLink"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Compartilhar convite")])]),e("v-card-text",[e("v-container",[e("v-text-field",{attrs:{id:"input-link-convite",readonly:"",label:"Link do convite"},model:{value:t.link,callback:function(a){t.link=a},expression:"link"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"error"},on:{click:function(a){return t.closeLink()}}},[t._v("Fechar")]),e("v-btn",{attrs:{color:"success"},on:{click:function(a){return t.copyLink()}}},[t._v("Copiar")])],1)],1)],1)]},proxy:!0},{key:"item.data",fn:function(a){var e=a.item;return[t._v(t._s(t.formatDate(e.data)))]}},{key:"item.status",fn:function(a){var o=a.item;return[e("v-chip",{class:"v-chip--active white--text caption my-2",attrs:{small:"",color:""+t.getStatusCulto(o.data)}},[t._v(" "+t._s(t.getStatusCulto(o.data))+" ")])]}},{key:"item.actions",fn:function(a){var o=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.showDialogData(o)}}},[t._v(" mdi-pencil ")]),e("v-icon",{staticClass:"mr-2",attrs:{smal:""},on:{click:function(a){return t.deleteData(o)}}},[t._v(" mdi-delete ")]),e("v-icon",{staticClass:"mr-2",attrs:{smal:""},on:{click:function(a){return t.showDialogLinkConvite(o)}}},[t._v(" mdi-link ")]),e("router-link",{attrs:{to:{name:"ListaFielAgenda",params:{eventid:o.id}}}},[e("v-icon",{staticClass:"mr-2",attrs:{smal:""}},[t._v(" mdi-account-details ")])],1)]}}])})],1)],1)},Pt=[],$t=(e("9911"),{data:function(){return{headers:[{text:"Culto",align:"start",sortable:!0,value:"culto",class:"light-blue--text text--darken-4"},{text:"Lugares",value:"vagas",class:"light-blue--text text--darken-4"},{text:"Data",value:"data",class:"light-blue--text text--darken-4"},{text:"Hora",value:"hora",class:"light-blue--text text--darken-4"},{text:"Status",value:"status",class:"light-blue--text text--darken-4"},{text:"Acões",value:"actions",sortable:!1,class:"light-blue--text text--darken-4"}],meuculto:{culto:"",conteudo:"",data:null,hora:null,vagas:"",usuario_id:"",status:""},datacalendario:null,menucalendario:!1,tipoOperacao:-1,dialog:!1,loading:!1,search:"",dialogLink:!1,link:"",snackTitle:"",snackbar:"",listacultos:[],footerprops:{"items-per-page-all-text":"tudo","items-per-page-text":"Cultos por página","items-per-page-options":[5,10,15,30,50,100,-1]}}},computed:{formTitle:function(){return-1===this.tipoOperacao?"Novo culto":"Editar culto"},computedDateFormatted:function(){return this.dateCalendar?this.formatDate(this.dateCalendar):""}},methods:{getColorStatus:function(t){return"realizado"==t?"green":"aberto"==t?"blue":void 0},getStatusCulto:function(t){var a=new Date,e=a.getFullYear(),o=a.getMonth(),n=a.getDate(),i=new Date(e,o,n),s=new Date(t).setHours(0,0,0,0);return i.valueOf()>s.valueOf()?"realizado":"aberto"},formatDate:function(t){if(!t)return null;var a=t.split("-"),e=Object(tt["a"])(a,3),o=e[0],n=e[1],i=e[2];return"".concat(i,"/").concat(n,"/").concat(o)},closeLink:function(){this.dialogLink=!1,this.link=""},copyLink:function(){var t=document.getElementById("input-link-convite");t.select(),document.execCommand("copy"),this.snackTitle="Link copiado com sucesso, você já pode compartilha-lo!",this.snackbar=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.meuculto={},t.tipoOperacao=-1}))},save:function(){this.tipoOperacao>-1?this.updateCulto():this.insertCulto(),this.close()},showDialogLinkConvite:function(t){this.meuculto=Object.assign({},t),this.link=window.location.origin+"/agenda/convite/"+this.meuculto.id,this.dialogLink=!0},showDialogData:function(t){this.tipoOperacao=this.listacultos.indexOf(t),this.meuculto=Object.assign({},t),this.dialog=!0},deleteData:function(t){var a=confirm("Você tem certeza de que gostaria de excluir essa informação?");if(1==a){var e=this.listacultos.indexOf(t);this.deleteCulto(t.id),this.listacultos.splice(e,1)}},getListaMeusCultos:function(){var t=this;this.loading=!0,wt.collection("meuscultos").get().then((function(a){t.listacultos.splice(0,t.listacultos.length),a.forEach((function(a){t.listacultos.push(Object(xt["a"])(Object(xt["a"])({},a.data()),{},{id:a.id}))})),t.loading=!1}))},insertCulto:function(){var t=this;wt.collection("meuscultos").add(this.meuculto).then((function(){t.snackTitle="Registro inserido com sucesso!",t.snackbar=!0,t.meuculto={},t.getListaMeusCultos()})).catch((function(t){console.error("Ocorreu um erro ao tentar salvar esse culto!",t)}))},updateCulto:function(){var t=this;wt.collection("meuscultos").doc(this.meuculto.id).update({culto:this.meuculto.culto,conteudo:this.meuculto.conteudo,data:this.meuculto.data,hora:this.meuculto.hora,vagas:this.meuculto.vagas,usuario_id:this.meuculto.usuario_id}).then((function(){t.snackTitle="Registro atualizado com sucesso!",t.snackbar=!0,t.meuculto={},t.getListaMeusCultos()})).catch((function(t){console.error("Ocorreu um erro ao tentar atualizar esse culto!",t)}))},deleteCulto:function(t){var a=this;wt.collection("meuscultos").doc(t).delete().then((function(){a.snackTitle="Registro removido com sucesso!",a.snackbar=!0})).catch((function(t){console.error("Ocorreu um erro ao tentar remover o documento: ",t)}))}},created:function(){this.getListaMeusCultos()}}),Bt=$t,zt=(e("36d1"),Object(u["a"])(Bt,Mt,Pt,!1,null,"22f23026",null)),Nt=zt.exports;v()(zt,{VBtn:f["a"],VCard:J["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VChip:vt["a"],VCol:ot["a"],VContainer:j["a"],VDataTable:Dt["a"],VDatePicker:nt["a"],VDialog:it["a"],VIcon:b["a"],VMenu:st["a"],VRow:rt["a"],VSnackbar:H["a"],VSpacer:E["a"],VTextField:U["a"]});var qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},scopedSlots:t._u([{key:"action",fn:function(a){var o=a.attrs;return[e("v-btn",t._b({attrs:{elevation:"0",text:"",color:"white"},on:{click:function(a){t.snackbar=!1}}},"v-btn",o,!1),[t._v("Fechar")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[e("span",[t._v("Seu nome e telefone foram incluídos na lista com sucesso!")])]),e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[e("v-card-title",[t._v("Igreja Assembléia de Deus no Timbó")])],1),e("v-card-title",{},[t._v("Culto: "+t._s(this.tituloEvento)+" ")]),e("v-card-text",{staticClass:"text--primary"},[e("v-form",{ref:"form"},[e("div",[e("strong",[t._v("Data:")]),t._v(" "+t._s(t.formatDate(this.dataEvento))+" ")]),e("div",[e("strong",[t._v("Hora:")]),t._v(" "+t._s(this.horaEvento)+" ")]),e("div",[e("strong",[t._v("Vagas disponíveis:")]),t._v(" "+t._s(t.getVagasDisponiveis())+" ")]),e("div",[e("v-text-field",{attrs:{placeholder:"NOME COMPLETO",rules:t.rulesFields,required:""},model:{value:t.nomeConvidado,callback:function(a){t.nomeConvidado=a},expression:"nomeConvidado"}}),e("div",{staticClass:"v-input v-input--has-state theme--light v-text-field v-text-field--is-booted v-text-field--placeholder error--text"},[e("div",{staticClass:"v-input__control"},[e("div",{staticClass:"v-input__slot"},[e("div",{staticClass:"v-text-field__slot"},[e("the-mask",{attrs:{type:"tel",placeholder:"TELEFONE",rules:t.rulesFields,required:"",mask:"(##)#####-####"},model:{value:t.foneConvidado,callback:function(a){t.foneConvidado=a},expression:"foneConvidado"}})],1)]),e("div",{staticClass:"v-text-fields__details"},[e("div",{staticClass:"v-messages theme--light error--text",attrs:{role:"alert"}},[e("div",{staticClass:"v-messages__wrapper"},[e("div",{staticClass:"v-messages__message"})])])])])])],1),e("v-spacer"),e("div",[e("v-btn",{staticClass:"mt-3",attrs:{large:"",color:"success",block:"",loading:!1},on:{click:function(a){return t.salvarConvidadoListaEvento()}}},[t._v(" RESERVAR MEU LUGAR ")])],1)],1)],1),e("v-card-actions")],1)],1)},Jt=[],Rt={data:function(){return{snackbar:!1,loading:!1,nomeFantasia:"",tituloEvento:"",dataEvento:null,horaEvento:null,totalVagas:0,eventoId:this.$route.params.eventid,usuarioId:"",nomeConvidado:"",foneConvidado:"",totalConvidadosEvento:0,rulesFields:[function(t){return!!t||"Obrigatório o preenchimento desses campos"}]}},computed:{},methods:{salvarConvidadoListaEvento:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,wt.collection("listaconvidados").add({evento_id:this.eventoId,nome_convidado:this.nomeConvidado,fone_convidado:this.foneConvidado}).then((function(a){console.log("incluido com o id: ",a.id),t.nomeConvidado="",t.foneConvidado="",t.getVagasDisponiveis(),t.snackbar=!0,t.loading=!1})).catch((function(t){console.error("Ocorreu um erro ao tentar salvar essse convidado nesse evento!",t)})))},getDadosEvento:function(){var t=this;wt.collection("meuscultos").where(kt.a.firestore.FieldPath.documentId(),"==",this.$route.params.eventid).get().then((function(a){a.forEach((function(a){console.log(a.data()),t.tituloEvento=a.data().culto,t.dataEvento=a.data().data,t.horaEvento=a.data().hora,t.totalVagas=a.data().vagas}))})).catch((function(t){console.error("ocorreu um erro ao tentar buscar esse registro!",t)}))},getTotalConvidadosEvento:function(){var t=this;wt.collection("listaconvidados").where("evento_id","==",this.$route.params.eventid).get().then((function(a){a.empty?t.totalConvidadosEvento=0:t.totalConvidadosEvento=a.size,console.log("total convidados: ",t.totalConvidadosEvento)})).catch((function(t){console.error("ocorreu um erro ao tentar buscar esse registro!",t)}))},formatDate:function(t){if(!t)return null;var a=t.split("-"),e=Object(tt["a"])(a,3),o=e[0],n=e[1],i=e[2];return"".concat(i,"/").concat(n,"/").concat(o)},getVagasDisponiveis:function(){var t=0;return t=this.totalVagas-this.totalConvidadosEvento,t<=0?"vagas totalmente preenchidas":t}},created:function(){this.getDadosEvento(),this.getTotalConvidadosEvento(),this.getVagasDisponiveis()}},Gt=Rt,Ht=Object(u["a"])(Gt,qt,Jt,!1,null,null,null),Ut=Ht.exports;v()(Ht,{VBtn:f["a"],VCard:J["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VForm:G["a"],VImg:x["a"],VSnackbar:H["a"],VSpacer:E["a"],VTextField:U["a"]}),o["a"].use($["a"]);var Yt=[{path:"/login",name:"Login",component:K},{path:"/listaagenda",name:"ListaAgenda",component:ht},{path:"/convite/:eventid",name:"Convite",component:Ut},{path:"/meuscultos",name:"MeusCultos",component:Nt},{path:"/config",name:"Config",component:It},{path:"/listapresenca/:eventid",name:"ListaFielAgenda",component:Lt}],Kt=new $["a"]({mode:"history",base:"/agenda/",routes:Yt}),Zt=Kt,Qt=e("2f62");o["a"].use(Qt["a"]);var Wt=new Qt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Xt=e("f309");o["a"].use(Xt["a"]);var ta=new Xt["a"]({}),aa=e("3a60"),ea=e.n(aa);o["a"].use(ea.a),o["a"].config.productionTip=!1,new o["a"]({router:Zt,store:Wt,vuetify:ta,render:function(t){return t(P)}}).$mount("#app")},"7bfd":function(t,a,e){"use strict";var o=e("3747"),n=e.n(o);n.a},"852b":function(t,a,e){}});
//# sourceMappingURL=app.2be99222.js.map