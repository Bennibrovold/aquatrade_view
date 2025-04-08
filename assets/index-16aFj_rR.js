import{d as c,m as r,c as C,r as v,j as o,u as $,C as w,a as B,b as E,e as I,f as O,G as z,L as _}from"./index-C-SMngWq.js";import{u as M,a as N}from"./react-spring_web.modern-a_yEi3P-.js";import{H as A}from"./Helmet-U944v3lS.js";function j(){return j=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},j.apply(this,arguments)}var D={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,s){},onStringTyped:function(e,s){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,s){},onTypingResumed:function(e,s){},onReset:function(e){},onStop:function(e,s){},onStart:function(e,s){},onDestroy:function(e){}},H=new(function(){function e(){}var s=e.prototype;return s.load=function(t,i,n){if(t.el=typeof n=="string"?document.querySelector(n):n,t.options=j({},D,i),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(h){return h.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var l=Array.prototype.slice.apply(t.stringsElement.children),a=l.length;if(a)for(var p=0;p<a;p+=1)t.strings.push(l[p].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var i="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+i+"]")){var n=document.createElement("style");n.setAttribute(i,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},s.appendFadeOutAnimationCss=function(t){var i="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+i+"]")){var n=document.createElement("style");n.setAttribute(i,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},e}()),k=new(function(){function e(){}var s=e.prototype;return s.typeHtmlChars=function(t,i,n){if(n.contentType!=="html")return i;var l=t.substring(i).charAt(0);if(l==="<"||l==="&"){var a;for(a=l==="<"?">":";";t.substring(i+1).charAt(0)!==a&&!(1+ ++i>t.length););i++}return i},s.backSpaceHtmlChars=function(t,i,n){if(n.contentType!=="html")return i;var l=t.substring(i).charAt(0);if(l===">"||l===";"){var a;for(a=l===">"?"<":"&";t.substring(i-1).charAt(0)!==a&&!(--i<0););i--}return i},e}()),q=function(){function e(t,i){H.load(this,i,t),this.begin()}var s=e.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,i){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var l=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=k.typeHtmlChars(t,i,n);var p=0,u=t.substring(i);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var h=1;h+=(u=/\d+/.exec(u)[0]).length,p=parseInt(u),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,i)+t.substring(i+h),n.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(i+a).charAt(0)!=="`"&&(a++,!(i+a>t.length)););var f=t.substring(0,i),d=t.substring(f.length+1,i+a),g=t.substring(i+a+1);t=f+d+g,a--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),i>=t.length?n.doneTyping(t,i):n.keepTyping(t,i,a),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},p)},l):this.setPauseStatus(t,i,!0)},s.keepTyping=function(t,i,n){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var l=t.substring(0,i+=n);this.replaceText(l),this.typewrite(t,i)},s.doneTyping=function(t,i){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,i)},this.backDelay))},s.backspace=function(t,i){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var l=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=k.backSpaceHtmlChars(t,i,n);var a=t.substring(0,i);if(n.replaceText(a),n.smartBackspace){var p=n.strings[n.arrayPos+1];n.stopNum=p&&a===p.substring(0,i)?i:0}i>n.stopNum?(i--,n.backspace(t,i)):i<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],i))},l)}else this.setPauseStatus(t,i,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,i,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=i},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(i){t.stop()}),this.el.addEventListener("blur",function(i){t.el.value&&t.el.value.length!==0||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const F="/aquatrade_view/assets/1-CCYcV_hj.jpg",R="/aquatrade_view/assets/2-ikPLRNZj.jpg",G="/aquatrade_view/assets/3-B7Zlfp_j.jpg",Z="/aquatrade_view/assets/4-CXbVxMHR.jpg",P=[F,R,G,Z],S=()=>{const e=C.c(12),[s,t]=v.useState(0);let i,n,l,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(i={opacity:0,transform:"translate3d(15%, 0, 0)",position:"absolute",width:"100%",height:"100%"},n={opacity:1,transform:"translate3d(0%, 0, 0)",position:"absolute",width:"100%",height:"100%"},l={opacity:0,transform:"translate3d(-15%, 0, 0)",position:"absolute",width:"100%",height:"100%"},a={mass:1,tension:300,friction:30},e[0]=i,e[1]=n,e[2]=l,e[3]=a):(i=e[0],n=e[1],l=e[2],a=e[3]);let p;e[4]!==s?(p={key:s,from:i,enter:n,leave:l,config:a,loop:!0,exitBeforeEnter:!0},e[4]=s,e[5]=p):p=e[5];const u=M(s,p);let h,f;e[6]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{const L=setInterval(()=>{t(V)},3e3);return()=>clearInterval(L)},f=[],e[6]=h,e[7]=f):(h=e[6],f=e[7]),v.useEffect(h,f);let d;e[8]!==u?(d=u(Y),e[8]=u,e[9]=d):d=e[9];let g;return e[10]!==d?(g=o.jsx(W,{children:d}),e[10]=d,e[11]=g):g=e[11],g},W=c.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  perspective: 1000px;
`,U=c(N.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform, opacity;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);

  ${r.pure.less(r.size.md)} {
  }
`;function V(e){return(e+1)%P.length}function Y(e,s){return o.jsx(U,{style:{...e,backgroundImage:`url(${P[s]})`}})}const J=()=>{const e=v.useRef(null),s=$(i=>i.less.md),t=["нержавеющей стали","цветных и чёрных металлов"];return v.useEffect(()=>{var i=new q(e.current,{strings:t,typeSpeed:30,loop:!0});return()=>{i.destroy()}},[]),o.jsx(X,{children:o.jsxs(w,{children:[o.jsxs(K,{children:[o.jsx(Q,{children:"Акватрэйд"}),o.jsxs(tt,{children:["мы созадём изделия ",o.jsx("br",{})," из ",o.jsx("span",{ref:e})]}),s?o.jsx(T,{children:o.jsx(S,{})}):null,o.jsxs(st,{children:[o.jsx(et,{onClick:()=>window.location.href="tel:+79147907063",children:"Позвонить"})," ","или ",o.jsx("a",{href:"#feedback",children:"оставить заявку"})]})]}),s?null:o.jsx(T,{children:o.jsx(S,{})})]})})},X=c.div`
  height: calc(700px);
  margin-top: 180px;
  margin-bottom: 100px;

  & > div > div {
    display: flex;

    ${r.pure.less(r.size.md)} {
      flex-direction: column;
    }
  }

  ${r.pure.less(r.size.md)} {
    margin-top: 60px;
    height: inherit;
  }
`,K=c.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${r.pure.less(r.size.md)} {
    align-items: center;
  }
`,T=c.div`
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  height: 500px;

  ${r.pure.less(r.size.lg)} {
    max-width: 350px;
    height: 400px;
  }

  ${r.pure.less(r.size.md)} {
    margin-top: 32px;
  }

  ${r.pure.less(r.size.sm)} {
    margin-top: 32px;
    max-width: 100%;
  }
`,Q=c.h1`
  margin: 0%;
  line-height: 56px;
  font-size: 45px;

  ${r.pure.less(r.size.lg)} {
    font-size: 40px;
  }

  ${r.pure.less(r.size.md)} {
    text-align: center;
  }

  ${r.pure.less(r.size.sm)} {
    font-size: 50px;
  }

  ${r.pure.less(r.size.xs)} {
    text-align: left;
    width: 100%;
  }
`,tt=c.div`
  color: rgb(66, 153, 255);
  font-size: 45px;
  font-weight: bold;
  line-height: 56px;
  span {
    font-size: 45px;
    color: rgb(0, 115, 255);
  }

  ${r.pure.less(r.size.lg)} {
    font-size: 40px;

    span {
      font-size: 40px;
    }
  }

  ${r.pure.less(r.size.md)} {
    text-align: center;
  }

  ${r.pure.less(r.size.sm)} {
    height: 168px;
    font-size: 34px;

    span {
      font-size: 34px;
    }
  }

  ${r.pure.less(r.size.xs)} {
    height: 224px;
    text-align: left;
    width: 100%;
  }
`,et=c.button`
  font-size: 22px;
  font-weight: bold;
  background-color: #4ea1ea;
  color: #fff;

  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid transparent;
    outline: 5px solid #c3e3ff;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`,st=c.div`
  display: flex;
  height: 100%;

  align-items: center;
  gap: 50px;

  font-size: 22px;
  font-weight: bold;
  margin-top: 60px;
  padding: 8px;
  border-radius: 16px;

  background-color: aliceblue;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  width: max-content;
  height: auto;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  a {
    color: rgb(0, 115, 255);
  }

  ${r.pure.less(r.size.sm)} {
    max-width: 100%;
    flex-direction: column;
    width: 100%;
    button {
      width: 100%;
    }
  }

  ${r.pure.less(r.size.xs)} {
    width: 100%;
    flex-direction: column;
    gap: 16px;

    button {
      width: 100%;
    }
  }
`,it=()=>{const e=C.c(6);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsx(pt,{children:o.jsxs(ut,{className:"section-title",children:["Наш офис во ",o.jsx("span",{children:"Владивостоке"})]})}),e[0]=s):s=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=o.jsx(m,{icon:o.jsx(B,{}),title:"Адрес",description:"Владивосток, Чукотская 6А, стр. 2"}),e[1]=t):t=e[1];let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=o.jsx(m,{icon:o.jsx(E,{}),title:"Режим работы",description:"Пн-Пт: 8:00 - 17:00"}),e[2]=i):i=e[2];let n;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx(m,{icon:o.jsx(I,{}),title:"Телефон",description:"+7 (914)-790-70-63"}),e[3]=n):n=e[3];let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsxs(ht,{children:[t,i,n,o.jsx(m,{icon:o.jsx(O,{}),title:"E-mail",description:"i707063@ya.ru"})]}),e[4]=l):l=e[4];let a;return e[5]===Symbol.for("react.memo_cache_sentinel")?(a=o.jsxs(w,{children:[s,o.jsxs(ft,{children:[l,o.jsx(dt,{children:o.jsx(nt,{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A84c2291cbd1f208006ceaa92556b1a087151d730631275f2d98478f6c1516e56&source=constructor"})})]})]}),e[5]=a):a=e[5],a},m=e=>{const s=C.c(12),{icon:t,title:i,description:n}=e;let l;s[0]!==t?(l=o.jsx(at,{children:t}),s[0]=t,s[1]=l):l=s[1];let a;s[2]!==i?(a=o.jsx(lt,{children:i}),s[2]=i,s[3]=a):a=s[3];let p;s[4]!==n?(p=o.jsx(ct,{children:n}),s[4]=n,s[5]=p):p=s[5];let u;s[6]!==a||s[7]!==p?(u=o.jsxs(ot,{children:[a,p]}),s[6]=a,s[7]=p,s[8]=u):u=s[8];let h;return s[9]!==l||s[10]!==u?(h=o.jsxs(rt,{children:[l,u]}),s[9]=l,s[10]=u,s[11]=h):h=s[11],h},nt=c.iframe`
  width: 800px;
  height: 434px;

  ${r.pure.less(r.size.lg)} {
    width: 100%;
  }
`,rt=c.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 400px;
  padding: 8px 0px;

  ${r.pure.less(r.size.sm)} {
    width: auto;
  }
`,ot=c.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`,at=c.div`
  min-width: 70px;
  min-height: 70px;
  max-width: 70px;
  max-height: 70px;
  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 40px;
  }
  background-color: aliceblue;
  border-radius: 50%;

  ${r.pure.less(r.size.sm)} {
    font-size: 24px;
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    width: 40px;
    height: 40px;
    padding: 4px;

    svg {
      font-size: 32px;
    }
  }
