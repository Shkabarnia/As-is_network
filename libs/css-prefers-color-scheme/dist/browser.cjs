var e=/((?:not )?all and )?(\(color-index: *(22|48|70)\))/i,t=/prefers-color-scheme:/i;module.exports=function(a){var i="(prefers-color-scheme: dark)",r=window.matchMedia&&matchMedia(i),c=r&&r.media===i,o=function(){d(r.matches?"dark":"light")},d=function(a){a!==l&&(l=a,"function"==typeof n.onChange&&n.onChange()),[].forEach.call(document.styleSheets||[],(function(i){var r=[];[].forEach.call(i.cssRules||[],(function(e){r.push(e)})),r.forEach((function(i){if(t.test(Object(i.media).mediaText)){var r=[].indexOf.call(i.parentStyleSheet.cssRules,i);i.parentStyleSheet.deleteRule(r)}else{var c=(Object(i.media).mediaText||"").match(e);if(c)i.media.mediaText=((/^dark$/i.test(a)?"48"===c[3]:/^light$/i.test(a)?"70"===c[3]:"22"===c[3])?"not all and ":"")+i.media.mediaText.replace(e,"$2");else{var o=(Object(i.media).mediaText||"").match(/\( *(?:color|max-color): *(48842621|70318723|22511989) *\)/i);o&&o.length>1&&(!/^dark$/i.test(a)||"48842621"!==o[1]&&"22511989"!==o[1]?!/^light$/i.test(a)||"70318723"!==o[1]&&"22511989"!==o[1]?i.media.mediaText=i.media.mediaText.replace(/\( *max-color: *(?:48842621|70318723|22511989) *\)/i,"(color: "+o[1]+")"):i.media.mediaText=i.media.mediaText.replace(/\( *color: *(?:48842621|22511989) *\)/i,"(max-color: "+o[1]+")"):i.media.mediaText=i.media.mediaText.replace(/\( *color: *(?:48842621|70318723) *\)/i,"(max-color: "+o[1]+")"))}}}))}))},n=Object.defineProperty({hasNativeSupport:c,removeListener:function(){r&&r.removeListener(o)}},"scheme",{get:function(){return l},set:d}),l=a||(r&&r.matches?"dark":"light");return d(l),r&&("addEventListener"in r?r.addEventListener("change",o):r.addListener(o)),n};
//# sourceMappingURL=browser.cjs.map
