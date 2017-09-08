webpackJsonp([2],{139:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WORK_VIEW_CONTENT=t.CURRENT_PERSONAL_PROJECTS=t.ALL_WORK_SOFTWARE=t.CURRENT_WORK_SOFTWARE=void 0;var r=o(79),l=a(r),n=o(95),i=t.CURRENT_WORK_SOFTWARE=[{title:"Full Stack Developer",projectNames:"WorkHands",company:"WorkHands",shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,'"LinkedIn for the Blue Collar World"'),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,["Develop Angular view components","Built Cordova iOS and Android web wrapper","Manage mobile deployment process","Implemented minor features in Ruby on Rails"]),href:"https://www.workhands.us/",favicon:"",location:["San Francisco, CA","Remote"],tags:["Web","Mobile","JS","Angular","Cordova","iOS","Android","HAML","SASS","HTML","CSS","Ruby on Rails"],dates:[{start:new Date("06/01/2016")},{start:new Date("05/01/2015"),end:new Date("01/01/2016")}]}],s=(t.ALL_WORK_SOFTWARE=i.concat([{title:"Web Developer/Designer (Contract)",projectNames:"COSMOS, Luzero",company:"Kimera Systems",shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Energy Utilization Visualizations for Power Grids in Latin America"),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,["Developed and contributed to the design of various D3 Data Graphs","Implemented the SPA (Single Page Application) view components in React"]),href:"http://kimerasystems.io/",favicon:"",location:["Remote"],tags:["Web","JS","D3","React","SASS","CSS","HTML","SVG"],dates:[{start:new Date("09/26/2016"),end:new Date("07/31/2017")}]},{title:"Application Engineer",projectNames:"Society6",company:"Leaf Group",tags:["Web","JS","React","SASS","CSS","PHP","HTML","jQuery"],shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Artistic eCommerce Printing Site"),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,["Contributed to and partially oversaw the development of the Artist Upload Studio","Completely rebuilt the Product Page front-end using React"]),href:"https://society6.com/",location:["Los Angeles, CA"],dates:[{start:new Date("02/24/2016"),end:new Date("09/01/2016")}]},{title:"Web Development Intern",projectNames:"Copy.com",company:"Barracuda Networks",tags:["Web","JS","Backbone","Marionette","LESS","HTML","CSS","PHP"],shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Consumer Cloud Storage"),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,["Contributed to the development of a new file browser front-end using Backbone/Marionette","Built web views to present various file-types\n        (Ex. Audio/Video player for .mp3, .mp4, Office 365 iframe for .doc, .csv, PDF viewer, etc.)"]),href:"https://copy.com/",location:["Ann Arbor, MI"],dates:[{start:new Date("04/01/2014"),end:new Date("05/01/2015")}]},{title:"Web Development Intern",projectNames:"ADMI",company:"ADMI",tags:["Web","JS","ColdFusion","jQuery","HTML","CSS","Office 365","IT"],shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Automotive Dealer Management, Inc."),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,["Implemented various features in Vanilla Javascript and jQuery","Scaffolded new pages in ColdFusion","Set up the company-wide Office 365 mail server"]),href:"http://admiglobal.com/",location:["Ann Arbor, MI"],dates:[{start:new Date("02/01/2014"),end:new Date("04/01/2014")}]},{title:"Web Developer/Designer",projectNames:"Videolog.tv",company:"Videolog",tags:["Web","JS","CSS","PHP","HTML","jQuery"],shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Brazilian Youtube of Yore"),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,["Reorganized and centralized CSS","Built UIs in JS and HTML/PHP","Learned a great deal of Portuguese!"]),href:"https://www.linkedin.com/company/2630358/",location:["Rio de Janeiro, Brazil"],dates:[{start:new Date("05/01/2013"),end:new Date("10/01/2013")}]}]),t.CURRENT_PERSONAL_PROJECTS=[{title:"JakeHash.com",projectNames:"JakeHash.com",role:"I am Jake Hash",shortDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Personal Portfolio"),workDescription:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Personal Portfolio"),link:"/",favicon:"",location:["Remote"],tags:["Web","JS","React","Redux","Node.js","HTML","CSS"],dates:[{start:new Date("01/01/2015")}]}],t.WORK_VIEW_CONTENT={softwareWorkTitle:(0,l.default)({},n.DEFAULT_LANGUAGE_CODE,"Software")});t.default=s},330:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WorkCell=void 0;var r=o(30),l=a(r),n=o(23),i=a(n),s=o(31),c=a(s),d=o(33),u=a(d),_=o(32),w=a(_),f=o(3),p=a(f);o(618);var m=t.WorkCell=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,w.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return p.default.createElement("div",{className:"work-cell"},p.default.createElement("div",{className:"row work-cell__row work-cell__row--1"},p.default.createElement("div",{className:"six columns work-cell__row__side work-cell__row--1__left"},this.props.rowOneLeft),p.default.createElement("div",{className:"six columns work-cell__row__side work-cell__row--1__right"},p.default.createElement("span",{className:"work-cell__row--1__right__text"},this.props.rowOneRight))),p.default.createElement("div",{className:"row work-cell__row work-cell__row--2"},p.default.createElement("div",{className:"six columns work-cell__row__side work-cell__row--2__left"},this.props.rowTwoLeft),p.default.createElement("div",{className:"six columns work-cell__row__side work-cell__row--2__right"},this.props.rowTwoRight)),p.default.createElement("div",{className:"row work-cell__row work-cell__row--3"},p.default.createElement("div",{className:"twelve columns"},this.props.rowThree)),p.default.createElement("div",{className:"row work-cell__row work-cell__row--4"},p.default.createElement("div",{className:"twelve columns"},this.props.rowFour)),p.default.createElement("div",{className:"row work-cell__row work-cell__row--5"},p.default.createElement("div",{className:"twelve columns"},this.props.rowFive)))}}]),t}(p.default.Component);m.propTypes={rowOneLeft:p.default.PropTypes.node.isRequired,rowOneRight:p.default.PropTypes.node.isRequired,rowTwoLeft:p.default.PropTypes.node.isRequired,rowTwoRight:p.default.PropTypes.node.isRequired,rowThree:p.default.PropTypes.node.isRequired,rowFour:p.default.PropTypes.node.isRequired,rowFive:p.default.PropTypes.node.isRequired},t.default=m},360:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WorkView=void 0;var r=o(53),l=a(r),n=o(3),i=a(n),s=o(78);o(629);var c=o(108),d=o(139),u=o(330),_=a(u),w=t.WorkView=function(e){return i.default.createElement("div",{className:"view--work row"},i.default.createElement("div",{className:"view--work__tab twelve columns text-left"},i.default.createElement("div",{className:"view--work__tab__table"},i.default.createElement("h4",{className:"view--work__tab__table__section-title"},(0,c.resolveLocalizationGet)(d.WORK_VIEW_CONTENT,"softwareWorkTitle")),i.default.createElement("div",null,d.ALL_WORK_SOFTWARE.map(function(e,t){var o=i.default.createElement(_.default,{key:"view-work-work-cell-"+t,rowOneLeft:(0,c.resolveLocalizationGet)(e,"company"),rowOneRight:e.location.join(", "),rowTwoLeft:(0,c.resolveLocalizationGet)(e,"title"),rowTwoRight:l.default.map(l.default.sortBy(e.dates,"start"),function(t,o){return i.default.createElement("span",{key:"view-work-date-"+o},t.start?i.default.createElement("span",null,t.start.toLocaleDateString(),t.end?null:"+"):null,t.end?i.default.createElement("span",null,t.start?" - ":null,t.end.toLocaleDateString()):null,e.dates.length>1&&0===o?", ":null)}),rowThree:i.default.createElement("span",{className:"view--work__description"},(0,c.resolveLocalizationGet)(e,"projectNames"),e.shortDescription?" - "+(0,c.resolveLocalizationGet)(e,"shortDescription"):""),rowFour:i.default.createElement("span",{className:"view--work__description"},i.default.createElement("ul",{className:"view--work__description__list"},(0,c.resolveLocalizationGet)(e,"workDescription").map(function(e,t){return i.default.createElement("li",{key:t,className:"view--work__description__list__item"},e)}))),rowFive:i.default.createElement("div",{className:"view--work__tag-wrapper"},l.default.map(e.tags,function(e,t){return i.default.createElement("span",{className:"view--work__tag",key:"view-work-tag-"+t},e)}))});return l.default.get(e,"link")?i.default.createElement(s.Link,{className:"work-cell-link",key:"work-"+t,to:l.default.get(e,"link")},o):i.default.createElement("a",{className:"work-cell-link",key:"work-"+t,href:l.default.get(e,"href"),target:"_blank"},o)})))))};w.propTypes={},t.default=w},361:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(106),l=o(360),n=a(l),i={},s=function(e){return{}};t.default=(0,r.connect)(s,i)(n.default)},618:616,629:616});