(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{7460:function(e,s,t){Promise.resolve().then(t.bind(t,3341))},1295:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return o},unstable_getImgProps:function(){return c}});let a=t(1024),l=t(2301),r=t(7873),i=t(3222),n=a._(t(5033)),c=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:s}=(0,l.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},o=i.Image},3341:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var a=t(7437);t(2265);var l=t(6691),r=t.n(l),i=t(1396),n=t.n(i),c=t(1463);let o=async(e,s)=>{let t=await fetch("http://localhost:3000/api/posts?page=".concat(e,"&cat=").concat(s||""),{cache:"no-store"});if(!t.ok)throw Error("Failed to get categories");return t.json()},d=async e=>{let{page:s,cat:t}=e,{posts:l,count:i}=await o(s,t);return(0,a.jsxs)("div",{className:"flex-[70%]",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold",children:"Recent Posts"}),null==l?void 0:l.map(e=>(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"flex justify-between gap-14 mt-10",children:[(0,a.jsx)("div",{className:"relative h-[350px] flex-1",children:(0,a.jsx)(r(),{src:e.img,alt:"image",fill:!0,className:"object-cover"})}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("span",{className:"text-gray-400",children:e.createdAt.substring(0,10)}),(0,a.jsx)("span",{className:"text-red-500 uppercase",children:e.catSlug.toUpperCase()})]}),(0,a.jsx)(n(),{href:"/post/".concat(e.slug),className:"text-xl font-bold",children:e.title}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ducimus voluptates, perspiciatis natus autem earum praesentium dolor magnam accusantium ab enim rerum numquam, eius doloribus? Animi quasi perspiciatis cum iure eligendi, voluptate fugiat inventore quis!"}),(0,a.jsx)(n(),{href:"/post/".concat(e.slug),className:"py-2 border-b border-red-500 w-[90px] text-center hover:text-red-500 transition-all",children:"Read More"})]})]})},e._id)),(0,a.jsx)(c.default,{page:s,count:i})]})},m=[{id:1,name:"Style",img:"/style.png"},{id:2,name:"Fashion",img:"/fashion.png"},{id:3,name:"Food",img:"/food.png"},{id:4,name:"Travel",img:"/travel.png"},{id:5,name:"Culture",img:"/culture.png"},{id:6,name:"Coding",img:"/coding.png"}];var x=()=>{let e=m.map(e=>(0,a.jsx)(n(),{href:"/",className:" bg-blue-500  py-2 rounded-lg w-[80px] text-sm text-center",children:e.name},e.id));return(0,a.jsxs)("div",{className:"flex-[30%]",children:[(0,a.jsx)("span",{className:"text-gray-400",children:"What's hot?"}),(0,a.jsx)("h3",{className:"text-4xl font-bold mt-4",children:"Most Popular"}),(0,a.jsxs)("div",{className:"mt-10 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-red-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Travel"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odio earum et accusantium consequatur animi?"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]}),(0,a.jsxs)("div",{className:"mt-10 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-yellow-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Culture"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odio earum et accusantium consequatur animi?"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]}),(0,a.jsxs)("div",{className:"mt-10 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-blue-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Coding"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odio earum et accusantium consequatur animi?"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]}),(0,a.jsxs)("div",{className:"mt-10 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-green-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Fashion"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odio earum et accusantium consequatur animi?"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("span",{className:"text-gray-400",children:"Discover by Topic"}),(0,a.jsx)("h3",{className:"text-4xl font-bold mt-4",children:"Categories"}),(0,a.jsx)("div",{className:"flex gap-4 flex-wrap mt-10",children:e})]}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("span",{className:"text-gray-400",children:"Chosen by the editor"}),(0,a.jsx)("h3",{className:"text-4xl font-bold mt-4",children:"Editor's pick"}),(0,a.jsxs)("div",{className:"flex gap-4 mt-10",children:[(0,a.jsx)("div",{className:"w-16 h-16 relative",children:(0,a.jsx)(r(),{src:"/p1.jpeg",alt:"editor img",fill:!0,className:"rounded-full object-cover "})}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-red-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Travel"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus reprehenderit laboriosam magni nobis aperiam!"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]})]}),(0,a.jsxs)("div",{className:"flex gap-4 mt-10",children:[(0,a.jsx)("div",{className:"w-16 h-16 relative",children:(0,a.jsx)(r(),{src:"/p1.jpeg",alt:"editor img",fill:!0,className:"rounded-full object-cover "})}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-yellow-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Culture"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus reprehenderit laboriosam magni nobis aperiam!"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]})]}),(0,a.jsxs)("div",{className:"flex gap-4 mt-10",children:[(0,a.jsx)("div",{className:"w-16 h-16 relative",children:(0,a.jsx)(r(),{src:"/p1.jpeg",alt:"editor img",fill:!0,className:"rounded-full object-cover "})}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"bg-blue-500 px-2 py-1 rounded-xl w-20 text-center text-sm",children:"Coding"}),(0,a.jsx)("p",{className:"text-gray-400 text-sm",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus reprehenderit laboriosam magni nobis aperiam!"}),(0,a.jsxs)("div",{className:"flex gap-4 text-sm",children:[(0,a.jsx)("span",{children:"John Doe"}),(0,a.jsx)("span",{children:"09.09.2023"})]})]})]})]})]})},u=e=>{let{searchParams:s}=e,t=parseInt(s.page)||1,{cat:l}=s;return(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("h1",{className:"text-3xl bg-red-500 px-3 py-3 w-[300px] text-center rounded-xl capitalize",children:"".concat(l," Articles")}),(0,a.jsxs)("div",{className:"flex py-10 mt-10 gap-[150px]",children:[(0,a.jsx)(d,{page:t,cat:l}),(0,a.jsx)(x,{})]})]})}},1463:function(e,s,t){"use strict";t.r(s);var a=t(7437),l=t(4033);t(2265);var r=t(9150);s.default=e=>{let{page:s,count:t}=e,i=(0,l.useRouter)();return(0,a.jsxs)("div",{className:"flex justify-between mt-16",children:[(0,a.jsxs)("button",{className:"flex gap-2 bg-blue-500 px-3 py-2 w-[120px] justify-center rounded-lg items-center disabled:cursor-not-allowed",onClick:()=>i.push("?page=".concat(s-1)),disabled:!(5*(s-1)>0),children:[(0,a.jsx)(r.kyg,{}),"Previous"]}),(0,a.jsxs)("button",{className:"flex gap-2 bg-blue-500 px-3 py-2 w-[120px] justify-center  rounded-lg items-center disabled:cursor-not-allowed",onClick:()=>i.push("?page=".concat(s+1)),disabled:!(5*s<t),children:["Next",(0,a.jsx)(r.mGl,{})]})]})}},6691:function(e,s,t){e.exports=t(1295)},1396:function(e,s,t){e.exports=t(6685)},4033:function(e,s,t){e.exports=t(8165)},1172:function(e,s,t){"use strict";t.d(s,{w_:function(){return c}});var a=t(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(l),i=function(){return(i=Object.assign||function(e){for(var s,t=1,a=arguments.length;t<a;t++)for(var l in s=arguments[t])Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);return e}).apply(this,arguments)},n=function(e,s){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>s.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>s.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};function c(e){return function(s){return a.createElement(o,i({attr:i({},e.attr)},s),function e(s){return s&&s.map(function(s,t){return a.createElement(s.tag,i({key:t},s.attr),e(s.child))})}(e.child))}}function o(e){var s=function(s){var t,l=e.attr,r=e.size,c=e.title,o=n(e,["attr","size","title"]),d=r||s.size||"1em";return s.className&&(t=s.className),e.className&&(t=(t?t+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,l,o,{className:t,style:i(i({color:e.color||s.color},s.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==r?a.createElement(r.Consumer,null,function(e){return s(e)}):s(l)}}},function(e){e.O(0,[712,435,144,971,596,744],function(){return e(e.s=7460)}),_N_E=e.O()}]);