(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6506)}])},6506:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var r=t(5893),a=t(7294),o=t(9473),s=t(9730),i=t(3728),u=t(9008),l=t(4298),c=t(1604),d=t(5408),h=t(9559),_=t(3131),f=t(3487),p=t(8067),g=t(8540),m=t.n(g),y=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.theme})),t=(0,o.v9)((function(e){return e.language})),s=(0,a.useState)(!1),u=s[0],l=s[1],g=(0,a.useState)(t),y=g[0],v=g[1],x=((0,p.k)((function(e){return{controls:{backgroundColor:e.colors.dark[8]+" !important"}}})),(0,i.t)()),j=(0,a.useState)(x),w=j[0],b=j[1];return(0,a.useEffect)((function(){b(""===n?x:n)}),[x,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:m().nav,children:[(0,r.jsx)("h1",{children:"Langle"}),(0,r.jsxs)("div",{className:m().controls,children:[(0,r.jsx)(c.X,{className:m().checkbox,label:"Dark",checked:"dark"===w,onChange:function(){e({type:"SET_THEME",payload:"light"===n?"dark":"light"})}}),(0,r.jsx)(d.s,{className:m().segmentedControl,data:[{label:"Spanish",value:"spanish"},{label:"French",value:"french"}],value:t,onChange:function(e){return function(e){l(!0),v(e)}(e)}})]})]}),(0,r.jsxs)(h.u,{opened:u,onClose:function(){return l(!1)},title:"Warning:",children:[(0,r.jsx)("p",{children:"Are you sure you want to change your language? Changing your language will reset your current progress."}),(0,r.jsxs)(_.Z,{children:[(0,r.jsx)(f.z,{color:"red",onClick:function(){return e({type:"SET_LANGUAGE",payload:y}),e({type:"SET_GAMESTATE",payload:null}),e({type:"RESET_LEVEL"}),void l(!1)},children:"Change Language"}),(0,r.jsx)(f.z,{color:"gray",variant:"outline",onClick:function(){return l(!1)},children:"Go Back"})]})]})]})},v=t(6030),x=t(7456),j=t(71),w=t.n(j),b=function(e){var n=e.letter,t=e.stagger,a=e.type;return(0,r.jsx)("div",{className:w().letterWrapper,children:(0,r.jsx)("div",{className:w().letter.concat(" ".concat(t&&a?"stagger":""," ").concat(a)),children:(0,r.jsx)("span",{children:n})})})},E=function(){var e=(0,o.v9)((function(e){return e.board})),n=(0,o.v9)((function(e){return e.answerWord})),t=(0,o.v9)((function(e){return e.guess}));return(0,a.useEffect)((function(){(0,v.Z)({targets:".stagger",opacity:[0,1],delay:v.Z.stagger(250),duration:1e3,easing:"easeOutExpo"})}),[t]),(0,r.jsx)(r.Fragment,{children:e.map((function(e,a){return(0,r.jsx)("div",{className:w().gridRow,children:e.map((function(e,o){var s="",i=!1;return a===t-1&&(i=!0),s=a>=t?"":n[o]===e?x.b.Correct:""!==e&&n.includes(e)?x.b.InWord:""===e?"":x.b.Incorrect,(0,r.jsx)(b,{stagger:i,type:s,letter:e},"".concat(a).concat(o))}))},a)}))})},T=t(8079),k=t.n(T),C=function(e){var n=e.letterKey,t=e.word,a=e.guess,o=e.board,s=e.onClick,i="";return""===n?i=x.b.Hidden:o.map((function(e,r){r>=a||e.map((function(e,r){e===n&&(t[r]===e?i=x.b.Correct:""!==e&&t.includes(e)?i=x.b.InWord:""!==e&&(i=x.b.Incorrect))}))})),(0,r.jsx)("div",{className:k().key.concat(" ".concat(i)),onClick:s,children:(0,r.jsx)("span",{children:n})})},N=function(e){var n=e.takeInput,t=(0,o.v9)((function(e){return e.board})),s=(0,o.v9)((function(e){return e.answerWord})),i=(0,o.v9)((function(e){return e.guess})),u=(0,o.v9)((function(e){return e.level})),l=(0,a.useState)([]),c=l[0],d=l[1];return(0,a.useEffect)((function(){setTimeout((function(){d(t)}),2e3)}),[i,u,s]),(0,r.jsxs)("div",{className:k().keyboard,children:[(0,r.jsx)("div",{className:k().keyboardRow,children:["Q","W","E","R","T","Y","U","I","O","P"].map((function(e,t){return(0,r.jsx)(C,{letterKey:e,guess:i,board:c,word:s,onClick:function(){return n(e)}},t)}))}),(0,r.jsx)("div",{className:k().keyboardRow,children:["A","S","D","F","G","H","J","K","L","\xd1"].map((function(e,t){return(0,r.jsx)(C,{letterKey:e,guess:i,board:c,word:s,onClick:function(){return n(e)}},t)}))}),(0,r.jsx)("div",{className:k().keyboardRow,children:["ENTER","Z","X","C","V","B","N","M","DELETE"].map((function(e,t){return(0,r.jsx)(C,{letterKey:e,guess:i,board:c,word:s,onClick:function(){return n(e)}},t)}))})]})},S=t(4325),I=t(4588),A=t(1247),L=t(3011),R=t.n(L),O=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.surveyCompleted})),t=(0,a.useState)(!1),s=t[0],i=t[1];return n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(S.P,{className:s?"fade":"",onClose:function(){return i(!0)},icon:(0,r.jsx)(I.Z,{size:18}),color:"teal",title:"Thank you for completing the survey!",children:"Your response will help shape Langle."})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:R().title,children:"Survey"}),(0,r.jsx)("p",{className:R().subtitle,children:"Please answer the survey when you're finished playing."}),(0,r.jsx)("a",{href:"https://forms.gle/veY8N7q67S8xzrL16",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(f.z,{variant:"outline",rightIcon:(0,r.jsx)(A.Z,{size:14}),onClick:function(){setTimeout((function(){e({type:"SET_SURVEY_COMPLETED"})}),1e3)},children:"Open Survey"})})]})},W=function(e){var n=e.isOpen,t=e.setIsOpen,a=(0,o.I0)(),s=(0,o.v9)((function(e){return e.answerWord})),i=(0,o.v9)((function(e){return e.level})),u=(0,o.v9)((function(e){return e.gameState}));return(0,r.jsxs)(h.u,{opened:n,onClose:function(){return t(!1)},children:[(0,r.jsxs)("div",{className:"center",children:[(0,r.jsxs)("h1",{children:["You ",!0===u?"win":!1===u?"lose":"____","!"]}),!1===u&&(0,r.jsxs)("strong",{children:['The answer was "',s.toLowerCase(),'."']}),2===i?(0,r.jsxs)("p",{children:["You've completed all levels for today!",(0,r.jsx)("br",{}),"Come back tomorrow!"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["You've finished level ",i+1,"/3.",(0,r.jsx)("br",{}),"There are three levels everyday."]}),i<2&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.z,{onClick:function(){return t(!1),a({type:"NEXT_LEVEL"}),void setTimeout((function(){a({type:"SET_GAMESTATE",payload:null})}),500)},children:"Next Level"})})]})]}),(0,r.jsx)(O,{})]})};function q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function D(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return q(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e){var n=e.isOpen,t=e.setIsOpen,a=(0,o.I0)(),s=["llamo","gusta"],i=function(e){a({type:"SET_LANGUAGE",payload:e}),t(!1)};return(0,r.jsxs)(h.u,{opened:n,onClose:function(){return t(!1)},title:"Tutorial:",children:[(0,r.jsxs)("p",{children:["Guess the ",(0,r.jsx)("strong",{children:"LANGLE"})," in four tries.",(0,r.jsx)("br",{})," There are three levels everyday. The number of allowed tries is decreased each level. Word length may increase in higher levels."]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:"Examples:"}),(0,r.jsx)("div",{className:w().gridRow,children:D(s[0]).map((function(e,n){var t="";return"A"===(e=e.toUpperCase())?t=x.b.Correct:"O"===e&&(t=x.b.InWord),(0,r.jsx)(b,{type:t,letter:e},e+n+"tutorial")}))}),(0,r.jsxs)("p",{children:["The letter ",(0,r.jsx)("strong",{children:"A"})," is in the word in the correct spot. The letter ",(0,r.jsx)("strong",{children:"O"})," is in the word, but in the wrong spot."]}),(0,r.jsx)("div",{className:w().gridRow,children:D(s[1]).map((function(e,n){var t="";return"A"===(e=e.toUpperCase())?t=x.b.InWord:"U"===e&&(t=x.b.Incorrect),(0,r.jsx)(b,{type:t,letter:e},e+n+"tutorial")}))}),(0,r.jsxs)("p",{children:["The letter ",(0,r.jsx)("strong",{children:"U"})," is not in the word. The letter ",(0,r.jsx)("strong",{children:"A"})," is in the word, but in the wrong spot."]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:"Choose your language:"}),(0,r.jsxs)("div",{className:w().gridRow,children:[(0,r.jsx)(f.z,{className:w().button,onClick:function(){return i("spanish")},children:"Spanish"}),(0,r.jsx)(f.z,{onClick:function(){return i("french")},children:"French"})]}),(0,r.jsx)("p",{children:"You can change your language at any time from the navigation bar."})]})},M=[{easy:{question:"\xc9l sali\xf3 sin decir ______.",answer:"llamo"},medium:{question:"\xbfQu\xe9 es lo que m\xe1s ______ en la vida?",answer:"gusta"},hard:{question:"\xbfQu\xe9 ______ es m\xe1s dif\xedcil de hacer?",answer:"hacer"}},{easy:{question:"El _____ en voz baja.",answer:"habla"},medium:{question:"Estoy estudiando ______ en este momento.",answer:"espa\xf1ol"},hard:{question:"Me ____ una taza mediana de jugo de naranja.",answer:"gustaria"}}],H=[{easy:{question:"Prends ton _____.",answer:"temps"},medium:{question:"_____ t'appelles-tu?",answer:"comment"},hard:{question:"S'il te pla\xeet, regarde _____ pendant que je tape mon mot de passe.",answer:"ailleurs"}},{easy:{question:"_____ Madame.",answer:"merci"},medium:{question:"Je _____ parfois des vid\xe9os.",answer:"regarde"},hard:{question:"T'es-tu d\xe9j\xe0 enregistr\xe9 en _____ avec la banque ?",answer:"ligne"}}],U=t(7160),z=t.n(U);function K(){var e=(0,o.I0)(),n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t=(0,o.v9)((function(e){return e.language})),c=(0,o.v9)((function(e){return e.day})),d=(0,o.v9)((function(e){return e.gameState})),h=((0,o.v9)((function(e){return e.guess})),(0,o.v9)((function(e){return e.level}))),_=(0,o.v9)((function(e){return e.prompt})),f=(0,o.v9)((function(e){return e.answerWord})),p=(0,o.v9)((function(e){return e.tutorial})),g=(0,a.useState)(!1),m=g[0],v=g[1],x=function(n){if("DELETE"!==n)return"ENTER"===n?(e({type:"CHECK_WORD"}),void setTimeout((function(){null!==d&&v(!0)}),2500)):void(null===d&&e({type:"ADD_CHAR",payload:n}));e({type:"REMOVE_CHAR"})};(0,a.useEffect)((function(){var e=setInterval((function(){document.getElementById("word-input").focus()}),10);return null!==d&&clearInterval(e),function(){return clearInterval(e)}}),[d]),(0,a.useEffect)((function(){var n="spanish"===t?M:H,r=new Date,a=r.getDay()%n.length,o="easy";c!==r.getDay()&&(e({type:"SET_DAY",payload:r.getDay()}),setTimeout((function(){e({type:"SET_GAMESTATE",payload:null})}),500)),0===h?o="easy":1===h?o="medium":2===h&&(o="hard"),_!==n[a][o].question&&f!==n[a][o].answer&&e({type:"SET_PROMPT",payload:{question:n[a][o].question,answer:n[a][o].answer.toUpperCase()}})}),[c,h,t,_,f]),(0,a.useEffect)((function(){null===d&&v(!1),setTimeout((function(){v(null!==d)}),2500)}),[d]);var j=(0,i.t)(),w=(0,o.v9)((function(e){return e.theme}));return(0,r.jsx)(s.Me,{theme:{colorScheme:""!==w?w:j},withGlobalStyles:!0,children:(0,r.jsxs)("div",{className:z().container,children:[(0,r.jsxs)(u.default,{children:[(0,r.jsx)("title",{children:"Langle"}),(0,r.jsx)("meta",{name:"description",content:"It's like Wordle, but you learn a language!"}),(0,r.jsx)("meta",{charset:"UTF-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(G,{isOpen:p,setIsOpen:function(){return e({type:"SET_TUTORIAL"})}}),(0,r.jsx)(y,{}),(0,r.jsxs)("main",{className:z().main,children:[(0,r.jsx)("h1",{className:z().title,children:_}),(0,r.jsx)(E,{}),(0,r.jsx)(N,{takeInput:x})]}),(0,r.jsx)(W,{isOpen:m,setIsOpen:v}),(0,r.jsx)("input",{"aria-hidden":"true",id:"word-input",inputMode:"none",onKeyDown:function(t){null===d&&(n.includes(t.key.toUpperCase())&&x(t.key.toUpperCase()),"Delete"!==t.key&&"Backspace"!==t.key||e({type:"REMOVE_CHAR"}),"Enter"===t.key&&e({type:"CHECK_WORD"}))},type:"text",className:z().hiddenInput}),(0,r.jsx)(l.default,{src:"https://www.googletagmanager.com/gtag/js?id=G-X66M623B3H",strategy:"afterInteractive"}),(0,r.jsx)(l.default,{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n                        \n                        gtag('config', 'G-X66M623B3H');\n                    "})]})})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",title:"Home_title__T09hD",hiddenInput:"Home_hiddenInput__fzSKh"}},8079:function(e){e.exports={keyboard:"Keyboard_keyboard__WVvsp",keyboardRow:"Keyboard_keyboardRow__fh2lR",key:"Keyboard_key__WEL8z"}},8540:function(e){e.exports={nav:"Navigation_nav__4Et7T",controls:"Navigation_controls__4C7_s",segmentedControl:"Navigation_segmentedControl__PiUAn",checkbox:"Navigation_checkbox__eIJzx"}},3011:function(e){e.exports={title:"Survey_title__0_LK8",subtitle:"Survey_subtitle__5v5z6"}},71:function(e){e.exports={gridRow:"WordGrid_gridRow__Iq5pw",letter:"WordGrid_letter__7bMhu",letterWrapper:"WordGrid_letterWrapper__2nl7_",button:"WordGrid_button__BHHm1"}}},function(e){e.O(0,[856,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);