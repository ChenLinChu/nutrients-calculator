(function(){"use strict";var e={2397:function(e,n,t){var l=t(9242),a=t(3396);function u(e,n,t,l,u,o){const r=(0,a.up)("BasicInfo");return(0,a.wg)(),(0,a.j4)(r)}var o=t(7139);const r=e=>((0,a.dD)("data-v-5163994e"),e=e(),(0,a.Cn)(),e),i={class:"basic-info-container"},c=r((()=>(0,a._)("h2",null,"基本資訊",-1))),p={class:"input-container"},s={class:"select-container"},v=r((()=>(0,a._)("label",{for:"genderSelect"},"選擇性別:",-1))),d=r((()=>(0,a._)("option",{value:"null"},"-- 請選擇 --",-1))),f=r((()=>(0,a._)("option",{value:"M"},"男",-1))),g=r((()=>(0,a._)("option",{value:"F"},"女",-1))),h=[d,f,g],w={class:"select-container"},_=r((()=>(0,a._)("label",{for:"strengthSelect"},"運動強度:",-1))),y=(0,a.uE)('<option value="null" data-v-5163994e>-- 請選擇 --</option><option value="1.0" data-v-5163994e>什麼都不幹</option><option value="1.2" data-v-5163994e>只進行正常的學習或工作, 沒運動</option><option value="1.4" data-v-5163994e>學習或工作外, 適量運動 (偶爾跑步走路)</option><option value="1.6" data-v-5163994e>不是從事體力相關職業, 但每天規律上健身房運動</option><option value="1.8" data-v-5163994e>從事體力相關職業 + (規律訓練 or 一天練兩次)</option><option value="2.0" data-v-5163994e>從事超繁重體力職業 + 高強度訓練</option>',7),E=[y],b={key:0},D=r((()=>(0,a._)("span",{class:"hint"}," BMR 指人體在休息狀態下，維持新陳代謝所需的熱量，例如：呼吸、器官運作、體溫維持等，即使整天躺著不動也會消耗的最低熱量。BMR 會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。 ",-1))),k={key:1},m={key:0},T=r((()=>(0,a._)("span",{class:"hint"}," TDEE 是身體一整天下來, 包括基礎代謝、活動量、吃東西所消耗的熱量。不同的生活型態需要的熱量也不一樣，當每天攝取的熱量和 TDEE 相等，便達到「熱量平衡」。 ",-1))),U={key:1},M={class:"input-container"},O={key:0},B={key:1};function j(e,n,t,u,r,d){return(0,a.wg)(),(0,a.iD)("div",i,[c,(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{class:"input-area",type:"number","onUpdate:modelValue":n[0]||(n[0]=e=>u.age=e),placeholder:"年齡"},null,512),[[l.nr,u.age]]),(0,a.wy)((0,a._)("input",{class:"input-area",type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>u.weight=e),placeholder:"體重 (單位: 公斤)"},null,512),[[l.nr,u.weight]]),(0,a.wy)((0,a._)("input",{class:"input-area",type:"number","onUpdate:modelValue":n[2]||(n[2]=e=>u.height=e),placeholder:"身高 (單位: 公分)"},null,512),[[l.nr,u.height]])]),(0,a._)("div",s,[v,(0,a.wy)((0,a._)("select",{id:"genderSelect",class:"gender-select","onUpdate:modelValue":n[3]||(n[3]=e=>u.gender=e)},h,512),[[l.bM,u.gender]])]),(0,a._)("div",w,[_,(0,a.wy)((0,a._)("select",{id:"strengthSelect","onUpdate:modelValue":n[4]||(n[4]=e=>u.sportStrength=e)},E,512),[[l.bM,u.sportStrength]])]),(0,a._)("h3",null,[(0,a.Uk)(" BMR 基礎代謝率 - "),null!==u.BMR?((0,a.wg)(),(0,a.iD)("span",b,[(0,a.Uk)((0,o.zw)(u.BMR)+" (大卡) ",1),D])):((0,a.wg)(),(0,a.iD)("span",k,"(上方數值未填妥)"))]),(0,a._)("h3",null,[(0,a.Uk)(" TDEE 每日總消耗熱量 - "),null!==u.TDEE?((0,a.wg)(),(0,a.iD)("span",m,[(0,a.Uk)((0,o.zw)(u.TDEE)+" (大卡) ",1),T])):((0,a.wg)(),(0,a.iD)("span",U,"(上方數值未填妥)"))]),(0,a._)("div",M,[(0,a.Uk)(" 減少 "),(0,a.wy)((0,a._)("input",{class:"input-area",type:"number","onUpdate:modelValue":n[5]||(n[5]=e=>u.percentage=e),placeholder:"百分比"},null,512),[[l.nr,u.percentage]]),(0,a.Uk)(" 百分比 (10% ~ 20%) ")]),(0,a._)("h3",null,[(0,a.Uk)(" TDEE 減少百分比 - "),null!==u.TDEEDeducted?((0,a.wg)(),(0,a.iD)("span",O,(0,o.zw)(u.TDEEDeducted)+" (大卡) (每日需減少攝入 "+(0,o.zw)(u.TDEE*(+u.percentage/100))+" 大卡) ",1)):((0,a.wg)(),(0,a.iD)("span",B,"(上方數值未填妥)"))])])}var S=t(4870),F={setup(){const e=(0,S.iH)(null),n=(0,S.iH)(null),t=(0,S.iH)(null),l=(0,S.iH)(null),a=(0,S.iH)(null),u=(0,S.iH)(null),o=(0,S.Fl)((()=>{if(null===l.value||null===n.value||null===t.value||null===e.value)return null;const a={M:{default:66,weight:13.7,height:5,age:6.8},F:{default:655,weight:9.6,height:1.7,age:4.7}},u=a[l.value];return u.default+u.weight*n.value+u.height*t.value-u.age*e.value})),r=(0,S.Fl)((()=>null===o.value||null===a.value?null:o.value*+a.value)),i=(0,S.Fl)((()=>null===r.value||null==u.value?null:r.value-r.value*(+u.value/100)));return{age:e,weight:n,height:t,gender:l,sportStrength:a,percentage:u,BMR:o,TDEE:r,TDEEDeducted:i}}},H=t(89);const R=(0,H.Z)(F,[["render",j],["__scopeId","data-v-5163994e"]]);var V=R,x={name:"App",components:{BasicInfo:V}};const z=(0,H.Z)(x,[["render",u]]);var C=z;(0,l.ri)(C).mount("#app")}},n={};function t(l){var a=n[l];if(void 0!==a)return a.exports;var u=n[l]={exports:{}};return e[l](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,l,a,u){if(!l){var o=1/0;for(p=0;p<e.length;p++){l=e[p][0],a=e[p][1],u=e[p][2];for(var r=!0,i=0;i<l.length;i++)(!1&u||o>=u)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(r=!1,u<o&&(o=u));if(r){e.splice(p--,1);var c=a();void 0!==c&&(n=c)}}return n}u=u||0;for(var p=e.length;p>0&&e[p-1][2]>u;p--)e[p]=e[p-1];e[p]=[l,a,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var a,u,o=l[0],r=l[1],i=l[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(i)var p=i(t)}for(n&&n(l);c<o.length;c++)u=o[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(p)},l=self["webpackChunknutrients_calculator"]=self["webpackChunknutrients_calculator"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(2397)}));l=t.O(l)})();
//# sourceMappingURL=app.5e186e45.js.map