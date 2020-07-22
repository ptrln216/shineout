(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[6],{1252:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(499),i=t(500),l=t(39),s=t(1253),c=t.n(s),u=t(1254),p=t.n(u),d=Object(l.b)(c.a,p.a),h=[{name:"1-base",title:Object(l.b)("基本用法 \n 基本的使用","Base \n Basic usage"),component:t(1255).default,rawText:t(1256)},{name:"2-type",title:Object(l.b)("类型 \n 内置了 4 种类型（样式），[success, info, warning, danger]，默认为 warning","type \n There are four built-in types (styles), [success, info, warning, danger], the default value is warning."),component:t(1257).default,rawText:t(1258)},{name:"3-close",title:Object(l.b)("关闭 \n 设置 onClose 属性时，显示关闭按钮 \n onClose 为 true 时，只关闭提示，不处理 \n onClose 为函数时，关闭后调用此函数","onClose \n When the onClose property is set, the close button is displayed. \n When the onClose property is true, only hide the component. \n When the onClose is a function, call this function after hiding it."),component:t(1259).default,rawText:t(1260)},{name:"4-icon",title:Object(l.b)("内置图标 \n 设置 icon 属性可以显示内置的图标，不同类型的图标见示例","Icon \n Set the icon property to display the built-in icon."),component:t(1261).default,rawText:t(1262)}];n.default=Object(a.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:h}))})},1253:function(e,n){e.exports="# Alert *提示框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | ReactNode | 无 | 内容，文字或react组件 |\n| className | string | 无 | 扩展className |\n| icon | ReactNode \\| boolean | 无 | 为true时，根据type属性显示状态图标。如果需要显示自定义图标，传入ReactElement。 |\n| iconSize | number | 14 | icon 的尺寸 |\n| onClose | () => void \\| boolean | 无 | 当 onClose 为空时，不显示关闭。如果需要关闭又不需要处理回调，设置为true即可 |\n| style | object | 无 | 最外层扩展样式 |\n| type | 'success' \\| 'info' \\| 'warning' \\| 'danger' \\| 'error' | *warning* |  4 选 1 |\n"},1254:function(e,n){e.exports="# Alert\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| -------- | ---- | ------- | ----------- |\n| children | ReactNode  | - | Content, text or react component |\n| className | string | - | Extend className |\n| icon | ReactNode \\| boolean | - | When the type is true, the status icon is displayed according to the type property. If you need to display a custom icon, pass in ReactElement. |\n| iconSize | number | 14 | The size for icon |\n| onClose | () => void \\| boolean | - | When onClose is empty, no close is displayed. If you need to close and do not need to handle callbacks, set it true. |\n| style | object | - | Container element style |\n| type | 'success' \\| 'info' \\| 'warning' \\| 'danger' \\| 'error' | *warning* | type of alert |\n"},1255:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(150);n.default=function(){return r.a.createElement(a.a,null,r.a.createElement("h3",null,"Title"),"Some content.")}},1256:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的使用\n * en - Base\n *    -- Basic usage\n */\nimport React from 'react'\nimport { Alert } from 'shineout'\n\nexport default function() {\n  return (\n    <Alert>\n      <h3>Title</h3>\n      Some content.\n    </Alert>\n  )\n}\n"},1257:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(150);n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.a,{type:"success"},"Success Type."),r.a.createElement(a.a,{type:"info"},"Info Type."),r.a.createElement(a.a,{type:"warning"},"Warning Type."),r.a.createElement(a.a,{type:"danger"},"Danger Type."))}},1258:function(e,n){e.exports='/**\n * cn - 类型\n *    -- 内置了 4 种类型（样式），[success, info, warning, danger]，默认为 warning\n * en - type\n *    -- There are four built-in types (styles), [success, info, warning, danger], the default value is warning.\n */\nimport React from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Alert type="success">Success Type.</Alert>\n      <Alert type="info">Info Type.</Alert>\n      <Alert type="warning">Warning Type.</Alert>\n      <Alert type="danger">Danger Type.</Alert>\n    </div>\n  )\n}\n'},1259:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var o=t(4),r=t(5),a=t(6),i=t(3),l=t(7),s=t(1),c=t(0),u=t.n(c),p=t(150),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this,e))).state={placeholder:""},n.handleClose=n.handleClose.bind(Object(s.a)(Object(s.a)(n))),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleClose",value:function(){this.setState({placeholder:"Alert was dismissed."})}},{key:"render",value:function(){var e=this.state.placeholder;return u.a.createElement("div",null,u.a.createElement(p.a,{onClose:!0},"Alert onClose=true"),u.a.createElement(p.a,{onClose:this.handleClose},"Alert onClose=function"),e&&u.a.createElement(p.a,{type:"info"},e))}}]),t}(c.PureComponent)},1260:function(e,n){e.exports="/**\n * cn - 关闭\n *    -- 设置 onClose 属性时，显示关闭按钮\n *    -- onClose 为 true 时，只关闭提示，不处理\n *    -- onClose 为函数时，关闭后调用此函数\n * en - onClose\n *    -- When the onClose property is set, the close button is displayed.\n *    -- When the onClose property is true, only hide the component.\n *    -- When the onClose is a function, call this function after hiding it.\n */\nimport React, { PureComponent } from 'react'\nimport { Alert } from 'shineout'\n\nexport default class extends PureComponent {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      placeholder: '',\n    }\n\n    this.handleClose = this.handleClose.bind(this)\n  }\n\n  handleClose() {\n    this.setState({\n      placeholder: 'Alert was dismissed.',\n    })\n  }\n\n  render() {\n    const { placeholder } = this.state\n    return (\n      <div>\n        <Alert onClose>Alert onClose=true</Alert>\n\n        <Alert onClose={this.handleClose}>Alert onClose=function</Alert>\n\n        {placeholder && <Alert type=\"info\">{placeholder}</Alert>}\n      </div>\n    )\n  }\n}\n"},1261:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(150);n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.a,{type:"success",icon:!0},"Success Type."),r.a.createElement(a.a,{type:"info",icon:!0},"Info Type."),r.a.createElement(a.a,{type:"warning",icon:!0},"Warning Type."),r.a.createElement(a.a,{type:"danger",icon:!0},"Danger Type."),r.a.createElement(a.a,{icon:!0,iconSize:24,style:{padding:20}},r.a.createElement("h3",null,"Set iconSize"),"iconSize=24"))}},1262:function(e,n){e.exports='/**\n * cn - 内置图标\n *    -- 设置 icon 属性可以显示内置的图标，不同类型的图标见示例\n * en - Icon\n *    -- Set the icon property to display the built-in icon.\n */\nimport React from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function () {\n  return (\n    <div>\n      <Alert type="success" icon>\n        Success Type.\n      </Alert>\n      <Alert type="info" icon>\n        Info Type.\n      </Alert>\n      <Alert type="warning" icon>\n        Warning Type.\n      </Alert>\n      <Alert type="danger" icon>\n        Danger Type.\n      </Alert>\n\n      <Alert icon iconSize={24} style={{ padding: 20 }}>\n        <h3>Set iconSize</h3>\n        iconSize=24\n      </Alert>\n    </div>\n  )\n}\n'}}]);