`,lt=c.div`
  font-size: 24px;
  color: #000000;

  ${r.pure.less(r.size.sm)} {
    font-size: 20px;
  }
`,ct=c.div`
  font-size: 18px;
  color: #000000;
  ${r.pure.less(r.size.sm)} {
    font-size: 16px;
  }
`,pt=c.div`
  margin-bottom: 64px;

  ${r.pure.less(r.size.sm)} {
    margin-bottom: 32px;
  }
`,ut=c.div`
  font-size: 32px;
  font-weight: bold;

  span {
    color: rgb(66, 153, 255);
  }
`,ht=c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  ${r.pure.less(r.size.lg)} {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  ${r.pure.less(r.size.xs)} {
    display: flex;
    gap: 16px;
  }
`,dt=c.div``,ft=c.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 300px;

  ${r.pure.less(r.size.lg)} {
    flex-direction: column;
    gap: 30px;
  }

  ${r.pure.less(r.size.sm)} {
    margin-bottom: 100px;
  }
`;function gt(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M257.97 20.22C150.394 88.557 72.1 275.18 69.874 494.374h375.188c-2.2-219.194-79.52-405.817-187.094-474.156zm-18.845 163.06l18.344 36.282 18.342-36.28c9.99 2.326 19.72 6.537 29.063 12.437l4.156 48.56 20.095-28.624c7.938 8.123 15.48 17.558 22.594 28.156L345.436 279l18.375-15.344c24.39 44.295 42.05 103.6 49.532 170.78-10.036-32.144-26.553-60.393-47.625-82.342l4-35.813L344.093 333c-6.098-4.53-12.452-8.595-19.03-12.156l-3.345-40.97-26.314 28.876c-7.31-2.074-14.792-3.58-22.437-4.438l-15.5-33.25-15.5 33.282c-8.14.916-16.12 2.522-23.876 4.812l-24.875-27.28-3.157 38.874c-6.645 3.585-13.065 7.68-19.22 12.25l-25.624-16.72 4.03 35.814c-21.08 21.95-37.618 50.19-47.656 82.344 7.482-67.188 25.17-126.485 49.562-170.782L169.5 279l-6.28-35.188c7.37-10.983 15.213-20.71 23.468-29.03l19.25 27.374 3.937-46.312c9.4-5.963 19.193-10.22 29.25-12.563z"},child:[]}]})(e)}function mt(e){return z({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"},child:[]}]})(e)}function xt(e){return z({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M17.5,6.5 L23,9 L23,22 L16,19 L8,22 L1,19 L1,6 L6,8 M16,19 L16,12 M8,22 L8,12 M12,16.2727273 C12,16.2727273 6,11.5 6,7 C6,3.25 9,1 12,1 C15,1 18,3.25 18,7 C18,11.5 12,16.2727273 12,16.2727273 Z M13,7 C13,6.44766667 12.5523333,6 12,6 C11.4476667,6 11,6.44766667 11,7 C11,7.55233333 11.4476667,8 12,8 C12.5523333,8 13,7.55233333 13,7 Z"},child:[]}]})(e)}const yt=c.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 64px;

  span {
    color: rgb(66, 153, 255);
  }
`,bt=c.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-bottom: 300px;

  ${r.pure.less(r.size.sm)} {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
`,x=c.div`
  background-color: rgb(66, 153, 255);
  padding: 20px;
  border-radius: 32px;
  box-shadow: -5px 2px 10px rgba(0, 0, 0, 0.3);

  &:nth-child(2) {
    background-color: rgb(99, 153, 215);
  }

  &:nth-child(4) {
    background-color: rgb(99, 153, 215);
  }

  .big {
    font-size: 50px;
  }

  ${r.pure.less(r.size.md)} {
    .big {
      font-size: 40px;
    }
  }

  ${r.pure.less(r.size.sm)} {
    .big {
      font-size: 30px;
    }
  }
`,y=c.p`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 5px;
  height: 75px;
  margin: 0px;

  svg {
    font-size: 50px;
  }

  ${r.pure.less(r.size.md)} {
    font-size: 20px;
    svg {
      font-size: 30px;
    }
  }

  ${r.pure.less(r.size.sm)} {
    font-size: 20px;
    svg {
      font-size: 30px;
    }

    height: auto;
  }
`,b=c.p`
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 500;
  color: #ffffff;

  line-height: 30px;

  ${r.pure.less(r.size.md)} {
    font-size: 16px;
  }
`,vt=()=>o.jsxs(w,{children:[o.jsxs(yt,{className:"section-title",children:["Наша ",o.jsx("span",{children:"статистика"})]}),o.jsxs(bt,{children:[o.jsxs(x,{children:[o.jsxs(y,{className:"big",children:[o.jsx(gt,{}),"20 лет"]}),o.jsx(b,{children:"Акватрейд работает на рынке Владивостока. За это время мы накопили огромный опыт и стали надежным партнером для множества клиентов."})]}),o.jsxs(x,{children:[o.jsxs(y,{children:[o.jsx(mt,{}),"Работаем по всему Приморскому краю"]}),o.jsx(b,{children:"Наша компания не ограничивается только Владивостоком. Мы активно работаем по всему Приморскому краю, обеспечивая высокое качество услуг и удовлетворяя потребности клиентов в различных регионах."})]}),o.jsxs(x,{children:[o.jsxs(y,{className:"big",children:[o.jsx(_,{}),"500+"]}),o.jsx(b,{children:"Выполненных работ. Наши клиенты высоко оценивают качество наших услуг, и это подтверждается большим количеством успешно завершенных работ"})]}),o.jsxs(x,{children:[o.jsxs(y,{children:[o.jsx(xt,{}),"Отправляем готовые изделия по всей России"]}),o.jsx(b,{children:"Мы не только выполняем работы на месте, но и отправляем готовые изделия по всей России. Благодаря надежным логистическим решениям и качественному контролю, наши клиенты получают товары в срок и в отличном состоянии, независимо от их местоположения."})]})]})]}),zt=()=>{const e=C.c(1);let s;return e[0]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsxs("div",{children:[o.jsxs(A,{children:[o.jsx("title",{children:"Металлические конструкции | Акватрэйд"}),o.jsx("meta",{name:"description",content:"Наша компания специализируется на производстве металлических конструкций для различных нужд."}),o.jsx("meta",{name:"keywords",content:"металлические конструкции, производство, компания"})]}),o.jsx(J,{}),o.jsx(vt,{}),o.jsx(it,{})]}),e[0]=s):s=e[0],s};export{zt as default};
