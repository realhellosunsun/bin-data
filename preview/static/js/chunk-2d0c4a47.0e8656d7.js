(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4a47"],{"3c67":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dv-screen"},[e("b-scrollbar",{staticStyle:{height:"100%"}},[e("div",{staticClass:"canvas-panel",style:t.canvasPanelStyle},[t._l(t.canvasMap,function(t){return[e("preview-box",{key:t.id,attrs:{item:t}},[e("charts-factory",{attrs:{"type-name":t.packageJson.name,config:t.packageJson.config,"api-data":t.packageJson.api_data,apis:t.packageJson.apis}})],1)]})],2)])],1)},s=[],c=e("cebc"),i=e("2f62"),r=e("c15d"),o=e("549b"),p=e("0324"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"preview-box",style:t.contentStyles},[e("div",{staticClass:"preview-wrap",style:t.dvWrapperStyles},[t._t("default")],2)])},l=[],d={props:{item:{type:Object,required:!0}},created:function(){this.transformData=Object(c["a"])({},this.item.packageJson.view)},watch:{item:{handler:function(t){t&&(this.transformData=Object(c["a"])({},t.packageJson.view))},deep:!0}},computed:{contentStyles:function(){return{width:this.transformData.width+"px",height:this.transformData.height+"px",transform:"translate3d(".concat(this.transformData.x,"px,").concat(this.transformData.y,"px,0)")}},dvWrapperStyles:function(){return{transform:"translateZ(0)",width:this.transformData.width+"px",height:this.transformData.height+"px",padding:"10px 0"}}}},u=d,f=e("2877"),g=Object(f["a"])(u,h,l,!1,null,null,null),v=g.exports,m={name:"screen",components:{ChartsFactory:p["a"],PreviewBox:v},data:function(){return{}},computed:Object(c["a"])({},Object(i["c"])(["canvasMap","pageSettings"]),{canvasPanelStyle:function(){return{width:"".concat(this.pageSettings.width,"px"),height:"".concat(this.pageSettings.height,"px"),backgroundColor:this.pageSettings.backgroundColor}}}),created:function(){var t=this;Object(r["a"])().then(function(a){t.$store.dispatch("SetPageSettings",a.data),console.log(a.data)}),Object(o["e"])().then(function(a){t.$store.dispatch("InitCanvasMaps",a.data)})}},w=m,b=Object(f["a"])(w,n,s,!1,null,null,null);a["default"]=b.exports}}]);