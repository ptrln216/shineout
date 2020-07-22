(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[43],{1440:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(499),o=n(500),i=n(39),s=n(1441),c=n.n(s),b=n(1442),d=n.n(b),u=Object(i.b)(c.a,d.a),p=[{name:"01-base",title:Object(i.b)("基本用法 \n 默认标签样式","Base \n Basic usage."),component:n(1443).default,rawText:n(1444)},{name:"02-disable",title:Object(i.b)("禁用 \n 禁用某一个标签","disabled \n disable a tab."),component:n(1445).default,rawText:n(1446)},{name:"03-color",title:Object(i.b)("自定义颜色 \n 自定义每个标签的字体颜色、边框颜色和背景色","Color \n Set the font color, border color, and background color for each label."),component:n(1447).default,rawText:n(1448)},{name:"04-scroll",title:Object(i.b)("滚动 \n 超出长度时，会自动出现滚动按钮","Scroll \n The slide button is displayed when the Tabs length exceeds the parent container"),component:n(1449).default,rawText:n(1450)},{name:"05-active",title:Object(i.b)("受控 \n 通过 active 和 onChange 可以控制标签状态","Controlled \n Set active and onChange property to control active state."),component:n(1451).default,rawText:n(1452)},{name:"06-shape-line",title:Object(i.b)("样式 \n 设置 shape 为 'line'，标签显示为线条","Shape (line) \n The line type tabs."),component:n(1453).default,rawText:n(1454)},{name:"07-shape-button",title:Object(i.b)(" \n 设置 shape 为 'button'，标签显示为按钮"," \n The button type tabs."),component:n(1455).default,rawText:n(1456)},{name:"07-shape-dash",title:Object(i.b)(" \n 设置 shape 为 'dash'，标签显示为短线条"," \n dash tab type"),component:n(1457).default,rawText:n(1458)},{name:"08-align-right",title:Object(i.b)('对齐 \n 设置 align="right" 使标签右对齐',"Align \n set align to 'right' to align labels to the right"),component:n(1459).default,rawText:n(1460)},{name:"09-align-vertical-left",title:Object(i.b)(' \n 设置 align="vertical-left" 使标签垂直靠左'," \n set align to 'vertical-left' to align labels to the vertically left"),component:n(1461).default,rawText:n(1462)},{name:"10-align-vertical-right",title:Object(i.b)(' \n 设置 align="vertical-right" 使标签垂直靠右'," \n set align to 'vertical-right' to align labels to the vertically right"),component:n(1463).default,rawText:n(1464)},{name:"11-collapsible",title:Object(i.b)("展开 \n 设置 collapsible 为 true，会出现可展开图标，点击图标或 Tabs 头部空白区域，展开/折起内容。","Collapsible \n Set the collapsible property to true, will show the arrow icon. User can click icon or header to expand/collapse the content."),component:n(1465).default,rawText:n(1466)},{name:"12-extra",title:Object(i.b)("额外内容 \n 可以在标签页的右侧添加额外内容","Extra Content \n Can add extra content on the right side of the tab"),component:n(1467).default,rawText:n(1468)},{name:"12-link",title:Object(i.b)("链接 \n 使用链接作为标签","Link \n Use link as every tab."),component:n(1469).default,rawText:n(1470)}];t.default=Object(r.a)(function(e){return l.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:u,examples:p}))})},1441:function(e,t){e.exports="# Tabs *标签*\n\n<example />\n\n## API\n\n### Tabs\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| active | string \\| number | 0 | 当前选中标签页（受控） |\n| align | 'left' \\| 'right' \\| 'vertical-left' \\| 'vertical-right' | 无 | 设置标签对齐方式 |\n| background | string | '#fff' | 选中标签背景色 |\n| border | string | '#ddd' | 边框颜色 |\n| className | string | - | 扩展className |\n| collapsible | boolean | false | 是否可折叠 |\n| defaultActive | string \\| int | 0 | 默认选中标签页（非受控） |\n| tabBarExtraContent | string \\| ReactNode | - | tab bar 上额外的元素 | \n| tabBarStyle | object | - | tab bar 的样式对象 |\n| inactiveBackground | string | 'transparent' | 未选中标签背景色 |\n| onChange | (key: any) => void  | - | 标签选中时触发回调事件 |\n| shape | string | - | 可选值为 \\['card', 'line', 'button', 'bordered', 'dash'\\]，shape 不为空时，background 等颜色参数将会无效 |\n| style | object | - | 最外层扩展样式 |\n| lazy | boolean | true | 是否开启懒加载 |\n\n### Tabs.Panel\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | - | 扩展className |\n| background | string | - | 背景色，会覆盖 Tabs 的background |\n| border | string | - | 边框颜色，会覆盖 Tabs 的border |\n| disabled | boolean | false | 是否禁用 |\n| id | string \\| number | - | 选填，默认为 index |\n| style | object | - | 内容样式 |\n| tab | string \\| ReactNode | 必填 | 标签标题内容 |\n"},1442:function(e,t){e.exports="# Tabs\n\n<example />\n\n## API\n\n### Tabs\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| active | string \\| number | 0 | Current active tab id or index |\n| align | 'left' \\| 'right' \\| 'vertical-left' \\| 'vertical-right' | 无 | set the label align |\n| background | string | '#fff' | Active background color |\n| border | string | '#ddd' | Border color |\n| className | string | - | Extend className |\n| collapsible | boolean | false | Whether can be collapsed |\n| defaultActive | string \\| number | 0 | Default active tab id or index |\n| inactiveBackground | string | 'transparent' | Inactive background color |\n| tabBarExtraContent | string \\| ReactNode | - | extra element in tab bar | \n| tabBarStyle | object | - | style in tab bar |\n| onChange | (key: any) => void | - | Change callback |\n| shape | string | - | Options: \\['card', 'line', 'button', 'bordered', 'dash'\\]. If shape is not null, the style properties such as background, border will lose effect |\n| style | object | - | Container element style |\n| lazy | boolean | true | lazy load |\n\n### Tabs.Panel\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| background | string | - | Background color, override the Tab's background |\n| border | string | - | Border color, override the Tab's border |\n| disabled | boolean | false | Specifies the Panel should be disabled |\n| id | string \\| number | - | The default is index |\n| style | object | - | Content style |\n| tab | string \\| ReactNode | required | Tab content |\n"},1443:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{defaultActive:1},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1444:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 默认标签样式\n * en - Base\n *    -- Basic usage.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\n\n// lorem can return a radom string\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1445:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{defaultActive:1},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact",disabled:!0},Object(o.a)(4)))}},1446:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- 禁用某一个标签\n * en -  disabled\n *    -- disable a tab.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\" disabled>\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1447:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i=n(148),s={padding:15},c=l.a.createElement("span",null,l.a.createElement(i.a,{name:"user"}),"Contact");t.default=function(){return l.a.createElement(r.a,{lazy:!1},l.a.createElement(r.a.Panel,{border:"transparent",background:"#ffe7ba",style:s,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{border:"transparent",background:"#ffc069",style:s,tab:"Profile"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{border:"transparent",color:"#fff",background:"#d46b08",style:s,tab:c},Object(o.a)(5)),l.a.createElement(r.a.Panel,{border:"transparent",color:"#fff",background:"#873800",style:s,tab:"Setting"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{border:"#b7eb8f",background:"#f6ffed",style:s,tab:"Message"},Object(o.a)(5)))}},1448:function(e,t){e.exports='/**\n * cn - 自定义颜色\n *    -- 自定义每个标签的字体颜色、边框颜色和背景色\n * en - Color\n *    -- Set the font color, border color, and background color for each label.\n */\nimport React from \'react\'\nimport { Tabs } from \'shineout\'\nimport lorem from \'doc/utils/faker/lorem\'\nimport FontAwsome from \'../Icon/FontAwesome\'\n\nconst panelStyle = { padding: 15 }\nconst contact = (\n  <span>\n    <FontAwsome name="user" />\n    Contact\n  </span>\n)\n\nexport default function() {\n  return (\n    <Tabs lazy={false}>\n      <Tabs.Panel border="transparent" background="#ffe7ba" style={panelStyle} tab="Home">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="transparent" background="#ffc069" style={panelStyle} tab="Profile">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="transparent" color="#fff" background="#d46b08" style={panelStyle} tab={contact}>\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="transparent" color="#fff" background="#873800" style={panelStyle} tab="Setting">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel border="#b7eb8f" background="#f6ffed" style={panelStyle} tab="Message">\n        {lorem(5)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n'},1449:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{inactiveBackground:"#f2f2f2"},Array.from({length:20}).map(function(e,t){return l.a.createElement(r.a.Panel,{key:t,style:i,tab:"Tab ".concat(t)},Object(o.a)(5))}))}},1450:function(e,t){e.exports="/**\n * cn - 滚动\n *    -- 超出长度时，会自动出现滚动按钮\n * en - Scroll\n *    -- The slide button is displayed when the Tabs length exceeds the parent container\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs inactiveBackground=\"#f2f2f2\">\n      {Array.from({ length: 20 }).map((_, i) => (\n        <Tabs.Panel key={i} style={panelStyle} tab={`Tab ${i}`}>\n          {lorem(5)}\n        </Tabs.Panel>\n      ))}\n    </Tabs>\n  )\n}\n"},1451:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n(4),l=n(5),r=n(6),o=n(3),i=n(7),s=n(0),c=n.n(s),b=n(524),d=n(1518),u=n(506),p=n(148),m={padding:15},h=c.a.createElement("span",null,c.a.createElement(p.a,{name:"user"}),"Contact"),f=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).handleActiveChange=function(e){return t.setState({active:e})},t.hideMessage=function(e){e.stopPropagation(),t.setState({tabs:["home","profile","contact","setting"],showMessage:!1,active:"home"})},t.state={tabs:["home","profile","contact","setting","message"],active:"profile",showMessage:!0},t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state.active,t=c.a.createElement("span",null,"Message",c.a.createElement("a",{style:{color:"#999",marginLeft:10},onClick:this.hideMessage},c.a.createElement(p.a,{name:"close"})));return c.a.createElement("div",null,c.a.createElement(b.a.Group,{data:this.state.tabs,keygen:!0,value:e,onChange:this.handleActiveChange}),c.a.createElement("br",null),c.a.createElement(d.a,{active:e,onChange:this.handleActiveChange},c.a.createElement(d.a.Panel,{id:"home",border:"transparent",background:"#ffe7ba",style:m,tab:"Home"},Object(u.a)(5)),c.a.createElement(d.a.Panel,{id:"profile",border:"transparent",background:"#ffc069",style:m,tab:"Profile"},Object(u.a)(5)),c.a.createElement(d.a.Panel,{id:"contact",border:"transparent",color:"#fff",background:"#d46b08",style:m,tab:h},Object(u.a)(5)),c.a.createElement(d.a.Panel,{id:"setting",border:"transparent",color:"#fff",background:"#873800",style:m,tab:"Setting"},Object(u.a)(5)),this.state.showMessage&&c.a.createElement(d.a.Panel,{id:"message",border:"#b7eb8f",background:"#f6ffed",style:m,tab:t},Object(u.a)(5))))}}]),n}(s.Component)},1452:function(e,t){e.exports='/**\n * cn - 受控\n *    -- 通过 active 和 onChange 可以控制标签状态\n * en - Controlled\n *    -- Set active and onChange property to control active state.\n */\nimport React, { Component } from \'react\'\nimport { Radio, Tabs } from \'shineout\'\nimport lorem from \'doc/utils/faker/lorem\'\nimport FontAwsome from \'../Icon/FontAwesome\'\n\nconst panelStyle = { padding: 15 }\nconst contact = (\n  <span>\n    <FontAwsome name="user" />\n    Contact\n  </span>\n)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      tabs: [\'home\', \'profile\', \'contact\', \'setting\', \'message\'],\n      active: \'profile\',\n      showMessage: true,\n    }\n  }\n\n  handleActiveChange = active => this.setState({ active })\n\n  hideMessage = e => {\n    e.stopPropagation()\n    this.setState({\n      tabs: [\'home\', \'profile\', \'contact\', \'setting\'],\n      showMessage: false,\n      active: \'home\',\n    })\n  }\n\n  render() {\n    const { active } = this.state\n\n    const message = (\n      <span>\n        Message\n        <a style={{ color: \'#999\', marginLeft: 10 }} onClick={this.hideMessage}>\n          <FontAwsome name="close" />\n        </a>\n      </span>\n    )\n\n    return (\n      <div>\n        <Radio.Group data={this.state.tabs} keygen value={active} onChange={this.handleActiveChange} />\n\n        <br />\n\n        <Tabs active={active} onChange={this.handleActiveChange}>\n          <Tabs.Panel id="home" border="transparent" background="#ffe7ba" style={panelStyle} tab="Home">\n            {lorem(5)}\n          </Tabs.Panel>\n          <Tabs.Panel id="profile" border="transparent" background="#ffc069" style={panelStyle} tab="Profile">\n            {lorem(5)}\n          </Tabs.Panel>\n          <Tabs.Panel\n            id="contact"\n            border="transparent"\n            color="#fff"\n            background="#d46b08"\n            style={panelStyle}\n            tab={contact}\n          >\n            {lorem(5)}\n          </Tabs.Panel>\n          <Tabs.Panel\n            id="setting"\n            border="transparent"\n            color="#fff"\n            background="#873800"\n            style={panelStyle}\n            tab="Setting"\n          >\n            {lorem(5)}\n          </Tabs.Panel>\n          {this.state.showMessage && (\n            <Tabs.Panel id="message" border="#b7eb8f" background="#f6ffed" style={panelStyle} tab={message}>\n              {lorem(5)}\n            </Tabs.Panel>\n          )}\n        </Tabs>\n      </div>\n    )\n  }\n}\n'},1453:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{shape:"line",defaultActive:1},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1454:function(e,t){e.exports="/**\n * cn - 样式\n *    -- 设置 shape 为 'line'，标签显示为线条\n * en - Shape (line)\n *    -- The line type tabs.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs shape=\"line\" defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1455:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{shape:"button",defaultActive:1},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1456:function(e,t){e.exports="/**\n * cn -\n *    -- 设置 shape 为 'button'，标签显示为按钮\n * en -\n *    -- The button type tabs.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs shape=\"button\" defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1457:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{shape:"dash",defaultActive:1},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1458:function(e,t){e.exports="/**\n * cn -\n *    -- 设置 shape 为 'dash'，标签显示为短线条\n * en -\n *    -- dash tab type\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs shape=\"dash\" defaultActive={1}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1459:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{defaultActive:1,align:"right"},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1460:function(e,t){e.exports="/**\n * cn - 对齐\n *    -- 设置 align=\"right\" 使标签右对齐\n * en - Align\n *    -- set align to 'right' to align labels to the right\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs defaultActive={1} align=\"right\">\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1461:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"0 12px"};t.default=function(){return l.a.createElement(r.a,{defaultActive:1,align:"vertical-left",shape:"line"},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1462:function(e,t){e.exports='/**\n * cn -\n *    -- 设置 align="vertical-left" 使标签垂直靠左\n * en -\n *    -- set align to \'vertical-left\' to align labels to the vertically left\n */\nimport React from \'react\'\nimport { Tabs } from \'shineout\'\nimport lorem from \'doc/utils/faker/lorem\'\n\nconst panelStyle = { padding: \'0 12px\' }\n\nexport default function() {\n  return (\n    <Tabs defaultActive={1} align="vertical-left" shape="line">\n      <Tabs.Panel style={panelStyle} tab="Home">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab="Profile">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab="Contact">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n'},1463:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"0 12px"};t.default=function(){return l.a.createElement(r.a,{defaultActive:1,align:"vertical-right"},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1464:function(e,t){e.exports="/**\n * cn -\n *    -- 设置 align=\"vertical-right\" 使标签垂直靠右\n * en -\n *    -- set align to 'vertical-right' to align labels to the vertically right\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '0 12px' }\n\nexport default function() {\n  return (\n    <Tabs defaultActive={1} align=\"vertical-right\">\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1465:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(506),i={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{shape:"line",collapsible:!0},l.a.createElement(r.a.Panel,{style:i,tab:"Home"},Object(o.a)(5)),l.a.createElement(r.a.Panel,{style:i,tab:"Profile"},Object(o.a)(6)),l.a.createElement(r.a.Panel,{style:i,tab:"Contact"},Object(o.a)(4)))}},1466:function(e,t){e.exports="/**\n * cn - 展开\n *    -- 设置 collapsible 为 true，会出现可展开图标，点击图标或 Tabs 头部空白区域，展开/折起内容。\n * en - Collapsible\n *    -- Set the collapsible property to true, will show the arrow icon. User can click icon or header to expand/collapse the content.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs shape=\"line\" collapsible>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1467:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1518),o=n(47),i=n(506),s={padding:"12px 0"};t.default=function(){return l.a.createElement(r.a,{defaultActive:1,style:{height:200},tabBarExtraContent:l.a.createElement(o.a,{type:"link"},"extra")},l.a.createElement(r.a.Panel,{style:s,tab:"Home"},Object(i.a)(5)),l.a.createElement(r.a.Panel,{style:s,tab:"Profile"},Object(i.a)(6)),l.a.createElement(r.a.Panel,{style:s,tab:"Contact"},Object(i.a)(4)))}},1468:function(e,t){e.exports="/**\n * cn - 额外内容\n *    -- 可以在标签页的右侧添加额外内容\n * en - Extra Content\n *    -- Can add extra content on the right side of the tab\n */\nimport React from 'react'\nimport { Tabs, Button } from 'shineout'\n\n// lorem can return a radom string\nimport lorem from 'doc/utils/faker/lorem'\n\nconst panelStyle = { padding: '12px 0' }\n\nexport default function() {\n  return (\n    <Tabs defaultActive={1} style={{ height: 200 }} tabBarExtraContent={<Button type=\"link\">extra</Button>}>\n      <Tabs.Panel style={panelStyle} tab=\"Home\">\n        {lorem(5)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Profile\">\n        {lorem(6)}\n      </Tabs.Panel>\n      <Tabs.Panel style={panelStyle} tab=\"Contact\">\n        {lorem(4)}\n      </Tabs.Panel>\n    </Tabs>\n  )\n}\n"},1469:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var l=n(4),r=n(5),o=n(6),i=n(3),s=n(7),a=n(0),c=n.n(a),b=n(1518),d=n(87),u=function(e){function a(e){var t;Object(l.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).handleChange=function(e){t.setState({active:e})};var n=window.location.href;return t.state={active:-1===n.indexOf("#heading-11-link")?1:0},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,{active:this.state.active,onChange:this.handleChange,shape:"line"},c.a.createElement(b.a.Link,{href:"#tab-href"},"Href"),c.a.createElement(b.a.Link,null,c.a.createElement(d.a,{to:"#tab-link"},"Link")))}}]),a}(c.a.Component)},1470:function(e,t){e.exports="/**\n * cn - 链接\n *    -- 使用链接作为标签\n * en - Link\n *    -- Use link as every tab.\n */\nimport React from 'react'\nimport { Tabs } from 'shineout'\nimport { Link } from 'react-router-dom'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n\n    const { href } = window.location\n    this.state = {\n      active: href.indexOf('#heading-11-link') === -1 ? 1 : 0,\n    }\n  }\n\n  handleChange = v => {\n    this.setState({ active: v })\n  }\n\n  render() {\n    return (\n      <Tabs active={this.state.active} onChange={this.handleChange} shape=\"line\">\n        <Tabs.Link href=\"#tab-href\">Href</Tabs.Link>\n\n        <Tabs.Link>\n          <Link to=\"#tab-link\">Link</Link>\n        </Tabs.Link>\n      </Tabs>\n    )\n  }\n}\n"},1518:function(e,t,n){"use strict";var c=n(11),a=n(4),l=n(5),r=n(6),o=n(3),i=n(7),s=n(1),v=n(0),y=n.n(v),b=n(10),d=n.n(b),u=n(17),m=n(32),p=n(25),h=n(41),f=n(47),g=n(33),j=n(15),T=n(2),O=n(19),P=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).getActiveStyle=t.getActiveStyle.bind(Object(s.a)(Object(s.a)(t))),t.handleClick=t.handleClick.bind(Object(s.a)(Object(s.a)(t))),t.uid="tab_unique_".concat(Object(O.c)()),t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(O.a)(function(){e.props.isActive&&e.handleClick(!0)})}},{key:"getActiveStyle",value:function(){var e=this.props,t=e.shape,n=e.align,a=e.background,l=e.color,r=e.border,o=e.isActive,i=e.isVertical;if("line"===t||"dash"===t)return{};var s={background:a,color:l};return"bordered"===t?{background:a}:("line"===t||i||(s.borderColor="".concat(r," ").concat(r," ").concat(o?a:r," ").concat(r)),"line"!==t&&"vertical-left"===n&&(s.borderColor="".concat(r," ").concat(o?a:r,"  ").concat(r," ").concat(r)),"line"!==t&&"vertical-right"===n&&(s.borderColor="".concat(r," ").concat(r," ").concat(r," ").concat(o?a:r)),s)}},{key:"handleClick",value:function(e){var t=this.props,n=t.onClick,a=t.id,l=t.isActive,r=t.disabled,o=t.last;r||(!0!==e&&n(a,l),this.element||(this.element=document.querySelector(".".concat(this.uid))),this.element&&this.element.getBoundingClientRect&&this.props.moveToCenter(this.element.getBoundingClientRect(),o,0===a))}},{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.disabled,a=e.children,l=e.shape,r=this.getActiveStyle(),o="bordered"===l,i={className:d()(Object(T.G)("tab",t&&(o?"tab-bordered-active":"active"),n&&"disabled",o&&"tab-bordered"),this.uid),onClick:this.handleClick,style:r};return a.type&&a.type.isTabLink?y.a.cloneElement(a,Object(j.a)({},i)):y.a.createElement("div",i,a)}}]),n}(v.PureComponent);P.defaultProps={border:"transparent"};var k=P,C=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).state={attribute:0,overflow:!1},t.setPosition=t.setPosition.bind(Object(s.a)(Object(s.a)(t))),t.bindInner=t.bindElement.bind(Object(s.a)(Object(s.a)(t)),"innerElement"),t.bindWrapper=t.bindElement.bind(Object(s.a)(Object(s.a)(t)),"wrapperElement"),t.bindScroll=t.bindElement.bind(Object(s.a)(Object(s.a)(t)),"scrollElement"),t.renderTab=t.renderTab.bind(Object(s.a)(Object(s.a)(t))),t.handleClick=t.handleClick.bind(Object(s.a)(Object(s.a)(t))),t.handlePrevClick=t.handleMove.bind(Object(s.a)(Object(s.a)(t)),!0),t.handleNextClick=t.handleMove.bind(Object(s.a)(Object(s.a)(t)),!1),t.moveToCenter=t.moveToCenter.bind(Object(s.a)(Object(s.a)(t))),t.handleCollapse=t.handleCollapse.bind(Object(s.a)(Object(s.a)(t))),t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){Object(p.a)(Object(o.a)(n.prototype),"componentDidMount",this).call(this);var e=this.props.isVertical;this.setPosition(e)}},{key:"componentDidUpdate",value:function(){var e=this.props.isVertical;this.setPosition(e)}},{key:"setPosition",value:function(e){var t=e?"Height":"Width";if(this.innerElement){var n=this.innerElement["client".concat(t)],a=this.scrollElement["client".concat(t)],l=this.state.attribute;this.setState({overflow:l+n<a,attributeString:t})}}},{key:"bindElement",value:function(e,t){this[e]=t}},{key:"handleMove",value:function(e){var t=this.state,n=t.attributeString,a=t.attribute,l=this.innerElement["client".concat(n)],r=this.scrollElement["client".concat(n)],o=a+(e?-l:l);o<0&&(o=0),r<o+l&&(o=r-l),this.setState({attribute:o})}},{key:"moveToCenter",value:function(t,n,a){var l=this.props.isVertical?["top","bottom"]:["left","right"],r=this.innerElement.getBoundingClientRect();t[l[0]]<r[l[0]]?this.setState(Object(h.a)(function(e){e.attribute-=r[l[0]]-t[l[0]]+(a?0:30)})):t[l[1]]>r[l[1]]&&this.setState(Object(h.a)(function(e){e.attribute+=t[l[1]]-r[l[1]]-(0===e.attribute?-30:0)+(n?0:30)}))}},{key:"handleClick",value:function(e,t){var n=this;t||(this.props.onChange&&this.props.onChange(e),this.ignoreNextCollapse=!0,setTimeout(function(){return n.handleCollapse(!1)},200))}},{key:"handleCollapse",value:function(e){var t=this.props,n=t.onCollapse,a=t.collapsed;n&&("boolean"!=typeof e?this.ignoreNextCollapse?this.ignoreNextCollapse=!1:n(!a):n(e))}},{key:"renderTab",value:function(e){var t=e.tab,n=e.id,a=Object(c.a)(e,["tab","id"]);return y.a.createElement(k,Object.assign({},a,{key:n,id:n,moveToCenter:this.moveToCenter,onClick:this.handleClick}),t)}},{key:"renderButtons",value:function(){var t=this,e=this.props,n=e.onChange,a=e.tabs;return y.a.createElement(f.a.Group,null,a.map(function(e){return y.a.createElement(f.a,{key:e.id,onClick:e.isActive?void 0:n.bind(t,e.id),className:Object(T.G)(e.isActive&&"button-active"),disabled:e.disabled},e.tab)}))}},{key:"renderTabs",value:function(){var e=this.props,t=e.border,n=e.onCollapse,a=e.collapsed,l=e.tabs,r=e.isVertical,o=e.tabBarExtraContent,i=e.tabBarStyle,s=e.shape,c=this.state,b=c.attribute,d=c.overflow,u=r?"Top":"Left",p="bordered"!==s&&"dash"!==s;return y.a.createElement("div",{onClick:this.handleCollapse,className:Object(T.G)("header"),style:i||{}},y.a.createElement("div",{ref:this.bindWrapper,className:Object(T.G)("header-tabs")},n&&y.a.createElement("span",{className:Object(T.G)("indicator",a&&"collapsed")},g.a.AngleRight),0<b&&y.a.createElement("div",{onClick:this.handlePrevClick,className:Object(T.G)("scroll-prev")},g.a.AngleLeft),y.a.createElement("div",{ref:this.bindInner,className:Object(T.G)("inner")},y.a.createElement("div",{ref:this.bindScroll,style:Object(m.a)({},"margin".concat(u),-b),className:Object(T.G)("scroll")},l.map(this.renderTab))),d&&y.a.createElement("div",{onClick:this.handleNextClick,className:Object(T.G)("scroll-next")},g.a.AngleRight)),o&&y.a.createElement("div",{className:Object(T.G)("extra")},o),p&&y.a.createElement("div",{style:{borderColor:t},className:Object(T.G)("hr")}))}},{key:"render",value:function(){return"button"===this.props.shape?this.renderButtons():this.renderTabs()}}]),n}(u.b),E=n(56),x=Object(E.a)(["collapse"],"fast"),S=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).isPristine=!0,t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.background,a=e.color,l=e.isActive,r=e.collapsible,o=e.collapsed,i=e.lazy;if(!l&&this.isPristine&&i)return null;this.isPristine=!1;var s=Object.assign({background:n||"#fff",color:a},this.props.style),c=d()(Object(T.G)("panel",l&&"show"),this.props.className),b=y.a.createElement("div",{style:s,className:c},t);return r?y.a.createElement(x,{show:!o},b):b}}]),n}(v.PureComponent);S.isTabPanel=!0;var A=S,w=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.id,a=Object(c.a)(e,["active","id"]);return y.a.createElement(A,Object.assign({},a,{isActive:n===t}))}}]),t}(v.PureComponent),N=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).state={active:e.defaultActive||0,collapsed:e.defaultCollapsed},t.getAlign=t.getAlign.bind(Object(s.a)(Object(s.a)(t))),t.handleChange=t.handleChange.bind(Object(s.a)(Object(s.a)(t))),t.handleCollapse=t.handleCollapse.bind(Object(s.a)(Object(s.a)(t))),t.renderContent=t.renderContent.bind(Object(s.a)(Object(s.a)(t))),t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"getAlign",value:function(){var e=this.props,t=e.shape,n=e.collapsible,a=e.align,l=a&&-1<a.indexOf("vertical");return"button"===t&&l?(console.warn("align vertical-* can't supported when shape is button"),{align:"left",isVertical:!1}):n&&l?(console.warn("align vertical-* can't supported when collapsible is true"),{align:"left",isVertical:!1}):{align:a,isVertical:l}}},{key:"getActive",value:function(){return"active"in this.props?this.props.active:this.state.active}},{key:"handleChange",value:function(e){var t=this.props.onChange;t&&t(e),this.setState({active:e})}},{key:"handleCollapse",value:function(e){this.setState({collapsed:e})}},{key:"renderHeader",value:function(e){var c=this,b=e.align,d=e.isVertical,t=this.props,n=t.children,u=t.color,p=t.shape,a=t.tabBarStyle,m=t.inactiveBackground,l=t.collapsible,r=t.tabBarExtraContent,h=this.getActive(),f=[],g=this.props.border;return v.Children.toArray(n).forEach(function(e,t,n){if(e&&e.type){var a=null;if(e.type.isTabPanel)a=e.props.tab;else{if(!e.type.isTabLink)return;a=e}var l=e.props,r=l.id,o=void 0===r?t:r,i=l.background,s=e.props.border;h===o&&(s?g=s:s=g),f.push({id:o,isActive:h===o,tab:a,isVertical:d,align:b,background:i||(h===o?c.props.background:m),border:s,color:e.props.color||(h===o?u:void 0),disabled:e.props.disabled,shape:p,last:n.length-1===t})}}),y.a.createElement(C,{isVertical:d,border:g,collapsed:this.state.collapsed,onCollapse:l?this.handleCollapse:void 0,shape:p,onChange:this.handleChange,tabs:f,tabBarExtraContent:r,tabBarStyle:a})}},{key:"renderContent",value:function(e,t){if(!(e&&e.type&&e.type.isTabPanel))return null;var n=this.props,a=n.collapsible,l=n.lazy,r=e.props,o=r.id,i=void 0===o?t:o,s=Object(c.a)(r,["id"]);return y.a.createElement(w,Object.assign({},s,{lazy:l,collapsed:this.state.collapsed,collapsible:a,id:i,key:i,active:this.getActive()}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.shape,a=e.style,l=this.getAlign(),r=l.align,o=l.isVertical,i=d()(Object(T.G)("_",r&&"align-".concat(r),o&&"vertical",n),this.props.className);return y.a.createElement("div",{className:i,style:a},"vertical-right"!==r&&"bottom"!==r&&this.renderHeader(l),v.Children.toArray(t).map(this.renderContent),("vertical-right"===r||"bottom"===r)&&this.renderHeader(l))}}]),n}(u.b);N.defaultProps={background:"#fff",border:"#ddd",color:"#333",defaultCollapsed:!1,inactiveBackground:"transparent",lazy:!0};var B=N,R=n(13),H=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.href,a=e.className,l=Object(c.a)(e,["children","href","className"]),r=d()(a,Object(T.G)("link")),o=Object(j.a)({className:r,href:n},l);return Object(R.g)(t)?(t.props.onClick&&(o.onClick=function(){t.props.onClick(),l.onClick()}),y.a.cloneElement(t,Object(j.a)({},o))):y.a.createElement("a",o,t)}}]),t}(v.PureComponent);H.isTabLink=!0;var M=H;B.Panel=A,B.Link=M,B.displayName="ShineoutTabs";t.a=B},501:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});var a=n(0),l=n.n(a),r=n(28),o=n.n(r)()(),i=o.Provider,s=function(n){return function(t){return l.a.createElement(o.Consumer,null,function(e){return l.a.createElement(n,Object.assign({},t,e))})}}},524:function(e,t,n){"use strict";var a=n(20),l=n(50),r=n(67),b=n(501),o=n(4),i=n(5),s=n(6),c=n(3),d=n(25),u=n(7),p=n(1),m=n(0),h=n.n(m),f=n(10),g=n.n(f),v=n(17),y=n(19),j=n(9),T=n(2),O=n(149),P=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(p.a)(Object(p.a)(t))),t.handleUpdate=t.forceUpdate.bind(Object(p.a)(Object(p.a)(t))),t.handleRawChange=t.handleRawChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){Object(d.a)(Object(c.a)(n.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(j.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(d.a)(Object(c.a)(n.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(j.a,this.handleUpdate)}},{key:"getContent",value:function(e){var t=this.props.renderItem;return"string"==typeof t?e[t]:"function"==typeof t?t(e):""}},{key:"handleClick",value:function(e,t,n){var a=this.props,l=a.data;a.datum.set(l[n])}},{key:"handleRawChange",value:function(e){this.props.datum.set(e)}},{key:"render",value:function(){var n=this,e=this.props,t=e.block,a=e.data,l=e.datum,r=e.keygen,o=e.children,i=e.button,s=e.size,c=g()(Object(T.h)("group",t&&"block",i&&"button","outline"===i&&"outline",i&&s),this.props.className);return void 0===a?h.a.createElement("div",{className:c},h.a.createElement(b.a,{value:{onRawChange:this.handleRawChange,checked:l.check.bind(l)}},o)):h.a.createElement("div",{className:c},a.map(function(e,t){return h.a.createElement(O.a,{checked:l.check(e),disabled:l.disabled(e),key:Object(y.b)(e,r,t),htmlValue:t,index:t,onChange:n.handleClick},n.getContent(e))}),o)}}]),n}(v.b);P.defaultProps={renderItem:function(e){return e}};var k=P,C=Object(b.b)(O.a);C.Group=Object(a.a)(l.a,r.a.hoc({limit:1,bindProps:["disabled","format","prediction"],pure:!1}))(k),C.displayName="ShineoutRadio",C.Group.displayName="ShineoutRadioGroup";t.a=C}}]);