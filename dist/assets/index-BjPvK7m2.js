const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/p5.min-BMins5x1.js","assets/react-vendor-BAlkloF7.js"])))=>i.map(i=>d[i]);
var fl=Object.defineProperty;var pl=(i,e,t)=>e in i?fl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xn=(i,e,t)=>pl(i,typeof e!="symbol"?e+"":e,t);import{r as _e,a as ml,u as gl,b as vl,L as cn,c as uo,B as xl,R as _l,d as On}from"./react-vendor-BAlkloF7.js";import{i as yl,a as Sl,u as Un}from"./i18n-vendor-B4d2D-rU.js";import{C as Ml,X as fo,M as bl,Z as El,U as xs,A as Tl,a as Ls,B as wl,V as rr,b as Al,c as Cl,L as Rl,T as Pl,d as Nl,e as Ll,S as po,f as Dl,P as Il,g as Ul,h as mo,i as tr,j as go,E as vo,k as xi,F as rs,l as xo,m as Ol,n as Ds,D as _o,o as Fl,p as Bl,q as zl,r as kl,s as Gl,t as Hl,u as Vl,v as jl,w as Mr,x as Wl,y as Xl}from"./ui-vendor-DWXPcuYH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var yo={exports:{}},hr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ql=_e,Yl=Symbol.for("react.element"),$l=Symbol.for("react.fragment"),Kl=Object.prototype.hasOwnProperty,Zl=ql.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jl={key:!0,ref:!0,__self:!0,__source:!0};function So(i,e,t){var n,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Kl.call(e,n)&&!Jl.hasOwnProperty(n)&&(r[n]=e[n]);if(i&&i.defaultProps)for(n in e=i.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:Yl,type:i,key:s,ref:o,props:r,_owner:Zl.current}}hr.Fragment=$l;hr.jsx=So;hr.jsxs=So;yo.exports=hr;var c=yo.exports,Mo,Is=ml;Mo=Is.createRoot,Is.hydrateRoot;class Ql extends _e.Component{constructor(){super(...arguments);xn(this,"state",{hasError:!1})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("Uncaught error:",t,n)}render(){return this.state.hasError?c.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:c.jsxs("div",{className:"text-center p-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Oops! Something went wrong"}),c.jsx("p",{className:"text-gray-300 mb-4",children:"We're sorry, but something unexpected happened."}),c.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors",onClick:()=>window.location.reload(),children:"Reload Page"})]})}):this.props.children}}function ec(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function yi(i){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yi(i)}function tc(i,e){if(yi(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(yi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}function nc(i){var e=tc(i,"string");return yi(e)=="symbol"?e:e+""}function ic(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,nc(n.key),n)}}function rc(i,e,t){return e&&ic(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}var bo=[],sc=bo.forEach,ac=bo.slice;function oc(i){return sc.call(ac.call(arguments,1),function(e){if(e)for(var t in e)i[t]===void 0&&(i[t]=e[t])}),i}var Us=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,lc=function(e,t,n){var r=n||{};r.path=r.path||"/";var s=encodeURIComponent(t),o="".concat(e,"=").concat(s);if(r.maxAge>0){var a=r.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");o+="; Max-Age=".concat(Math.floor(a))}if(r.domain){if(!Us.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain=".concat(r.domain)}if(r.path){if(!Us.test(r.path))throw new TypeError("option path is invalid");o+="; Path=".concat(r.path)}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires=".concat(r.expires.toUTCString())}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite){var l=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(l){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o},Os={create:function(e,t,n,r){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+n*60*1e3)),r&&(s.domain=r),document.cookie=lc(e,encodeURIComponent(t),s)},read:function(e){for(var t="".concat(e,"="),n=document.cookie.split(";"),r=0;r<n.length;r++){for(var s=n[r];s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(t)===0)return s.substring(t.length,s.length)}return null},remove:function(e){this.create(e,"",-1)}},cc={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&typeof document<"u"){var n=Os.read(e.lookupCookie);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&typeof document<"u"&&Os.create(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},dc={name:"querystring",lookup:function(e){var t;if(typeof window<"u"){var n=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));for(var r=n.substring(1),s=r.split("&"),o=0;o<s.length;o++){var a=s[o].indexOf("=");if(a>0){var l=s[o].substring(0,a);l===e.lookupQuerystring&&(t=s[o].substring(a+1))}}}return t}},di=null,Fs=function(){if(di!==null)return di;try{di=window!=="undefined"&&window.localStorage!==null;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{di=!1}return di},hc={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&Fs()){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&Fs()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},hi=null,Bs=function(){if(hi!==null)return hi;try{hi=window!=="undefined"&&window.sessionStorage!==null;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{hi=!1}return hi},uc={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&Bs()){var n=window.sessionStorage.getItem(e.lookupSessionStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&Bs()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},fc={name:"navigator",lookup:function(e){var t=[];if(typeof navigator<"u"){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},pc={name:"htmlTag",lookup:function(e){var t,n=e.htmlTag||(typeof document<"u"?document.documentElement:null);return n&&typeof n.getAttribute=="function"&&(t=n.getAttribute("lang")),t}},mc={name:"path",lookup:function(e){var t;if(typeof window<"u"){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if(typeof e.lookupFromPathIndex=="number"){if(typeof n[e.lookupFromPathIndex]!="string")return;t=n[e.lookupFromPathIndex].replace("/","")}else t=n[0].replace("/","")}return t}},gc={name:"subdomain",lookup:function(e){var t=typeof e.lookupFromSubdomainIndex=="number"?e.lookupFromSubdomainIndex+1:1,n=typeof window<"u"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(n)return n[t]}},Eo=!1;try{document.cookie,Eo=!0}catch{}var To=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Eo||To.splice(1,1);function vc(){return{order:To,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:function(e){return e}}}var wo=function(){function i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ec(this,i),this.type="languageDetector",this.detectors={},this.init(e,t)}return rc(i,[{key:"init",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=oc(n,this.options||{},vc()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=function(s){return s.replace("-","_")}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(cc),this.addDetector(dc),this.addDetector(hc),this.addDetector(uc),this.addDetector(fc),this.addDetector(pc),this.addDetector(mc),this.addDetector(gc)}},{key:"addDetector",value:function(t){return this.detectors[t.name]=t,this}},{key:"detect",value:function(t){var n=this;t||(t=this.options.order);var r=[];return t.forEach(function(s){if(n.detectors[s]){var o=n.detectors[s].lookup(n.options);o&&typeof o=="string"&&(o=[o]),o&&(r=r.concat(o))}}),r=r.map(function(s){return n.options.convertDetectedLanguage(s)}),this.services.languageUtils.getBestMatchFromCodes?r:r.length>0?r[0]:null}},{key:"cacheUserLanguage",value:function(t,n){var r=this;n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(function(s){r.detectors[s]&&r.detectors[s].cacheUserLanguage(t,r.options)}))}}])}();wo.type="languageDetector";const xc={home:"Home",services:"Services",learning:"Learning",about:"About Us",contact:"Contact",contactNow:"Contact Now"},_c={title:"VizioCraft Design",tagline:"AI & Media Technology Solutions",industry:"Artificial Intelligence • Media Production • Automation",description:"We provide advanced AI solutions, professional media production and intelligent automation. A trusted technology partner helping businesses digitally transform and optimize business processes.",stats:{projectsCompleted:"Projects Completed",clientsServed:"Satisfied Clients",yearsExperience:"Years Experience",teamMembers:"24/7 Support"},cta:{exploreServices:"Explore Services",aboutUs:"About Us"}},yc={title:"Our Services",subtitle:"We provide comprehensive solutions from AI, video production to web development and marketing",aiSolutions:{title:"AI Solutions",description:"Intelligent Agents, Business Process Automation, No-code/Low-code Solutions",features:["Intelligent Agents","Process Automation","AI Analytics","No-code Solutions"]},videoProduction:{title:"Video Production",description:"AI-enhanced Video Creation, 3D Animation, Motion Graphics, Post-production Services",features:["AI Video Creation","3D Animation","Motion Graphics","Post-production"]},webDevelopment:{title:"Web Development",description:"Custom Web Applications, E-commerce Solutions, Progressive Web Apps",features:["Custom Web Apps","E-commerce","Progressive Web Apps","API Development"]},digitalMarketing:{title:"Digital Marketing",description:"Brand Strategy, Content Creation, Social Media Management, SEO Optimization",features:["Brand Strategy","Content Creation","Social Media","SEO Optimization"]},learnMore:"Learn More",cta:{title:"Need consultation on suitable services for your project?",description:"Free consultation contact",button:"Free consultation contact"}},Sc={title:"About VizioCraft Design",subtitle:"We are a team of technology-passionate experts, committed to bringing the most creative AI and media solutions",companyName:"VizioCraft Design",companyDescription:"VizioCraft Design was founded with the vision of becoming a trusted technology partner for businesses wanting to digitally transform and apply AI to business operations.",story:{title:"Our Story",description:"VizioCraft Design was founded with the vision of becoming a trusted technology partner for businesses wanting to digitally transform and apply AI to business operations. With a team of experienced experts in AI, media production and web development, we have helped hundreds of businesses optimize processes and increase operational efficiency."},stats:{founded:"100+",headquarters:"50+",members:"5+",projects:"24/7"},mission:{title:"Innovation",description:"We always pioneer in applying the latest technology to create breakthrough solutions."},vision:{title:"High Quality",description:"Committed to bringing the highest quality products and services, meeting all customer requirements."},values:{partnership:"Sustainable Partnership",excellence:"Excellence"}},Mc={title:"Contact Us",subtitle:"Ready to start your project? Contact us for free consultation",info:{title:"Send us a message",description:"Contact Information",phone:"+848 68 68 99 12",address:"Hanoi, Cau Giay, Vietnam",website:"Website",hours:"Working Hours",schedule:{weekdays:"Monday - Friday:",saturday:"Saturday:",sunday:"Sunday:",weekdaysTime:"8:00 - 18:00",saturdayTime:"9:00 - 17:00",sundayTime:"Closed"}},form:{title:"Send us a message",name:"Full Name",email:"Email",company:"Company / Organization",service:"Service of Interest",message:"Message",required:"*",submit:"Send Message"}},bc={title:"Learning Center",subtitle:"Expand your skills with comprehensive tutorials and courses",tabs:{tutorials:"Tutorials",courses:"Courses"},categories:{all:"All Categories",aiAutomation:"AI & Automation",videoProduction:"Video Production",animationVfx:"Animation & VFX",webDevelopment:"Web Development",marketing:"Marketing"},difficulty:{beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},actions:{watchNow:"Watch Now",enrollNow:"Enroll Now"}},Ec={description:"© 2024 VizioCraft Design. Empowering Digital Innovation with AI & Media Technology.",rights:"All rights reserved.",email:"contact@viziocraft.design"},Tc={loading:"Loading...",error:"An error occurred",backToHome:"Back to Home",readMore:"Read More",viewAll:"View All",getStarted:"Get Started",contactUs:"Contact Us"},wc={name:"Hoang Anh",role:"Virtual Assistant",welcome:"Hello! I'm Hoang Anh, VizioCraft Design's virtual assistant. I can help you learn about our services and answer questions. How can I help you?",placeholder:"Type your message...",suggestedQuestions:"Suggested questions:"},Ac={nav:xc,hero:_c,services:yc,about:Sc,contact:Mc,learning:bc,footer:Ec,common:Tc,assistant:wc},Cc={home:"Trang chủ",services:"Dịch vụ",learning:"Học tập",about:"Về chúng tôi",contact:"Liên hệ",contactNow:"Liên hệ ngay"},Rc={title:"VizioCraft Design",tagline:"AI & Media Technology Solutions",industry:"Artificial Intelligence • Media Production • Automation",description:"Chúng tôi cung cấp giải pháp AI tiên tiến, sản xuất media chuyên nghiệp và automation thông minh. Đối tác công nghệ đáng tin cậy giúp doanh nghiệp chuyển đổi số và tối ưu hóa quy trình kinh doanh.",stats:{projectsCompleted:"Dự án hoàn thành",clientsServed:"Khách hàng hài lòng",yearsExperience:"Năm kinh nghiệm",teamMembers:"Hỗ trợ khách hàng"},cta:{exploreServices:"Khám phá dịch vụ",aboutUs:"Về chúng tôi"}},Pc={title:"Dịch vụ của chúng tôi",subtitle:"Chúng tôi cung cấp giải pháp toàn diện từ AI, sản xuất video đến phát triển web và marketing",aiSolutions:{title:"AI Solutions",description:"Intelligent Agents, Business Process Automation, No-code/Low-code Solutions",features:["Intelligent Agents","Process Automation","AI Analytics","No-code Solutions"]},videoProduction:{title:"Video Production",description:"AI-enhanced Video Creation, 3D Animation, Motion Graphics, Post-production Services",features:["AI Video Creation","3D Animation","Motion Graphics","Post-production"]},webDevelopment:{title:"Web Development",description:"Custom Web Applications, E-commerce Solutions, Progressive Web Apps",features:["Custom Web Apps","E-commerce","Progressive Web Apps","API Development"]},digitalMarketing:{title:"Digital Marketing",description:"Brand Strategy, Content Creation, Social Media Management, SEO Optimization",features:["Brand Strategy","Content Creation","Social Media","SEO Optimization"]},learnMore:"Tìm hiểu thêm",cta:{title:"Bạn cần tư vấn dịch vụ phù hợp cho dự án của mình?",description:"Liên hệ tư vấn miễn phí",button:"Liên hệ tư vấn miễn phí"}},Nc={title:"Về VizioCraft Design",subtitle:"Chúng tôi là đội ngũ chuyên gia đam mê công nghệ, cam kết mang đến những giải pháp AI và media sáng tạo nhất",companyName:"VizioCraft Design",companyDescription:"VizioCraft Design được thành lập với tầm nhìn trở thành đối tác công nghệ đáng tin cậy cho các doanh nghiệp muốn chuyển đổi số và áp dụng AI vào hoạt động kinh doanh.",story:{title:"Câu chuyện của chúng tôi",description:"VizioCraft Design được thành lập với tầm nhìn trở thành đối tác công nghệ đáng tin cậy cho các doanh nghiệp muốn chuyển đổi số và áp dụng AI vào hoạt động kinh doanh. Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực AI, sản xuất media và phát triển web, chúng tôi đã giúp hàng trăm doanh nghiệp tối ưu hóa quy trình và tăng hiệu quả hoạt động."},stats:{founded:"100+",headquarters:"50+",members:"5+",projects:"24/7"},mission:{title:"Đổi mới sáng tạo",description:"Chúng tôi luôn tiên phong trong việc áp dụng công nghệ mới nhất để tạo ra những giải pháp đột phá."},vision:{title:"Chất lượng cao",description:"Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất, đáp ứng mọi yêu cầu của khách hàng."},values:{partnership:"Hợp tác bền vững",excellence:"Xuất sắc"}},Lc={title:"Liên hệ với chúng tôi",subtitle:"Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ với chúng tôi để được tư vấn miễn phí",info:{title:"Gửi tin nhắn cho chúng tôi",description:"Thông tin liên hệ",phone:"+848 68 68 99 12",address:"Hà Nội, Cầu Giấy, Việt Nam",website:"Website",hours:"Giờ làm việc",schedule:{weekdays:"Thứ 2 - Thứ 6:",saturday:"Thứ 7:",sunday:"Chủ nhật:",weekdaysTime:"8:00 - 18:00",saturdayTime:"9:00 - 17:00",sundayTime:"Nghỉ"}},form:{title:"Gửi tin nhắn cho chúng tôi",name:"Họ và tên",email:"Email",company:"Công ty / Tổ chức",service:"Dịch vụ quan tâm",message:"Tin nhắn",required:"*",submit:"Gửi tin nhắn"}},Dc={title:"Learning Center",subtitle:"Mở rộng kỹ năng của bạn với các tutorial và khóa học toàn diện",tabs:{tutorials:"Tutorials",courses:"Courses"},categories:{all:"Tất cả danh mục",aiAutomation:"AI & Automation",videoProduction:"Video Production",animationVfx:"Animation & VFX",webDevelopment:"Web Development",marketing:"Marketing"},difficulty:{beginner:"Cơ bản",intermediate:"Trung cấp",advanced:"Nâng cao"},actions:{watchNow:"Xem ngay",enrollNow:"Đăng ký ngay"}},Ic={description:"© 2024 VizioCraft Design. Empowering Digital Innovation with AI & Media Technology.",rights:"Tất cả quyền được bảo lưu.",email:"contact@viziocraft.design"},Uc={loading:"Đang tải...",error:"Đã xảy ra lỗi",backToHome:"Về trang chủ",readMore:"Đọc thêm",viewAll:"Xem tất cả",getStarted:"Bắt đầu",contactUs:"Liên hệ"},Oc={name:"Hoàng Anh",role:"Trợ lý ảo",welcome:"Xin chào! Tôi là Hoàng Anh, trợ lý ảo của VizioCraft Design. Tôi có thể giúp bạn tìm hiểu về dịch vụ của chúng tôi và trả lời các câu hỏi. Bạn cần hỗ trợ gì không?",placeholder:"Nhập tin nhắn của bạn...",suggestedQuestions:"Câu hỏi gợi ý:"},Fc={nav:Cc,hero:Rc,services:Pc,about:Nc,contact:Lc,learning:Dc,footer:Ic,common:Uc,assistant:Oc},Bc={home:"ホーム",services:"サービス",learning:"ラーニング",about:"会社概要",contact:"お問い合わせ",contactNow:"今すぐお問い合わせ"},zc={title:"VizioCraft Design",tagline:"デジタルイノベーションの推進",industry:"AI & メディアテクノロジー",description:"映画制作、インテリジェントエージェント、エンドツーエンド自動化のための最先端AIソリューションを提供し、最新の生成AIでノーコード・ローコードワークフローを強化します。",stats:{projectsCompleted:"完了プロジェクト",clientsServed:"サービス提供クライアント",yearsExperience:"年の経験",teamMembers:"チームメンバー"},cta:{exploreServices:"サービスを探索",aboutUs:"会社概要"}},kc={title:"私たちのサービス",subtitle:"AI自動化からプロフェッショナルメディア制作まで、包括的な技術ソリューションを提供します",aiSolutions:{title:"AIソリューション & 自動化",description:"チャットボットから自動管理システムまで、インテリジェントなAIソリューションでビジネスプロセスを自動化します。",features:["インテリジェントエージェント","ビジネスプロセス自動化","ノーコード/ローコードソリューション","AI駆動分析"]},videoProduction:{title:"ビデオ制作 & アニメーション",description:"コンセプトから完成品まで、先進的なAI技術を使用したプロフェッショナルビデオ制作。",features:["AI強化ビデオ制作","3Dアニメーション","モーショングラフィックス","ポストプロダクションサービス"]},visualEffects:{title:"ビジュアルエフェクト & デザイン",description:"すべてのメディアプロジェクトのための印象的なビジュアルエフェクトと創造的なデザインを作成します。",features:["高度なVFX","UI/UXデザイン","ブランドアイデンティティ","デジタルアート制作"]},mediaProduction:{title:"メディア制作",description:"コンセプトから展開まで、あらゆるプロジェクト規模に適した包括的なメディア制作サービス。",features:["コンテンツ戦略","写真撮影 & ビデオ撮影","ソーシャルメディアコンテンツ","マーケティングキャンペーン"]},saasSolutions:{title:"SaaSソリューション",description:"現代企業に最適化されたサービスとしてのソフトウェアソリューションを開発・展開します。",features:["カスタムソフトウェア開発","クラウドソリューション","API統合","スケーラブルアーキテクチャ"]},learnMore:"詳細を見る",cta:{title:"アイデアを現実に変える準備はできていますか？",description:"プロジェクトについて話し合い、成功をサポートする方法を発見するために、お気軽にお問い合わせください。",button:"今すぐプロジェクトを開始"}},Gc={title:"会社概要",subtitle:"最先端技術ソリューションを支える会社と人々について詳しく学びましょう",companyName:"VizioCraft Design",companyDescription:"映画制作、インテリジェントエージェント、エンドツーエンド自動化のための最先端AIソリューションを提供し、最新の生成AIでノーコード・ローコードワークフローを強化します。",stats:{founded:"設立年",headquarters:"本社",members:"メンバー",projects:"プロジェクト"},mission:{title:"ミッション",description:"先進的なAIソリューションと高品質なメディアサービスを創造し、企業や個人が技術を通じて創造的な夢を実現できるよう支援します。"},vision:{title:"ビジョン",description:"AIとメディア自動化分野でベトナムの主要技術パートナーとなり、顧客とコミュニティに持続可能な価値をもたらします。"},founder:{title:"創設者紹介",name:"Son Pham",position:"創設者 & CEO",description:"技術とメディア分野で5年以上の経験を持つデジタルクリエイター兼ビジュアルストーリーテリング専門家。VizioCraft Designを率いて、顧客に最先端のAIソリューションを提供しています。",background:"橋梁建設エンジニアからビジネス分析まで、Sonは技術と創造性を組み合わせる独特の視点をもたらします。"}},Hc={title:"お問い合わせ",subtitle:"アイデアを現実に変える準備はできていますか？今日お問い合わせください！",info:{title:"連絡先情報",description:"私たちはいつでもお客様の声に耳を傾け、サポートする準備ができています。最も便利なチャンネルからお気軽にお問い合わせください。",phone:"電話番号",address:"住所",website:"ウェブサイト",hours:"営業時間",schedule:{weekdays:"月曜日 - 金曜日: 9:00 - 18:00",saturday:"土曜日: 9:00 - 12:00",sunday:"日曜日: 休業"}},form:{title:"メッセージを送信",name:"お名前",email:"メールアドレス",company:"会社名",service:"関心のあるサービス",message:"メッセージ",required:"*",submit:"メッセージを送信"},whyChoose:{title:"なぜ私たちを選ぶのか？",quickResponse:{title:"迅速な対応",description:"24時間以内に返信し、いつでもサポートする準備ができています"},professionalConsulting:{title:"プロフェッショナルコンサルティング",description:"経験豊富で顧客に献身的な専門家チーム"},support247:{title:"24/7サポート",description:"週末や祝日も含む顧客サポートサービス"}}},Vc={title:"ラーニングセンター",subtitle:"包括的なチュートリアルとコースでスキルを拡張しましょう。業界専門家から学び、最新技術をマスターしてください。",tabs:{tutorials:"チュートリアル",courses:"コース"},categories:{all:"すべてのカテゴリ",aiAutomation:"AI & 自動化",videoProduction:"ビデオ制作",animationVfx:"アニメーション & VFX",webDevelopment:"ウェブ開発",marketing:"マーケティング"},difficulty:{beginner:"初級",intermediate:"中級",advanced:"上級"},actions:{watchNow:"今すぐ視聴",enrollNow:"今すぐ登録"},cta:{title:"独自のコンテンツを作成したいですか？",description:"コンテンツクリエイタープログラムに参加して、コミュニティと専門知識を共有しましょう。",instructor:"インストラクターになる",submit:"チュートリアルを提出"}},jc={description:"映画制作、インテリジェントエージェント、エンドツーエンド自動化のための最先端AIソリューションを提供",rights:"すべての権利を保有しています。",email:"contact@viziocraft.design"},Wc={loading:"読み込み中...",error:"エラーが発生しました",backToHome:"ホームに戻る",readMore:"続きを読む",viewAll:"すべて表示",getStarted:"始める",contactUs:"お問い合わせ"},Xc={nav:Bc,hero:zc,services:kc,about:Gc,contact:Hc,learning:Vc,footer:jc,common:Wc};yl.use(wo).use(Sl).init({resources:{en:{translation:Ac},vi:{translation:Fc},ja:{translation:Xc}},fallbackLng:"vi",debug:!1,interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"]}});const ur=(i=.1)=>{const[e,t]=_e.useState(!1),n=_e.useRef(null);return _e.useEffect(()=>{const r=new IntersectionObserver(([o])=>{o.isIntersecting&&(t(!0),r.disconnect())},{threshold:i}),s=n.current;return s&&r.observe(s),()=>{s&&r.unobserve(s)}},[i]),{ref:n,isVisible:e}},Ao=()=>({scrollToSection:e=>{const t=document.getElementById(e);if(t){const n=t.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"})}}}),br=[{code:"vi",name:"Tiếng Việt",flag:"🇻🇳"},{code:"en",name:"English",flag:"🇺🇸"},{code:"ja",name:"日本語",flag:"🇯🇵"}],zs=()=>{const{i18n:i}=Un(),[e,t]=_e.useState(!1),n=br.find(s=>s.code===i.language)||br[0],r=s=>{i.changeLanguage(s),t(!1)};return c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>t(!e),className:"flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-600/30",children:[c.jsx("span",{className:"text-xl",children:n.flag}),c.jsx("span",{className:"text-sm font-medium text-gray-300 hidden sm:block",children:n.name}),c.jsx(Ml,{className:`w-4 h-4 text-gray-400 transition-transform ${e?"rotate-180":""}`})]}),e&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>t(!1)}),c.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-600/30 z-20",children:c.jsx("div",{className:"py-2",children:br.map(s=>c.jsxs("button",{onClick:()=>r(s.code),className:`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-700/50 transition-colors ${n.code===s.code?"bg-cyan-500/20 text-cyan-400":"text-gray-300"}`,children:[c.jsx("span",{className:"text-xl",children:s.flag}),c.jsx("span",{className:"text-sm font-medium",children:s.name}),n.code===s.code&&c.jsx("div",{className:"ml-auto w-2 h-2 bg-cyan-400 rounded-full"})]},s.code))})})]})]})},qc=()=>{const[i,e]=_e.useState(!1),[t,n]=_e.useState(!1),{scrollToSection:r}=Ao(),s=gl(),o=vl(),{t:a}=Un();_e.useEffect(()=>{const d=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const l=[{id:"home",label:a("nav.home"),path:"/"},{id:"services",label:a("nav.services"),path:"/#services"},{id:"learning",label:a("nav.learning"),path:"/learning"},{id:"about",label:a("nav.about"),path:"/#about"}],h=d=>{d.path.startsWith("/#")?o.pathname!=="/"?(s("/"),setTimeout(()=>{r(d.id)},100)):r(d.id):s(d.path),n(!1)};return c.jsx("nav",{className:`
        fixed top-0 w-full z-50 transition-all duration-300
        ${i?"bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-400/20":"bg-transparent"}
      `,children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"flex justify-between items-center py-4",children:[c.jsxs(cn,{to:"/",className:"flex items-center cursor-pointer flex-shrink-0",children:[c.jsx("img",{src:"/images/logo-transparent.png",alt:"VizioCraft Design",className:"h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 rounded-lg flex-shrink-0"}),c.jsx("span",{className:"text-lg sm:text-xl font-bold text-white truncate",children:c.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:"VizioCraft Design"})})]}),c.jsx("div",{className:"hidden md:flex space-x-8",children:l.map(d=>c.jsxs("button",{onClick:()=>h(d),className:`
                  text-gray-300 hover:text-cyan-400 transition-all duration-300
                  relative group py-2 px-3 font-medium
                `,children:[d.label,c.jsx("span",{className:`
                  absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500
                  group-hover:w-full transition-all duration-300
                `})]},d.id))}),c.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[c.jsx(zs,{}),c.jsx("button",{onClick:()=>{o.pathname!=="/"?(s("/"),setTimeout(()=>{r("contact")},100)):r("contact")},className:`
                bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-full
                hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300
                hover:scale-105 font-medium text-sm sm:text-base
              `,children:a("nav.contactNow")})]}),c.jsx("div",{className:"flex items-center md:hidden",children:c.jsx("button",{className:"text-white hover:text-cyan-400 transition-colors flex-shrink-0",onClick:()=>n(!t),children:t?c.jsx(fo,{size:24}):c.jsx(bl,{size:24})})})]}),t&&c.jsx("div",{className:"md:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20",children:c.jsxs("div",{className:"px-4 pt-4 pb-4 space-y-3",children:[c.jsx("div",{className:"flex justify-center mb-4",children:c.jsx(zs,{})}),l.map(d=>c.jsx("button",{onClick:()=>h(d),className:`
                    block w-full text-center px-4 py-3 text-gray-300
                    hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg
                    transition-all duration-300 font-medium
                  `,children:d.label},d.id)),c.jsx("button",{onClick:()=>{o.pathname!=="/"?(s("/"),setTimeout(()=>{r("contact")},100)):r("contact"),n(!1)},className:`
                  block w-full text-center px-4 py-3 mt-4
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg
                  hover:shadow-lg transition-all duration-300 font-medium
                `,children:a("nav.contactNow")})]})})]})})},Mi=({children:i,variant:e="primary",className:t=""})=>{const n=()=>{switch(e){case"primary":return"bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent";case"secondary":return"bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent";case"accent":return"bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent";default:return"bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"}};return c.jsx("span",{className:`${n()} ${t}`,children:i})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _s="162",Yc=0,ks=1,$c=2,Co=1,Kc=2,$t=3,fn=0,yt=1,Kt=2,dn=0,ti=1,ss=2,Gs=3,Hs=4,Zc=5,An=100,Jc=101,Qc=102,Vs=103,js=104,ed=200,td=201,nd=202,id=203,as=204,os=205,rd=206,sd=207,ad=208,od=209,ld=210,cd=211,dd=212,hd=213,ud=214,fd=0,pd=1,md=2,sr=3,gd=4,vd=5,xd=6,_d=7,Ro=0,yd=1,Sd=2,hn=0,Md=1,bd=2,Ed=3,Td=4,wd=5,Ad=6,Cd=7,Po=300,ii=301,ri=302,ls=303,cs=304,fr=306,ds=1e3,Dt=1001,hs=1002,gt=1003,Ws=1004,ui=1005,xt=1006,Er=1007,Pn=1008,un=1009,Rd=1010,Pd=1011,ys=1012,No=1013,ln=1014,Zt=1015,Si=1016,Lo=1017,Do=1018,Ln=1020,Nd=1021,It=1023,Ld=1024,Dd=1025,Dn=1026,si=1027,Id=1028,Io=1029,Ud=1030,Uo=1031,Oo=1033,Tr=33776,wr=33777,Ar=33778,Cr=33779,Xs=35840,qs=35841,Ys=35842,$s=35843,Fo=36196,Ks=37492,Zs=37496,Js=37808,Qs=37809,ea=37810,ta=37811,na=37812,ia=37813,ra=37814,sa=37815,aa=37816,oa=37817,la=37818,ca=37819,da=37820,ha=37821,Rr=36492,ua=36494,fa=36495,Od=36283,pa=36284,ma=36285,ga=36286,Fd=3200,Bd=3201,zd=0,kd=1,on="",Ft="srgb",mn="srgb-linear",Ss="display-p3",pr="display-p3-linear",ar="linear",$e="srgb",or="rec709",lr="p3",Fn=7680,va=519,Gd=512,Hd=513,Vd=514,Bo=515,jd=516,Wd=517,Xd=518,qd=519,xa=35044,_a="300 es",us=1035,Jt=2e3,cr=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,fs=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function Nr(i,e,t){return(1-t)*i+t*e}function ya(i){return(i&i-1)===0&&i!==0}function ps(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,r,s,o,a,l,h){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,h)}set(e,t,n,r,s,o,a,l,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],d=n[4],f=n[7],m=n[2],g=n[5],_=n[8],b=r[0],u=r[3],p=r[6],E=r[1],v=r[4],S=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*b+a*E+l*R,s[3]=o*u+a*v+l*C,s[6]=o*p+a*S+l*A,s[1]=h*b+d*E+f*R,s[4]=h*u+d*v+f*C,s[7]=h*p+d*S+f*A,s[2]=m*b+g*E+_*R,s[5]=m*u+g*v+_*C,s[8]=m*p+g*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8];return t*o*d-t*a*h-n*s*d+n*a*l+r*s*h-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],f=d*o-a*h,m=a*l-d*s,g=h*s-o*l,_=t*f+n*m+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=f*b,e[1]=(r*h-d*n)*b,e[2]=(a*n-r*o)*b,e[3]=m*b,e[4]=(d*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=g*b,e[7]=(n*l-h*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-r*h,r*l,-r*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Ie;function zo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $d(){const i=dr("canvas");return i.style.display="block",i}const Sa={};function Kd(i){i in Sa||(Sa[i]=!0,console.warn(i))}const Ma=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[mn]:{transfer:ar,primaries:or,toReference:i=>i,fromReference:i=>i},[Ft]:{transfer:$e,primaries:or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pr]:{transfer:ar,primaries:lr,toReference:i=>i.applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Ma)},[Ss]:{transfer:$e,primaries:lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Ma).convertLinearToSRGB()}},Zd=new Set([mn,pr]),Xe={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ni[e].toReference,r=Ni[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ni[i].primaries},getTransfer:function(i){return i===on?ar:Ni[i].transfer}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class ko{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=dr("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ni(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jd=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ir(r[o].image)):s.push(Ir(r[o]))}else s=Ir(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qd=0;class St extends oi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Dt,r=Dt,s=xt,o=Pn,a=It,l=un,h=St.DEFAULT_ANISOTROPY,d=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=bi(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Po;St.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,h=l[0],d=l[4],f=l[8],m=l[1],g=l[5],_=l[9],b=l[2],u=l[6],p=l[10];if(Math.abs(d-m)<.01&&Math.abs(f-b)<.01&&Math.abs(_-u)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+b)<.1&&Math.abs(_+u)<.1&&Math.abs(h+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,S=(g+1)/2,R=(p+1)/2,C=(d+m)/4,A=(f+b)/4,U=(_+u)/4;return v>S&&v>R?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=C/n,s=A/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=U/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=U/s),this.set(n,r,s,t),this}let E=Math.sqrt((u-_)*(u-_)+(f-b)*(f-b)+(m-d)*(m-d));return Math.abs(E)<.001&&(E=1),this.x=(u-_)/E,this.y=(f-b)/E,this.z=(m-d)/E,this.w=Math.acos((h+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ho extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],h=n[r+1],d=n[r+2],f=n[r+3];const m=s[o+0],g=s[o+1],_=s[o+2],b=s[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=_,e[t+3]=b;return}if(f!==b||l!==m||h!==g||d!==_){let u=1-a;const p=l*m+h*g+d*_+f*b,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,p*E);u=Math.sin(u*C)/R,a=Math.sin(a*C)/R}const S=a*E;if(l=l*u+m*S,h=h*u+g*S,d=d*u+_*S,f=f*u+b*S,u===1-a){const R=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=R,h*=R,d*=R,f*=R}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],h=n[r+2],d=n[r+3],f=s[o],m=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+d*f+l*g-h*m,e[t+1]=l*_+d*m+h*f-a*g,e[t+2]=h*_+d*g+a*m-l*f,e[t+3]=d*_-a*f-l*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),d=a(r/2),f=a(s/2),m=l(n/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=m*d*f+h*g*_,this._y=h*g*f-m*d*_,this._z=h*d*_+m*g*f,this._w=h*d*f-m*g*_;break;case"YXZ":this._x=m*d*f+h*g*_,this._y=h*g*f-m*d*_,this._z=h*d*_-m*g*f,this._w=h*d*f+m*g*_;break;case"ZXY":this._x=m*d*f-h*g*_,this._y=h*g*f+m*d*_,this._z=h*d*_+m*g*f,this._w=h*d*f-m*g*_;break;case"ZYX":this._x=m*d*f-h*g*_,this._y=h*g*f+m*d*_,this._z=h*d*_-m*g*f,this._w=h*d*f+m*g*_;break;case"YZX":this._x=m*d*f+h*g*_,this._y=h*g*f+m*d*_,this._z=h*d*_-m*g*f,this._w=h*d*f-m*g*_;break;case"XZY":this._x=m*d*f-h*g*_,this._y=h*g*f-m*d*_,this._z=h*d*_+m*g*f,this._w=h*d*f+m*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],h=t[2],d=t[6],f=t[10],m=n+a+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-h)*g,this._z=(o-r)*g}else if(n>a&&n>f){const g=2*Math.sqrt(1+n-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+h)/g}else if(a>f){const g=2*Math.sqrt(1+a-n-f);this._w=(s-h)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-n-a);this._w=(o-r)/g,this._x=(s+h)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+o*a+r*h-s*l,this._y=r*d+o*l+s*a-n*h,this._z=s*d+o*h+n*l-r*a,this._w=o*d-n*a-r*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,a),f=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*r-a*n),d=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*h+o*f-a*d,this.y=n+l*d+a*h-s*f,this.z=r+l*f+s*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new I,Ea=new Ei;class Ti{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pt):Pt.fromBufferAttribute(s,o),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Li.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Li.copy(n.boundingBox)),Li.applyMatrix4(e.matrixWorld),this.union(Li)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Di.subVectors(this.max,pi),zn.subVectors(e.a,pi),kn.subVectors(e.b,pi),Gn.subVectors(e.c,pi),en.subVectors(kn,zn),tn.subVectors(Gn,kn),_n.subVectors(zn,Gn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-_n.z,_n.y,en.z,0,-en.x,tn.z,0,-tn.x,_n.z,0,-_n.x,-en.y,en.x,0,-tn.y,tn.x,0,-_n.y,_n.x,0];return!Or(t,zn,kn,Gn,Di)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,zn,kn,Gn,Di))?!1:(Ii.crossVectors(en,tn),t=[Ii.x,Ii.y,Ii.z],Or(t,zn,kn,Gn,Di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new I,new I,new I,new I,new I,new I,new I,new I],Pt=new I,Li=new Ti,zn=new I,kn=new I,Gn=new I,en=new I,tn=new I,_n=new I,pi=new I,Di=new I,Ii=new I,yn=new I;function Or(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yn.fromArray(i,s);const a=r.x*Math.abs(yn.x)+r.y*Math.abs(yn.y)+r.z*Math.abs(yn.z),l=e.dot(yn),h=t.dot(yn),d=n.dot(yn);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}const nh=new Ti,mi=new I,Fr=new I;class mr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Fr)),this.expandByPoint(mi.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wt=new I,Br=new I,Ui=new I,nn=new I,zr=new I,Oi=new I,kr=new I;class Vo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.origin).addScaledVector(this.direction,t),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Br.copy(e).add(t).multiplyScalar(.5),Ui.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Br);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ui),a=nn.dot(this.direction),l=-nn.dot(Ui),h=nn.lengthSq(),d=Math.abs(1-o*o);let f,m,g,_;if(d>0)if(f=o*l-a,m=o*a-l,_=s*d,f>=0)if(m>=-_)if(m<=_){const b=1/d;f*=b,m*=b,g=f*(f+o*m+2*a)+m*(o*f+m+2*l)+h}else m=s,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+h;else m=-s,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+h;else m<=-_?(f=Math.max(0,-(-o*s+a)),m=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+m*(m+2*l)+h):m<=_?(f=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+h):(f=Math.max(0,-(o*s+a)),m=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+m*(m+2*l)+h);else m=o>0?-s:s,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Br).addScaledVector(Ui,m),g}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);const n=Wt.dot(this.direction),r=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),d>=0?(s=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,r,s){zr.subVectors(t,e),Oi.subVectors(n,e),kr.crossVectors(zr,Oi);let o=this.direction.dot(kr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nn.subVectors(this.origin,e);const l=a*this.direction.dot(Oi.crossVectors(nn,Oi));if(l<0)return null;const h=a*this.direction.dot(zr.cross(nn));if(h<0||l+h>o)return null;const d=-a*nn.dot(kr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,o,a,l,h,d,f,m,g,_,b,u){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,h,d,f,m,g,_,b,u)}set(e,t,n,r,s,o,a,l,h,d,f,m,g,_,b,u){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=d,p[10]=f,p[14]=m,p[3]=g,p[7]=_,p[11]=b,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hn.setFromMatrixColumn(e,0).length(),s=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),h=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const m=o*d,g=o*f,_=a*d,b=a*f;t[0]=l*d,t[4]=-l*f,t[8]=h,t[1]=g+_*h,t[5]=m-b*h,t[9]=-a*l,t[2]=b-m*h,t[6]=_+g*h,t[10]=o*l}else if(e.order==="YXZ"){const m=l*d,g=l*f,_=h*d,b=h*f;t[0]=m+b*a,t[4]=_*a-g,t[8]=o*h,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=g*a-_,t[6]=b+m*a,t[10]=o*l}else if(e.order==="ZXY"){const m=l*d,g=l*f,_=h*d,b=h*f;t[0]=m-b*a,t[4]=-o*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*d,t[9]=b-m*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const m=o*d,g=o*f,_=a*d,b=a*f;t[0]=l*d,t[4]=_*h-g,t[8]=m*h+b,t[1]=l*f,t[5]=b*h+m,t[9]=g*h-_,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const m=o*l,g=o*h,_=a*l,b=a*h;t[0]=l*d,t[4]=b-m*f,t[8]=_*f+g,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-h*d,t[6]=g*f+_,t[10]=m-b*f}else if(e.order==="XZY"){const m=o*l,g=o*h,_=a*l,b=a*h;t[0]=l*d,t[4]=-f,t[8]=h*d,t[1]=m*f+b,t[5]=o*d,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*d,t[10]=b*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,rh)}lookAt(e,t,n){const r=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),rn.crossVectors(n,Et),rn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),rn.crossVectors(n,Et)),rn.normalize(),Fi.crossVectors(Et,rn),r[0]=rn.x,r[4]=Fi.x,r[8]=Et.x,r[1]=rn.y,r[5]=Fi.y,r[9]=Et.y,r[2]=rn.z,r[6]=Fi.z,r[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],d=n[1],f=n[5],m=n[9],g=n[13],_=n[2],b=n[6],u=n[10],p=n[14],E=n[3],v=n[7],S=n[11],R=n[15],C=r[0],A=r[4],U=r[8],Y=r[12],y=r[1],w=r[5],J=r[9],K=r[13],N=r[2],X=r[6],H=r[10],q=r[14],V=r[3],j=r[7],te=r[11],re=r[15];return s[0]=o*C+a*y+l*N+h*V,s[4]=o*A+a*w+l*X+h*j,s[8]=o*U+a*J+l*H+h*te,s[12]=o*Y+a*K+l*q+h*re,s[1]=d*C+f*y+m*N+g*V,s[5]=d*A+f*w+m*X+g*j,s[9]=d*U+f*J+m*H+g*te,s[13]=d*Y+f*K+m*q+g*re,s[2]=_*C+b*y+u*N+p*V,s[6]=_*A+b*w+u*X+p*j,s[10]=_*U+b*J+u*H+p*te,s[14]=_*Y+b*K+u*q+p*re,s[3]=E*C+v*y+S*N+R*V,s[7]=E*A+v*w+S*X+R*j,s[11]=E*U+v*J+S*H+R*te,s[15]=E*Y+v*K+S*q+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],h=e[13],d=e[2],f=e[6],m=e[10],g=e[14],_=e[3],b=e[7],u=e[11],p=e[15];return _*(+s*l*f-r*h*f-s*a*m+n*h*m+r*a*g-n*l*g)+b*(+t*l*g-t*h*m+s*o*m-r*o*g+r*h*d-s*l*d)+u*(+t*h*f-t*a*g-s*o*f+n*o*g+s*a*d-n*h*d)+p*(-r*a*d-t*l*f+t*a*m+r*o*f-n*o*m+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],f=e[9],m=e[10],g=e[11],_=e[12],b=e[13],u=e[14],p=e[15],E=f*u*h-b*m*h+b*l*g-a*u*g-f*l*p+a*m*p,v=_*m*h-d*u*h-_*l*g+o*u*g+d*l*p-o*m*p,S=d*b*h-_*f*h+_*a*g-o*b*g-d*a*p+o*f*p,R=_*f*l-d*b*l-_*a*m+o*b*m+d*a*u-o*f*u,C=t*E+n*v+r*S+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(b*m*s-f*u*s-b*r*g+n*u*g+f*r*p-n*m*p)*A,e[2]=(a*u*s-b*l*s+b*r*h-n*u*h-a*r*p+n*l*p)*A,e[3]=(f*l*s-a*m*s-f*r*h+n*m*h+a*r*g-n*l*g)*A,e[4]=v*A,e[5]=(d*u*s-_*m*s+_*r*g-t*u*g-d*r*p+t*m*p)*A,e[6]=(_*l*s-o*u*s-_*r*h+t*u*h+o*r*p-t*l*p)*A,e[7]=(o*m*s-d*l*s+d*r*h-t*m*h-o*r*g+t*l*g)*A,e[8]=S*A,e[9]=(_*f*s-d*b*s-_*n*g+t*b*g+d*n*p-t*f*p)*A,e[10]=(o*b*s-_*a*s+_*n*h-t*b*h-o*n*p+t*a*p)*A,e[11]=(d*a*s-o*f*s-d*n*h+t*f*h+o*n*g-t*a*g)*A,e[12]=R*A,e[13]=(d*b*r-_*f*r+_*n*m-t*b*m-d*n*u+t*f*u)*A,e[14]=(_*a*r-o*b*r-_*n*l+t*b*l+o*n*u-t*a*u)*A,e[15]=(o*f*r-d*a*r+d*n*l-t*f*l-o*n*m+t*a*m)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,h=s*o,d=s*a;return this.set(h*o+n,h*a-r*l,h*l+r*a,0,h*a+r*l,d*a+n,d*l-r*o,0,h*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,h=s+s,d=o+o,f=a+a,m=s*h,g=s*d,_=s*f,b=o*d,u=o*f,p=a*f,E=l*h,v=l*d,S=l*f,R=n.x,C=n.y,A=n.z;return r[0]=(1-(b+p))*R,r[1]=(g+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(m+p))*C,r[6]=(u+E)*C,r[7]=0,r[8]=(_+v)*A,r[9]=(u-E)*A,r[10]=(1-(m+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Hn.set(r[0],r[1],r[2]).length();const o=Hn.set(r[4],r[5],r[6]).length(),a=Hn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);const h=1/s,d=1/o,f=1/a;return Nt.elements[0]*=h,Nt.elements[1]*=h,Nt.elements[2]*=h,Nt.elements[4]*=d,Nt.elements[5]*=d,Nt.elements[6]*=d,Nt.elements[8]*=f,Nt.elements[9]*=f,Nt.elements[10]*=f,t.setFromRotationMatrix(Nt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Jt){const l=this.elements,h=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,_;if(a===Jt)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===cr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Jt){const l=this.elements,h=1/(t-e),d=1/(n-r),f=1/(o-s),m=(t+e)*h,g=(n+r)*d;let _,b;if(a===Jt)_=(o+s)*f,b=-2*f;else if(a===cr)_=s*f,b=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new I,Nt=new it,ih=new I(0,0,0),rh=new I(1,1,1),rn=new I,Fi=new I,Et=new I,Ta=new it,wa=new Ei;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],h=r[5],d=r[9],f=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const Aa=new I,Vn=new Ei,Xt=new it,Bi=new I,gi=new I,ah=new I,oh=new Ei,Ca=new I(1,0,0),Ra=new I(0,1,0),Pa=new I(0,0,1),lh={type:"added"},ch={type:"removed"},Gr={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Mt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new I,t=new Qt,n=new Ei,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ie}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(Pa,e)}translateOnAxis(e,t){return Aa.copy(e).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(Pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(gi,Bi,this.up):Xt.lookAt(Bi,gi,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const f=l[h];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),d=o(e.images),f=o(e.shapes),m=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const h in a){const d=a[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new I(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new I,qt=new I,Vr=new I,Yt=new I,jn=new I,Wn=new I,Na=new I,jr=new I,Wr=new I,Xr=new I;class zt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Lt.subVectors(e,t),r.cross(Lt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Lt.subVectors(r,t),qt.subVectors(n,t),Vr.subVectors(e,t);const o=Lt.dot(Lt),a=Lt.dot(qt),l=Lt.dot(Vr),h=qt.dot(qt),d=qt.dot(Vr),f=o*h-a*a;if(f===0)return s.set(0,0,0),null;const m=1/f,g=(h*l-a*d)*m,_=(o*d-a*l)*m;return s.set(1-g-_,_,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yt)===null?!1:Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Yt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yt.x),l.addScaledVector(o,Yt.y),l.addScaledVector(a,Yt.z),l)}static isFrontFacing(e,t,n,r){return Lt.subVectors(n,t),qt.subVectors(e,t),Lt.cross(qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Lt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),Wn.subVectors(s,n),jr.subVectors(e,n);const l=jn.dot(jr),h=Wn.dot(jr);if(l<=0&&h<=0)return t.copy(n);Wr.subVectors(e,r);const d=jn.dot(Wr),f=Wn.dot(Wr);if(d>=0&&f<=d)return t.copy(r);const m=l*f-d*h;if(m<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(jn,o);Xr.subVectors(e,s);const g=jn.dot(Xr),_=Wn.dot(Xr);if(_>=0&&g<=_)return t.copy(s);const b=g*h-l*_;if(b<=0&&h>=0&&_<=0)return a=h/(h-_),t.copy(n).addScaledVector(Wn,a);const u=d*_-g*f;if(u<=0&&f-d>=0&&g-_>=0)return Na.subVectors(s,r),a=(f-d)/(f-d+(g-_)),t.copy(r).addScaledVector(Na,a);const p=1/(u+b+m);return o=b*p,a=m*p,t.copy(n).addScaledVector(jn,o).addScaledVector(Wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Yd(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qr(o,s,e+1/3),this.g=qr(o,s,e),this.b=qr(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Wo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Xe.fromWorkingColorSpace(ft.copy(this),e),Math.round(_t(ft.r*255,0,255))*65536+Math.round(_t(ft.g*255,0,255))*256+Math.round(_t(ft.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,s=ft.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,h;const d=(a+o)/2;if(a===o)l=0,h=0;else{const f=o-a;switch(h=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Ft){Xe.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(sn),this.setHSL(sn.h+e,sn.s+t,sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(zi);const n=Nr(sn.h,zi.h,t),r=Nr(sn.s,zi.s,t),s=Nr(sn.l,zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new We;We.NAMES=Wo;let dh=0;class wi extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ti,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=as,this.blendDst=os,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==as&&(n.blendSrc=this.blendSrc),this.blendDst!==os&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _i extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new I,ki=new Ve;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),e}}class Xo extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qo extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hh=0;const Ct=new it,Yr=new Mt,Xn=new I,Tt=new Ti,vi=new Ti,ot=new I;class Ht extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zo(e)?qo:Xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Tt.min,vi.min),Tt.expandByPoint(ot),ot.addVectors(Tt.max,vi.max),Tt.expandByPoint(ot)):(Tt.expandByPoint(vi.min),Tt.expandByPoint(vi.max))}Tt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)ot.fromBufferAttribute(a,h),l&&(Xn.fromBufferAttribute(e,h),ot.add(Xn)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new I,l[U]=new I;const h=new I,d=new I,f=new I,m=new Ve,g=new Ve,_=new Ve,b=new I,u=new I;function p(U,Y,y){h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,Y),f.fromBufferAttribute(n,y),m.fromBufferAttribute(s,U),g.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,y),d.sub(h),f.sub(h),g.sub(m),_.sub(m);const w=1/(g.x*_.y-_.x*g.y);isFinite(w)&&(b.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(w),u.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(w),a[U].add(b),a[Y].add(b),a[y].add(b),l[U].add(u),l[Y].add(u),l[y].add(u))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,Y=E.length;U<Y;++U){const y=E[U],w=y.start,J=y.count;for(let K=w,N=w+J;K<N;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const v=new I,S=new I,R=new I,C=new I;function A(U){R.fromBufferAttribute(r,U),C.copy(R);const Y=a[U];v.copy(Y),v.sub(R.multiplyScalar(R.dot(Y))).normalize(),S.crossVectors(C,Y);const w=S.dot(l[U])<0?-1:1;o.setXYZW(U,v.x,v.y,v.z,w)}for(let U=0,Y=E.length;U<Y;++U){const y=E[U],w=y.start,J=y.count;for(let K=w,N=w+J;K<N;K+=3)A(e.getX(K+0)),A(e.getX(K+1)),A(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,h=new I,d=new I,f=new I;if(e)for(let m=0,g=e.count;m<g;m+=3){const _=e.getX(m+0),b=e.getX(m+1),u=e.getX(m+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,u),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,u),a.add(d),l.add(d),h.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const h=a.array,d=a.itemSize,f=a.normalized,m=new h.constructor(l.length*d);let g=0,_=0;for(let b=0,u=l.length;b<u;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*d;for(let p=0;p<d;p++)m[_++]=h[g++]}return new Ut(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],h=e(l,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let d=0,f=h.length;d<f;d++){const m=h[d],g=e(m,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let f=0,m=h.length;f<m;f++){const g=h[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],f=s[h];for(let m=0,g=f.length;m<g;m++)d.push(f[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new it,Sn=new Vo,Gi=new mr,Da=new I,qn=new I,Yn=new I,$n=new I,$r=new I,Hi=new I,Vi=new Ve,ji=new Ve,Wi=new Ve,Ia=new I,Ua=new I,Oa=new I,Xi=new I,qi=new I;class kt extends Mt{constructor(e=new Ht,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hi.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const d=a[l],f=s[l];d!==0&&($r.fromBufferAttribute(f,e),o?Hi.addScaledVector($r,d):Hi.addScaledVector($r.sub(t),d))}t.add(Hi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(s),Sn.copy(e.ray).recast(e.near),!(Gi.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(Gi,Da)===null||Sn.origin.distanceToSquared(Da)>(e.far-e.near)**2))&&(La.copy(s).invert(),Sn.copy(e.ray).applyMatrix4(La),!(n.boundingBox!==null&&Sn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=m.length;_<b;_++){const u=m[_],p=o[u.materialIndex],E=Math.max(u.start,g.start),v=Math.min(a.count,Math.min(u.start+u.count,g.start+g.count));for(let S=E,R=v;S<R;S+=3){const C=a.getX(S),A=a.getX(S+1),U=a.getX(S+2);r=Yi(this,p,e,n,h,d,f,C,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let u=_,p=b;u<p;u+=3){const E=a.getX(u),v=a.getX(u+1),S=a.getX(u+2);r=Yi(this,o,e,n,h,d,f,E,v,S),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=m.length;_<b;_++){const u=m[_],p=o[u.materialIndex],E=Math.max(u.start,g.start),v=Math.min(l.count,Math.min(u.start+u.count,g.start+g.count));for(let S=E,R=v;S<R;S+=3){const C=S,A=S+1,U=S+2;r=Yi(this,p,e,n,h,d,f,C,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let u=_,p=b;u<p;u+=3){const E=u,v=u+1,S=u+2;r=Yi(this,o,e,n,h,d,f,E,v,S),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function uh(i,e,t,n,r,s,o,a){let l;if(e.side===yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===fn,a),l===null)return null;qi.copy(a),qi.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(qi);return h<t.near||h>t.far?null:{distance:h,point:qi.clone(),object:i}}function Yi(i,e,t,n,r,s,o,a,l,h){i.getVertexPosition(a,qn),i.getVertexPosition(l,Yn),i.getVertexPosition(h,$n);const d=uh(i,e,t,n,qn,Yn,$n,Xi);if(d){r&&(Vi.fromBufferAttribute(r,a),ji.fromBufferAttribute(r,l),Wi.fromBufferAttribute(r,h),d.uv=zt.getInterpolation(Xi,qn,Yn,$n,Vi,ji,Wi,new Ve)),s&&(Vi.fromBufferAttribute(s,a),ji.fromBufferAttribute(s,l),Wi.fromBufferAttribute(s,h),d.uv1=zt.getInterpolation(Xi,qn,Yn,$n,Vi,ji,Wi,new Ve)),o&&(Ia.fromBufferAttribute(o,a),Ua.fromBufferAttribute(o,l),Oa.fromBufferAttribute(o,h),d.normal=zt.getInterpolation(Xi,qn,Yn,$n,Ia,Ua,Oa,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c:h,normal:new I,materialIndex:0};zt.getNormal(qn,Yn,$n,f.normal),d.face=f}return d}class Ai extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],d=[],f=[];let m=0,g=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function _(b,u,p,E,v,S,R,C,A,U,Y){const y=S/A,w=R/U,J=S/2,K=R/2,N=C/2,X=A+1,H=U+1;let q=0,V=0;const j=new I;for(let te=0;te<H;te++){const re=te*w-K;for(let he=0;he<X;he++){const Re=he*y-J;j[b]=Re*E,j[u]=re*v,j[p]=N,h.push(j.x,j.y,j.z),j[b]=0,j[u]=0,j[p]=C>0?1:-1,d.push(j.x,j.y,j.z),f.push(he/A),f.push(1-te/U),q+=1}}for(let te=0;te<U;te++)for(let re=0;re<A;re++){const he=m+re+X*te,Re=m+re+X*(te+1),k=m+(re+1)+X*(te+1),Z=m+(re+1)+X*te;l.push(he,Re,Z),l.push(Re,k,Z),V+=6}a.addGroup(g,V,Y),g+=V,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=ai(i[t]);for(const r in n)e[r]=n[r]}return e}function fh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yo(i){return i.getRenderTarget()===null?i.outputColorSpace:Xe.workingColorSpace}const ph={clone:ai,merge:mt};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $o extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Jt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const an=new I,Fa=new Ve,Ba=new Ve;class Rt extends $o{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(an.x,an.y).multiplyScalar(-e/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(an.x,an.y).multiplyScalar(-e/an.z)}getViewSize(e,t){return this.getViewBounds(e,Fa,Ba),t.subVectors(Ba,Fa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/h,r*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Zn=1;class vh extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rt(Kn,Zn,e,t);r.layers=this.layers,this.add(r);const s=new Rt(Kn,Zn,e,t);s.layers=this.layers,this.add(s);const o=new Rt(Kn,Zn,e,t);o.layers=this.layers,this.add(o);const a=new Rt(Kn,Zn,e,t);a.layers=this.layers,this.add(a);const l=new Rt(Kn,Zn,e,t);l.layers=this.layers,this.add(l);const h=new Rt(Kn,Zn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const h of t)this.remove(h);if(e===Jt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(f,m,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ko extends St{constructor(e,t,n,r,s,o,a,l,h,d){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,r,s,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xh extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ko(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ai(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:dn});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=xt),new vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Kr=new I,_h=new I,yh=new Ie;class Tn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Kr.subVectors(n,t).cross(_h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yh.getNormalMatrix(e),r=this.coplanarPoint(Kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new mr,$i=new I;class Zo{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jt){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],h=r[4],d=r[5],f=r[6],m=r[7],g=r[8],_=r[9],b=r[10],u=r[11],p=r[12],E=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,m-h,u-g,S-p).normalize(),n[1].setComponents(l+s,m+h,u+g,S+p).normalize(),n[2].setComponents(l+o,m+d,u+_,S+E).normalize(),n[3].setComponents(l-o,m-d,u-_,S-E).normalize(),n[4].setComponents(l-a,m-f,u-b,S-v).normalize(),t===Jt)n[5].setComponents(l+a,m+f,u+b,S+v).normalize();else if(t===cr)n[5].setComponents(a,f,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($i.x=r.normal.x>0?e.max.x:e.min.x,$i.y=r.normal.y>0?e.max.y:e.min.y,$i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Sh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,d){const f=h.array,m=h.usage,g=f.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,f,m),h.onUploadCallback();let b;if(f instanceof Float32Array)b=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)b=i.SHORT;else if(f instanceof Uint32Array)b=i.UNSIGNED_INT;else if(f instanceof Int32Array)b=i.INT;else if(f instanceof Int8Array)b=i.BYTE;else if(f instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:b,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,d,f){const m=d.array,g=d._updateRange,_=d.updateRanges;if(i.bindBuffer(f,h),g.count===-1&&_.length===0&&i.bufferSubData(f,0,m),_.length!==0){for(let b=0,u=_.length;b<u;b++){const p=_[b];t?i.bufferSubData(f,p.start*m.BYTES_PER_ELEMENT,m,p.start,p.count):i.bufferSubData(f,p.start*m.BYTES_PER_ELEMENT,m.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(f,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(f,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(i.deleteBuffer(d.buffer),n.delete(h))}function l(h,d){if(h.isGLBufferAttribute){const m=n.get(h);(!m||m.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,r(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,h,d),f.version=h.version}}return{get:o,remove:a,update:l}}class gr extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),h=a+1,d=l+1,f=e/a,m=t/l,g=[],_=[],b=[],u=[];for(let p=0;p<d;p++){const E=p*m-o;for(let v=0;v<h;v++){const S=v*f-s;_.push(S,-E,0),b.push(0,0,1),u.push(v/a),u.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const v=E+h*p,S=E+h*(p+1),R=E+1+h*(p+1),C=E+1+h*p;g.push(v,S,C),g.push(S,R,C)}this.setIndex(g),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Su=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Mh,alphahash_pars_fragment:bh,alphamap_fragment:Eh,alphamap_pars_fragment:Th,alphatest_fragment:wh,alphatest_pars_fragment:Ah,aomap_fragment:Ch,aomap_pars_fragment:Rh,batching_pars_vertex:Ph,batching_vertex:Nh,begin_vertex:Lh,beginnormal_vertex:Dh,bsdfs:Ih,iridescence_fragment:Uh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:kh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:jh,common:Wh,cube_uv_reflection_fragment:Xh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:$h,emissivemap_fragment:Kh,emissivemap_pars_fragment:Zh,colorspace_fragment:Jh,colorspace_pars_fragment:Qh,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:du,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:vu,lights_phong_fragment:xu,lights_phong_pars_fragment:_u,lights_physical_fragment:yu,lights_physical_pars_fragment:Su,lights_fragment_begin:Mu,lights_fragment_maps:bu,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Cu,map_fragment:Ru,map_pars_fragment:Pu,map_particle_fragment:Nu,map_particle_pars_fragment:Lu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Uu,morphcolor_vertex:Ou,morphnormal_vertex:Fu,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:ku,normal_fragment_maps:Gu,normal_pars_fragment:Hu,normal_pars_vertex:Vu,normal_vertex:ju,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:$u,opaque_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:lf,skinbase_vertex:cf,skinning_pars_vertex:df,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:vf,transmission_pars_fragment:xf,uv_pars_fragment:_f,uv_pars_vertex:yf,uv_vertex:Sf,worldpos_vertex:Mf,background_vert:bf,background_frag:Ef,backgroundCube_vert:Tf,backgroundCube_frag:wf,cube_vert:Af,cube_frag:Cf,depth_vert:Rf,depth_frag:Pf,distanceRGBA_vert:Nf,distanceRGBA_frag:Lf,equirect_vert:Df,equirect_frag:If,linedashed_vert:Uf,linedashed_frag:Of,meshbasic_vert:Ff,meshbasic_frag:Bf,meshlambert_vert:zf,meshlambert_frag:kf,meshmatcap_vert:Gf,meshmatcap_frag:Hf,meshnormal_vert:Vf,meshnormal_frag:jf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:$f,meshtoon_frag:Kf,points_vert:Zf,points_frag:Jf,shadow_vert:Qf,shadow_frag:ep,sprite_vert:tp,sprite_frag:np},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Bt={basic:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:mt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:mt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:mt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:mt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:mt([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Bt.physical={uniforms:mt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ki={r:0,b:0,g:0},bn=new Qt,ip=new it;function rp(i,e,t,n,r,s,o){const a=new We(0);let l=s===!0?0:1,h,d,f=null,m=0,g=null;function _(u,p){let E=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?b(a,l):v&&v.isColor&&(b(v,1),E=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fr)?(d===void 0&&(d=new kt(new Ai(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ai(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),bn.copy(p.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(bn)),d.material.toneMapped=Xe.getTransfer(v.colorSpace)!==$e,(f!==v||m!==v.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,f=v,m=v.version,g=i.toneMapping),d.layers.enableAll(),u.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new kt(new gr(2,2),new pn({name:"BackgroundMaterial",uniforms:ai(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(v.colorSpace)!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||m!==v.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,m=v.version,g=i.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null))}function b(u,p){u.getRGB(Ki,Yo(i)),n.buffers.color.setClear(Ki.r,Ki.g,Ki.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(u,p=1){a.set(u),l=p,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,b(a,l)},render:_}}function sp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=u(null);let h=l,d=!1;function f(N,X,H,q,V){let j=!1;if(o){const te=b(q,H,X);h!==te&&(h=te,g(h.object)),j=p(N,q,H,V),j&&E(N,q,H,V)}else{const te=X.wireframe===!0;(h.geometry!==q.id||h.program!==H.id||h.wireframe!==te)&&(h.geometry=q.id,h.program=H.id,h.wireframe=te,j=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,U(N,X,H,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function b(N,X,H){const q=H.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let j=V[X.id];j===void 0&&(j={},V[X.id]=j);let te=j[q];return te===void 0&&(te=u(m()),j[q]=te),te}function u(N){const X=[],H=[],q=[];for(let V=0;V<r;V++)X[V]=0,H[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:H,attributeDivisors:q,object:N,attributes:{},index:null}}function p(N,X,H,q){const V=h.attributes,j=X.attributes;let te=0;const re=H.getAttributes();for(const he in re)if(re[he].location>=0){const k=V[he];let Z=j[he];if(Z===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;te++}return h.attributesNum!==te||h.index!==q}function E(N,X,H,q){const V={},j=X.attributes;let te=0;const re=H.getAttributes();for(const he in re)if(re[he].location>=0){let k=j[he];k===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(k=N.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),V[he]=Z,te++}h.attributes=V,h.attributesNum=te,h.index=q}function v(){const N=h.newAttributes;for(let X=0,H=N.length;X<H;X++)N[X]=0}function S(N){R(N,0)}function R(N,X){const H=h.newAttributes,q=h.enabledAttributes,V=h.attributeDivisors;H[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),V[N]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),V[N]=X)}function C(){const N=h.newAttributes,X=h.enabledAttributes;for(let H=0,q=X.length;H<q;H++)X[H]!==N[H]&&(i.disableVertexAttribArray(H),X[H]=0)}function A(N,X,H,q,V,j,te){te===!0?i.vertexAttribIPointer(N,X,H,V,j):i.vertexAttribPointer(N,X,H,q,V,j)}function U(N,X,H,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=q.attributes,j=H.getAttributes(),te=X.defaultAttributeValues;for(const re in j){const he=j[re];if(he.location>=0){let Re=V[re];if(Re===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor)),Re!==void 0){const k=Re.normalized,Z=Re.itemSize,de=t.get(Re);if(de===void 0)continue;const Ee=de.buffer,ge=de.type,ue=de.bytesPerElement,je=n.isWebGL2===!0&&(ge===i.INT||ge===i.UNSIGNED_INT||Re.gpuType===No);if(Re.isInterleavedBufferAttribute){const Te=Re.data,D=Te.stride,lt=Re.offset;if(Te.isInstancedInterleavedBuffer){for(let xe=0;xe<he.locationSize;xe++)R(he.location+xe,Te.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let xe=0;xe<he.locationSize;xe++)S(he.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let xe=0;xe<he.locationSize;xe++)A(he.location+xe,Z/he.locationSize,ge,k,D*ue,(lt+Z/he.locationSize*xe)*ue,je)}else{if(Re.isInstancedBufferAttribute){for(let Te=0;Te<he.locationSize;Te++)R(he.location+Te,Re.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Te=0;Te<he.locationSize;Te++)S(he.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Te=0;Te<he.locationSize;Te++)A(he.location+Te,Z/he.locationSize,ge,k,Z*ue,Z/he.locationSize*Te*ue,je)}}else if(te!==void 0){const k=te[re];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(he.location,k);break;case 3:i.vertexAttrib3fv(he.location,k);break;case 4:i.vertexAttrib4fv(he.location,k);break;default:i.vertexAttrib1fv(he.location,k)}}}}C()}function Y(){J();for(const N in a){const X=a[N];for(const H in X){const q=X[H];for(const V in q)_(q[V].object),delete q[V];delete X[H]}delete a[N]}}function y(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const H in X){const q=X[H];for(const V in q)_(q[V].object),delete q[V];delete X[H]}delete a[N.id]}function w(N){for(const X in a){const H=a[X];if(H[N.id]===void 0)continue;const q=H[N.id];for(const V in q)_(q[V].object),delete q[V];delete H[N.id]}}function J(){K(),d=!0,h!==l&&(h=l,g(h.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:K,dispose:Y,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function ap(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}function a(d,f){i.drawArrays(s,d,f),t.update(f,s,1)}function l(d,f,m){if(m===0)return;let g,_;if(r)g=i,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,d,f,m),t.update(f,s,m)}function h(d,f,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<m;_++)this.render(d[_],f[_]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,m);let _=0;for(let b=0;b<m;b++)_+=f[b];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function op(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,S=o||e.has("OES_texture_float"),R=v&&S,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:b,maxVertexUniforms:u,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:C}}function lp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Tn,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||n!==0||r;return r=m,n=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,g){const _=f.clippingPlanes,b=f.clipIntersection,u=f.clipShadows,p=i.get(f);if(!r||_===null||_.length===0||s&&!u)s?d(null):h();else{const E=s?0:n,v=E*4;let S=p.clippingState||null;l.value=S,S=d(_,m,v,g);for(let R=0;R!==v;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,g,_){const b=f!==null?f.length:0;let u=null;if(b!==0){if(u=l.value,_!==!0||u===null){const p=g+b*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(u===null||u.length<p)&&(u=new Float32Array(p));for(let v=0,S=g;v!==b;++v,S+=4)o.copy(f[v]).applyMatrix4(E,a),o.normal.toArray(u,S),u[S+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,u}}function cp(i){let e=new WeakMap;function t(o,a){return a===ls?o.mapping=ii:a===cs&&(o.mapping=ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ls||a===cs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new xh(l.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class dp extends $o{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qn=4,za=[.125,.215,.35,.446,.526,.582],Cn=20,Zr=new dp,ka=new We;let Jr=null,Qr=0,es=0;const wn=(1+Math.sqrt(5))/2,Jn=1/wn,Ga=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,wn,Jn),new I(0,wn,-Jn),new I(Jn,0,wn),new I(-Jn,0,wn),new I(wn,Jn,0),new I(-wn,Jn,0)];class Ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Qr,es),e.scissorTest=!1,Zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:Si,format:It,colorSpace:mn,depthBuffer:!1},r=Va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(s)),this._blurMaterial=up(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(ka),d.toneMapping=hn,d.autoClear=!1;const g=new _i({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),_=new kt(new Ai,g);let b=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,b=!0):(g.color.copy(ka),b=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const v=this._cubeSize;Zi(r,E*v,p>2?v:0,v,v),d.setRenderTarget(r),b&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ii||e.mapping===ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ga[(r-1)%Ga.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new kt(this._lodPlanes[r],h),m=h.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Cn-1),b=s/_,u=isFinite(s)?1+Math.floor(d*b):Cn;u>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Cn}`);const p=[];let E=0;for(let A=0;A<Cn;++A){const U=A/b,Y=Math.exp(-U*U/2);p.push(Y),A===0?E+=Y:A<u&&(E+=2*Y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;m.envMap.value=e.texture,m.samples.value=u,m.weights.value=p,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:v}=this;m.dTheta.value=_,m.mipInt.value=v-n;const S=this._sizeLods[r],R=3*S*(r>v-Qn?r-v+Qn:0),C=4*(this._cubeSize-S);Zi(t,R,C,3*S,2*S),l.setRenderTarget(t),l.render(f,Zr)}}function hp(i){const e=[],t=[],n=[];let r=i;const s=i-Qn+1+za.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Qn?l=za[o-i+Qn-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),d=-h,f=1+h,m=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,b=3,u=2,p=1,E=new Float32Array(b*_*g),v=new Float32Array(u*_*g),S=new Float32Array(p*_*g);for(let C=0;C<g;C++){const A=C%3*2/3-1,U=C>2?0:-1,Y=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];E.set(Y,b*_*C),v.set(m,u*_*C);const y=[C,C,C,C,C,C];S.set(y,p*_*C)}const R=new Ht;R.setAttribute("position",new Ut(E,b)),R.setAttribute("uv",new Ut(v,u)),R.setAttribute("faceIndex",new Ut(S,p)),e.push(R),r>Qn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Va(i,e,t){const n=new In(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function up(i,e,t){const n=new Float32Array(Cn),r=new I(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ja(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Wa(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Ms(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===ls||l===cs,d=l===ii||l===ri;if(h||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ha(i)),f=h?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(h&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new Ha(i));const m=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let l=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mp(i,e,t,n){const r={},s=new WeakMap;function o(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);for(const _ in m.morphAttributes){const b=m.morphAttributes[_];for(let u=0,p=b.length;u<p;u++)e.remove(b[u])}m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function l(f){const m=f.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const b=g[_];for(let u=0,p=b.length;u<p;u++)e.update(b[u],i.ARRAY_BUFFER)}}function h(f){const m=[],g=f.index,_=f.attributes.position;let b=0;if(g!==null){const E=g.array;b=g.version;for(let v=0,S=E.length;v<S;v+=3){const R=E[v+0],C=E[v+1],A=E[v+2];m.push(R,C,C,A,A,R)}}else if(_!==void 0){const E=_.array;b=_.version;for(let v=0,S=E.length/3-1;v<S;v+=3){const R=v+0,C=v+1,A=v+2;m.push(R,C,C,A,A,R)}}else return;const u=new(zo(m)?qo:Xo)(m,1);u.version=b;const p=s.get(f);p&&e.remove(p),s.set(f,u)}function d(f){const m=s.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&h(f)}else h(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function gp(i,e,t,n){const r=n.isWebGL2;let s;function o(g){s=g}let a,l;function h(g){a=g.type,l=g.bytesPerElement}function d(g,_){i.drawElements(s,_,a,g*l),t.update(_,s,1)}function f(g,_,b){if(b===0)return;let u,p;if(r)u=i,p="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,_,a,g*l,b),t.update(_,s,b)}function m(g,_,b){if(b===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<b;p++)this.render(g[p]/l,_[p]);else{u.multiDrawElementsWEBGL(s,_,0,a,g,0,b);let p=0;for(let E=0;E<b;E++)p+=_[E];t.update(p,s,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=m}function vp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xp(i,e){return i[0]-e[0]}function _p(i,e){return Math.abs(e[1])-Math.abs(i[1])}function yp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,d,f){const m=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let b=s.get(d);if(b===void 0||b.count!==_){let u=function(){w.dispose(),s.delete(d),d.removeEventListener("dispose",u)};b!==void 0&&b.texture.dispose();const p=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let A=0;p===!0&&(A=1),E===!0&&(A=2),v===!0&&(A=3);let U=d.attributes.position.count*A,Y=1;U>e.maxTextureSize&&(Y=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const y=new Float32Array(U*Y*4*_),w=new Ho(y,U,Y,_);w.type=Zt,w.needsUpdate=!0;const J=A*4;for(let K=0;K<_;K++){const N=S[K],X=R[K],H=C[K],q=U*Y*4*K;for(let V=0;V<N.count;V++){const j=V*J;p===!0&&(o.fromBufferAttribute(N,V),y[q+j+0]=o.x,y[q+j+1]=o.y,y[q+j+2]=o.z,y[q+j+3]=0),E===!0&&(o.fromBufferAttribute(X,V),y[q+j+4]=o.x,y[q+j+5]=o.y,y[q+j+6]=o.z,y[q+j+7]=0),v===!0&&(o.fromBufferAttribute(H,V),y[q+j+8]=o.x,y[q+j+9]=o.y,y[q+j+10]=o.z,y[q+j+11]=H.itemSize===4?o.w:1)}}b={count:_,texture:w,size:new Ve(U,Y)},s.set(d,b),d.addEventListener("dispose",u)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",h.morphTexture,t);else{let u=0;for(let E=0;E<m.length;E++)u+=m[E];const p=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",m)}f.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{const g=m===void 0?0:m.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[d.id]=_}for(let v=0;v<g;v++){const S=_[v];S[0]=v,S[1]=m[v]}_.sort(_p);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(xp);const b=d.morphAttributes.position,u=d.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const S=a[v],R=S[0],C=S[1];R!==Number.MAX_SAFE_INTEGER&&C?(b&&d.getAttribute("morphTarget"+v)!==b[R]&&d.setAttribute("morphTarget"+v,b[R]),u&&d.getAttribute("morphNormal"+v)!==u[R]&&d.setAttribute("morphNormal"+v,u[R]),r[v]=C,p+=C):(b&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),u&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),r[v]=0)}const E=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Sp(i,e,t,n){let r=new WeakMap;function s(l){const h=n.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class Qo extends St{constructor(e,t,n,r,s,o,a,l,h,d){if(d=d!==void 0?d:Dn,d!==Dn&&d!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Dn&&(n=ln),n===void 0&&d===si&&(n=Ln),super(null,r,s,o,a,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const el=new St,tl=new Qo(1,1);tl.compareFunction=Bo;const nl=new Ho,il=new th,rl=new Ko,Xa=[],qa=[],Ya=new Float32Array(16),$a=new Float32Array(9),Ka=new Float32Array(4);function li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xa[r];if(s===void 0&&(s=new Float32Array(r),Xa[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function st(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vr(i,e){let t=qa[e];t===void 0&&(t=new Int32Array(e),qa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2fv(this.addr,e),st(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;i.uniform3fv(this.addr,e),st(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4fv(this.addr,e),st(t,e)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Ka.set(n),i.uniformMatrix2fv(this.addr,!1,Ka),st(t,n)}}function Ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;$a.set(n),i.uniformMatrix3fv(this.addr,!1,$a),st(t,n)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Ya.set(n),i.uniformMatrix4fv(this.addr,!1,Ya),st(t,n)}}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2iv(this.addr,e),st(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3iv(this.addr,e),st(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4iv(this.addr,e),st(t,e)}}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2uiv(this.addr,e),st(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3uiv(this.addr,e),st(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4uiv(this.addr,e),st(t,e)}}function Fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?tl:el;t.setTexture2D(e||s,r)}function Bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||il,r)}function zp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rl,r)}function kp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nl,r)}function Gp(i){switch(i){case 5126:return Mp;case 35664:return bp;case 35665:return Ep;case 35666:return Tp;case 35674:return wp;case 35675:return Ap;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Pp;case 35668:case 35672:return Np;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Ip;case 36295:return Up;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Hp(i,e){i.uniform1fv(this.addr,e)}function Vp(i,e){const t=li(e,this.size,2);i.uniform2fv(this.addr,t)}function jp(i,e){const t=li(e,this.size,3);i.uniform3fv(this.addr,t)}function Wp(i,e){const t=li(e,this.size,4);i.uniform4fv(this.addr,t)}function Xp(i,e){const t=li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qp(i,e){const t=li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yp(i,e){const t=li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $p(i,e){i.uniform1iv(this.addr,e)}function Kp(i,e){i.uniform2iv(this.addr,e)}function Zp(i,e){i.uniform3iv(this.addr,e)}function Jp(i,e){i.uniform4iv(this.addr,e)}function Qp(i,e){i.uniform1uiv(this.addr,e)}function em(i,e){i.uniform2uiv(this.addr,e)}function tm(i,e){i.uniform3uiv(this.addr,e)}function nm(i,e){i.uniform4uiv(this.addr,e)}function im(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||el,s[o])}function rm(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||il,s[o])}function sm(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rl,s[o])}function am(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nl,s[o])}function om(i){switch(i){case 5126:return Hp;case 35664:return Vp;case 35665:return jp;case 35666:return Wp;case 35674:return Xp;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return em;case 36295:return tm;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return am}}class lm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}}class cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=om(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ts=/(\w+)(\])?(\[|\.)?/g;function Za(i,e){i.seq.push(e),i.map[e.id]=e}function hm(i,e,t){const n=i.name,r=n.length;for(ts.lastIndex=0;;){const s=ts.exec(n),o=ts.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===r){Za(t,h===void 0?new lm(a,i,e):new cm(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new dm(a),Za(t,f)),t=f}}}class nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ja(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const um=37297;let fm=0;function pm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mm(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===lr&&t===or?n="LinearDisplayP3ToLinearSRGB":e===or&&t===lr&&(n="LinearSRGBToLinearDisplayP3"),i){case mn:case pr:return[n,"LinearTransferOETF"];case Ft:case Ss:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+pm(i.getShaderSource(e),o)}else return r}function gm(i,e){const t=mm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vm(i,e){let t;switch(e){case Md:t="Linear";break;case bd:t="Reinhard";break;case Ed:t="OptimizedCineon";break;case Td:t="ACESFilmic";break;case Ad:t="AgX";break;case Cd:t="Neutral";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ei).join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ei).join(`
`)}function ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ei(i){return i!==""}function eo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function to(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ms(i){return i.replace(Mm,Em)}const bm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Em(i,e){let t=De[e];if(t===void 0){const n=bm.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ms(t)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(i){return i.replace(Tm,wm)}function wm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function io(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Am(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Cm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ii:case ri:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ro:e="ENVMAP_BLENDING_MULTIPLY";break;case yd:e="ENVMAP_BLENDING_MIX";break;case Sd:e="ENVMAP_BLENDING_ADD";break}return e}function Nm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Am(t),h=Cm(t),d=Rm(t),f=Pm(t),m=Nm(t),g=t.isWebGL2?"":xm(t),_=_m(t),b=ym(s),u=r.createProgram();let p,E,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ei).join(`
`),p.length>0&&(p+=`
`),E=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ei).join(`
`),E.length>0&&(E+=`
`)):(p=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),E=[g,io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?De.tonemapping_pars_fragment:"",t.toneMapping!==hn?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,gm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ei).join(`
`)),o=ms(o),o=eo(o,t),o=to(o,t),a=ms(a),a=eo(a,t),a=to(a,t),o=no(o),a=no(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=v+p+o,R=v+E+a,C=Ja(r,r.VERTEX_SHADER,S),A=Ja(r,r.FRAGMENT_SHADER,R);r.attachShader(u,C),r.attachShader(u,A),t.index0AttributeName!==void 0?r.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(u,0,"position"),r.linkProgram(u);function U(J){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(u).trim(),N=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(A).trim();let H=!0,q=!0;if(r.getProgramParameter(u,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,u,C,A);else{const V=Qa(r,C,"vertex"),j=Qa(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(u,r.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+K+`
`+V+`
`+j)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(N===""||X==="")&&(q=!1);q&&(J.diagnostics={runnable:H,programLog:K,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:E}})}r.deleteShader(C),r.deleteShader(A),Y=new nr(r,u),y=Sm(r,u)}let Y;this.getUniforms=function(){return Y===void 0&&U(this),Y};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(u,um)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fm++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=C,this.fragmentShader=A,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Um(e),t.set(e,n)),n}}class Um{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function Om(i,e,t,n,r,s,o){const a=new jo,l=new Im,h=new Set,d=[],f=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(y){return h.add(y),y===0?"uv":`uv${y}`}function p(y,w,J,K,N){const X=K.fog,H=N.geometry,q=y.isMeshStandardMaterial?K.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),j=V&&V.mapping===fr?V.image.height:null,te=b[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=re!==void 0?re.length:0;let Re=0;H.morphAttributes.position!==void 0&&(Re=1),H.morphAttributes.normal!==void 0&&(Re=2),H.morphAttributes.color!==void 0&&(Re=3);let k,Z,de,Ee;if(te){const qe=Bt[te];k=qe.vertexShader,Z=qe.fragmentShader}else k=y.vertexShader,Z=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const ge=i.getRenderTarget(),ue=N.isInstancedMesh===!0,je=N.isBatchedMesh===!0,Te=!!y.map,D=!!y.matcap,lt=!!V,xe=!!y.aoMap,Fe=!!y.lightMap,Se=!!y.bumpMap,Ge=!!y.normalMap,Ue=!!y.displacementMap,Be=!!y.emissiveMap,Qe=!!y.metalnessMap,T=!!y.roughnessMap,x=y.anisotropy>0,G=y.clearcoat>0,W=y.iridescence>0,Q=y.sheen>0,$=y.transmission>0,Pe=x&&!!y.anisotropyMap,Me=G&&!!y.clearcoatMap,se=G&&!!y.clearcoatNormalMap,oe=G&&!!y.clearcoatRoughnessMap,Ne=W&&!!y.iridescenceMap,ee=W&&!!y.iridescenceThicknessMap,tt=Q&&!!y.sheenColorMap,ze=Q&&!!y.sheenRoughnessMap,ve=!!y.specularMap,fe=!!y.specularColorMap,pe=!!y.specularIntensityMap,He=$&&!!y.transmissionMap,Ae=$&&!!y.thicknessMap,Ke=!!y.gradientMap,P=!!y.alphaMap,ae=y.alphaTest>0,F=!!y.alphaHash,ne=!!y.extensions;let le=hn;y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(le=i.toneMapping);const ke={isWebGL2:f,shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:Z,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:je,instancing:ue,instancingColor:ue&&N.instanceColor!==null,instancingMorph:ue&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:mn,alphaToCoverage:!!y.alphaToCoverage,map:Te,matcap:D,envMap:lt,envMapMode:lt&&V.mapping,envMapCubeUVHeight:j,aoMap:xe,lightMap:Fe,bumpMap:Se,normalMap:Ge,displacementMap:g&&Ue,emissiveMap:Be,normalMapObjectSpace:Ge&&y.normalMapType===kd,normalMapTangentSpace:Ge&&y.normalMapType===zd,metalnessMap:Qe,roughnessMap:T,anisotropy:x,anisotropyMap:Pe,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,iridescence:W,iridescenceMap:Ne,iridescenceThicknessMap:ee,sheen:Q,sheenColorMap:tt,sheenRoughnessMap:ze,specularMap:ve,specularColorMap:fe,specularIntensityMap:pe,transmission:$,transmissionMap:He,thicknessMap:Ae,gradientMap:Ke,opaque:y.transparent===!1&&y.blending===ti&&y.alphaToCoverage===!1,alphaMap:P,alphaTest:ae,alphaHash:F,combine:y.combine,mapUv:Te&&u(y.map.channel),aoMapUv:xe&&u(y.aoMap.channel),lightMapUv:Fe&&u(y.lightMap.channel),bumpMapUv:Se&&u(y.bumpMap.channel),normalMapUv:Ge&&u(y.normalMap.channel),displacementMapUv:Ue&&u(y.displacementMap.channel),emissiveMapUv:Be&&u(y.emissiveMap.channel),metalnessMapUv:Qe&&u(y.metalnessMap.channel),roughnessMapUv:T&&u(y.roughnessMap.channel),anisotropyMapUv:Pe&&u(y.anisotropyMap.channel),clearcoatMapUv:Me&&u(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&u(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&u(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&u(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&u(y.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&u(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&u(y.sheenRoughnessMap.channel),specularMapUv:ve&&u(y.specularMap.channel),specularColorMapUv:fe&&u(y.specularColorMap.channel),specularIntensityMapUv:pe&&u(y.specularIntensityMap.channel),transmissionMapUv:He&&u(y.transmissionMap.channel),thicknessMapUv:Ae&&u(y.thicknessMap.channel),alphaMapUv:P&&u(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ge||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Te||P),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===$e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ne&&y.extensions.derivatives===!0,extensionFragDepth:ne&&y.extensions.fragDepth===!0,extensionDrawBuffers:ne&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function E(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const J in y.defines)w.push(J),w.push(y.defines[J]);return y.isRawShaderMaterial===!1&&(v(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const w=b[y.type];let J;if(w){const K=Bt[w];J=ph.clone(K.uniforms)}else J=y.uniforms;return J}function C(y,w){let J;for(let K=0,N=d.length;K<N;K++){const X=d[K];if(X.cacheKey===w){J=X,++J.usedTimes;break}}return J===void 0&&(J=new Lm(i,w,y,s),d.push(J)),J}function A(y){if(--y.usedTimes===0){const w=d.indexOf(y);d[w]=d[d.length-1],d.pop(),y.destroy()}}function U(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:R,acquireProgram:C,releaseProgram:A,releaseShaderCache:U,programs:d,dispose:Y}}function Fm(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ro(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function so(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,m,g,_,b,u){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:m,material:g,groupOrder:_,renderOrder:f.renderOrder,z:b,group:u},i[e]=p):(p.id=f.id,p.object=f,p.geometry=m,p.material=g,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=b,p.group=u),e++,p}function a(f,m,g,_,b,u){const p=o(f,m,g,_,b,u);g.transmission>0?n.push(p):g.transparent===!0?r.push(p):t.push(p)}function l(f,m,g,_,b,u){const p=o(f,m,g,_,b,u);g.transmission>0?n.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function h(f,m){t.length>1&&t.sort(f||Bm),n.length>1&&n.sort(m||ro),r.length>1&&r.sort(m||ro)}function d(){for(let f=e,m=i.length;f<m;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:h}}function zm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new so,i.set(n,[o])):r>=s.length?(o=new so,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hm=0;function Vm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jm(i,e){const t=new km,n=Gm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,o=new it,a=new it;function l(d,f){let m=0,g=0,_=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let b=0,u=0,p=0,E=0,v=0,S=0,R=0,C=0,A=0,U=0,Y=0;d.sort(Vm);const y=f===!0?Math.PI:1;for(let J=0,K=d.length;J<K;J++){const N=d[J],X=N.color,H=N.intensity,q=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)m+=X.r*H*y,g+=X.g*H*y,_+=X.b*H*y;else if(N.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],H);Y++}else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const te=N.shadow,re=n.get(N);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,r.directionalShadow[b]=re,r.directionalShadowMap[b]=V,r.directionalShadowMatrix[b]=N.shadow.matrix,S++}r.directional[b]=j,b++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(X).multiplyScalar(H*y),j.distance=q,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[p]=j;const te=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,te.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[p]=te.matrix,N.castShadow){const re=n.get(N);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,r.spotShadow[p]=re,r.spotShadowMap[p]=V,C++}p++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(X).multiplyScalar(H),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[E]=j,E++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*y),j.distance=N.distance,j.decay=N.decay,N.castShadow){const te=N.shadow,re=n.get(N);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,r.pointShadow[u]=re,r.pointShadowMap[u]=V,r.pointShadowMatrix[u]=N.shadow.matrix,R++}r.point[u]=j,u++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(H*y),j.groundColor.copy(N.groundColor).multiplyScalar(H*y),r.hemi[v]=j,v++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==b||w.pointLength!==u||w.spotLength!==p||w.rectAreaLength!==E||w.hemiLength!==v||w.numDirectionalShadows!==S||w.numPointShadows!==R||w.numSpotShadows!==C||w.numSpotMaps!==A||w.numLightProbes!==Y)&&(r.directional.length=b,r.spot.length=p,r.rectArea.length=E,r.point.length=u,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=Y,w.directionalLength=b,w.pointLength=u,w.spotLength=p,w.rectAreaLength=E,w.hemiLength=v,w.numDirectionalShadows=S,w.numPointShadows=R,w.numSpotShadows=C,w.numSpotMaps=A,w.numLightProbes=Y,r.version=Hm++)}function h(d,f){let m=0,g=0,_=0,b=0,u=0;const p=f.matrixWorldInverse;for(let E=0,v=d.length;E<v;E++){const S=d[E];if(S.isDirectionalLight){const R=r.directional[m];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),m++}else if(S.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),g++}else if(S.isHemisphereLight){const R=r.hemi[u];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),u++}}}return{setup:l,setupView:h,state:r}}function ao(i,e){const t=new jm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function Wm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ao(i,e),t.set(s,[l])):o>=a.length?(l=new ao(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xm extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qm extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Km(i,e,t){let n=new Zo;const r=new Ve,s=new Ve,o=new dt,a=new Xm({depthPacking:Bd}),l=new qm,h={},d=t.maxTextureSize,f={[fn]:yt,[yt]:fn,[Kt]:Kt},m=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Ym,fragmentShader:$m}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new kt(_,m),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(C,A,U){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const Y=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),J=i.state;J.setBlending(dn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const K=p!==$t&&this.type===$t,N=p===$t&&this.type!==$t;for(let X=0,H=C.length;X<H;X++){const q=C[X],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const j=V.getFrameExtents();if(r.multiply(j),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,V.mapSize.y=s.y)),V.map===null||K===!0||N===!0){const re=this.type!==$t?{minFilter:gt,magFilter:gt}:{};V.map!==null&&V.map.dispose(),V.map=new In(r.x,r.y,re),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const te=V.getViewportCount();for(let re=0;re<te;re++){const he=V.getViewport(re);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),J.viewport(o),V.updateMatrices(q,re),n=V.getFrustum(),S(A,U,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===$t&&E(V,U),V.needsUpdate=!1}p=this.type,u.needsUpdate=!1,i.setRenderTarget(Y,y,w)};function E(C,A){const U=e.update(b);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new In(r.x,r.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,U,m,b,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,U,g,b,null)}function v(C,A,U,Y){let y=null;const w=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)y=w;else if(y=U.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const J=y.uuid,K=A.uuid;let N=h[J];N===void 0&&(N={},h[J]=N);let X=N[K];X===void 0&&(X=y.clone(),N[K]=X,A.addEventListener("dispose",R)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,Y===$t?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=i.properties.get(y);J.light=U}return y}function S(C,A,U,Y,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===$t)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const K=e.update(C),N=C.material;if(Array.isArray(N)){const X=K.groups;for(let H=0,q=X.length;H<q;H++){const V=X[H],j=N[V.materialIndex];if(j&&j.visible){const te=v(C,j,Y,y);C.onBeforeShadow(i,C,A,U,K,te,V),i.renderBufferDirect(U,null,K,te,C,V),C.onAfterShadow(i,C,A,U,K,te,V)}}}else if(N.visible){const X=v(C,N,Y,y);C.onBeforeShadow(i,C,A,U,K,X,null),i.renderBufferDirect(U,null,K,X,C,null),C.onAfterShadow(i,C,A,U,K,X,null)}}const J=C.children;for(let K=0,N=J.length;K<N;K++)S(J[K],A,U,Y,y)}function R(C){C.target.removeEventListener("dispose",R);for(const U in h){const Y=h[U],y=C.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}function Zm(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const ae=new dt;let F=null;const ne=new dt(0,0,0,0);return{setMask:function(le){F!==le&&!P&&(i.colorMask(le,le,le,le),F=le)},setLocked:function(le){P=le},setClear:function(le,ke,qe,ct,wt){wt===!0&&(le*=ct,ke*=ct,qe*=ct),ae.set(le,ke,qe,ct),ne.equals(ae)===!1&&(i.clearColor(le,ke,qe,ct),ne.copy(ae))},reset:function(){P=!1,F=null,ne.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,F=null,ne=null;return{setTest:function(le){le?ue(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!P&&(i.depthMask(le),ae=le)},setFunc:function(le){if(F!==le){switch(le){case fd:i.depthFunc(i.NEVER);break;case pd:i.depthFunc(i.ALWAYS);break;case md:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case gd:i.depthFunc(i.EQUAL);break;case vd:i.depthFunc(i.GEQUAL);break;case xd:i.depthFunc(i.GREATER);break;case _d:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=le}},setLocked:function(le){P=le},setClear:function(le){ne!==le&&(i.clearDepth(le),ne=le)},reset:function(){P=!1,ae=null,F=null,ne=null}}}function o(){let P=!1,ae=null,F=null,ne=null,le=null,ke=null,qe=null,ct=null,wt=null;return{setTest:function(Ye){P||(Ye?ue(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(Ye){ae!==Ye&&!P&&(i.stencilMask(Ye),ae=Ye)},setFunc:function(Ye,pt,Ot){(F!==Ye||ne!==pt||le!==Ot)&&(i.stencilFunc(Ye,pt,Ot),F=Ye,ne=pt,le=Ot)},setOp:function(Ye,pt,Ot){(ke!==Ye||qe!==pt||ct!==Ot)&&(i.stencilOp(Ye,pt,Ot),ke=Ye,qe=pt,ct=Ot)},setLocked:function(Ye){P=Ye},setClear:function(Ye){wt!==Ye&&(i.clearStencil(Ye),wt=Ye)},reset:function(){P=!1,ae=null,F=null,ne=null,le=null,ke=null,qe=null,ct=null,wt=null}}}const a=new r,l=new s,h=new o,d=new WeakMap,f=new WeakMap;let m={},g={},_=new WeakMap,b=[],u=null,p=!1,E=null,v=null,S=null,R=null,C=null,A=null,U=null,Y=new We(0,0,0),y=0,w=!1,J=null,K=null,N=null,X=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=j>=2);let re=null,he={};const Re=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),Z=new dt().fromArray(Re),de=new dt().fromArray(k);function Ee(P,ae,F,ne){const le=new Uint8Array(4),ke=i.createTexture();i.bindTexture(P,ke),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<F;qe++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ke}const ge={};ge[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),ue(i.DEPTH_TEST),l.setFunc(sr),Ue(!1),Be(ks),ue(i.CULL_FACE),Se(dn);function ue(P){m[P]!==!0&&(i.enable(P),m[P]=!0)}function je(P){m[P]!==!1&&(i.disable(P),m[P]=!1)}function Te(P,ae){return g[P]!==ae?(i.bindFramebuffer(P,ae),g[P]=ae,n&&(P===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(P,ae){let F=b,ne=!1;if(P){F=_.get(ae),F===void 0&&(F=[],_.set(ae,F));const le=P.textures;if(F.length!==le.length||F[0]!==i.COLOR_ATTACHMENT0){for(let ke=0,qe=le.length;ke<qe;ke++)F[ke]=i.COLOR_ATTACHMENT0+ke;F.length=le.length,ne=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,ne=!0);if(ne)if(t.isWebGL2)i.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function lt(P){return u!==P?(i.useProgram(P),u=P,!0):!1}const xe={[An]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[Vs]=i.MIN,xe[js]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(xe[Vs]=P.MIN_EXT,xe[js]=P.MAX_EXT)}const Fe={[ed]:i.ZERO,[td]:i.ONE,[nd]:i.SRC_COLOR,[as]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[os]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(P,ae,F,ne,le,ke,qe,ct,wt,Ye){if(P===dn){p===!0&&(je(i.BLEND),p=!1);return}if(p===!1&&(ue(i.BLEND),p=!0),P!==Zc){if(P!==E||Ye!==w){if((v!==An||C!==An)&&(i.blendEquation(i.FUNC_ADD),v=An,C=An),Ye)switch(P){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFunc(i.ONE,i.ONE);break;case Gs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,A=null,U=null,Y.set(0,0,0),y=0,E=P,w=Ye}return}le=le||ae,ke=ke||F,qe=qe||ne,(ae!==v||le!==C)&&(i.blendEquationSeparate(xe[ae],xe[le]),v=ae,C=le),(F!==S||ne!==R||ke!==A||qe!==U)&&(i.blendFuncSeparate(Fe[F],Fe[ne],Fe[ke],Fe[qe]),S=F,R=ne,A=ke,U=qe),(ct.equals(Y)===!1||wt!==y)&&(i.blendColor(ct.r,ct.g,ct.b,wt),Y.copy(ct),y=wt),E=P,w=!1}function Ge(P,ae){P.side===Kt?je(i.CULL_FACE):ue(i.CULL_FACE);let F=P.side===yt;ae&&(F=!F),Ue(F),P.blending===ti&&P.transparent===!1?Se(dn):Se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ne=P.stencilWrite;h.setTest(ne),ne&&(h.setMask(P.stencilWriteMask),h.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),h.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),T(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(P){J!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),J=P)}function Be(P){P!==Yc?(ue(i.CULL_FACE),P!==K&&(P===ks?i.cullFace(i.BACK):P===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),K=P}function Qe(P){P!==N&&(V&&i.lineWidth(P),N=P)}function T(P,ae,F){P?(ue(i.POLYGON_OFFSET_FILL),(X!==ae||H!==F)&&(i.polygonOffset(ae,F),X=ae,H=F)):je(i.POLYGON_OFFSET_FILL)}function x(P){P?ue(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function G(P){P===void 0&&(P=i.TEXTURE0+q-1),re!==P&&(i.activeTexture(P),re=P)}function W(P,ae,F){F===void 0&&(re===null?F=i.TEXTURE0+q-1:F=re);let ne=he[F];ne===void 0&&(ne={type:void 0,texture:void 0},he[F]=ne),(ne.type!==P||ne.texture!==ae)&&(re!==F&&(i.activeTexture(F),re=F),i.bindTexture(P,ae||ge[P]),ne.type=P,ne.texture=ae)}function Q(){const P=he[re];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function pe(P){de.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),de.copy(P))}function He(P,ae){let F=f.get(ae);F===void 0&&(F=new WeakMap,f.set(ae,F));let ne=F.get(P);ne===void 0&&(ne=i.getUniformBlockIndex(ae,P.name),F.set(P,ne))}function Ae(P,ae){const ne=f.get(ae).get(P);d.get(ae)!==ne&&(i.uniformBlockBinding(ae,ne,P.__bindingPointIndex),d.set(ae,ne))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},re=null,he={},g={},_=new WeakMap,b=[],u=null,p=!1,E=null,v=null,S=null,R=null,C=null,A=null,U=null,Y=new We(0,0,0),y=0,w=!1,J=null,K=null,N=null,X=null,H=null,Z.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:ue,disable:je,bindFramebuffer:Te,drawBuffers:D,useProgram:lt,setBlending:Se,setMaterial:Ge,setFlipSided:Ue,setCullFace:Be,setLineWidth:Qe,setPolygonOffset:T,setScissorTest:x,activeTexture:G,bindTexture:W,unbindTexture:Q,compressedTexImage2D:$,compressedTexImage3D:Pe,texImage2D:ze,texImage3D:ve,updateUBOMapping:He,uniformBlockBinding:Ae,texStorage2D:ee,texStorage3D:tt,texSubImage2D:Me,texSubImage3D:se,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ne,scissor:fe,viewport:pe,reset:Ke}}function Jm(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ve,f=new WeakMap;let m;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,x){return _?new OffscreenCanvas(T,x):dr("canvas")}function u(T,x,G,W){let Q=1;const $=Qe(T);if(($.width>W||$.height>W)&&(Q=W/Math.max($.width,$.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Pe=x?ps:Math.floor,Me=Pe(Q*$.width),se=Pe(Q*$.height);m===void 0&&(m=b(Me,se));const oe=G?b(Me,se):m;return oe.width=Me,oe.height=se,oe.getContext("2d").drawImage(T,0,0,Me,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Me+"x"+se+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){const x=Qe(T);return ya(x.width)&&ya(x.height)}function E(T){return a?!1:T.wrapS!==Dt||T.wrapT!==Dt||T.minFilter!==gt&&T.minFilter!==xt}function v(T,x){return T.generateMipmaps&&x&&T.minFilter!==gt&&T.minFilter!==xt}function S(T){i.generateMipmap(T)}function R(T,x,G,W,Q=!1){if(a===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),x===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),x===i.RGBA){const Pe=Q?ar:Xe.getTransfer(W);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=Pe===$e?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function C(T,x,G){return v(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==gt&&T.minFilter!==xt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){return T===gt||T===Ws||T===ui?i.NEAREST:i.LINEAR}function U(T){const x=T.target;x.removeEventListener("dispose",U),y(x),x.isVideoTexture&&f.delete(x)}function Y(T){const x=T.target;x.removeEventListener("dispose",Y),J(x)}function y(T){const x=n.get(T);if(x.__webglInit===void 0)return;const G=T.source,W=g.get(G);if(W){const Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(T),Object.keys(W).length===0&&g.delete(G)}n.remove(T)}function w(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const G=T.source,W=g.get(G);delete W[x.__cacheKey],o.memory.textures--}function J(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Q=0;Q<x.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=T.textures;for(let W=0,Q=G.length;W<Q;W++){const $=n.get(G[W]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[W])}n.remove(T)}let K=0;function N(){K=0}function X(){const T=K;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),K+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function q(T,x){const G=n.get(T);if(T.isVideoTexture&&Ue(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(G,T,x);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function V(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function j(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function te(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Ee(G,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const re={[ds]:i.REPEAT,[Dt]:i.CLAMP_TO_EDGE,[hs]:i.MIRRORED_REPEAT},he={[gt]:i.NEAREST,[Ws]:i.NEAREST_MIPMAP_NEAREST,[ui]:i.NEAREST_MIPMAP_LINEAR,[xt]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Re={[Gd]:i.NEVER,[qd]:i.ALWAYS,[Hd]:i.LESS,[Bo]:i.LEQUAL,[Vd]:i.EQUAL,[Xd]:i.GEQUAL,[jd]:i.GREATER,[Wd]:i.NOTEQUAL};function k(T,x,G){if(x.type===Zt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===xt||x.magFilter===Er||x.magFilter===ui||x.magFilter===Pn||x.minFilter===xt||x.minFilter===Er||x.minFilter===ui||x.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(i.texParameteri(T,i.TEXTURE_WRAP_S,re[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,re[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,re[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[x.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Dt||x.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==gt&&x.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gt||x.minFilter!==ui&&x.minFilter!==Pn||x.type===Zt&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Si&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Z(T,x){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",U));const W=x.source;let Q=g.get(W);Q===void 0&&(Q={},g.set(W,Q));const $=H(x);if($!==T.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;const Pe=Q[T.__cacheKey];Pe!==void 0&&(Q[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(x)),T.__cacheKey=$,T.__webglTexture=Q[$].texture}return G}function de(T,x,G){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);const Q=Z(T,x),$=x.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+G);const Pe=n.get($);if($.version!==Pe.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);const Me=Xe.getPrimaries(Xe.workingColorSpace),se=x.colorSpace===on?null:Xe.getPrimaries(x.colorSpace),oe=x.colorSpace===on||Me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ne=E(x)&&p(x.image)===!1;let ee=u(x.image,Ne,!1,r.maxTextureSize);ee=Be(x,ee);const tt=p(ee)||a,ze=s.convert(x.format,x.colorSpace);let ve=s.convert(x.type),fe=R(x.internalFormat,ze,ve,x.colorSpace,x.isVideoTexture);k(W,x,tt);let pe;const He=x.mipmaps,Ae=a&&x.isVideoTexture!==!0&&fe!==Fo,Ke=Pe.__version===void 0||Q===!0,P=$.dataReady,ae=C(x,ee,tt);if(x.isDepthTexture)fe=i.DEPTH_COMPONENT,a?x.type===Zt?fe=i.DEPTH_COMPONENT32F:x.type===ln?fe=i.DEPTH_COMPONENT24:x.type===Ln?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:x.type===Zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Dn&&fe===i.DEPTH_COMPONENT&&x.type!==ys&&x.type!==ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ln,ve=s.convert(x.type)),x.format===si&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ln,ve=s.convert(x.type))),Ke&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,ze,ve,null));else if(x.isDataTexture)if(He.length>0&&tt){Ae&&Ke&&t.texStorage2D(i.TEXTURE_2D,ae,fe,He[0].width,He[0].height);for(let F=0,ne=He.length;F<ne;F++)pe=He[F],Ae?P&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,pe.width,pe.height,ze,ve,pe.data):t.texImage2D(i.TEXTURE_2D,F,fe,pe.width,pe.height,0,ze,ve,pe.data);x.generateMipmaps=!1}else Ae?(Ke&&t.texStorage2D(i.TEXTURE_2D,ae,fe,ee.width,ee.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ze,ve,ee.data)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,ze,ve,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ae&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,He[0].width,He[0].height,ee.depth);for(let F=0,ne=He.length;F<ne;F++)pe=He[F],x.format!==It?ze!==null?Ae?P&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,ee.depth,ze,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,fe,pe.width,pe.height,ee.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,ee.depth,ze,ve,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,fe,pe.width,pe.height,ee.depth,0,ze,ve,pe.data)}else{Ae&&Ke&&t.texStorage2D(i.TEXTURE_2D,ae,fe,He[0].width,He[0].height);for(let F=0,ne=He.length;F<ne;F++)pe=He[F],x.format!==It?ze!==null?Ae?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,pe.width,pe.height,ze,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,F,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?P&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,pe.width,pe.height,ze,ve,pe.data):t.texImage2D(i.TEXTURE_2D,F,fe,pe.width,pe.height,0,ze,ve,pe.data)}else if(x.isDataArrayTexture)Ae?(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ze,ve,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,ze,ve,ee.data);else if(x.isData3DTexture)Ae?(Ke&&t.texStorage3D(i.TEXTURE_3D,ae,fe,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ze,ve,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,ze,ve,ee.data);else if(x.isFramebufferTexture){if(Ke)if(Ae)t.texStorage2D(i.TEXTURE_2D,ae,fe,ee.width,ee.height);else{let F=ee.width,ne=ee.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,fe,F,ne,0,ze,ve,null),F>>=1,ne>>=1}}else if(He.length>0&&tt){if(Ae&&Ke){const F=Qe(He[0]);t.texStorage2D(i.TEXTURE_2D,ae,fe,F.width,F.height)}for(let F=0,ne=He.length;F<ne;F++)pe=He[F],Ae?P&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,ze,ve,pe):t.texImage2D(i.TEXTURE_2D,F,fe,ze,ve,pe);x.generateMipmaps=!1}else if(Ae){if(Ke){const F=Qe(ee);t.texStorage2D(i.TEXTURE_2D,ae,fe,F.width,F.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,ve,ee)}else t.texImage2D(i.TEXTURE_2D,0,fe,ze,ve,ee);v(x,tt)&&S(W),Pe.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ee(T,x,G){if(x.image.length!==6)return;const W=Z(T,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const $=n.get(Q);if(Q.version!==$.__version||W===!0){t.activeTexture(i.TEXTURE0+G);const Pe=Xe.getPrimaries(Xe.workingColorSpace),Me=x.colorSpace===on?null:Xe.getPrimaries(x.colorSpace),se=x.colorSpace===on||Pe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ne=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let F=0;F<6;F++)!oe&&!Ne?ee[F]=u(x.image[F],!1,!0,r.maxCubemapSize):ee[F]=Ne?x.image[F].image:x.image[F],ee[F]=Be(x,ee[F]);const tt=ee[0],ze=p(tt)||a,ve=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),pe=R(x.internalFormat,ve,fe,x.colorSpace),He=a&&x.isVideoTexture!==!0,Ae=$.__version===void 0||W===!0,Ke=Q.dataReady;let P=C(x,tt,ze);k(i.TEXTURE_CUBE_MAP,x,ze);let ae;if(oe){He&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,P,pe,tt.width,tt.height);for(let F=0;F<6;F++){ae=ee[F].mipmaps;for(let ne=0;ne<ae.length;ne++){const le=ae[ne];x.format!==It?ve!==null?He?Ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,le.width,le.height,ve,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,le.width,le.height,ve,fe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,pe,le.width,le.height,0,ve,fe,le.data)}}}else{if(ae=x.mipmaps,He&&Ae){ae.length>0&&P++;const F=Qe(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,P,pe,F.width,F.height)}for(let F=0;F<6;F++)if(Ne){He?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ee[F].width,ee[F].height,ve,fe,ee[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,pe,ee[F].width,ee[F].height,0,ve,fe,ee[F].data);for(let ne=0;ne<ae.length;ne++){const ke=ae[ne].image[F].image;He?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,ke.width,ke.height,ve,fe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,pe,ke.width,ke.height,0,ve,fe,ke.data)}}else{He?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ve,fe,ee[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,pe,ve,fe,ee[F]);for(let ne=0;ne<ae.length;ne++){const le=ae[ne];He?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,ve,fe,le.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,pe,ve,fe,le.image[F])}}}v(x,ze)&&S(i.TEXTURE_CUBE_MAP),$.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ge(T,x,G,W,Q,$){const Pe=s.convert(G.format,G.colorSpace),Me=s.convert(G.type),se=R(G.internalFormat,Pe,Me,G.colorSpace);if(!n.get(x).__hasExternalTextures){const Ne=Math.max(1,x.width>>$),ee=Math.max(1,x.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,se,Ne,ee,x.depth,0,Pe,Me,null):t.texImage2D(Q,$,se,Ne,ee,0,Pe,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,n.get(G).__webglTexture,0,Se(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,n.get(G).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(T,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let W=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||Ge(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Zt?W=i.DEPTH_COMPONENT32F:Q.type===ln&&(W=i.DEPTH_COMPONENT24));const $=Se(x);Ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,W,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,W,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const W=Se(x);G&&Ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,W,i.DEPTH24_STENCIL8,x.width,x.height):Ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const W=x.textures;for(let Q=0;Q<W.length;Q++){const $=W[Q],Pe=s.convert($.format,$.colorSpace),Me=s.convert($.type),se=R($.internalFormat,Pe,Me,$.colorSpace),oe=Se(x);G&&Ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,se,x.width,x.height):Ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const W=n.get(x.depthTexture).__webglTexture,Q=Se(x);if(x.depthTexture.format===Dn)Ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(x.depthTexture.format===si)Ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Te(T){const x=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");je(x.__webglFramebuffer,T)}else if(G){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]=i.createRenderbuffer(),ue(x.__webglDepthbuffer[W],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ue(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(T,x,G){const W=n.get(T);x!==void 0&&ge(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Te(T)}function lt(T){const x=T.texture,G=n.get(T),W=n.get(x);T.addEventListener("dispose",Y);const Q=T.textures,$=T.isWebGLCubeRenderTarget===!0,Pe=Q.length>1,Me=p(T)||a;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let oe=0;oe<x.mipmaps.length;oe++)G.__webglFramebuffer[se][oe]=i.createFramebuffer()}else G.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)G.__webglFramebuffer[se]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)if(r.drawBuffers)for(let se=0,oe=Q.length;se<oe;se++){const Ne=n.get(Q[se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ge(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){const oe=Q[se];G.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[se]);const Ne=s.convert(oe.format,oe.colorSpace),ee=s.convert(oe.type),tt=R(oe.internalFormat,Ne,ee,oe.colorSpace,T.isXRRenderTarget===!0),ze=Se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,G.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),k(i.TEXTURE_CUBE_MAP,x,Me);for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)ge(G.__webglFramebuffer[se][oe],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else ge(G.__webglFramebuffer[se],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);v(x,Me)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let se=0,oe=Q.length;se<oe;se++){const Ne=Q[se],ee=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),k(i.TEXTURE_2D,Ne,Me),ge(G.__webglFramebuffer,T,Ne,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),v(Ne,Me)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,W.__webglTexture),k(se,x,Me),a&&x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)ge(G.__webglFramebuffer[oe],T,x,i.COLOR_ATTACHMENT0,se,oe);else ge(G.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,se,0);v(x,Me)&&S(se),t.unbindTexture()}T.depthBuffer&&Te(T)}function xe(T){const x=p(T)||a,G=T.textures;for(let W=0,Q=G.length;W<Q;W++){const $=G[W];if(v($,x)){const Pe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get($).__webglTexture;t.bindTexture(Pe,Me),S(Pe),t.unbindTexture()}}}function Fe(T){if(a&&T.samples>0&&Ge(T)===!1){const x=T.textures,G=T.width,W=T.height;let Q=i.COLOR_BUFFER_BIT;const $=[],Pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),se=x.length>1;if(se)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){$.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&$.push(Pe);const Ne=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ne===!1&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),se){const ee=n.get(x[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,G,W,0,0,G,W,Q,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]);const Ne=n.get(x[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Se(T){return Math.min(r.maxSamples,T.samples)}function Ge(T){const x=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ue(T){const x=o.render.frame;f.get(T)!==x&&(f.set(T,x),T.update())}function Be(T,x){const G=T.colorSpace,W=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===us||G!==mn&&G!==on&&(Xe.getTransfer(G)===$e?a===!1?e.has("EXT_sRGB")===!0&&W===It?(T.format=us,T.minFilter=xt,T.generateMipmaps=!1):x=ko.sRGBToLinear(x):(W!==It||Q!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Qe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(d.width=T.naturalWidth||T.width,d.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(d.width=T.displayWidth,d.height=T.displayHeight):(d.width=T.width,d.height=T.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=D,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ge}function Qm(i,e,t){const n=t.isWebGL2;function r(s,o=on){let a;const l=Xe.getTransfer(o);if(s===un)return i.UNSIGNED_BYTE;if(s===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Rd)return i.BYTE;if(s===Pd)return i.SHORT;if(s===ys)return i.UNSIGNED_SHORT;if(s===No)return i.INT;if(s===ln)return i.UNSIGNED_INT;if(s===Zt)return i.FLOAT;if(s===Si)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Nd)return i.ALPHA;if(s===It)return i.RGBA;if(s===Ld)return i.LUMINANCE;if(s===Dd)return i.LUMINANCE_ALPHA;if(s===Dn)return i.DEPTH_COMPONENT;if(s===si)return i.DEPTH_STENCIL;if(s===us)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Id)return i.RED;if(s===Io)return i.RED_INTEGER;if(s===Ud)return i.RG;if(s===Uo)return i.RG_INTEGER;if(s===Oo)return i.RGBA_INTEGER;if(s===Tr||s===wr||s===Ar||s===Cr)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Tr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Tr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xs||s===qs||s===Ys||s===$s)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ys)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$s)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ks||s===Zs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ks)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Js||s===Qs||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===la||s===ca||s===da||s===ha)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Js)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ea)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ta)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===na)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ia)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ra)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===aa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===la)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ca)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===da)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ha)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rr||s===ua||s===fa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Rr)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ua)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Od||s===pa||s===ma||s===ga)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ga)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ln?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class eg extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const b of e.hand.values()){const u=t.getJointPose(b,n),p=this._getHandJoint(h,b);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=d.position.distanceTo(f.position),g=.02,_=.005;h.inputState.pinching&&m>g+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new pn({extensions:{fragDepth:!0},vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kt(new gr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class sg extends oi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,h=null,d=null,f=null,m=null,g=null,_=null;const b=new rg,u=t.getContextAttributes();let p=null,E=null;const v=[],S=[],R=new Ve;let C=null;const A=new Rt;A.layers.enable(1),A.viewport=new dt;const U=new Rt;U.layers.enable(2),U.viewport=new dt;const Y=[A,U],y=new eg;y.layers.enable(1),y.layers.enable(2);let w=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=v[k];return Z===void 0&&(Z=new ns,v[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=v[k];return Z===void 0&&(Z=new ns,v[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=v[k];return Z===void 0&&(Z=new ns,v[k]=Z),Z.getHandSpace()};function K(k){const Z=S.indexOf(k.inputSource);if(Z===-1)return;const de=v[Z];de!==void 0&&(de.update(k.inputSource,k.frame,h||o),de.dispatchEvent({type:k.type,data:k.inputSource}))}function N(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",X);for(let k=0;k<v.length;k++){const Z=S[k];Z!==null&&(S[k]=null,v[k].disconnect(Z))}w=null,J=null,b.reset(),e.setRenderTarget(p),g=null,m=null,f=null,r=null,E=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(k){h=k},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",N),r.addEventListener("inputsourceschange",X),u.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?u.antialias:!0,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new In(g.framebufferWidth,g.framebufferHeight,{format:It,type:un,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let Z=null,de=null,Ee=null;u.depth&&(Ee=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=u.stencil?si:Dn,de=u.stencil?Ln:ln);const ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),m=f.createProjectionLayer(ge),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new In(m.textureWidth,m.textureHeight,{format:It,type:un,depthTexture:new Qo(m.textureWidth,m.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0});const ue=e.properties.get(E);ue.__ignoreDepthValues=m.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(k){for(let Z=0;Z<k.removed.length;Z++){const de=k.removed[Z],Ee=S.indexOf(de);Ee>=0&&(S[Ee]=null,v[Ee].disconnect(de))}for(let Z=0;Z<k.added.length;Z++){const de=k.added[Z];let Ee=S.indexOf(de);if(Ee===-1){for(let ue=0;ue<v.length;ue++)if(ue>=S.length){S.push(de),Ee=ue;break}else if(S[ue]===null){S[ue]=de,Ee=ue;break}if(Ee===-1)break}const ge=v[Ee];ge&&ge.connect(de)}}const H=new I,q=new I;function V(k,Z,de){H.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const Ee=H.distanceTo(q),ge=Z.projectionMatrix.elements,ue=de.projectionMatrix.elements,je=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),D=(ge[9]+1)/ge[5],lt=(ge[9]-1)/ge[5],xe=(ge[8]-1)/ge[0],Fe=(ue[8]+1)/ue[0],Se=je*xe,Ge=je*Fe,Ue=Ee/(-xe+Fe),Be=Ue*-xe;Z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Be),k.translateZ(Ue),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Qe=je+Ue,T=Te+Ue,x=Se-Be,G=Ge+(Ee-Be),W=D*Te/T*Qe,Q=lt*Te/T*Qe;k.projectionMatrix.makePerspective(x,G,W,Q,Qe,T),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;b.texture!==null&&(k.near=b.depthNear,k.far=b.depthFar),y.near=U.near=A.near=k.near,y.far=U.far=A.far=k.far,(w!==y.near||J!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,J=y.far,A.near=w,A.far=J,U.near=w,U.far=J,A.updateProjectionMatrix(),U.updateProjectionMatrix(),k.updateProjectionMatrix());const Z=k.parent,de=y.cameras;j(y,Z);for(let Ee=0;Ee<de.length;Ee++)j(de[Ee],Z);de.length===2?V(y,A,U):y.projectionMatrix.copy(A.projectionMatrix),te(k,y,Z)};function te(k,Z,de){de===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=fs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(k){l=k,m!==null&&(m.fixedFoveation=k),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=k)},this.hasDepthSensing=function(){return b.texture!==null};let re=null;function he(k,Z){if(d=Z.getViewerPose(h||o),_=Z,d!==null){const de=d.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Ee=!1;de.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let ue=0;ue<de.length;ue++){const je=de[ue];let Te=null;if(g!==null)Te=g.getViewport(je);else{const lt=f.getViewSubImage(m,je);Te=lt.viewport,ue===0&&(e.setRenderTargetTextures(E,lt.colorTexture,m.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(E))}let D=Y[ue];D===void 0&&(D=new Rt,D.layers.enable(ue),D.viewport=new dt,Y[ue]=D),D.matrix.fromArray(je.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(je.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Te.x,Te.y,Te.width,Te.height),ue===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(D)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const ue=f.getDepthInformation(de[0]);ue&&ue.isValid&&ue.texture&&b.init(e,ue,r.renderState)}}for(let de=0;de<v.length;de++){const Ee=S[de],ge=v[de];Ee!==null&&ge!==void 0&&ge.update(Ee,Z,h||o)}b.render(e,y),re&&re(k,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Re=new Jo;Re.setAnimationLoop(he),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}}const En=new Qt,ag=new it;function og(i,e){function t(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function n(u,p){p.color.getRGB(u.fogColor.value,Yo(i)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function r(u,p,E,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(u,p):p.isMeshToonMaterial?(s(u,p),f(u,p)):p.isMeshPhongMaterial?(s(u,p),d(u,p)):p.isMeshStandardMaterial?(s(u,p),m(u,p),p.isMeshPhysicalMaterial&&g(u,p,S)):p.isMeshMatcapMaterial?(s(u,p),_(u,p)):p.isMeshDepthMaterial?s(u,p):p.isMeshDistanceMaterial?(s(u,p),b(u,p)):p.isMeshNormalMaterial?s(u,p):p.isLineBasicMaterial?(o(u,p),p.isLineDashedMaterial&&a(u,p)):p.isPointsMaterial?l(u,p,E,v):p.isSpriteMaterial?h(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,t(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===yt&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,t(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===yt&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,t(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,t(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);const E=e.get(p),v=E.envMap,S=E.envMapRotation;if(v&&(u.envMap.value=v,En.copy(S),En.x*=-1,En.y*=-1,En.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),u.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(En)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap){u.lightMap.value=p.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,u.lightMapTransform)}p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,u.aoMapTransform))}function o(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform))}function a(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function l(u,p,E,v){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*E,u.scale.value=v*.5,p.map&&(u.map.value=p.map,t(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function h(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function d(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function f(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function m(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,u.roughnessMapTransform)),e.get(p).envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function g(u,p,E){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yt&&u.clearcoatNormalScale.value.negate())),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,u.specularIntensityMapTransform))}function _(u,p){p.matcap&&(u.matcap.value=p.matcap)}function b(u,p){const E=e.get(p).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lg(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const S=v.program;n.uniformBlockBinding(E,S)}function h(E,v){let S=r[E.id];S===void 0&&(_(E),S=d(E),r[E.id]=S,E.addEventListener("dispose",u));const R=v.program;n.updateUBOMapping(E,R);const C=e.render.frame;s[E.id]!==C&&(m(E),s[E.id]=C)}function d(E){const v=f();E.__bindingPointIndex=v;const S=i.createBuffer(),R=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const v=r[E.id],S=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,A=S.length;C<A;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let Y=0,y=U.length;Y<y;Y++){const w=U[Y];if(g(w,C,Y,R)===!0){const J=w.__offset,K=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let X=0;X<K.length;X++){const H=K[X],q=b(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,J+N,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,v,S,R){const C=E.value,A=v+"_"+S;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const U=R[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(E){const v=E.uniforms;let S=0;const R=16;for(let A=0,U=v.length;A<U;A++){const Y=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,w=Y.length;y<w;y++){const J=Y[y],K=Array.isArray(J.value)?J.value:[J.value];for(let N=0,X=K.length;N<X;N++){const H=K[N],q=b(H),V=S%R;V!==0&&R-V<q.boundary&&(S+=R-V),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=q.storage}}}const C=S%R;return C>0&&(S+=R-C),E.__size=S,E.__cache={},this}function b(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function u(E){const v=E.target;v.removeEventListener("dispose",u);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:h,dispose:p}}class sl{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const g=new Uint32Array(4),_=new Int32Array(4);let b=null,u=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const v=this;let S=!1,R=0,C=0,A=null,U=-1,Y=null;const y=new dt,w=new dt;let J=null;const K=new We(0);let N=0,X=t.width,H=t.height,q=1,V=null,j=null;const te=new dt(0,0,X,H),re=new dt(0,0,X,H);let he=!1;const Re=new Zo;let k=!1,Z=!1,de=null;const Ee=new it,ge=new Ve,ue=new I,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return A===null?q:1}let D=n;function lt(M,L){for(let B=0;B<M.length;B++){const z=M[B],O=t.getContext(z,L);if(O!==null)return O}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_s}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const L=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&L.shift(),D=lt(L,M),D===null)throw lt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,Fe,Se,Ge,Ue,Be,Qe,T,x,G,W,Q,$,Pe,Me,se,oe,Ne,ee,tt,ze,ve,fe,pe;function He(){xe=new pp(D),Fe=new op(D,xe,e),xe.init(Fe),ve=new Qm(D,xe,Fe),Se=new Zm(D,xe,Fe),Ge=new vp(D),Ue=new Fm,Be=new Jm(D,xe,Se,Ue,Fe,ve,Ge),Qe=new cp(v),T=new fp(v),x=new Sh(D,Fe),fe=new sp(D,xe,x,Fe),G=new mp(D,x,Ge,fe),W=new Sp(D,G,x,Ge),ee=new yp(D,Fe,Be),se=new lp(Ue),Q=new Om(v,Qe,T,xe,Fe,fe,se),$=new og(v,Ue),Pe=new zm,Me=new Wm(xe,Fe),Ne=new rp(v,Qe,T,Se,W,m,l),oe=new Km(v,W,Fe),pe=new lg(D,Ge,Fe,Se),tt=new ap(D,xe,Ge,Fe),ze=new gp(D,xe,Ge,Fe),Ge.programs=Q.programs,v.capabilities=Fe,v.extensions=xe,v.properties=Ue,v.renderLists=Pe,v.shadowMap=oe,v.state=Se,v.info=Ge}He();const Ae=new sg(v,D);this.xr=Ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(X,H,!1))},this.getSize=function(M){return M.set(X,H)},this.setSize=function(M,L,B=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,H=L,t.width=Math.floor(M*q),t.height=Math.floor(L*q),B===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(X*q,H*q).floor()},this.setDrawingBufferSize=function(M,L,B){X=M,H=L,q=B,t.width=Math.floor(M*B),t.height=Math.floor(L*B),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(te)},this.setViewport=function(M,L,B,z){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,L,B,z),Se.viewport(y.copy(te).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,L,B,z){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,L,B,z),Se.scissor(w.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){Se.setScissorTest(he=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(M=!0,L=!0,B=!0){let z=0;if(M){let O=!1;if(A!==null){const ce=A.texture.format;O=ce===Oo||ce===Uo||ce===Io}if(O){const ce=A.texture.type,me=ce===un||ce===ln||ce===ys||ce===Ln||ce===Lo||ce===Do,ye=Ne.getClearColor(),be=Ne.getClearAlpha(),Oe=ye.r,we=ye.g,Ce=ye.b;me?(g[0]=Oe,g[1]=we,g[2]=Ce,g[3]=be,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Oe,_[1]=we,_[2]=Ce,_[3]=be,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}L&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),Me.dispose(),Ue.dispose(),Qe.dispose(),T.dispose(),W.dispose(),fe.dispose(),pe.dispose(),Q.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",wt),Ae.removeEventListener("sessionend",Ye),de&&(de.dispose(),de=null),pt.stop()};function Ke(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=Ge.autoReset,L=oe.enabled,B=oe.autoUpdate,z=oe.needsUpdate,O=oe.type;He(),Ge.autoReset=M,oe.enabled=L,oe.autoUpdate=B,oe.needsUpdate=z,oe.type=O}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function F(M){const L=M.target;L.removeEventListener("dispose",F),ne(L)}function ne(M){le(M),Ue.remove(M)}function le(M){const L=Ue.get(M).programs;L!==void 0&&(L.forEach(function(B){Q.releaseProgram(B)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,B,z,O,ce){L===null&&(L=je);const me=O.isMesh&&O.matrixWorld.determinant()<0,ye=cl(M,L,B,z,O);Se.setMaterial(z,me);let be=B.index,Oe=1;if(z.wireframe===!0){if(be=G.getWireframeAttribute(B),be===void 0)return;Oe=2}const we=B.drawRange,Ce=B.attributes.position;let et=we.start*Oe,bt=(we.start+we.count)*Oe;ce!==null&&(et=Math.max(et,ce.start*Oe),bt=Math.min(bt,(ce.start+ce.count)*Oe)),be!==null?(et=Math.max(et,0),bt=Math.min(bt,be.count)):Ce!=null&&(et=Math.max(et,0),bt=Math.min(bt,Ce.count));const at=bt-et;if(at<0||at===1/0)return;fe.setup(O,z,ye,B,be);let Vt,Je=tt;if(be!==null&&(Vt=x.get(be),Je=ze,Je.setIndex(Vt)),O.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*Te()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(O.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),Se.setLineWidth(Le*Te()),O.isLineSegments?Je.setMode(D.LINES):O.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else O.isPoints?Je.setMode(D.POINTS):O.isSprite&&Je.setMode(D.TRIANGLES);if(O.isBatchedMesh)Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Je.renderInstances(et,at,O.count);else if(B.isInstancedBufferGeometry){const Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xr=Math.min(B.instanceCount,Le);Je.renderInstances(et,at,xr)}else Je.render(et,at)};function ke(M,L,B){M.transparent===!0&&M.side===Kt&&M.forceSinglePass===!1?(M.side=yt,M.needsUpdate=!0,Pi(M,L,B),M.side=fn,M.needsUpdate=!0,Pi(M,L,B),M.side=Kt):Pi(M,L,B)}this.compile=function(M,L,B=null){B===null&&(B=M),u=Me.get(B),u.init(),E.push(u),B.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),M!==B&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights(v._useLegacyLights);const z=new Set;return M.traverse(function(O){const ce=O.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const ye=ce[me];ke(ye,B,O),z.add(ye)}else ke(ce,B,O),z.add(ce)}),E.pop(),u=null,z},this.compileAsync=function(M,L,B=null){const z=this.compile(M,L,B);return new Promise(O=>{function ce(){if(z.forEach(function(me){Ue.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){O(M);return}setTimeout(ce,10)}xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let qe=null;function ct(M){qe&&qe(M)}function wt(){pt.stop()}function Ye(){pt.start()}const pt=new Jo;pt.setAnimationLoop(ct),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(M){qe=M,Ae.setAnimationLoop(M),M===null?pt.stop():pt.start()},Ae.addEventListener("sessionstart",wt),Ae.addEventListener("sessionend",Ye),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(L),L=Ae.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,L,A),u=Me.get(M,E.length),u.init(),E.push(u),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Re.setFromProjectionMatrix(Ee),Z=this.localClippingEnabled,k=se.init(this.clippingPlanes,Z),b=Pe.get(M,p.length),b.init(),p.push(b),Ot(M,L,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(V,j),this.info.render.frame++,k===!0&&se.beginShadows();const B=u.state.shadowsArray;if(oe.render(B,M,L),k===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1)&&Ne.render(b,M),u.setupLights(v._useLegacyLights),L.isArrayCamera){const z=L.cameras;for(let O=0,ce=z.length;O<ce;O++){const me=z[O];ws(b,M,me,me.viewport)}}else ws(b,M,L);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(v,M,L),fe.resetDefaultState(),U=-1,Y=null,E.pop(),E.length>0?u=E[E.length-1]:u=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Ot(M,L,B,z){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Re.intersectsSprite(M)){z&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const me=W.update(M),ye=M.material;ye.visible&&b.push(M,me,ye,B,ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Re.intersectsObject(M))){const me=W.update(M),ye=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ue.copy(me.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(ye)){const be=me.groups;for(let Oe=0,we=be.length;Oe<we;Oe++){const Ce=be[Oe],et=ye[Ce.materialIndex];et&&et.visible&&b.push(M,me,et,B,ue.z,Ce)}}else ye.visible&&b.push(M,me,ye,B,ue.z,null)}}const ce=M.children;for(let me=0,ye=ce.length;me<ye;me++)Ot(ce[me],L,B,z)}function ws(M,L,B,z){const O=M.opaque,ce=M.transmissive,me=M.transparent;u.setupLightsView(B),k===!0&&se.setGlobalState(v.clippingPlanes,B),ce.length>0&&ll(O,ce,L,B),z&&Se.viewport(y.copy(z)),O.length>0&&Ri(O,L,B),ce.length>0&&Ri(ce,L,B),me.length>0&&Ri(me,L,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ll(M,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ce=Fe.isWebGL2;de===null&&(de=new In(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Si:un,minFilter:Pn,samples:ce?4:0})),v.getDrawingBufferSize(ge),ce?de.setSize(ge.x,ge.y):de.setSize(ps(ge.x),ps(ge.y));const me=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(K),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=hn,Ri(M,B,z),Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de);let be=!1;for(let Oe=0,we=L.length;Oe<we;Oe++){const Ce=L[Oe],et=Ce.object,bt=Ce.geometry,at=Ce.material,Vt=Ce.group;if(at.side===Kt&&et.layers.test(z.layers)){const Je=at.side;at.side=yt,at.needsUpdate=!0,As(et,B,z,bt,at,Vt),at.side=Je,at.needsUpdate=!0,be=!0}}be===!0&&(Be.updateMultisampleRenderTarget(de),Be.updateRenderTargetMipmap(de)),v.setRenderTarget(me),v.setClearColor(K,N),v.toneMapping=ye}function Ri(M,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ce=M.length;O<ce;O++){const me=M[O],ye=me.object,be=me.geometry,Oe=z===null?me.material:z,we=me.group;ye.layers.test(B.layers)&&As(ye,L,B,be,Oe,we)}}function As(M,L,B,z,O,ce){M.onBeforeRender(v,L,B,z,O,ce),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,L,B,z,M,ce),O.transparent===!0&&O.side===Kt&&O.forceSinglePass===!1?(O.side=yt,O.needsUpdate=!0,v.renderBufferDirect(B,L,z,O,M,ce),O.side=fn,O.needsUpdate=!0,v.renderBufferDirect(B,L,z,O,M,ce),O.side=Kt):v.renderBufferDirect(B,L,z,O,M,ce),M.onAfterRender(v,L,B,z,O,ce)}function Pi(M,L,B){L.isScene!==!0&&(L=je);const z=Ue.get(M),O=u.state.lights,ce=u.state.shadowsArray,me=O.state.version,ye=Q.getParameters(M,O.state,ce,L,B),be=Q.getProgramCacheKey(ye);let Oe=z.programs;z.environment=M.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(M.isMeshStandardMaterial?T:Qe).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",F),Oe=new Map,z.programs=Oe);let we=Oe.get(be);if(we!==void 0){if(z.currentProgram===we&&z.lightsStateVersion===me)return Rs(M,ye),we}else ye.uniforms=Q.getUniforms(M),M.onBuild(B,ye,v),M.onBeforeCompile(ye,v),we=Q.acquireProgram(ye,be),Oe.set(be,we),z.uniforms=ye.uniforms;const Ce=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=se.uniform),Rs(M,ye),z.needsLights=hl(M),z.lightsStateVersion=me,z.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=we,z.uniformsList=null,we}function Cs(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=nr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Rs(M,L){const B=Ue.get(M);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function cl(M,L,B,z,O){L.isScene!==!0&&(L=je),Be.resetTextureUnits();const ce=L.fog,me=z.isMeshStandardMaterial?L.environment:null,ye=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mn,be=(z.isMeshStandardMaterial?T:Qe).get(z.envMap||me),Oe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,we=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,bt=!!B.morphAttributes.color;let at=hn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(at=v.toneMapping);const Vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=Vt!==void 0?Vt.length:0,Le=Ue.get(z),xr=u.state.lights;if(k===!0&&(Z===!0||M!==Y)){const At=M===Y&&z.id===U;se.setState(z,M,At)}let Ze=!1;z.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==xr.state.version||Le.outputColorSpace!==ye||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==be||z.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==we||Le.morphTargets!==Ce||Le.morphNormals!==et||Le.morphColors!==bt||Le.toneMapping!==at||Fe.isWebGL2===!0&&Le.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,Le.__version=z.version);let gn=Le.currentProgram;Ze===!0&&(gn=Pi(z,L,O));let Ps=!1,ci=!1,_r=!1;const ht=gn.getUniforms(),vn=Le.uniforms;if(Se.useProgram(gn.program)&&(Ps=!0,ci=!0,_r=!0),z.id!==U&&(U=z.id,ci=!0),Ps||Y!==M){ht.setValue(D,"projectionMatrix",M.projectionMatrix),ht.setValue(D,"viewMatrix",M.matrixWorldInverse);const At=ht.map.cameraPosition;At!==void 0&&At.setValue(D,ue.setFromMatrixPosition(M.matrixWorld)),Fe.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,ci=!0,_r=!0)}if(O.isSkinnedMesh){ht.setOptional(D,O,"bindMatrix"),ht.setOptional(D,O,"bindMatrixInverse");const At=O.skeleton;At&&(Fe.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),ht.setValue(D,"boneTexture",At.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(ht.setOptional(D,O,"batchingTexture"),ht.setValue(D,"batchingTexture",O._matricesTexture,Be));const yr=B.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&Fe.isWebGL2===!0)&&ee.update(O,B,gn),(ci||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,ht.setValue(D,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(vn.envMap.value=be,vn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ci&&(ht.setValue(D,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&dl(vn,_r),ce&&z.fog===!0&&$.refreshFogUniforms(vn,ce),$.refreshMaterialUniforms(vn,z,q,H,de),nr.upload(D,Cs(Le),vn,Be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(nr.upload(D,Cs(Le),vn,Be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(D,"center",O.center),ht.setValue(D,"modelViewMatrix",O.modelViewMatrix),ht.setValue(D,"normalMatrix",O.normalMatrix),ht.setValue(D,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const At=z.uniformsGroups;for(let Sr=0,ul=At.length;Sr<ul;Sr++)if(Fe.isWebGL2){const Ns=At[Sr];pe.update(Ns,gn),pe.bind(Ns,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function dl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function hl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,L,B){Ue.get(M.texture).__webglTexture=L,Ue.get(M.depthTexture).__webglTexture=B;const z=Ue.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const B=Ue.get(M);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,B=0){A=M,R=L,C=B;let z=!0,O=null,ce=!1,me=!1;if(M){const be=Ue.get(M);be.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):be.__webglFramebuffer===void 0?Be.setupRenderTarget(M):be.__hasExternalTextures&&Be.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);const we=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[L])?O=we[L][B]:O=we[L],ce=!0):Fe.isWebGL2&&M.samples>0&&Be.useMultisampledRTT(M)===!1?O=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[B]:O=we,y.copy(M.viewport),w.copy(M.scissor),J=M.scissorTest}else y.copy(te).multiplyScalar(q).floor(),w.copy(re).multiplyScalar(q).floor(),J=he;if(Se.bindFramebuffer(D.FRAMEBUFFER,O)&&Fe.drawBuffers&&z&&Se.drawBuffers(M,O),Se.viewport(y),Se.scissor(w),Se.setScissorTest(J),ce){const be=Ue.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,B)}else if(me){const be=Ue.get(M.texture),Oe=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Oe)}U=-1},this.readRenderTargetPixels=function(M,L,B,z,O,ce,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Se.bindFramebuffer(D.FRAMEBUFFER,ye);try{const be=M.texture,Oe=be.format,we=be.type;if(Oe!==It&&ve.convert(Oe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===Si&&(xe.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(we!==un&&ve.convert(we)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Zt&&(Fe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-z&&B>=0&&B<=M.height-O&&D.readPixels(L,B,z,O,ve.convert(Oe),ve.convert(we),ce)}finally{const be=A!==null?Ue.get(A).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(M,L,B=0){const z=Math.pow(2,-B),O=Math.floor(L.image.width*z),ce=Math.floor(L.image.height*z);Be.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,M.x,M.y,O,ce),Se.unbindTexture()},this.copyTextureToTexture=function(M,L,B,z=0){const O=L.image.width,ce=L.image.height,me=ve.convert(B.format),ye=ve.convert(B.type);Be.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,M.x,M.y,O,ce,me,ye,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,me,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,M.x,M.y,me,ye,L.image),z===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,L,B,z,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=Math.round(M.max.x-M.min.x),me=Math.round(M.max.y-M.min.y),ye=M.max.z-M.min.z+1,be=ve.convert(z.format),Oe=ve.convert(z.type);let we;if(z.isData3DTexture)Be.setTexture3D(z,0),we=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Be.setTexture2DArray(z,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Ce=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bt=D.getParameter(D.UNPACK_SKIP_PIXELS),at=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES),Je=B.isCompressedTexture?B.mipmaps[O]:B.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,M.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,M.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?D.texSubImage3D(we,O,L.x,L.y,L.z,ce,me,ye,be,Oe,Je.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(we,O,L.x,L.y,L.z,ce,me,ye,be,Je.data):D.texSubImage3D(we,O,L.x,L.y,L.z,ce,me,ye,be,Oe,Je),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),O===0&&z.generateMipmaps&&D.generateMipmap(we),Se.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Be.setTextureCube(M,0):M.isData3DTexture?Be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Be.setTexture2DArray(M,0):Be.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){R=0,C=0,A=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ss?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===pr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cg extends sl{}cg.prototype.isWebGL1Renderer=!0;class dg extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class al extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oo=new it,gs=new Vo,Qi=new mr,er=new I;class hg extends Mt{constructor(e=new Ht,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Qi.radius+=s,e.ray.intersectsSphere(Qi)===!1)return;oo.copy(r).invert(),gs.copy(e.ray).applyMatrix4(oo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,b=g;_<b;_++){const u=h.getX(_);er.fromBufferAttribute(f,u),lo(er,u,l,r,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,b=g;_<b;_++)er.fromBufferAttribute(f,_),lo(er,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lo(i,e,t,n,r,s,o){const a=gs.distanceSqToPoint(i);if(a<t){const l=new I;gs.closestPointToPoint(i,l),l.applyMatrix4(n);const h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ci extends Ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),h(n),d(),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(s.slice(),3)),this.setAttribute("uv",new Gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const v=new I,S=new I,R=new I;for(let C=0;C<t.length;C+=3)g(t[C+0],v),g(t[C+1],S),g(t[C+2],R),l(v,S,R,E)}function l(E,v,S,R){const C=R+1,A=[];for(let U=0;U<=C;U++){A[U]=[];const Y=E.clone().lerp(S,U/C),y=v.clone().lerp(S,U/C),w=C-U;for(let J=0;J<=w;J++)J===0&&U===C?A[U][J]=Y:A[U][J]=Y.clone().lerp(y,J/w)}for(let U=0;U<C;U++)for(let Y=0;Y<2*(C-U)-1;Y++){const y=Math.floor(Y/2);Y%2===0?(m(A[U][y+1]),m(A[U+1][y]),m(A[U][y])):(m(A[U][y+1]),m(A[U+1][y+1]),m(A[U+1][y]))}}function h(E){const v=new I;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(E),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const E=new I;for(let v=0;v<s.length;v+=3){E.x=s[v+0],E.y=s[v+1],E.z=s[v+2];const S=u(E)/2/Math.PI+.5,R=p(E)/Math.PI+.5;o.push(S,1-R)}_(),f()}function f(){for(let E=0;E<o.length;E+=6){const v=o[E+0],S=o[E+2],R=o[E+4],C=Math.max(v,S,R),A=Math.min(v,S,R);C>.9&&A<.1&&(v<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,v){const S=E*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const E=new I,v=new I,S=new I,R=new I,C=new Ve,A=new Ve,U=new Ve;for(let Y=0,y=0;Y<s.length;Y+=9,y+=6){E.set(s[Y+0],s[Y+1],s[Y+2]),v.set(s[Y+3],s[Y+4],s[Y+5]),S.set(s[Y+6],s[Y+7],s[Y+8]),C.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),U.set(o[y+4],o[y+5]),R.copy(E).add(v).add(S).divideScalar(3);const w=u(R);b(C,y+0,E,w),b(A,y+2,v,w),b(U,y+4,S,w)}}function b(E,v,S,R){R<0&&E.x===1&&(o[v]=E.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function u(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.vertices,e.indices,e.radius,e.details)}}class bs extends Ci{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bs(e.radius,e.detail)}}class Es extends Ci{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Es(e.radius,e.detail)}}class Ts extends Ci{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ts(e.radius,e.detail)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_s);const ug=({className:i=""})=>{const e=_e.useRef(null),t=_e.useRef(null),n=_e.useRef(null),r=_e.useRef(null);return _e.useEffect(()=>{const s=window.innerWidth<=768||/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(!e.current)return;const o=new dg;t.current=o;const a=new Rt(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=5;const l=new sl({alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(window.devicePixelRatio),l.setClearColor(0,0),n.current=l,e.current.appendChild(l.domElement);const h=new Ht,d=s?300:1e3,f=new Float32Array(d*3);for(let S=0;S<d*3;S++)f[S]=(Math.random()-.5)*20;h.setAttribute("position",new Ut(f,3));const m=new al({size:.02,color:65535,transparent:!0,opacity:.8,blending:ss}),g=new hg(h,m);o.add(g);const _=[new Ts(.5),new Es(.3),new bs(.4)],b=[new _i({color:65535,wireframe:!0,transparent:!0,opacity:.3}),new _i({color:16711935,wireframe:!0,transparent:!0,opacity:.3}),new _i({color:65280,wireframe:!0,transparent:!0,opacity:.3})],u=[],p=s?5:15;for(let S=0;S<p;S++){const R=_[Math.floor(Math.random()*_.length)],C=b[Math.floor(Math.random()*b.length)],A=new kt(R,C);A.position.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),A.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),o.add(A),u.push(A)}const E=()=>{r.current=requestAnimationFrame(E),g.rotation.x+=.001,g.rotation.y+=.002,u.forEach((S,R)=>{S.rotation.x+=.01+R*.001,S.rotation.y+=.01+R*.001,S.position.y+=Math.sin(Date.now()*.001+R)*.001}),a.position.x=Math.sin(Date.now()*5e-4)*.5,a.position.y=Math.cos(Date.now()*3e-4)*.3,a.lookAt(o.position),l.render(o,a)};E();const v=()=>{!a||!l||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),r.current&&cancelAnimationFrame(r.current),e.current&&l.domElement&&e.current.removeChild(l.domElement),o.clear(),l.dispose(),_.forEach(S=>S.dispose()),b.forEach(S=>S.dispose()),h.dispose(),m.dispose()}},[]),c.jsx("div",{ref:e,className:`fixed inset-0 -z-10 ${i}`,style:{pointerEvents:"none"}})},fg=({data:i})=>{const{t:e}=Un(),{ref:t,isVisible:n}=ur(),{scrollToSection:r}=Ao();if(!(i!=null&&i.company))return null;const{company:s}=i;return c.jsxs("section",{ref:t,id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black",children:[c.jsx(ug,{}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-green-500/10"}),c.jsx("div",{className:"absolute inset-0",children:[...Array(50)].map((o,a)=>c.jsx("div",{className:"absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${2+Math.random()*6}s`}},a))}),c.jsxs("div",{className:`
        relative z-10 text-center max-w-6xl mx-auto px-4
        transition-all duration-1000 ease-out
        ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
      `,children:[c.jsx("h1",{className:`
          text-5xl md:text-7xl lg:text-8xl font-bold mb-4
          transition-all duration-1000 delay-400
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:c.jsx(Mi,{variant:"primary",className:"block",children:"VizioCraft Design"})}),c.jsx("h2",{className:`
          text-2xl md:text-3xl lg:text-4xl text-purple-400 mb-8 font-light
          transition-all duration-1000 delay-600
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:e("hero.tagline")}),c.jsx("p",{className:`
          text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed
          transition-all duration-1000 delay-1000
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:e("hero.description")}),c.jsxs("div",{className:`
          grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto
          transition-all duration-1000 delay-1200
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-2xl md:text-3xl font-bold text-cyan-400 mb-2",children:"100+"}),c.jsx("div",{className:"text-sm text-gray-400",children:e("hero.stats.projectsCompleted")})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-2xl md:text-3xl font-bold text-cyan-400 mb-2",children:"50+"}),c.jsx("div",{className:"text-sm text-gray-400",children:e("hero.stats.clientsServed")})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-2xl md:text-3xl font-bold text-cyan-400 mb-2",children:"5+"}),c.jsx("div",{className:"text-sm text-gray-400",children:e("hero.stats.yearsExperience")})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-2xl md:text-3xl font-bold text-cyan-400 mb-2",children:"24/7"}),c.jsx("div",{className:"text-sm text-gray-400",children:e("hero.stats.teamMembers")})]})]}),c.jsxs("div",{className:`
          flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6
          transition-all duration-1000 delay-1400
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsxs("button",{onClick:()=>r("services"),className:`
              group relative inline-flex items-center px-8 py-4 text-lg font-semibold
              text-white bg-gradient-to-r from-cyan-500 to-blue-600
              rounded-full shadow-2xl shadow-cyan-500/25
              hover:shadow-cyan-500/40 transition-all duration-300
              hover:scale-105 transform
            `,children:[c.jsx(El,{className:"mr-2",size:20}),e("hero.cta.exploreServices")]}),c.jsxs("button",{onClick:()=>r("about"),className:`
              group relative inline-flex items-center px-8 py-4 text-lg font-semibold
              text-cyan-400 border-2 border-cyan-400 rounded-full
              hover:bg-cyan-400 hover:text-gray-900
              transition-all duration-300 hover:scale-105 transform
            `,children:[c.jsx(xs,{className:"mr-2",size:20}),e("hero.cta.aboutUs")]})]})]}),c.jsx("div",{className:`
        absolute bottom-8 left-1/2 transform -translate-x-1/2
        transition-all duration-1000 delay-1600
        ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
      `,children:c.jsx("div",{className:"animate-bounce",children:c.jsx(Tl,{className:"text-cyan-400",size:24})})})]})},pg=({data:i})=>{const{t:e}=Un(),{ref:t,isVisible:n}=ur(),r=[{id:"ai-solutions",icon:c.jsx(wl,{className:"w-8 h-8"}),title:"AI Solutions",description:"Intelligent Agents, Business Process Automation, No-code/Low-code Solutions",features:["Intelligent Agents","Process Automation","AI Analytics","No-code Solutions"],gradient:"from-cyan-500 to-blue-600"},{id:"video-production",icon:c.jsx(rr,{className:"w-8 h-8"}),title:"Video Production",description:"AI-enhanced Video Creation, 3D Animation, Motion Graphics, Post-production Services",features:["AI Video Creation","3D Animation","Motion Graphics","Post-production"],gradient:"from-purple-500 to-pink-600"},{id:"web-development",icon:c.jsx(Al,{className:"w-8 h-8"}),title:"Web Development",description:"Custom Web Applications, E-commerce Solutions, Progressive Web Apps",features:["Custom Web Apps","E-commerce","Progressive Web Apps","API Development"],gradient:"from-green-500 to-teal-600"},{id:"digital-marketing",icon:c.jsx(Cl,{className:"w-8 h-8"}),title:"Digital Marketing",description:"Brand Strategy, Content Creation, Social Media Management, SEO Optimization",features:["Brand Strategy","Content Creation","Social Media","SEO Optimization"],gradient:"from-orange-500 to-red-600"}];return c.jsx("section",{ref:t,id:"services",className:"min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:`
          text-center mb-16
          transition-all duration-1000 ease-out
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:c.jsx(Mi,{variant:"primary",children:"Dịch vụ của chúng tôi"})}),c.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Chúng tôi cung cấp giải pháp toàn diện từ AI, sản xuất video đến phát triển web và marketing"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((s,o)=>c.jsxs("div",{className:`
                group relative p-8 rounded-2xl border border-gray-700 
                bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                hover:border-cyan-400/50 transition-all duration-500
                hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20
                ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
              `,style:{transitionDelay:`${o*200}ms`},children:[c.jsx("div",{className:`
                inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6
                bg-gradient-to-r ${s.gradient} text-white
                group-hover:scale-110 transition-all duration-300
              `,children:s.icon}),c.jsx("h3",{className:"text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors",children:s.title}),c.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:s.description}),c.jsx("ul",{className:"space-y-2 mb-6",children:s.features.map((a,l)=>c.jsxs("li",{className:"flex items-center text-gray-400",children:[c.jsx("div",{className:`w-2 h-2 rounded-full bg-gradient-to-r ${s.gradient} mr-3`}),a]},l))}),c.jsxs(cn,{to:`/service/${s.id}`,className:"inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group",children:[e("services.learnMore"),c.jsx(Ls,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]}),c.jsx("div",{className:`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
                bg-gradient-to-r ${s.gradient} transition-opacity duration-500
              `})]},s.id))}),c.jsxs("div",{className:`
          text-center mt-16
          transition-all duration-1000 delay-800
          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"Bạn cần tư vấn dịch vụ phù hợp cho dự án của mình?"}),c.jsxs("button",{onClick:()=>{const s=document.getElementById("contact");s&&s.scrollIntoView({behavior:"smooth"})},className:`
            inline-flex items-center px-8 py-4 text-lg font-semibold
            text-white bg-gradient-to-r from-cyan-500 to-blue-600
            rounded-full shadow-2xl shadow-cyan-500/25
            hover:shadow-cyan-500/40 transition-all duration-300
            hover:scale-105 transform
          `,children:["Liên hệ tư vấn miễn phí",c.jsx(Ls,{className:"w-5 h-5 ml-2"})]})]})]})})},mg=({data:i})=>{const{ref:e,isVisible:t}=ur(),n=[{icon:c.jsx(Rl,{className:"w-8 h-8"}),title:"Đổi mới sáng tạo",description:"Chúng tôi luôn tiên phong trong việc áp dụng công nghệ mới nhất để tạo ra những giải pháp đột phá."},{icon:c.jsx(Pl,{className:"w-8 h-8"}),title:"Chất lượng cao",description:"Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất, đáp ứng mọi yêu cầu của khách hàng."},{icon:c.jsx(xs,{className:"w-8 h-8"}),title:"Hợp tác bền vững",description:"Xây dựng mối quan hệ đối tác lâu dài dựa trên sự tin tượng và giá trị đôi bên cùng có lợi."},{icon:c.jsx(Nl,{className:"w-8 h-8"}),title:"Xuất sắc",description:"Không ngừng nỗ lực để đạt được sự xuất sắc trong mọi dự án và dịch vụ mà chúng tôi cung cấp."}];return c.jsx("section",{ref:e,id:"about",className:"min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-black to-gray-900",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:`
          text-center mb-16
          transition-all duration-1000 ease-out
          ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:c.jsx(Mi,{variant:"primary",children:"Về VizioCraft Design"})}),c.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Chúng tôi là đội ngũ chuyên gia đam mê công nghệ, cam kết mang đến những giải pháp AI và media sáng tạo nhất"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20",children:[c.jsxs("div",{className:`
            transition-all duration-1000 delay-200
            ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}
          `,children:[c.jsx("h3",{className:"text-3xl font-bold text-white mb-6",children:"Câu chuyện của chúng tôi"}),c.jsxs("div",{className:"space-y-6 text-gray-300 leading-relaxed",children:[c.jsx("p",{children:"VizioCraft Design được thành lập với tầm nhìn trở thành đối tác công nghệ đáng tin cậy cho các doanh nghiệp muốn chuyển đổi số và áp dụng AI vào hoạt động kinh doanh."}),c.jsx("p",{children:"Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực AI, sản xuất media và phát triển web, chúng tôi đã giúp hàng trăm doanh nghiệp tối ưu hóa quy trình và tăng hiệu quả hoạt động."}),c.jsx("p",{children:"Chúng tôi tin rằng công nghệ AI sẽ thay đổi cách thức hoạt động của mọi ngành nghề, và sứ mệnh của chúng tôi là làm cho công nghệ này trở nên dễ tiếp cận và hữu ích cho mọi người."})]})]}),c.jsx("div",{className:`
            transition-all duration-1000 delay-400
            ${t?"opacity-100 translate-x-0":"opacity-0 translate-x-10"}
          `,children:c.jsxs("div",{className:"bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700",children:[c.jsx("h3",{className:"text-2xl font-bold text-white mb-8 text-center",children:"Thành tựu của chúng tôi"}),c.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-3xl font-bold text-cyan-400 mb-2",children:"100+"}),c.jsx("div",{className:"text-gray-400",children:"Dự án hoàn thành"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-3xl font-bold text-purple-400 mb-2",children:"50+"}),c.jsx("div",{className:"text-gray-400",children:"Khách hàng hài lòng"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-3xl font-bold text-green-400 mb-2",children:"5+"}),c.jsx("div",{className:"text-gray-400",children:"Năm kinh nghiệm"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-3xl font-bold text-orange-400 mb-2",children:"24/7"}),c.jsx("div",{className:"text-gray-400",children:"Hỗ trợ khách hàng"})]})]})]})})]}),c.jsxs("div",{className:`
          transition-all duration-1000 delay-600
          ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsx("h3",{className:"text-3xl font-bold text-white text-center mb-12",children:"Giá trị cốt lõi"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((r,s)=>c.jsxs("div",{className:`
                  text-center p-6 rounded-xl border border-gray-700
                  bg-gradient-to-br from-gray-800/30 to-gray-900/30
                  hover:border-cyan-400/50 transition-all duration-300
                  hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20
                  ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
                `,style:{transitionDelay:`${600+s*100}ms`},children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4",children:r.icon}),c.jsx("h4",{className:"text-xl font-semibold text-white mb-3",children:r.title}),c.jsx("p",{className:"text-gray-400 leading-relaxed",children:r.description})]},s))})]})]})})},gg=({data:i})=>{const{ref:e,isVisible:t}=ur(),[n,r]=_e.useState({name:"",email:"",company:"",message:""}),[s,o]=_e.useState(!1),[a,l]=_e.useState(!1),h=m=>{r({...n,[m.target.name]:m.target.value})},d=async m=>{m.preventDefault(),o(!0),setTimeout(()=>{o(!1),l(!0),r({name:"",email:"",company:"",message:""}),setTimeout(()=>{l(!1)},5e3)},2e3)},f=[{icon:c.jsx(Dl,{className:"w-6 h-6"}),label:"Email",value:"contact@viziocraft.design",link:"mailto:contact@viziocraft.design"},{icon:c.jsx(Il,{className:"w-6 h-6"}),label:"Điện thoại",value:"+848 68 68 99 12",link:"tel:+84868689912"},{icon:c.jsx(Ul,{className:"w-6 h-6"}),label:"Địa chỉ",value:"Hà Nội, Cầu Giấy, Việt Nam",link:null}];return c.jsx("section",{ref:e,id:"contact",className:"min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:`
          text-center mb-16
          transition-all duration-1000 ease-out
          ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        `,children:[c.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:c.jsx(Mi,{variant:"primary",children:"Liên hệ với chúng tôi"})}),c.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ với chúng tôi để được tư vấn miễn phí"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16",children:[c.jsx("div",{className:`
            transition-all duration-1000 delay-200
            ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}
          `,children:c.jsxs("div",{className:"bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700",children:[c.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Gửi tin nhắn cho chúng tôi"}),a&&c.jsxs("div",{className:"mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center",children:[c.jsx(Ll,{className:"w-5 h-5 text-green-400 mr-3"}),c.jsx("span",{className:"text-green-400",children:"Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm nhất."})]}),c.jsxs("form",{onSubmit:d,className:"space-y-6",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"name",className:"block text-gray-300 text-sm font-medium mb-2",children:"Họ và tên *"}),c.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:h,required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors",placeholder:"Nhập họ và tên"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-gray-300 text-sm font-medium mb-2",children:"Email *"}),c.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:h,required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors",placeholder:"email@example.com"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"company",className:"block text-gray-300 text-sm font-medium mb-2",children:"Công ty / Tổ chức"}),c.jsx("input",{type:"text",id:"company",name:"company",value:n.company,onChange:h,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors",placeholder:"Tên công ty hoặc tổ chức"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"message",className:"block text-gray-300 text-sm font-medium mb-2",children:"Tin nhắn *"}),c.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:h,required:!0,rows:5,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none",placeholder:"Mô tả dự án hoặc yêu cầu của bạn..."})]}),c.jsx("button",{type:"submit",disabled:s,className:`
                    w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold
                    text-white bg-gradient-to-r from-cyan-500 to-blue-600
                    rounded-lg shadow-2xl shadow-cyan-500/25
                    hover:shadow-cyan-500/40 transition-all duration-300
                    hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed
                    ${s?"scale-95":""}
                  `,children:s?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"}),"Đang gửi..."]}):c.jsxs(c.Fragment,{children:[c.jsx(po,{className:"w-5 h-5 mr-3"}),"Gửi tin nhắn"]})})]})]})}),c.jsx("div",{className:`
            transition-all duration-1000 delay-400
            ${t?"opacity-100 translate-x-0":"opacity-0 translate-x-10"}
          `,children:c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Thông tin liên hệ"}),c.jsx("div",{className:"space-y-6",children:f.map((m,g)=>c.jsxs("div",{className:"flex items-start space-x-4",children:[c.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white",children:m.icon}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-gray-300 text-sm font-medium mb-1",children:m.label}),m.link?c.jsx("a",{href:m.link,className:"text-white hover:text-cyan-400 transition-colors text-lg",children:m.value}):c.jsx("span",{className:"text-white text-lg",children:m.value})]})]},g))})]}),c.jsxs("div",{className:"bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700",children:[c.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Giờ làm việc"}),c.jsxs("div",{className:"space-y-2 text-gray-300",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Thứ 2 - Thứ 6:"}),c.jsx("span",{children:"8:00 - 18:00"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Thứ 7:"}),c.jsx("span",{children:"9:00 - 17:00"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Chủ nhật:"}),c.jsx("span",{children:"Nghỉ"})]})]})]})]})})]})]})})},ol=()=>{const[i,e]=_e.useState(null),[t,n]=_e.useState(!0),[r,s]=_e.useState(null);return _e.useEffect(()=>{(async()=>{try{const a=await fetch("/data/company-main.json");if(!a.ok)throw new Error("Failed to fetch company data");const l=await a.json();e(l)}catch(a){s(a instanceof Error?a.message:"Unknown error")}finally{n(!1)}})()},[]),{data:i,loading:t,error:r}},vg=()=>{const{data:i}=ol(),t=i||{company:{name:"VizioCraft Design",tagline:"AI & Media Technology Solutions",industry:"Artificial Intelligence • Media Production • Automation",description:"Chúng tôi cung cấp giải pháp AI tiên tiến, sản xuất media chuyên nghiệp và automation thông minh. Đối tác công nghệ đáng tin cậy giúp doanh nghiệp chuyển đổi số và tối ưu hóa quy trình kinh doanh.",stats:{projects_completed:"100+",satisfied_clients:"50+",years_experience:"5+",support_hours:"24/7"}}};return c.jsxs("div",{className:"relative z-10",style:{position:"relative",zIndex:10,display:"block",visibility:"visible",opacity:1,minHeight:"100vh"},children:[c.jsx(fg,{data:t}),c.jsx(pg,{data:t}),c.jsx(mg,{data:t}),c.jsx(gg,{data:t})]})},is={"ai-solutions":{id:"ai-solutions",title:"AI Solutions & Automation",description:"Tự động hóa quy trình kinh doanh với giải pháp AI thông minh, từ chatbots đến hệ thống quản lý tự động.",features:["Intelligent Agents","Business Process Automation","No-code/Low-code Solutions","AI-powered Analytics","Custom AI Model Training","Integration with Existing Systems"],gallery:[{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"AI Chatbot Demo",description:"Demonstration of our intelligent chatbot system"},{type:"image",url:"/images/ai-dashboard.jpg",title:"AI Analytics Dashboard",description:"Real-time analytics and insights dashboard"},{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"Process Automation",description:"Automated workflow management system"}],pricing:{basic:"$299/month",premium:"$599/month",enterprise:"Custom pricing"}},"video-production":{id:"video-production",title:"Video Production & Animation",description:"Sản xuất video chuyên nghiệp với công nghệ AI tiên tiến, từ concept đến thành phẩm hoàn chỉnh.",features:["AI-enhanced Video Creation","3D Animation","Motion Graphics","Post-production Services","Color Grading","Sound Design"],gallery:[{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"Corporate Video Sample",description:"Professional corporate video production"},{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"3D Animation Showcase",description:"Advanced 3D animation and visual effects"},{type:"image",url:"/images/video-studio.jpg",title:"Production Studio",description:"State-of-the-art video production facility"}],pricing:{basic:"$199/project",premium:"$499/project",enterprise:"Custom pricing"}},"visual-effects":{id:"visual-effects",title:"Visual Effects & Design",description:"Tạo ra những hiệu ứng thị giác ấn tượng và thiết kế sáng tạo cho mọi dự án media.",features:["Advanced VFX","UI/UX Design","Brand Identity","Digital Art Creation","Compositing","CGI Integration"],gallery:[{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"VFX Breakdown",description:"Behind the scenes of visual effects creation"},{type:"image",url:"/images/vfx-work.jpg",title:"VFX Portfolio",description:"Collection of our visual effects work"}],pricing:{basic:"$149/hour",premium:"$249/hour",enterprise:"Custom pricing"}},"media-production":{id:"media-production",title:"Media Production",description:"Dịch vụ sản xuất media toàn diện từ ý tưởng đến triển khai, phù hợp mọi quy mô dự án.",features:["Content Strategy","Photography & Videography","Social Media Content","Marketing Campaigns","Live Streaming","Event Coverage"],gallery:[{type:"image",url:"/images/photo-shoot.jpg",title:"Professional Photography",description:"High-quality photography services"},{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"Event Coverage",description:"Professional event documentation"}],pricing:{basic:"$99/hour",premium:"$199/hour",enterprise:"Custom pricing"}},"saas-solutions":{id:"saas-solutions",title:"SaaS Solutions",description:"Phát triển và triển khai các giải pháp phần mềm như dịch vụ, tối ưu cho doanh nghiệp hiện đại.",features:["Custom Software Development","Cloud Solutions","API Integration","Scalable Architecture","Database Management","Security Implementation"],gallery:[{type:"image",url:"/images/saas-dashboard.jpg",title:"SaaS Dashboard",description:"Modern web application interface"},{type:"video",url:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"Platform Demo",description:"Demonstration of our SaaS platform"}],pricing:{basic:"$499/month",premium:"$999/month",enterprise:"Custom pricing"}}},co=()=>{const{serviceId:i}=uo(),e=i&&is[i]?is[i]:null;return e?c.jsx("div",{className:"min-h-screen bg-gray-900 text-white pt-20",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[c.jsxs(cn,{to:"/",className:"inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors",children:[c.jsx(mo,{className:"mr-2",size:20}),"Back to Home"]}),c.jsxs("div",{className:"mb-12",children:[c.jsx("h1",{className:"text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:e.title}),c.jsx("p",{className:"text-xl text-gray-300 max-w-4xl",children:e.description})]}),c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Key Features"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.features.map((t,n)=>c.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors",children:[c.jsx("div",{className:"text-cyan-400 mb-2",children:"✓"}),c.jsx("h3",{className:"text-lg font-semibold",children:t})]},n))})]}),c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Portfolio & Examples"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:e.gallery.map((t,n)=>c.jsxs("div",{className:"bg-gray-800 rounded-lg overflow-hidden",children:[t.type==="video"?c.jsx("div",{className:"aspect-video",children:c.jsx("iframe",{src:t.url,title:t.title,className:"w-full h-full",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):c.jsx("div",{className:"aspect-video bg-gray-700 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx(tr,{className:"mx-auto mb-2 text-cyan-400",size:48}),c.jsx("p",{className:"text-gray-400",children:"Image Preview"})]})}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.title}),c.jsx("p",{className:"text-gray-400",children:t.description})]})]},n))})]}),c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Pricing Plans"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg border border-gray-700",children:[c.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Basic"}),c.jsx("div",{className:"text-3xl font-bold text-cyan-400 mb-4",children:e.pricing.basic}),c.jsx("p",{className:"text-gray-400 mb-6",children:"Perfect for small projects"}),c.jsx("button",{className:"w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition-colors",children:"Get Started"})]}),c.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg border-2 border-cyan-400 relative",children:[c.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold",children:"Popular"}),c.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Premium"}),c.jsx("div",{className:"text-3xl font-bold text-cyan-400 mb-4",children:e.pricing.premium}),c.jsx("p",{className:"text-gray-400 mb-6",children:"Best for growing businesses"}),c.jsx("button",{className:"w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition-colors",children:"Get Started"})]}),c.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg border border-gray-700",children:[c.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Enterprise"}),c.jsx("div",{className:"text-3xl font-bold text-cyan-400 mb-4",children:e.pricing.enterprise}),c.jsx("p",{className:"text-gray-400 mb-6",children:"Tailored for large organizations"}),c.jsx("button",{className:"w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition-colors",children:"Contact Us"})]})]})]}),c.jsxs("div",{className:"bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-lg text-center",children:[c.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Get Started?"}),c.jsx("p",{className:"text-xl text-gray-300 mb-6",children:"Let's discuss your project and see how we can help you achieve your goals."}),c.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[c.jsx("button",{className:"bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-colors",children:"Start Your Project"}),c.jsx("button",{className:"border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors",children:"Schedule Consultation"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-900 text-white pt-20",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 py-8",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:"Our Services"}),c.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"Choose from our comprehensive range of AI and media solutions"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8",children:Object.values(is).map(t=>c.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg",children:[c.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.title}),c.jsx("p",{className:"text-gray-400 mb-4",children:t.description}),c.jsx(cn,{to:`/services/${t.id}`,className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:"Learn More →"})]},t.id))}),c.jsx(cn,{to:"/",className:"inline-block mt-8 text-cyan-400 hover:text-cyan-300",children:"← Return to Home"})]})})})},xg=()=>{const{serviceId:i}=uo(),e={"ai-solutions":[{id:"1",title:"Hệ thống Chatbot AI cho Ngân hàng",description:"Phát triển chatbot AI thông minh có khả năng xử lý 95% câu hỏi khách hàng tự động, giảm thời gian chờ đợi và tăng trải nghiệm người dùng.",image:"/images/projects/ai-chatbot.jpg",client:"Ngân hàng ABC",date:"2024",category:"Intelligent Agents",technologies:["GPT-4","Natural Language Processing","Machine Learning","Python"],results:["Giảm 80% thời gian phản hồi","Tăng 95% độ chính xác","Tiết kiệm 60% chi phí vận hành"]},{id:"2",title:"Tự động hóa quy trình HR",description:"Xây dựng hệ thống AI tự động sàng lọc CV, lên lịch phỏng vấn và đánh giá ứng viên, giúp HR tiết kiệm 70% thời gian.",image:"/images/projects/hr-automation.jpg",client:"Công ty XYZ Tech",date:"2024",category:"Process Automation",technologies:["RPA","AI Analytics","OCR","Workflow Engine"],results:["Tiết kiệm 70% thời gian HR","Tăng 50% chất lượng tuyển dụng","Giảm 40% chi phí tuyển dụng"]},{id:"3",title:"Hệ thống dự đoán doanh số",description:"Phát triển mô hình AI dự đoán doanh số bán hàng với độ chính xác 92%, giúp doanh nghiệp lập kế hoạch kinh doanh hiệu quả.",image:"/images/projects/sales-prediction.jpg",client:"Tập đoàn Retail DEF",date:"2023",category:"AI Analytics",technologies:["Machine Learning","Time Series Analysis","Python","TensorFlow"],results:["92% độ chính xác dự đoán","Tăng 25% hiệu quả kế hoạch","Giảm 30% tồn kho"]},{id:"4",title:"Nền tảng No-code cho SME",description:"Xây dựng nền tảng no-code giúp doanh nghiệp nhỏ tạo ứng dụng quản lý mà không cần lập trình viên.",image:"/images/projects/nocode-platform.jpg",client:"Startup GHI",date:"2023",category:"No-code Solutions",technologies:["Drag & Drop Builder","API Integration","Cloud Infrastructure"],results:["Giảm 90% thời gian phát triển","Tiết kiệm 80% chi phí","Tăng 300% năng suất"]},{id:"5",title:"AI Phân tích cảm xúc khách hàng",description:"Hệ thống AI phân tích cảm xúc từ feedback khách hàng trên social media và email, giúp cải thiện dịch vụ.",image:"/images/projects/sentiment-analysis.jpg",client:"E-commerce JKL",date:"2024",category:"AI Analytics",technologies:["Sentiment Analysis","Social Media API","Real-time Processing"],results:["Phân tích 10,000+ feedback/ngày","Tăng 40% satisfaction","Giảm 50% complaint"]}],"video-production":[{id:"1",title:"Video Quảng cáo Sản phẩm AI",description:"Sản xuất video quảng cáo 3D cho sản phẩm công nghệ AI với hiệu ứng motion graphics ấn tượng.",image:"/images/projects/ai-product-video.jpg",client:"Tech Startup MNO",date:"2024",category:"AI Video Creation",technologies:["After Effects","Cinema 4D","AI-enhanced Rendering"],results:["5M+ views trên social media","Tăng 200% brand awareness","Tăng 150% conversion rate"]},{id:"2",title:"Phim Hoạt hình 3D Giáo dục",description:"Tạo series phim hoạt hình 3D giáo dục về khoa học cho trẻ em với chất lượng cinema.",image:"/images/projects/education-animation.jpg",client:"Trung tâm Giáo dục PQR",date:"2023",category:"3D Animation",technologies:["Blender","3D Modeling","Character Animation","Rendering"],results:["20+ tập phim hoàn thành","1M+ lượt xem","Giải thưởng Animation 2023"]},{id:"3",title:"Motion Graphics cho Fintech",description:"Thiết kế motion graphics giải thích sản phẩm fintech phức tạp một cách dễ hiểu và hấp dẫn.",image:"/images/projects/fintech-motion.jpg",client:"Fintech STU",date:"2024",category:"Motion Graphics",technologies:["After Effects","Illustrator","Motion Design","Infographic"],results:["Tăng 300% user engagement","Giảm 60% support tickets","Tăng 180% app downloads"]},{id:"4",title:"Post-production Phim Doanh nghiệp",description:"Thực hiện post-production cho phim giới thiệu doanh nghiệp với color grading và sound design chuyên nghiệp.",image:"/images/projects/corporate-film.jpg",client:"Tập đoàn VWX",date:"2023",category:"Post-production",technologies:["DaVinci Resolve","Pro Tools","Color Grading","Sound Design"],results:["Giải thưởng Corporate Video","Tăng 250% brand value","Viral trên LinkedIn"]},{id:"5",title:"Live Streaming Setup cho Event",description:"Thiết lập hệ thống live streaming đa camera cho sự kiện công nghệ lớn với chất lượng broadcast.",image:"/images/projects/live-streaming.jpg",client:"Tech Conference YZ",date:"2024",category:"Live Production",technologies:["Multi-camera Setup","OBS Studio","Streaming Technology"],results:["50,000+ viewers đồng thời","99.9% uptime","Zero technical issues"]}],"web-development":[{id:"1",title:"E-commerce Platform cho Fashion",description:"Phát triển nền tảng e-commerce hoàn chỉnh với AI recommendation và AR try-on cho thương hiệu thời trang.",image:"/images/projects/fashion-ecommerce.jpg",client:"Fashion Brand ABC",date:"2024",category:"E-commerce",technologies:["React","Node.js","AI Recommendation","AR Technology","Payment Gateway"],results:["Tăng 400% online sales","Giảm 50% return rate","Tăng 300% user engagement"]},{id:"2",title:"Progressive Web App cho Logistics",description:"Xây dựng PWA quản lý logistics với real-time tracking và offline capability.",image:"/images/projects/logistics-pwa.jpg",client:"Logistics DEF",date:"2023",category:"Progressive Web Apps",technologies:["PWA","Service Workers","Real-time API","GPS Integration"],results:["99% uptime","Hoạt động offline","Tăng 200% productivity"]},{id:"3",title:"Custom CRM cho Real Estate",description:"Phát triển hệ thống CRM tùy chỉnh cho công ty bất động sản với tích hợp VR tour.",image:"/images/projects/realestate-crm.jpg",client:"Real Estate GHI",date:"2024",category:"Custom Web Apps",technologies:["Vue.js","Laravel","VR Integration","CRM Features"],results:["Tăng 250% lead conversion","Giảm 60% sales cycle","Tăng 180% customer satisfaction"]},{id:"4",title:"API Gateway cho Microservices",description:"Thiết kế và triển khai API Gateway cho hệ thống microservices của fintech.",image:"/images/projects/api-gateway.jpg",client:"Fintech JKL",date:"2023",category:"API Development",technologies:["Kong Gateway","Docker","Kubernetes","Microservices"],results:["99.99% availability","Xử lý 1M+ requests/day","Giảm 70% latency"]},{id:"5",title:"Learning Management System",description:"Phát triển LMS với AI-powered personalized learning cho trường đại học.",image:"/images/projects/lms-platform.jpg",client:"Đại học MNO",date:"2024",category:"Custom Web Apps",technologies:["React","Python","AI/ML","Video Streaming","Assessment Tools"],results:["10,000+ students active","Tăng 150% learning outcomes","Giảm 40% dropout rate"]}],"digital-marketing":[{id:"1",title:"Chiến dịch Digital cho Startup",description:"Thực hiện chiến dịch marketing toàn diện cho startup công nghệ từ branding đến performance marketing.",image:"/images/projects/startup-marketing.jpg",client:"Tech Startup PQR",date:"2024",category:"Brand Strategy",technologies:["Google Ads","Facebook Ads","SEO","Content Marketing","Analytics"],results:["Tăng 500% brand awareness","ROI 300%","Tăng 400% website traffic"]},{id:"2",title:"Content Strategy cho B2B SaaS",description:"Phát triển chiến lược content marketing cho công ty SaaS B2B với focus vào thought leadership.",image:"/images/projects/b2b-content.jpg",client:"SaaS Company STU",date:"2023",category:"Content Creation",technologies:["Content Planning","SEO Writing","Video Content","Webinar Production"],results:["Tăng 600% organic traffic","Top 3 industry blog","Tăng 250% qualified leads"]},{id:"3",title:"Social Media Management cho F&B",description:"Quản lý social media cho chuỗi nhà hàng với user-generated content và influencer marketing.",image:"/images/projects/fnb-social.jpg",client:"Restaurant Chain VWX",date:"2024",category:"Social Media",technologies:["Instagram Marketing","TikTok Ads","Influencer Platform","UGC Campaigns"],results:["1M+ followers tăng","Tăng 300% foot traffic","Viral campaigns 10M+ views"]},{id:"4",title:"SEO Optimization cho E-commerce",description:"Tối ưu SEO toàn diện cho website e-commerce với technical SEO và content optimization.",image:"/images/projects/ecommerce-seo.jpg",client:"E-commerce YZ",date:"2023",category:"SEO Optimization",technologies:["Technical SEO","Keyword Research","Link Building","Site Speed Optimization"],results:["Tăng 800% organic traffic","Top 1 cho 50+ keywords","Tăng 400% organic revenue"]},{id:"5",title:"Performance Marketing cho App",description:"Chạy ads performance marketing cho mobile app với focus vào user acquisition và retention.",image:"/images/projects/app-marketing.jpg",client:"Mobile App ABC",date:"2024",category:"Performance Marketing",technologies:["Google Ads","Apple Search Ads","Facebook Ads","Attribution Tracking"],results:["1M+ app installs","CPA giảm 60%","Retention rate 85%"]}]},n={"ai-solutions":{title:"AI Solutions",description:"Giải pháp AI thông minh giúp tự động hóa quy trình và tối ưu hiệu quả kinh doanh"},"video-production":{title:"Video Production",description:"Sản xuất video chuyên nghiệp với công nghệ AI và hiệu ứng thị giác ấn tượng"},"web-development":{title:"Web Development",description:"Phát triển ứng dụng web tùy chỉnh với công nghệ hiện đại và trải nghiệm người dùng tối ưu"},"digital-marketing":{title:"Digital Marketing",description:"Chiến lược marketing số toàn diện giúp tăng trưởng thương hiệu và doanh số"}}[i],r=e[i]||[];return n?c.jsx("div",{className:"min-h-screen bg-black text-white pt-20",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs(cn,{to:"/#services",className:"inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors",children:[c.jsx(mo,{className:"w-5 h-5 mr-2"}),"Quay lại dịch vụ"]}),c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:c.jsx(Mi,{variant:"primary",children:n.title})}),c.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:n.description})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map((s,o)=>c.jsxs("div",{className:"group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105",children:[c.jsx("div",{className:"aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center",children:c.jsx("div",{className:"text-6xl opacity-20",children:"🚀"})}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("span",{className:"text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full",children:s.category}),c.jsx("span",{className:"text-xs text-gray-400",children:s.date})]}),c.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors",children:s.title}),c.jsx("p",{className:"text-gray-300 text-sm mb-4 line-clamp-3",children:s.description}),c.jsx("div",{className:"flex items-center justify-between text-sm text-gray-400 mb-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx(go,{className:"w-4 h-4 mr-1"}),s.client]})}),c.jsxs("div",{className:"flex flex-wrap gap-1 mb-4",children:[s.technologies.slice(0,3).map((a,l)=>c.jsx("span",{className:"text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded",children:a},l)),s.technologies.length>3&&c.jsxs("span",{className:"text-xs text-gray-400",children:["+",s.technologies.length-3," more"]})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("h4",{className:"text-sm font-semibold text-green-400",children:"Kết quả đạt được:"}),s.results.slice(0,2).map((a,l)=>c.jsxs("div",{className:"text-xs text-gray-300 flex items-center",children:[c.jsx("div",{className:"w-1 h-1 bg-green-400 rounded-full mr-2"}),a]},l))]})]})]},s.id))}),c.jsxs("div",{className:"text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20",children:[c.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Bạn có dự án tương tự?"}),c.jsx("p",{className:"text-gray-300 mb-6",children:"Hãy liên hệ với chúng tôi để thảo luận về dự án của bạn và nhận tư vấn miễn phí"}),c.jsxs(cn,{to:"/#contact",className:"inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105",children:["Liên hệ tư vấn",c.jsx(vo,{className:"w-5 h-5 ml-2"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-black text-white flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Dịch vụ không tồn tại"}),c.jsx(cn,{to:"/",className:"text-cyan-400 hover:text-cyan-300",children:"Quay về trang chủ"})]})})},Rn=class Rn{constructor(){xn(this,"courses",[]);xn(this,"tutorials",[]);xn(this,"articles",[]);xn(this,"serviceProjects",[]);this.loadInitialData()}static getInstance(){return Rn.instance||(Rn.instance=new Rn),Rn.instance}loadInitialData(){this.loadMockCourses(),this.loadMockTutorials(),this.loadMockArticles(),this.loadMockServiceProjects()}getCourses(e){let t=this.courses;return e!=null&&e.category&&e.category!=="all"&&(t=t.filter(n=>n.category===e.category)),e!=null&&e.level&&(t=t.filter(n=>n.level===e.level)),(e==null?void 0:e.published)!==void 0&&(t=t.filter(n=>n.isPublished===e.published)),t.sort((n,r)=>new Date(r.publishDate).getTime()-new Date(n.publishDate).getTime())}getCourseById(e){return this.courses.find(t=>t.id===e)}addCourse(e){this.courses.push(e)}updateCourse(e,t){const n=this.courses.findIndex(r=>r.id===e);return n!==-1?(this.courses[n]={...this.courses[n],...t},!0):!1}deleteCourse(e){const t=this.courses.findIndex(n=>n.id===e);return t!==-1?(this.courses.splice(t,1),!0):!1}getTutorials(e){let t=this.tutorials;return e!=null&&e.type&&(t=t.filter(n=>n.type===e.type)),e!=null&&e.difficulty&&(t=t.filter(n=>n.difficulty===e.difficulty)),(e==null?void 0:e.published)!==void 0&&(t=t.filter(n=>n.isPublished===e.published)),t.sort((n,r)=>new Date(r.publishDate).getTime()-new Date(n.publishDate).getTime())}getTutorialById(e){return this.tutorials.find(t=>t.id===e)}getArticles(e){let t=this.articles;return e!=null&&e.category&&(t=t.filter(n=>n.category===e.category)),(e==null?void 0:e.published)!==void 0&&(t=t.filter(n=>n.isPublished===e.published)),t.sort((n,r)=>new Date(r.publishDate).getTime()-new Date(n.publishDate).getTime())}getServiceProjects(e){let t=this.serviceProjects.filter(n=>n.isPublished);return e&&(t=t.filter(n=>n.serviceId===e)),t.sort((n,r)=>new Date(r.completionDate).getTime()-new Date(n.completionDate).getTime())}searchContent(e){const t=e.toLowerCase();return{courses:this.courses.filter(n=>n.isPublished&&(n.title.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)||n.tags.some(r=>r.toLowerCase().includes(t)))),tutorials:this.tutorials.filter(n=>n.isPublished&&(n.title.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)||n.tags.some(r=>r.toLowerCase().includes(t)))),articles:this.articles.filter(n=>n.isPublished&&(n.title.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)||n.tags.some(r=>r.toLowerCase().includes(t)))),projects:this.serviceProjects.filter(n=>n.isPublished&&(n.title.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)||n.technologies.some(r=>r.toLowerCase().includes(t))))}}loadMockCourses(){this.courses=[{id:"ai-mastery",title:"Complete AI Solutions Mastery",description:"Comprehensive course covering AI implementation, automation, and business integration.",instructor:"Son Pham",duration:"12 hours",lessons:24,students:1250,rating:4.8,price:"$199",thumbnail:"/images/course-ai-mastery.jpg",level:"intermediate",category:"aiAutomation",videoUrl:"https://youtube.com/playlist?list=example1",syllabus:["AI Fundamentals","Business Process Automation","No-code Solutions","Advanced AI Integration"],tags:["AI","Automation","Business","No-code"],publishDate:"2024-01-15",isPublished:!0},{id:"video-production",title:"Professional Video Production",description:"Learn professional video production from pre-production to final delivery.",instructor:"Creative Director",duration:"18 hours",lessons:36,students:890,rating:4.9,price:"$299",thumbnail:"/images/course-video-production.jpg",level:"beginner",category:"videoProduction",videoUrl:"https://drive.google.com/drive/folders/example2",tags:["Video","Production","Editing","Creative"],publishDate:"2024-01-10",isPublished:!0}]}loadMockTutorials(){this.tutorials=[{id:"ai-automation-basics",title:"Getting Started with AI Automation",description:"Learn the basics of implementing AI automation in your business workflow.",type:"video",duration:"15 min",difficulty:"beginner",thumbnail:"/images/tutorial-ai-basics.jpg",author:"Son Pham",publishDate:"2024-01-15",tags:["AI","Automation","Business"],videoUrl:"https://youtube.com/watch?v=example1",documentUrl:"https://notion.so/ai-automation-guide",isPublished:!0},{id:"video-editing-advanced",title:"Advanced Video Editing Techniques",description:"Master professional video editing with advanced techniques and tools.",type:"video",duration:"25 min",difficulty:"advanced",thumbnail:"/images/tutorial-video-editing.jpg",author:"Creative Team",publishDate:"2024-01-10",tags:["Video","Editing","Production"],videoUrl:"https://drive.google.com/file/d/example2",downloadUrl:"https://example.com/video-editing-assets.zip",isPublished:!0}]}loadMockArticles(){this.articles=[{id:"ai-trends-2024",title:"AI Trends to Watch in 2024",description:"Explore the latest trends in artificial intelligence and their impact on business.",content:"Full article content here...",author:"Son Pham",publishDate:"2024-01-20",lastModified:"2024-01-20",tags:["AI","Trends","Technology"],category:"Technology",thumbnail:"/images/article-ai-trends.jpg",readTime:"5 min read",isPublished:!0,seoTitle:"AI Trends 2024 - VizioCraft Design",seoDescription:"Discover the latest AI trends that will shape business in 2024."}]}loadMockServiceProjects(){this.serviceProjects=[{id:"ai-chatbot-ecommerce",title:"AI Chatbot for E-commerce Platform",description:"Intelligent customer service chatbot with natural language processing.",serviceId:"ai-solutions",thumbnail:"/images/project-ai-chatbot.jpg",images:["/images/project-ai-chatbot-1.jpg","/images/project-ai-chatbot-2.jpg"],technologies:["OpenAI GPT","Node.js","React","MongoDB"],completionDate:"2024-01-15",clientName:"TechStore Vietnam",isPublished:!0},{id:"corporate-video-series",title:"Corporate Training Video Series",description:"Professional video production for employee training and onboarding.",serviceId:"video-production",thumbnail:"/images/project-corporate-video.jpg",images:["/images/project-corporate-1.jpg","/images/project-corporate-2.jpg"],technologies:["Adobe Premiere Pro","After Effects","4K Recording"],completionDate:"2024-01-10",clientName:"Global Corp",isPublished:!0}]}};xn(Rn,"instance");let vs=Rn;const Nn=vs.getInstance(),_g=()=>{const{t:i}=Un(),[e,t]=_e.useState("courses"),[n,r]=_e.useState(""),[s,o]=_e.useState("all"),[a,l]=_e.useState("all"),[h,d]=_e.useState([]),[f,m]=_e.useState([]),[g,_]=_e.useState([]);_e.useEffect(()=>{d(Nn.getCourses({published:!0})),m(Nn.getTutorials({published:!0})),_(Nn.getArticles({published:!0}))},[]);const u=(()=>{let S=[];switch(e){case"courses":S=h.filter(R=>{const C=R.title.toLowerCase().includes(n.toLowerCase())||R.description.toLowerCase().includes(n.toLowerCase()),A=s==="all"||R.category===s,U=a==="all"||R.level===a;return C&&A&&U});break;case"tutorials":S=f.filter(R=>{const C=R.title.toLowerCase().includes(n.toLowerCase())||R.description.toLowerCase().includes(n.toLowerCase()),A=a==="all"||R.difficulty===a;return C&&A});break;case"articles":S=g.filter(R=>{const C=R.title.toLowerCase().includes(n.toLowerCase())||R.description.toLowerCase().includes(n.toLowerCase()),A=s==="all"||R.category===s;return C&&A});break}return S})(),p=S=>c.jsxs("div",{className:"bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:S.thumbnail,alt:S.title,className:"w-full h-48 object-cover",onError:R=>{R.currentTarget.src="/images/placeholder-course.jpg"}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),c.jsx("div",{className:"absolute top-4 right-4",children:c.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${S.level==="beginner"?"bg-green-500/20 text-green-400":S.level==="intermediate"?"bg-yellow-500/20 text-yellow-400":"bg-red-500/20 text-red-400"}`,children:S.level})}),c.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:c.jsxs("div",{className:"flex items-center justify-between text-white",children:[c.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Ds,{size:14,className:"mr-1"}),S.duration]}),c.jsxs("div",{className:"flex items-center",children:[c.jsx(xi,{size:14,className:"mr-1"}),S.lessons," lessons"]})]}),S.videoUrl&&c.jsx("a",{href:S.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full transition-colors",children:c.jsx(tr,{size:16})})]})})]}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",children:S.title}),c.jsx("p",{className:"text-gray-400 mb-4 line-clamp-2",children:S.description}),c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-400",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(xs,{size:14,className:"mr-1"}),S.students]}),c.jsxs("div",{className:"flex items-center",children:[c.jsx(Fl,{size:14,className:"mr-1 text-yellow-400"}),S.rating]})]}),c.jsx("span",{className:"text-cyan-400 font-semibold",children:S.price})]}),c.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:S.tags.slice(0,3).map((R,C)=>c.jsx("span",{className:"px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded",children:R},C))}),c.jsxs("div",{className:"text-sm text-gray-400 mb-4",children:["Instructor: ",c.jsx("span",{className:"text-white",children:S.instructor})]}),c.jsx("button",{className:"w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all",children:i("learning.enrollNow")||"Enroll Now"})]})]},S.id),E=S=>c.jsxs("div",{className:"bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:S.thumbnail,alt:S.title,className:"w-full h-48 object-cover",onError:R=>{R.currentTarget.src="/images/placeholder-tutorial.jpg"}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),c.jsx("div",{className:"absolute top-4 left-4",children:c.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-medium flex items-center ${S.type==="video"?"bg-red-500/20 text-red-400":"bg-blue-500/20 text-blue-400"}`,children:[S.type==="video"?c.jsx(rr,{size:12,className:"mr-1"}):c.jsx(rs,{size:12,className:"mr-1"}),S.type]})}),c.jsx("div",{className:"absolute top-4 right-4",children:c.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${S.difficulty==="beginner"?"bg-green-500/20 text-green-400":S.difficulty==="intermediate"?"bg-yellow-500/20 text-yellow-400":"bg-red-500/20 text-red-400"}`,children:S.difficulty})}),c.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:c.jsxs("div",{className:"flex items-center justify-between text-white",children:[c.jsxs("div",{className:"flex items-center text-sm",children:[c.jsx(Ds,{size:14,className:"mr-1"}),S.duration]}),c.jsxs("div",{className:"flex space-x-2",children:[S.videoUrl&&c.jsx("a",{href:S.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-red-500 hover:bg-red-600 p-2 rounded-full transition-colors",title:"Watch Video",children:c.jsx(tr,{size:16})}),S.downloadUrl&&c.jsx("a",{href:S.downloadUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors",title:"Download Assets",children:c.jsx(_o,{size:16})})]})]})})]}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",children:S.title}),c.jsx("p",{className:"text-gray-400 mb-4 line-clamp-2",children:S.description}),c.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:S.tags.slice(0,3).map((R,C)=>c.jsx("span",{className:"px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded",children:R},C))}),c.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400 mb-4",children:[c.jsxs("span",{children:["By: ",c.jsx("span",{className:"text-white",children:S.author})]}),c.jsx("span",{children:new Date(S.publishDate).toLocaleDateString()})]}),c.jsxs("div",{className:"flex space-x-2",children:[S.documentUrl&&c.jsxs("a",{href:S.documentUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center",children:[c.jsx(vo,{size:16,className:"mr-2"}),i("learning.viewDocument")||"View Document"]}),S.videoUrl&&c.jsxs("a",{href:S.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center",children:[c.jsx(tr,{size:16,className:"mr-2"}),i("learning.watchVideo")||"Watch Video"]})]})]})]},S.id),v=S=>c.jsxs("div",{className:"bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:S.thumbnail,alt:S.title,className:"w-full h-48 object-cover",onError:R=>{R.currentTarget.src="/images/placeholder-article.jpg"}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),c.jsx("div",{className:"absolute top-4 right-4",children:c.jsx("span",{className:"px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium",children:S.category})}),c.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:c.jsxs("div",{className:"flex items-center justify-between text-white text-sm",children:[c.jsx("span",{children:S.readTime}),c.jsx("span",{children:new Date(S.publishDate).toLocaleDateString()})]})})]}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",children:S.title}),c.jsx("p",{className:"text-gray-400 mb-4 line-clamp-3",children:S.description}),c.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:S.tags.slice(0,3).map((R,C)=>c.jsx("span",{className:"px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded",children:R},C))}),c.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400 mb-4",children:[c.jsxs("span",{children:["By: ",c.jsx("span",{className:"text-white",children:S.author})]}),c.jsx("span",{children:S.readTime})]}),c.jsx("button",{className:"w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all",children:i("learning.readArticle")||"Read Article"})]})]},S.id);return c.jsx("div",{className:"min-h-screen bg-gray-900 text-white pt-20",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-5xl font-bold mb-4",children:c.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:i("learning.title")||"Learning Center"})}),c.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto",children:i("learning.subtitle")||"Expand your skills with our comprehensive courses, tutorials, and articles"})]}),c.jsx("div",{className:"flex justify-center mb-8",children:c.jsx("div",{className:"flex space-x-1 bg-gray-800 p-1 rounded-lg",children:[{id:"courses",label:i("learning.tabs.courses")||"Courses",icon:xi},{id:"tutorials",label:i("learning.tabs.tutorials")||"Tutorials",icon:rr},{id:"articles",label:i("learning.tabs.articles")||"Articles",icon:rs}].map(S=>{const R=S.icon;return c.jsxs("button",{onClick:()=>t(S.id),className:`flex items-center px-6 py-3 rounded-md transition-colors ${e===S.id?"bg-cyan-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:[c.jsx(R,{size:20,className:"mr-2"}),S.label]},S.id)})})}),c.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-8",children:[c.jsxs("div",{className:"flex-1 relative",children:[c.jsx(xo,{size:20,className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),c.jsx("input",{type:"text",placeholder:i("learning.searchPlaceholder")||`Search ${e}...`,value:n,onChange:S=>r(S.target.value),className:"w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"})]}),c.jsxs("select",{value:a,onChange:S=>l(S.target.value),className:"px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500",children:[c.jsx("option",{value:"all",children:i("learning.filters.allLevels")||"All Levels"}),c.jsx("option",{value:"beginner",children:i("learning.filters.beginner")||"Beginner"}),c.jsx("option",{value:"intermediate",children:i("learning.filters.intermediate")||"Intermediate"}),c.jsx("option",{value:"advanced",children:i("learning.filters.advanced")||"Advanced"})]}),(e==="courses"||e==="articles")&&c.jsxs("select",{value:s,onChange:S=>o(S.target.value),className:"px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500",children:[c.jsx("option",{value:"all",children:i("learning.filters.allCategories")||"All Categories"}),c.jsx("option",{value:"aiAutomation",children:i("learning.categories.aiAutomation")||"AI & Automation"}),c.jsx("option",{value:"videoProduction",children:i("learning.categories.videoProduction")||"Video Production"}),c.jsx("option",{value:"webDevelopment",children:i("learning.categories.webDevelopment")||"Web Development"}),c.jsx("option",{value:"digitalMarketing",children:i("learning.categories.digitalMarketing")||"Digital Marketing"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(S=>{switch(e){case"courses":return p(S);case"tutorials":return E(S);case"articles":return v(S);default:return null}})}),u.length===0&&c.jsx("div",{className:"text-center py-12",children:c.jsxs("div",{className:"text-gray-400 mb-4",children:[c.jsx(xi,{size:48,className:"mx-auto mb-4 opacity-50"}),c.jsx("p",{children:i("learning.noContent")||`No ${e} found`}),c.jsx("p",{className:"text-sm",children:i("learning.tryDifferentSearch")||"Try adjusting your search or filters"})]})}),c.jsx("div",{className:"text-center mt-12",children:c.jsxs("a",{href:"/admin",className:"inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors",children:[c.jsx(Ol,{size:16,className:"mr-2"}),"Content Management"]})})]})})},yg=()=>{const{t:i}=Un(),[e,t]=_e.useState("courses"),[n,r]=_e.useState(""),[s,o]=_e.useState(!1),l=(()=>{switch(e){case"courses":return Nn.getCourses({published:s||void 0});case"tutorials":return Nn.getTutorials({published:s||void 0});case"articles":return Nn.getArticles({published:s||void 0});case"projects":return Nn.getServiceProjects();default:return[]}})().filter(u=>u.title.toLowerCase().includes(n.toLowerCase())||u.description.toLowerCase().includes(n.toLowerCase())),h=u=>{console.log(`Toggle publish status for ${e} with id: ${u}`)},d=u=>{console.log(`Edit ${e} with id: ${u}`)},f=u=>{window.confirm(`Are you sure you want to delete this ${e.slice(0,-1)}?`)&&console.log(`Delete ${e} with id: ${u}`)},m=()=>{console.log(`Add new ${e.slice(0,-1)}`)},g=()=>{console.log(`Import ${e}`)},_=()=>{console.log(`Export ${e}`)},b=u=>{const p=u.isPublished;return c.jsxs("div",{className:`bg-gray-800 rounded-lg p-6 border ${p?"border-green-500/20":"border-gray-700"}`,children:[c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:u.title}),c.jsx("p",{className:"text-gray-400 text-sm mb-3 line-clamp-2",children:u.description}),c.jsxs("div",{className:"flex flex-wrap gap-2 text-xs text-gray-500",children:[u.author&&c.jsxs("span",{children:["By: ",u.author]}),u.instructor&&c.jsxs("span",{children:["Instructor: ",u.instructor]}),u.publishDate&&c.jsxs("span",{children:["Published: ",new Date(u.publishDate).toLocaleDateString()]}),u.duration&&c.jsxs("span",{children:["Duration: ",u.duration]}),u.students&&c.jsxs("span",{children:["Students: ",u.students]}),u.rating&&c.jsxs("span",{children:["Rating: ",u.rating,"/5"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[c.jsx("button",{onClick:()=>h(u.id),className:`p-2 rounded-lg transition-colors ${p?"bg-green-500/20 text-green-400 hover:bg-green-500/30":"bg-gray-700 text-gray-400 hover:bg-gray-600"}`,title:p?"Published":"Draft",children:p?c.jsx(Gl,{size:16}):c.jsx(Hl,{size:16})}),c.jsx("button",{onClick:()=>d(u.id),className:"p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors",title:"Edit",children:c.jsx(Vl,{size:16})}),c.jsx("button",{onClick:()=>f(u.id),className:"p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors",title:"Delete",children:c.jsx(jl,{size:16})})]})]}),u.tags&&c.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.tags.slice(0,3).map((E,v)=>c.jsx("span",{className:"px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded",children:E},v)),u.tags.length>3&&c.jsxs("span",{className:"px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded",children:["+",u.tags.length-3," more"]})]}),c.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[u.videoUrl&&c.jsx("a",{href:u.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-cyan-400 hover:text-cyan-300 underline",children:"Video Link"}),u.documentUrl&&c.jsx("a",{href:u.documentUrl,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-green-400 hover:text-green-300 underline",children:"Document Link"}),u.downloadUrl&&c.jsx("a",{href:u.downloadUrl,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-purple-400 hover:text-purple-300 underline",children:"Download Assets"})]})]},u.id)};return c.jsx("div",{className:"min-h-screen bg-gray-900 text-white pt-20",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"flex items-center justify-between mb-8",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-4xl font-bold mb-2",children:"Content Management"}),c.jsx("p",{className:"text-gray-400",children:"Manage courses, tutorials, articles, and service projects"})]}),c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsxs("button",{onClick:g,className:"flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors",children:[c.jsx(Bl,{size:16,className:"mr-2"}),"Import"]}),c.jsxs("button",{onClick:_,className:"flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",children:[c.jsx(_o,{size:16,className:"mr-2"}),"Export"]}),c.jsxs("button",{onClick:m,className:"flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors",children:[c.jsx(zl,{size:16,className:"mr-2"}),"Add New"]})]})]}),c.jsx("div",{className:"flex space-x-1 mb-6 bg-gray-800 p-1 rounded-lg",children:[{id:"courses",label:"Courses",icon:xi},{id:"tutorials",label:"Tutorials",icon:rr},{id:"articles",label:"Articles",icon:rs},{id:"projects",label:"Projects",icon:kl}].map(u=>{const p=u.icon;return c.jsxs("button",{onClick:()=>t(u.id),className:`flex items-center px-4 py-2 rounded-md transition-colors ${e===u.id?"bg-cyan-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:[c.jsx(p,{size:16,className:"mr-2"}),u.label]},u.id)})}),c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx(xo,{size:16,className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),c.jsx("input",{type:"text",placeholder:`Search ${e}...`,value:n,onChange:u=>r(u.target.value),className:"pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"})]}),c.jsxs("label",{className:"flex items-center space-x-2 text-sm",children:[c.jsx("input",{type:"checkbox",checked:s,onChange:u=>o(u.target.checked),className:"rounded border-gray-600 bg-gray-800 text-cyan-600 focus:ring-cyan-500"}),c.jsx("span",{children:"Published only"})]})]}),c.jsxs("div",{className:"text-sm text-gray-400",children:[l.length," ",e," found"]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map(b)}),l.length===0&&c.jsxs("div",{className:"text-center py-12",children:[c.jsxs("div",{className:"text-gray-400 mb-4",children:[c.jsx(xi,{size:48,className:"mx-auto mb-4 opacity-50"}),c.jsxs("p",{children:["No ",e," found"]}),c.jsx("p",{className:"text-sm",children:"Try adjusting your search or filters"})]}),c.jsxs("button",{onClick:m,className:"mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors",children:["Create your first ",e.slice(0,-1)]})]})]})})},Sg="modulepreload",Mg=function(i){return"/"+i},ho={},bg=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Mg(l),l in ho)return;ho[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Sg,h||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),h)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let ir=null;typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=768||bg(()=>import("./p5.min-BMins5x1.js").then(e=>e.p),__vite__mapDeps([0,1])).then(e=>{ir=e.default}).catch(()=>{console.log("P5.js failed to load")}));const Eg=()=>{const i=_e.useRef(null),[e,t]=_e.useState(!1),[n,r]=_e.useState(null);return _e.useEffect(()=>{if((()=>{const d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=768||window.innerHeight<=768;return t(d),d})()||!ir)return;const o=[],a=window.innerWidth>1200?60:40,l=d=>{d.setup=()=>{const f=d.createCanvas(d.windowWidth,d.windowHeight);f.style("position","fixed"),f.style("top","0"),f.style("left","0"),f.style("z-index","-1"),f.style("pointer-events","none");for(let m=0;m<a;m++)o.push({x:d.random(d.width),y:d.random(d.height),vx:d.random(-.3,.3),vy:d.random(-.3,.3),size:d.random(.5,2),opacity:d.random(.2,.5),color:[d.random(0,100),d.random(150,220),d.random(180,255)]})},d.draw=()=>{d.background(0,8),o.forEach((f,m)=>{f.x+=f.vx,f.y+=f.vy,f.x<0&&(f.x=d.width),f.x>d.width&&(f.x=0),f.y<0&&(f.y=d.height),f.y>d.height&&(f.y=0),d.fill(f.color[0],f.color[1],f.color[2],f.opacity*255),d.noStroke(),d.ellipse(f.x,f.y,f.size);for(let g=m+1;g<o.length;g++){const _=o[g],b=d.dist(f.x,f.y,_.x,_.y);if(b<80){const u=d.map(b,0,80,.2,0);d.stroke(100,200,255,u*255),d.strokeWeight(.3),d.line(f.x,f.y,_.x,_.y)}}}),d.mouseX>0&&d.mouseY>0&&!e&&o.forEach(f=>{const m=d.dist(d.mouseX,d.mouseY,f.x,f.y);if(m<100){const g=d.map(m,0,100,.01,0),_=d.atan2(f.y-d.mouseY,f.x-d.mouseX);f.vx+=d.cos(_)*g,f.vy+=d.sin(_)*g,f.vx=d.constrain(f.vx,-1,1),f.vy=d.constrain(f.vy,-1,1)}})},d.windowResized=()=>{d.resizeCanvas(d.windowWidth,d.windowHeight)}};if(i.current&&ir)try{const d=new ir(l,i.current);r(d)}catch{console.log("P5.js instance creation failed")}const h=()=>{window.innerWidth<=768&&(t(!0),n&&(n.remove(),r(null)))};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),n&&n.remove()}},[]),_e.useEffect(()=>()=>{n&&n.remove()},[n]),e?c.jsx("div",{className:"fixed inset-0 -z-10",style:{background:"linear-gradient(135deg, #111827 0%, #000000 100%)",pointerEvents:"none"},children:c.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((s,o)=>c.jsx("div",{className:"absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animation:`pulse ${2+Math.random()*4}s infinite`,animationDelay:`${Math.random()*2}s`}},o))})}):c.jsx("div",{ref:i,className:"fixed inset-0 -z-10",style:{pointerEvents:"none"}})},Tg=({isOpen:i,onToggle:e})=>{const{t}=Un(),[n,r]=_e.useState([{id:"1",text:"Xin chào! Tôi là Hoàng Anh, trợ lý ảo của VizioCraft Design. Tôi có thể giúp bạn tìm hiểu về dịch vụ của chúng tôi và trả lời các câu hỏi. Bạn cần hỗ trợ gì không?",sender:"assistant",timestamp:new Date}]),[s,o]=_e.useState(""),[a,l]=_e.useState(!1),[h,d]=_e.useState(!1),f=_e.useRef(null),m=()=>{var u;(u=f.current)==null||u.scrollIntoView({behavior:"smooth"})};_e.useEffect(()=>{m()},[n]);const g=["Dịch vụ AI Solutions của bạn bao gồm những gì?","Chi phí sản xuất video như thế nào?","Tôi có thể học các khóa học online không?","Làm thế nào để liên hệ với team?","Thời gian hoàn thành dự án thường là bao lâu?"],_=async u=>{const p=u||s.trim();if(!p)return;const E={id:Date.now().toString(),text:p,sender:"user",timestamp:new Date};r(v=>[...v,E]),o(""),l(!0);try{const v=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:p,language:"vi"})});if(!v.ok)throw new Error("Network response was not ok");const S=await v.json(),R={id:(Date.now()+1).toString(),text:S.response||"Xin lỗi, tôi không thể trả lời câu hỏi này lúc này. Vui lòng thử lại sau hoặc liên hệ trực tiếp với team của chúng tôi.",sender:"assistant",timestamp:new Date};r(C=>[...C,R])}catch(v){console.error("Error sending message:",v);const S={id:(Date.now()+1).toString(),text:"Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi qua email hoặc điện thoại.",sender:"assistant",timestamp:new Date};r(R=>[...R,S])}finally{l(!1)}},b=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),_())};return i?c.jsxs("div",{className:"fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 flex flex-col",children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center",children:c.jsx(Mr,{className:"w-6 h-6 text-white"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-white font-semibold",children:"Hoàng Anh"}),c.jsx("p",{className:"text-gray-400 text-sm",children:"Trợ lý ảo"})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>d(!h),className:"text-gray-400 hover:text-white transition-colors",children:h?c.jsx(Wl,{className:"w-5 h-5"}):c.jsx(Xl,{className:"w-5 h-5"})}),c.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white transition-colors",children:c.jsx(fo,{className:"w-5 h-5"})})]})]}),!h&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 min-h-0",style:{maxHeight:"calc(100vh - 16rem)"},children:[n.map(u=>c.jsx("div",{className:`flex ${u.sender==="user"?"justify-end":"justify-start"}`,children:c.jsxs("div",{className:"flex items-start space-x-2 max-w-[85%]",children:[u.sender==="assistant"&&c.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0",children:c.jsx(Mr,{className:"w-4 h-4 text-white"})}),c.jsx("div",{className:`px-4 py-2 rounded-2xl break-words word-wrap ${u.sender==="user"?"bg-blue-600 text-white":"bg-gray-700 text-gray-100"}`,children:c.jsx("p",{className:"text-sm leading-relaxed",children:u.text})}),u.sender==="user"&&c.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0",children:c.jsx(go,{className:"w-4 h-4 text-white"})})]})},u.id)),a&&c.jsx("div",{className:"flex justify-start",children:c.jsxs("div",{className:"flex items-start space-x-2",children:[c.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center",children:c.jsx(Mr,{className:"w-4 h-4 text-white"})}),c.jsx("div",{className:"bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl",children:c.jsxs("div",{className:"flex space-x-1",children:[c.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),c.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),c.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})}),c.jsx("div",{ref:f})]}),n.length===1&&c.jsxs("div",{className:"px-4 pb-4 flex-shrink-0",children:[c.jsx("p",{className:"text-gray-400 text-sm mb-3",children:"Câu hỏi gợi ý:"}),c.jsx("div",{className:"space-y-2 max-h-24 overflow-y-auto",children:g.slice(0,3).map((u,p)=>c.jsx("button",{onClick:()=>_(u),className:"w-full text-left text-sm text-gray-300 bg-gray-700/50 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors truncate",title:u,children:u},p))})]}),c.jsx("div",{className:"p-4 border-t border-gray-700 flex-shrink-0",children:c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("input",{type:"text",value:s,onChange:u=>o(u.target.value),onKeyPress:b,placeholder:"Nhập tin nhắn của bạn...",className:"flex-1 bg-gray-700 text-white px-4 py-2 rounded-full border border-gray-600 focus:border-purple-500 focus:outline-none text-sm",disabled:a}),c.jsx("button",{onClick:()=>_(),disabled:!s.trim()||a,className:"bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0",children:c.jsx(po,{className:"w-5 h-5"})})]})})]})]}):null},wg=()=>{const[i,e]=_e.useState(!1),[t,n]=_e.useState(null),r=_e.useCallback(()=>{if(e(l=>!l),!i&&!t){const l={id:Date.now().toString(),messages:[],createdAt:new Date};n(l)}},[i,t]),s=_e.useCallback(async l=>{try{const h=await fetch("http://localhost:5000/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:l,sessionId:t==null?void 0:t.id,timestamp:new Date().toISOString()})});if(!h.ok)throw new Error("Failed to send message");return(await h.json()).response}catch(h){throw console.error("Error sending message to API:",h),h}},[t]),o=_e.useCallback(async l=>{try{await fetch("http://localhost:5000/api/chat/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})}catch(h){console.error("Error saving session:",h)}},[]),a=_e.useCallback(async l=>{try{await fetch("http://localhost:5000/api/notifications/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"new_chat",session:l,timestamp:new Date().toISOString()})})}catch(h){console.error("Error sending notification:",h)}},[]);return{isOpen:i,toggleAssistant:r,currentSession:t,setCurrentSession:n,sendMessageToAPI:s,saveSessionToDatabase:o,sendNotification:a}};function Ag(){ol();const{isOpen:i,toggleAssistant:e}=wg();return c.jsx(xl,{children:c.jsxs("div",{className:"min-h-screen bg-black text-white",children:[c.jsx(Eg,{}),c.jsx(qc,{}),c.jsx("main",{children:c.jsxs(_l,{children:[c.jsx(On,{path:"/",element:c.jsx(vg,{})}),c.jsx(On,{path:"/services",element:c.jsx(co,{})}),c.jsx(On,{path:"/services/:serviceId",element:c.jsx(co,{})}),c.jsx(On,{path:"/service/:serviceId",element:c.jsx(xg,{})}),c.jsx(On,{path:"/learning",element:c.jsx(_g,{})}),c.jsx(On,{path:"/admin",element:c.jsx(yg,{})})]})}),c.jsx("footer",{className:"bg-gray-900 border-t border-gray-800 py-8 relative z-10",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[c.jsxs("div",{className:"flex items-center justify-center mb-4",children:[c.jsx("img",{src:"/images/logo-transparent.png",alt:"VizioCraft Design",className:"h-8 w-8 mr-3 rounded-lg",onError:t=>{t.currentTarget.style.display="none"}}),c.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:"VizioCraft Design"})]}),c.jsx("p",{className:"text-gray-400",children:"© 2024 VizioCraft Design. Empowering Digital Innovation with AI & Media Technology."})]})}),!i&&c.jsx("button",{onClick:e,className:"fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",children:c.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),i&&c.jsx(Tg,{isOpen:i,onToggle:e})]})})}Mo(document.getElementById("root")).render(c.jsx(_e.StrictMode,{children:c.jsx(Ql,{children:c.jsx(Ag,{})})}));
