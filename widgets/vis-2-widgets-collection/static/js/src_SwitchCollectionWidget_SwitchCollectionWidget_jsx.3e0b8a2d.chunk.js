"use strict";(self.webpackChunkiobroker_vis_widgets_react_collection=self.webpackChunkiobroker_vis_widgets_react_collection||[]).push([["src_SwitchCollectionWidget_SwitchCollectionWidget_jsx"],{6018:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var o=i(8437),a=i(6211),c=i(7613),n=i(9966),l=i(900),r=i(7085),d=i(4657),s=i(6016),h=i(2152),u=i(6255),p=i(5001),g=i(9042),m=i(4535),v=i(8565);const b=(0,m.Ay)(g.A)((t=>{let{width:e,height:i,maxHeight:o,data:a,widget:c,theme:n}=t;return{width:"100%",height:"100%",padding:0,margin:0,"&.MuiSwitch-root":{overflow:"visible"},"& .MuiSwitch-switchBase":{margin:0,padding:0,top:"50%",left:"0%",transform:"translate(-50%, -50%) translateX(".concat(o>=(c.data.thumbSize||62)?c.data.thumbSize/2-4||27:o/2-4,"px)"),"& .MuiSwitch-input":{left:0,width:e},"&.Mui-checked":{top:"50%",left:"100%",transform:"translate(-50%, -50%) translateX(".concat(o>=(c.data.thumbSize||62)?-(c.data.thumbSize/2-4)||-35:-(o/2-4),"px)"),"& .MuiSwitch-input":{left:-e+(c.data.thumbSize||62),width:e},"& .MuiSwitch-thumb":{backgroundColor:c.data.thumbColorTrue||n.palette.primary.main},"& .MuiSwitch-thumb:before":{top:"calc(".concat(a.iconYOffset," * -1)"),left:a.iconXOffset,backgroundSize:"".concat(a.iconSizeActive||"100%"," ").concat(a.iconSizeActive||"100%"),backgroundImage:a.iconActive&&"url('".concat(a.iconActive,"')")},"& + .MuiSwitch-track":{backgroundColor:c.data.trackColor||("dark"===n.palette.mode?(0,v.alpha)("rgb(144, 202, 249)",.5):(0,v.alpha)("#1976d2",.5))}}},"& .MuiSwitch-thumb":{backgroundColor:c.data.thumbColorFalse,width:c.data.thumbSize||62,maxWidth:o,height:c.data.thumbSize||62,maxHeight:o,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",top:"calc(".concat(a.iconYOffset," * -1)"),left:a.iconXOffset,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"".concat(a.iconSizeActive||"100%"," ").concat(a.iconSizeActive||"100%"),backgroundImage:a.iconActive&&"url('".concat(a.iconActive,"')"),color:a.iconColorActive||a.iconColor,filter:a.iconColorActive||a.iconColor?"drop-shadow(0px 10000px 0)":null,transform:a.iconColorActive||a.iconColor?"translateY(-10000px)":null}},"& .MuiSwitch-track":{backgroundColor:c.data.trackColor&&(0,v.alpha)(c.data.trackColor,.5)||("dark"===n.palette.mode?(0,v.alpha)("#ffffff",.3):(0,v.alpha)("#000000",.38)),borderRadius:10}}}));var f=i(579);const w=function(){var t,e,i,a,c,n;const l=(0,o.useRef)(null),{setValue:g,oidObject:m,widget:v}=(0,o.useContext)(s.C),{data:w}=(0,h.A)("oid"),S=(0,p.A)("oid"),C=null===m||void 0===m?void 0:m._id,x=null===m||void 0===m||null===(t=m.common)||void 0===t?void 0:t.type,k=v.data.sampleInterval?v.data.sampleIntervalValue:v.data.delay,{debouncedValue:A,sampledValue:y}=(0,u.A)(S,k);return(0,o.useEffect)((()=>{v.data.sampleInterval||void 0===A||g(C,A)}),[A,C,g,v.data.sampleInterval]),(0,o.useEffect)((()=>{v.data.sampleInterval&&void 0!==y&&g(C,y)}),[y,C,g,v.data.sampleInterval]),(0,f.jsxs)(d.A,{data:w,oidValue:S,bgActive:!1,children:[(w.icon||w.iconActive)&&(0,f.jsx)("img",{alt:"",src:w.icon||w.iconActive,style:{position:"absolute",top:"calc(0px + ".concat(v.data.iconYOffset,")"),right:"calc(0px + ".concat(v.data.iconXOffset,")"),width:w.iconSize||w.iconSizeActive,height:w.iconSize||w.iconSizeActive,color:w.iconColor||w.iconColorActive,filter:w.iconColor||w.iconColorActive?"drop-shadow(0px 10000px 0)":null,transform:w.iconColor||w.iconColorActive?"translateY(-10000px)":null}}),(0,f.jsx)(r.Box,{sx:{position:"relative",width:"100%",height:v.data.trackSize&&"".concat(v.data.trackSize,"%")||"10%"},children:(0,f.jsx)(r.Box,{ref:l,sx:{width:"100%",height:"100%",px:"8px",display:"flex",justifyContent:"center",alignItems:"center"},children:void 0!==S&&void 0!==v.data.thumbSize&&(0,f.jsx)(b,{disabled:"boolean"!==x,width:null===(e=l.current)||void 0===e?void 0:e.clientWidth,height:null===(i=l.current)||void 0===i?void 0:i.clientHeight,maxHeight:null===(a=l.current)||void 0===a||null===(c=a.parentElement)||void 0===c||null===(n=c.parentElement)||void 0===n?void 0:n.clientHeight,data:w,widget:v,checked:S,onChange:()=>g(C,!S)})})})]})};class S extends a.A{static getWidgetInfo(){return{id:"tplSwitchCollectionWidget",visSet:"vis-2-widgets-collection",visSetLabel:"widgets_collection",visName:"SwitchCollectionWidget",visWidgetLabel:"switch_collection_widget",visAttrs:[(0,n.A)(),{name:"switch",label:"group_switch",fields:[{name:"thumbSize",label:"thumb_size",type:"slider",min:0,max:500,default:62,step:1},{name:"thumbColorTrue",label:"thumb_color_true",type:"color"},{name:"thumbColorFalse",label:"thumb_color_false",type:"color"},{name:"trackSize",label:"track_size",type:"slider",min:0,max:100,default:10,step:1},{name:"trackColor",label:"track_color",type:"color"}]},(0,c.A)("values")],visDefaultStyle:{width:"100%",height:"100px",position:"relative"},visPrev:"widgets/vis-2-widgets-collection/img/prev-collection-switch.png"}}getWidgetInfo(){return S.getWidgetInfo()}async propertiesUpdate(){const t=JSON.stringify(this.state.rxData);this.lastRxData!==t&&(this.lastRxData=t,await this.createStateObjectAsync("oid"))}async onRxDataChanged(t){await this.propertiesUpdate()}onRxStyleChanged(){}onStateUpdated(t,e){}async componentDidMount(){super.componentDidMount(),await this.propertiesUpdate()}renderWidgetBody(t){super.renderWidgetBody(t);const e={id:t.id,refService:t.refService,style:t.style,widget:t.widget,setValue:this.setValue,setState:this.setState.bind(this),oidObject:this.state.oidObject,values:this.state.values,isSignalVisible:this.isSignalVisible.bind(this),getPropertyValue:this.getPropertyValue.bind(this),mode:this.props.context.themeType,socket:this.props.context.socket,theme:this.props.context.theme,wrappedContent:this.wrappedContent};return t.widget.data.noCard||t.widget.usedInWidget?this.wrappedContent=!1:this.wrappedContent=!0,(0,l.A)(this.wrapContent((0,f.jsx)(w,{})),e)}}const C=S}}]);
//# sourceMappingURL=src_SwitchCollectionWidget_SwitchCollectionWidget_jsx.3e0b8a2d.chunk.js.map