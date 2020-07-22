(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[7],{1471:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(499),i=n(500),s=n(39),c=n(1472),l=n.n(c),u=n(1473),m=n.n(u),d=Object(s.b)(l.a,m.a),f=[{name:"1-base",title:Object(s.b)("基本用法 \n 组件调用通过 json 数据配置","Base \n The basic usage."),component:n(1474).default,rawText:n(1475)},{name:"2-separator",title:Object(s.b)("分隔符 \n 默认的分隔符为 '/'，可以通过 separator 属性自定义","separator \n The default separator is '/'."),component:n(1476).default,rawText:n(1477)},{name:"3-icon",title:Object(s.b)("图标 \n 带图标的面包屑","icon \n Breadcrumbs with icons"),component:n(1478).default,rawText:n(1479)}];t.default=Object(o.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},1472:function(e,t){e.exports="# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | any[] | [] | 面包屑对象数组，见 data |\n| separator | string \\| ReactNode | \"/\" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | ((data: any) => string) \\| string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n\n### BreadcrumbData\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| title | string \\| ReactElement | 无 | 显示内容 |\n| url | string | 无 | 链接地址，onClick 属性二选一 |\n| onClick | () => void | 无 | 点击事件 |\n"},1473:function(e,t){e.exports="# Breadcrumb\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| data | any[] | [] | The array of breadcrumb objects, see data |\n| separator | string \\| ReactNode | \"/\" | A breadcrumb separator which can be strings or custom elements |\n| keygen | ((data: any) => any) \\| string \\| boolean | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n\n### BreadcrumbData\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| title | string\\|ReactElement | - | Displayed content |\n| url | string | - | Link address |\n| onClick | () => void | - | The click event |\n"},1474:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(87),i=n(516),s=n(1514),c=[[{title:"Home",url:"#home"},{title:"aaa",url:"#aaa"},{title:"bbb",url:"#bbb"}],{title:r.a.createElement(o.a,{to:"/components/Button"},"Button")},{title:"Self",onClick:function(){return i.a.show("Clicked self")}}];t.default=function(){return r.a.createElement(s.a,{data:c})}},1475:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 组件调用通过 json 数据配置\n * en - Base\n *    -- The basic usage.\n */\n\nimport React from 'react'\nimport { Link } from 'react-router-dom'\nimport { Breadcrumb, Message } from 'shineout'\n\nconst data = [\n  [{ title: 'Home', url: '#home' }, { title: 'aaa', url: '#aaa' }, { title: 'bbb', url: '#bbb' }],\n  { title: <Link to=\"/components/Button\">Button</Link> },\n  { title: 'Self', onClick: () => Message.show('Clicked self') },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1476:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1514);function i(){return r.a.createElement("span",null,"~")}var s=[{title:"Home",url:"/"},{title:"Self"}];t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{data:s,separator:"|"}),r.a.createElement(o.a,{data:s,separator:r.a.createElement(i,null)}))}},1477:function(e,t){e.exports="/**\n * cn - 分隔符\n *    -- 默认的分隔符为 '/'，可以通过 separator 属性自定义\n * en - separator\n *    -- The default separator is '/'.\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{ title: 'Home', url: '/' }, { title: 'Self' }]\n\nexport default function() {\n  return (\n    <div>\n      <Breadcrumb data={data} separator=\"|\" />\n      <Breadcrumb data={data} separator={<Separator />} />\n    </div>\n  )\n}\n"},1478:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1514),i=n(148),s=[{icon:r.a.createElement(i.a,{name:"home"}),title:"Home",url:"#home"},{title:"Menu"},{title:"Self",url:"https://www.google.com"}];t.default=function(){return r.a.createElement(o.a,{data:s})}},1479:function(e,t){e.exports="/**\n * cn - 图标\n *    -- 带图标的面包屑\n * en - icon\n *    -- Breadcrumbs with icons\n */\n\nimport React from 'react'\nimport { Breadcrumb } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst data = [\n  { icon: <FontAwesome name=\"home\" />, title: 'Home', url: '#home' },\n  { title: 'Menu' },\n  { title: 'Self', url: 'https://www.google.com' },\n]\n\nexport default function() {\n  return <Breadcrumb data={data} />\n}\n"},1514:function(e,t,n){"use strict";var a=n(15),r=n(4),o=n(5),i=n(6),s=n(3),c=n(7),l=n(0),u=n.n(l),m=n(10),d=n.n(m),f=n(93),p=n(22),b=n(2),h=n(19),g=n(97),v=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"renderArray",value:function(e){var n=this,t=e[0];return u.a.createElement("span",null,this.renderItem(t),u.a.createElement("span",{className:Object(b.b)("down")},u.a.createElement(g.a,null)),u.a.createElement(f.a,{position:"bottom"},e.slice(1).map(function(e,t){return u.a.createElement("div",{className:Object(b.b)("dropdown-item"),key:t},n.renderItem(e))})))}},{key:"renderItem",value:function(e){var t=this.props.renderItem,n=e.title;if(!u.a.isValidElement(n))if(e.onClick||e.url){var a={onClick:e.onClick};e.url&&(a.href=e.url),n=u.a.createElement("a",a,e.icon," ",e.title)}else n=u.a.createElement("b",null,e.title);return t?t(e):n}},{key:"render",value:function(){var n=this,e=this.props,a=e.data,r=e.separator,o=e.keygen,t=d()(Object(b.b)("_"),this.props.className);return u.a.createElement("div",{className:t,style:this.props.style},a.map(function(e,t){return u.a.createElement("span",{key:o?Object(h.b)(e,o,t):t},Array.isArray(e)?n.renderArray(e):n.renderItem(e),t!==a.length-1?u.a.createElement("span",{className:Object(b.b)("separator")},r):null)}))}}]),t}(u.a.PureComponent);v.defaultProps=Object(a.a)({},p.a,{data:[],separator:"/"}),v.displayName="ShineoutBreadcrumb",t.a=v},516:function(e,t,n){"use strict";var a=n(0),m=n.n(a),r=n(42),o=n.n(r),d=n(2),i=n(4),s=n(5),c=n(6),l=n(3),u=n(7),f=n(1),p=n(41),b=n(17),h=n(150),g=n(19),v=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this,e))).state={messages:[]},t.removeMessage=t.removeMessage.bind(Object(f.a)(Object(f.a)(t))),t.handleClassName=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"top",t=1<arguments.length?arguments[1]:void 0;return Object(d.t)("item","item-".concat(t?"dismissed":"show","-").concat(e))},t.handleStyle=function(e,t,n){if(!e||null==t)return null;var a={};switch(n){case"bottom-right":case"bottom-left":break;default:a={zIndex:-1,opacity:0,marginTop:-t}}return a},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"addMessage",value:function(t){var e=this,n=Object(g.c)();this.setState(Object(p.a)(function(e){e.messages.push(Object.assign({id:n},t))})),0<t.duration&&setTimeout(function(){e.setState(Object(p.a)(function(e){e.messages.forEach(function(e){e.id===n&&(e.dismiss=!0)})}))},1e3*t.duration)}},{key:"removeMessage",value:function(t){var n,e=this.state.messages.filter(function(e){return e.id!==t||(e.onClose&&(n=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),n&&n()}},{key:"closeMessageForAnimation",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=n[0],o=n[1],i=n[2];o?(this.setState(Object(p.a)(function(e){e.messages.forEach(function(e){e.id===r&&(e.dismiss=!0,e.h=i+20)})})),setTimeout(function(){e.removeMessage(r)},o)):this.removeMessage(r)}},{key:"closeEvent",value:function(e,t){if(0===t)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var u=this;return[this.state.messages.map(function(e){var t=e.id,n=e.type,a=e.content,r=e.dismiss,o=e.h,i=e.title,s=e.top,c=e.className,l=e.position;return m.a.createElement("div",{key:t,className:"".concat(u.handleClassName(l,r)," ").concat(c),style:u.handleStyle(r,o,l)},m.a.createElement(h.a,{outAnimation:!0,className:Object(d.t)("msg"),dismiss:r,onClose:u.closeMessageForAnimation.bind(u,t),icon:!0,iconSize:i?20:14,style:{top:s},type:n},i&&m.a.createElement("h3",null,i),a))})]}}]),n}(b.b);v.displayName="ShineoutMessage";var y=v,j={},k={};function w(e){j[e]&&(o.a.unmountComponentAtNode(j[e]),document.body.removeChild(j[e]),delete j[e]),k[e]&&delete k[e]}function E(r){return new Promise(function(t){var e,n,a=k[r];a?t(a):o.a.render(m.a.createElement(y,{ref:function(e){k[r]=e,t(e)},onDestory:w.bind(null,r)}),(e=r,(n=document.createElement("div")).className=Object(d.t)("_",e),document.body.appendChild(n),j[e]=n))})}var O=function(m){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=e.onClose,r=e.position,o=void 0===r?"top":r,i=e.title,s=e.className,c=void 0===s?"":s,l=e.top,u=void 0===l?"auto":l;E(o).then(function(e){e.addMessage({content:t,duration:n,type:m,onClose:a,title:i,className:c,top:u,position:o})})}};t.a={show:O("default"),success:O("success"),info:O("info"),warn:O("warning"),warning:O("warning"),danger:O("danger"),error:O("danger"),close:function(e){e?w(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){w(e)})}}}}]);