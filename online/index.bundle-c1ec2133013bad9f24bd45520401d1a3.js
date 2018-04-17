!function(e){function n(n){for(var r,m,o=n[0],s=n[1],p=n[2],y=0,l=[];y<o.length;y++)m=o[y],i[m]&&l.push(i[m][0]),i[m]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(n);l.length;)l.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var s=t[o];0!==i[s]&&(r=!1)}r&&(a.splice(n--,1),e=m(m.s=t[0]))}return e}var r={},i={1:0},a=[];function m(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.m=e,m.c=r,m.d=function(e,n,t){m.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},m.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,"a",n),n},m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},m.p="";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var p=0;p<o.length;p++)n(o[p]);var u=s;a.push([80,0]),t()}({135:function(e,n){},136:function(e,n){},171:function(e,n){},173:function(e,n){},178:function(e,n){},179:function(e,n){},180:function(e,n){},80:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(1),a=t.n(i),m=t(40),o=t(79),s=t.n(o),p=function(){function e(e){var n=this;this.sourceFile=e,this.models=[],this.numberTypes=["double","float","uint32","fixed32","integer","int32","sint32","sfixed32","uint64","fixed64","int64","sint64","sfixed64"],a.a.forEachChild(e,function(e){if(e.kind===a.a.SyntaxKind.EnumDeclaration){var t=e,i=t.members;if(i.length>0){var m=i[0];if(m.initializer){var o={kind:"enum",name:t.name.text,type:m.initializer.kind===a.a.SyntaxKind.StringLiteral?a.a.ClassificationTypeNames.stringLiteral:"uint32",members:[]};try{for(var s=r.d(i),p=s.next();!p.done;p=s.next()){if((d=p.value).initializer){var u=d.name;if(d.initializer.kind===a.a.SyntaxKind.StringLiteral){var y=d.initializer;o.members.push({name:u.text,value:y.text})}else if(d.initializer.kind===a.a.SyntaxKind.NumericLiteral){y=d.initializer;o.members.push({name:u.text,value:+y.text})}}}}catch(e){b={error:e}}finally{try{p&&!p.done&&(x=s.return)&&x.call(s)}finally{if(b)throw b.error}}n.models.push(o)}else{o={kind:"enum",name:t.name.text,type:"uint32",members:[]};var l=0;try{for(var c=r.d(i),f=c.next();!f.done;f=c.next()){var d,h=(d=f.value).name;if(d.initializer&&d.initializer.kind===a.a.SyntaxKind.NumericLiteral){var v=+(y=d.initializer).text;o.members.push({name:h.text,value:v}),l=v+1}else o.members.push({name:h.text,value:l}),l++}}catch(e){g={error:e}}finally{try{f&&!f.done&&(k=c.return)&&k.call(c)}finally{if(g)throw g.error}}n.models.push(o)}}}var b,x,g,k}),a.a.forEachChild(e,function(e){n.handleSourceFile(e)})}return e.prototype.generateProtobuf=function(){var e,n,t,i,a,m,o=[];try{for(var s=r.d(this.models),p=s.next();!p.done;p=s.next()){var u=p.value;if("object"===u.kind){var y=[],l=u.members.reduce(function(e,n){return n.tag?Math.max(e,n.tag):e},0);try{for(var c=r.d(u.members),f=c.next();!f.done;f=c.next()){(g=f.value).tag||l++;var d=this.getProtobufProperty(g.type),h=d.modifier,v=d.propertyType;v&&y.push("    "+h+v+" "+g.name+" = "+(g.tag?g.tag:l)+";")}}catch(e){t={error:e}}finally{try{f&&!f.done&&(i=c.return)&&i.call(c)}finally{if(t)throw t.error}}o.push("message "+u.name+" {\n"+y.join("\n")+"\n}")}else if("enum"===u.kind){y=[];try{for(var b=r.d(u.members),x=b.next();!x.done;x=b.next()){var g;"number"==typeof(g=x.value).value&&y.push("    "+g.name+" = "+g.value+";")}}catch(e){a={error:e}}finally{try{x&&!x.done&&(m=b.return)&&m.call(b)}finally{if(a)throw a.error}}y.length>0&&o.push("enum "+u.name+" {\n"+y.join("\n")+"\n}")}}}catch(n){e={error:n}}finally{try{p&&!p.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return'syntax = "proto3";\n\n'+o.join("\n\n")+"\n"},e.prototype.generateJsonSchemas=function(){var e,n,t=this,i={};try{for(var a=r.d(this.models),m=a.next();!m.done;m=a.next()){var o=m.value;"object"!==o.kind&&"array"!==o.kind||(i[o.name]=this.getJsonSchemaProperty(o))}}catch(n){e={error:n}}finally{try{m&&!m.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return this.models.filter(function(e){return("object"===e.kind||"array"===e.kind)&&e.entry}).map(function(e){return{entry:e.entry,schema:{$ref:"#/definitions/"+e.name,definitions:t.getReferencedDefinitions(e.name,i)}}})},e.prototype.generateGraphqlSchema=function(){var e,n,t=this,i=[];try{for(var a=r.d(this.models),m=a.next();!m.done;m=a.next()){var o=m.value;if("object"===o.kind){var s=o.members.map(function(e){var n,i,a=t.getGraphqlSchemaProperty(e.type);if(a){var m="";if(e.parameters){var o=[];try{for(var s=r.d(e.parameters),p=s.next();!p.done;p=s.next()){var u=p.value,y=t.getGraphqlSchemaProperty(u.type);y&&(u.optional?o.push(u.name+": "+y):o.push(u.name+": "+y+"!"))}}catch(e){n={error:e}}finally{try{p&&!p.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}m="("+o.join(", ")+")"}return"  "+e.name+m+": "+(e.optional?a:a+"!")}});i.push("type "+o.name+" {\n"+s.filter(function(e){return e}).join("\n")+"\n}")}else if("enum"===o.kind){s=o.members.map(function(e){return"  "+e.name});i.push("enum "+o.name+" {\n"+s.join("\n")+"\n}")}}}catch(n){e={error:n}}finally{try{m&&!m.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return i.join("\n\n")+"\n"},e.prototype.generateReasonTypes=function(){var e,n,t=this,i=[];try{for(var a=r.d(this.models),m=a.next();!m.done;m=a.next()){var o=m.value;if("object"===o.kind){var s=o.members.map(function(e){var n=t.getReasonTypesProperty(e.type);if(n)return"  "+e.name+": "+(e.optional?"option("+t.toLowerCase(n)+")":t.toLowerCase(n))});i.push("type "+this.toLowerCase(o.name)+" = {\n  .\n"+s.filter(function(e){return e}).map(function(e){return e+","}).join("\n")+"\n};")}else if("enum"===o.kind){s=o.members.map(function(e){return"  | "+t.toUpperCase(e.name)}).join("\n");i.push("type "+this.toLowerCase(o.name)+" =\n"+s+";")}}}catch(n){e={error:n}}finally{try{m&&!m.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return i.join("\n\n")+"\n"},e.prototype.generateOcamlTypes=function(){var e,n,t=this,i=[];try{for(var a=r.d(this.models),m=a.next();!m.done;m=a.next()){var o=m.value;if("object"===o.kind){var s=o.members.map(function(e){var n=t.getOcamlTypesProperty(e.type);if(n)return"  "+e.name+": "+(e.optional?t.toLowerCase(n)+" option":t.toLowerCase(n))});i.push("type "+this.toLowerCase(o.name)+" = {\n"+s.filter(function(e){return e}).map(function(e){return e+";"}).join("\n")+"\n}")}else if("enum"===o.kind){s=o.members.map(function(e){return"  | "+t.toUpperCase(e.name)}).join("\n");i.push("type "+this.toLowerCase(o.name)+" =\n"+s)}}}catch(n){e={error:n}}finally{try{m&&!m.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return i.join("\n\n")+"\n"},e.prototype.handleSourceFile=function(e){var n,t,i,m,o,s,p,u,y,l,c=this.getJsDocs(e),f=c.find(function(e){return"entry"===e.name});if(e.kind===a.a.SyntaxKind.TypeAliasDeclaration){var d=e;if(d.type.kind===a.a.SyntaxKind.ArrayType){var h=d.type,v=this.getType(h.elementType),b={kind:"array",name:d.name.text,type:v,entry:f?f.comment:void 0};try{for(var x=r.d(c),g=x.next();!g.done;g=x.next()){var k=g.value;this.setJsonSchemaArray(k,b)}}catch(e){n={error:e}}finally{try{g&&!g.done&&(t=x.return)&&t.call(x)}finally{if(n)throw n.error}}this.models.push(b)}else if(d.type.kind===a.a.SyntaxKind.TypeLiteral||d.type.kind===a.a.SyntaxKind.UnionType||d.type.kind===a.a.SyntaxKind.IntersectionType){var T=this.getMembersInfo(d.type),M=T.members,S=T.minProperties,P=T.maxProperties;b={kind:"object",name:d.name.text,members:M,minProperties:S,maxProperties:P,entry:f?f.comment:void 0};try{for(var j=r.d(c),w=j.next();!w.done;w=j.next()){k=w.value;this.setJsonSchemaObject(k,b)}}catch(e){i={error:e}}finally{try{w&&!w.done&&(m=j.return)&&m.call(j)}finally{if(i)throw i.error}}this.models.push(b)}}else if(e.kind===a.a.SyntaxKind.InterfaceDeclaration){var I=e;if(this.models.some(function(e){return e.name===I.name.text}))return;var O=this.getObjectMembers(I.members);M=O.members,S=O.minProperties,P=O.maxProperties;if(I.heritageClauses)try{for(var L=r.d(I.heritageClauses),N=L.next();!N.done;N=L.next()){var E=N.value;if(E.kind===a.a.SyntaxKind.HeritageClause){var K=function(e){if(e.kind===a.a.SyntaxKind.ExpressionWithTypeArguments){var n=e.expression.text;_.preHandleType(n);var t=_.models.find(function(e){return"object"===e.kind&&e.name===n});if(t&&"object"===t.kind){var i=function(e){M.every(function(n){return n.name!==e.name})&&(M.push(e),P++,e.optional||S++)};try{for(var m=r.d(t.members),o=m.next();!o.done;o=m.next()){i(o.value)}}catch(e){s={error:e}}finally{try{o&&!o.done&&(p=m.return)&&p.call(m)}finally{if(s)throw s.error}}}}var s,p},_=this;try{for(var C=r.d(E.types),J=C.next();!J.done;J=C.next()){K(v=J.value)}}catch(e){p={error:e}}finally{try{J&&!J.done&&(u=C.return)&&u.call(C)}finally{if(p)throw p.error}}}}}catch(e){o={error:e}}finally{try{N&&!N.done&&(s=L.return)&&s.call(L)}finally{if(o)throw o.error}}b={kind:"object",name:I.name.text,members:M,minProperties:S,maxProperties:P,entry:f?f.comment:void 0};try{for(var U=r.d(c),q=U.next();!q.done;q=U.next()){k=q.value;this.setJsonSchemaObject(k,b)}}catch(e){y={error:e}}finally{try{q&&!q.done&&(l=U.return)&&l.call(U)}finally{if(y)throw y.error}}this.models.push(b)}},e.prototype.preHandleType=function(e){var n=this;if(!this.models.some(function(n){return n.name===e})){var t=!1;a.a.forEachChild(this.sourceFile,function(r){if(!t)if(r.kind===a.a.SyntaxKind.InterfaceDeclaration)r.name.text===e&&(t=!0,n.handleSourceFile(r));else if(r.kind===a.a.SyntaxKind.TypeAliasDeclaration){r.name.text===e&&(t=!0,n.handleSourceFile(r))}})}},e.prototype.overrideType=function(e,n){n&&n.comment&&("number"===e.kind?e.type=n.comment:"array"===e.kind&&"number"===e.type.kind&&(e.type={kind:e.type.kind,type:n.comment}))},e.prototype.getMembersInfo=function(e){var n,t,i,m,o,s,p,u,y,l,c,f,d,h,v=[],b=0,x=0;if(e.kind===a.a.SyntaxKind.TypeLiteral){var g=e;return this.getObjectMembers(g.members)}if(e.kind===a.a.SyntaxKind.UnionType){var k=e;b=1/0;try{for(var T=r.d(k.types),M=T.next();!M.done;M=T.next()){var S=M.value,P=this.getMembersInfo(S);if(b>P.minProperties&&(b=P.minProperties),x<P.maxProperties&&(x=P.maxProperties),0===v.length){var j=JSON.parse(JSON.stringify(P.members));v.push.apply(v,r.c(j))}else{j=P.members;var w=function(e){j.every(function(n){return n.name!==e.name})&&(e.optional=!0)};try{for(var I=r.d(v),O=I.next();!O.done;O=I.next()){w(z=O.value)}}catch(e){i={error:e}}finally{try{O&&!O.done&&(m=I.return)&&m.call(I)}finally{if(i)throw i.error}}var L=function(e){if(v.every(function(n){return n.name!==e.name})){var n=JSON.parse(JSON.stringify(e));n.optional=!0,v.push(n)}};try{for(var N=r.d(j),E=N.next();!E.done;E=N.next()){L(z=E.value)}}catch(e){o={error:e}}finally{try{E&&!E.done&&(s=N.return)&&s.call(N)}finally{if(o)throw o.error}}}}}catch(e){n={error:e}}finally{try{M&&!M.done&&(t=T.return)&&t.call(T)}finally{if(n)throw n.error}}}else if(e.kind===a.a.SyntaxKind.IntersectionType){var K=e;try{for(var _=r.d(K.types),C=_.next();!C.done;C=_.next()){S=C.value,P=this.getMembersInfo(S);b+=P.minProperties,x+=P.maxProperties;j=P.members;var J=function(e){v.every(function(n){return n.name!==e.name})&&v.push(JSON.parse(JSON.stringify(e)))};try{for(var U=r.d(j),q=U.next();!q.done;q=U.next()){J(z=q.value)}}catch(e){y={error:e}}finally{try{q&&!q.done&&(l=U.return)&&l.call(U)}finally{if(y)throw y.error}}}}catch(e){p={error:e}}finally{try{C&&!C.done&&(u=_.return)&&u.call(_)}finally{if(p)throw p.error}}}else if(e.kind===a.a.SyntaxKind.ParenthesizedType){var A=e;P=this.getMembersInfo(A.type);b=P.minProperties,x=P.maxProperties;j=JSON.parse(JSON.stringify(P.members));try{for(var D=r.d(j),F=D.next();!F.done;F=D.next()){var z=F.value;v.push(z)}}catch(e){c={error:e}}finally{try{F&&!F.done&&(f=D.return)&&f.call(D)}finally{if(c)throw c.error}}}else if(e.kind===a.a.SyntaxKind.TypeReference){var R=e.typeName.text;this.preHandleType(R);var $=this.models.find(function(e){return"object"===e.kind&&e.name===R});if($&&"object"===$.kind){var G=function(e){v.every(function(n){return n.name!==e.name})&&(v.push(JSON.parse(JSON.stringify(e))),x++,e.optional||b++)};try{for(var H=r.d($.members),B=H.next();!B.done;B=H.next()){G(z=B.value)}}catch(e){d={error:e}}finally{try{B&&!B.done&&(h=H.return)&&h.call(H)}finally{if(d)throw d.error}}}}return{members:v,minProperties:b,maxProperties:x}},e.prototype.getObjectMembers=function(e){var n,t,i,m,o=[],s=0,p=0;try{for(var u=r.d(e),y=u.next();!y.done;y=u.next()){var l=y.value;if(l.kind===a.a.SyntaxKind.PropertySignature){var c=l,f={name:c.name.text,type:{kind:"unknown"}};o.push(f),c.questionToken?f.optional=!0:s++,p++,c.type&&(f.type=this.getType(c.type));var d=this.getJsDocs(c);try{for(var h=r.d(d),v=h.next();!v.done;v=h.next()){var b=v.value;"tag"===b.name?b.comment&&(f.tag=+b.comment):"mapValueType"===b.name?b.comment&&"map"===f.type.kind&&"number"===f.type.value.kind&&(f.type.value.type=b.comment):"type"===b.name?this.overrideType(f.type,b):"param"===b.name?(b.paramName&&b.type&&(f.parameters||(f.parameters=[]),f.parameters.push({name:b.paramName,type:b.type,optional:b.optional})),this.overrideType(f.type,b)):"array"===f.type.kind?this.setJsonSchemaArray(b,f.type):"number"===f.type.kind?b.comment&&("multipleOf"===b.name?f.type.multipleOf=+b.comment:"maximum"===b.name?f.type.maximum=+b.comment:"minimum"===b.name?f.type.minimum=+b.comment:"exclusiveMaximum"===b.name?f.type.exclusiveMaximum=+b.comment:"exclusiveMinimum"===b.name&&(f.type.exclusiveMinimum=+b.comment)):"string"===f.type.kind?b.comment&&("minLength"===b.name?f.type.minLength=+b.comment:"maxLength"===b.name?f.type.maxLength=+b.comment:"pattern"===b.name&&(f.type.pattern=b.comment)):"object"===f.type.kind&&this.setJsonSchemaObject(b,f.type)}}catch(e){i={error:e}}finally{try{v&&!v.done&&(m=h.return)&&m.call(h)}finally{if(i)throw i.error}}}}}catch(e){n={error:e}}finally{try{y&&!y.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}return{members:o,minProperties:s,maxProperties:p}},e.prototype.setJsonSchemaArray=function(e,n){e.comment?"minItems"===e.name?n.minItems=+e.comment:"maxItems"===e.name?n.maxItems=+e.comment:"itemType"===e.name?this.overrideType(n,e):"number"===n.type.kind?"itemMultipleOf"===e.name?n.type.multipleOf=+e.comment:"itemMinimum"===e.name?n.type.minimum=+e.comment:"itemMaximum"===e.name?n.type.maximum=+e.comment:"itemExclusiveMinimum"===e.name?n.type.exclusiveMinimum=+e.comment:"itemExclusiveMaximum"===e.name&&(n.type.exclusiveMaximum=+e.comment):"string"===n.type.kind&&("itemMinLength"===e.name?n.type.minLength=+e.comment:"itemMaxLength"===e.name?n.type.maxLength=+e.comment:"itemPattern"===e.name&&(n.type.pattern=e.comment)):"uniqueItems"===e.name&&(n.uniqueItems=!0)},e.prototype.setJsonSchemaObject=function(e,n){e.comment?"minProperties"===e.name?n.minProperties=+e.comment:"maxProperties"===e.name&&(n.maxProperties=+e.comment):"additionalProperties"===e.name&&(n.additionalProperties=!0)},e.prototype.getType=function(e){if(e.kind===a.a.SyntaxKind.StringKeyword)return{kind:"string"};if(e.kind===a.a.SyntaxKind.NumberKeyword)return{kind:"number",type:"number"};if(e.kind===a.a.SyntaxKind.BooleanKeyword)return{kind:"boolean"};if(e.kind===a.a.SyntaxKind.TypeLiteral){var n=e;if(1!==n.members.length||n.members[0].kind!==a.a.SyntaxKind.IndexSignature){var t=this.getMembersInfo(n);return{kind:"object",members:t.members,minProperties:t.minProperties,maxProperties:t.maxProperties}}var r=n.members[0];if(1===r.parameters.length){var i=r.parameters[0].type;if(i&&r.type)return{kind:"map",key:this.getType(i),value:this.getType(r.type)}}}else{if(e.kind===a.a.SyntaxKind.ArrayType){var m=e;return{kind:"array",type:this.getType(m.elementType)}}if(e.kind===a.a.SyntaxKind.TypeReference){var o=e;if(o.typeName.kind===a.a.SyntaxKind.Identifier){var s=o.typeName;return this.numberTypes.includes(s.text)?{kind:"number",type:s.text}:{kind:"reference",name:s.text}}if(o.typeName.kind===a.a.SyntaxKind.QualifiedName){var p=o.typeName.left.text,u=this.models.find(function(e){return"enum"===e.kind&&e.name===p});if(u)return{kind:"enum",name:u.name,type:u.type,enums:u.members.map(function(e){return e.value})}}}}return{kind:"unknown"}},e.prototype.getJsDocs=function(e){var n,t,i,a,m=e.jsDoc,o=[];if(m&&m.length>0)try{for(var s=r.d(m),p=s.next();!p.done;p=s.next()){var u=p.value;if(u.tags)try{for(var y=r.d(u.tags),l=y.next();!l.done;l=y.next()){var c=l.value,f=void 0,d=void 0,h=void 0;if("param"===c.tagName.text){var v=c.typeExpression;f=this.getType(v.type),d=c.name.text,h=c.isBracketed}o.push({name:c.tagName.text,type:f,paramName:d,comment:c.comment,optional:h})}}catch(e){i={error:e}}finally{try{l&&!l.done&&(a=y.return)&&a.call(y)}finally{if(i)throw i.error}}}}catch(e){n={error:e}}finally{try{p&&!p.done&&(t=s.return)&&t.call(s)}finally{if(n)throw n.error}}return o},e.prototype.getProtobufProperty=function(e){var n="",t="";if("map"===e.kind){var r="";if("number"===e.value.kind)r=this.getProtobufProperty(e.value).propertyType;else"reference"===e.value.kind&&(r=e.value.name);r&&(t="map<"+e.key.kind+", "+r+">")}else if("array"===e.kind){n="repeated ",t=this.getProtobufProperty(e.type).propertyType}else if("enum"===e.kind)t="string"===e.type?"string":e.name;else if("reference"===e.kind){var i=this.models.find(function(n){return"enum"===n.kind&&n.name===e.name});t=i&&"enum"===i.kind&&"string"===i.type?"string":e.name}else"number"===e.kind?t="number"===e.type?"double":"integer"===e.type?"int32":e.type:"string"===e.kind?t=e.kind:"boolean"===e.kind&&(t="bool");return{modifier:n,propertyType:t}},e.prototype.getGraphqlSchemaProperty=function(e){var n="";if("array"===e.kind){var t=this.getGraphqlSchemaProperty(e.type);t&&(n="["+t+"]")}else if("enum"===e.kind)n=e.name;else if("reference"===e.kind){var r=this.models.find(function(n){return"enum"===n.kind&&n.name===e.name});n=r&&"enum"===r.kind&&"string"===r.type?"String":e.name}else"number"===e.kind?n="number"===e.type||"float"===e.type||"double"===e.type?"Float":"Int":"string"===e.kind?n="String":"boolean"===e.kind&&(n="Boolean");return n},e.prototype.getReasonTypesProperty=function(e){var n="";if("array"===e.kind){var t=this.getReasonTypesProperty(e.type);t&&(n="list("+this.toLowerCase(t)+")")}else if("enum"===e.kind)n=e.name;else if("reference"===e.kind){var r=this.models.find(function(n){return"enum"===n.kind&&n.name===e.name});n=r&&"enum"===r.kind&&"string"===r.type?"string":e.name}else"number"===e.kind?n="number"===e.type||"float"===e.type||"double"===e.type?"float":"int":"string"===e.kind?n="string":"boolean"===e.kind&&(n="bool");return n},e.prototype.getOcamlTypesProperty=function(e){var n="";if("array"===e.kind){var t=this.getOcamlTypesProperty(e.type);t&&(n=this.toLowerCase(t)+" list")}else if("enum"===e.kind)n=e.name;else if("reference"===e.kind){var r=this.models.find(function(n){return"enum"===n.kind&&n.name===e.name});n=r&&"enum"===r.kind&&"string"===r.type?"string":e.name}else"number"===e.kind?n="number"===e.type||"float"===e.type||"double"===e.type?"float":"int":"string"===e.kind?n="string":"boolean"===e.kind&&(n="bool");return n},e.prototype.getReferencedDefinitions=function(e,n){var t={},r=n[e];if(void 0===r)return t;if(t[e]=r,"array"===r.type){if(void 0===r.items.type){var i=r.items.$ref.substring("#/definitions/".length);Object.assign(t,this.getReferencedDefinitions(i,n))}}else if("object"===r.type&&r.properties)for(var a in r.properties)if(r.properties.hasOwnProperty(a)){var m=r.properties[a];if(void 0===m.type){i=m.$ref.substring("#/definitions/".length);Object.assign(t,this.getReferencedDefinitions(i,n))}else if("array"===m.type&&void 0===m.items.type){i=m.items.$ref.substring("#/definitions/".length);Object.assign(t,this.getReferencedDefinitions(i,n))}}return t},e.prototype.getNumberType=function(e){var n;return n="double"===e.type||"float"===e.type?{type:"number",minimum:e.minimum,maximum:e.maximum}:"uint32"===e.type||"fixed32"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:0,maximum:void 0!==e.maximum?e.maximum:4294967295}:"int32"===e.type||"sint32"===e.type||"sfixed32"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:-2147483648,maximum:void 0!==e.maximum?e.maximum:2147483647}:"uint64"===e.type||"fixed64"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:0,maximum:void 0!==e.maximum?e.maximum:0x10000000000000000}:"int64"===e.type||"sint64"===e.type||"sfixed64"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:-0x8000000000000000,maximum:void 0!==e.maximum?e.maximum:0x8000000000000000}:"number"===e.type||"integer"===e.type?{type:e.type,minimum:e.minimum,maximum:e.maximum}:{type:e.kind,minimum:e.minimum,maximum:e.maximum},Object.assign(n,{multipleOf:e.multipleOf,exclusiveMinimum:e.exclusiveMinimum,exclusiveMaximum:e.exclusiveMaximum}),n},e.prototype.getJsonSchemaProperty=function(e){if("number"===e.kind)return this.getNumberType(e);if("boolean"===e.kind)return{type:"boolean"};if("map"===e.kind)return{type:"object",additionalProperties:this.getJsonSchemaProperty(e.value)};if("array"===e.kind)return{type:"array",items:this.getJsonSchemaProperty(e.type),uniqueItems:e.uniqueItems,minItems:e.minItems,maxItems:e.maxItems};if("enum"===e.kind){if("string"===e.type)return{type:"string",enum:e.enums};var n=this.getNumberType({kind:"number",type:e.type});return Object.assign(n,{enum:e.enums,minimum:void 0,maximum:void 0}),n}if("reference"===e.kind)return{type:void 0,$ref:"#/definitions/"+e.name};if("object"===e.kind){var t={},i=[];try{for(var a=r.d(e.members),m=a.next();!m.done;m=a.next()){var o=m.value;o.optional||i.push(o.name),t[o.name]=this.getJsonSchemaProperty(o.type)}}catch(e){s={error:e}}finally{try{m&&!m.done&&(p=a.return)&&p.call(a)}finally{if(s)throw s.error}}return{type:"object",properties:t,required:i,additionalProperties:void 0!==e.additionalProperties&&void 0,minProperties:e.minProperties>e.members.filter(function(e){return!e.optional}).length?e.minProperties:void 0,maxProperties:e.maxProperties<e.members.length?e.maxProperties:void 0}}return"string"===e.kind?{type:e.kind,minLength:e.minLength,maxLength:e.maxLength,pattern:e.pattern}:{type:e.kind};var s,p},e.prototype.toUpperCase=function(e){return e[0].toUpperCase()+e.substring(1)},e.prototype.toLowerCase=function(e){return e[0].toLowerCase()+e.substring(1)},e}(),u="type TypeLiteral = {\n  typeLiteralMember1: number;\n  typeLiteralMember2: string;\n}\n\n/**\n * @minProperties 1\n * @maxProperties 1\n * @additionalProperties\n */\ninterface Interface {\n  interfaceMember1?: number\n  interfaceMember2?: string\n}\n\ntype TypeUnion1 = TypeLiteral | {\n  typeUnionMember1: number;\n  typeUnionMember2: string;\n}\ntype TypeUnion2 =\n  {\n    kind: StringEnum.enumMember1;\n    typeUnionMember1: string;\n  } | {\n    kind: StringEnum.enumMember2;\n    typeUnionMember2: string;\n  }\ntype TypeUnion3 =\n  {\n    kind: NumberEnum.enumMember1;\n    typeUnionMember1: string;\n  } | {\n    kind: NumberEnum.enumMember2;\n    typeUnionMember2: string;\n  }\ntype TypeUnion = {\n  typeUnionMember1: TypeUnion1;\n  typeUnionMember2: TypeUnion2;\n  typeUnionMember3: TypeUnion3;\n}\n\ninterface InterfaceExtends extends Interface {\n  interfaceExtendsMember1: number\n  interfaceExtendsMember2: string\n}\n\ntype TypeIntersection1 = Interface & {\n  typeIntersectionMember1: number;\n  typeIntersectionMember2: string;\n}\ntype TypeIntersection2 =\n  {\n    typeIntersectionMember1: number;\n    typeIntersectionMember2: string;\n  } & {\n    typeIntersectionMember3: number;\n    typeIntersectionMember4: string;\n  }\n\ntype TypeIntersection = {\n  typeIntersectionMember1: TypeIntersection1;\n  typeIntersectionMember2: TypeIntersection2;\n}\n\ntype TypeUnionAndIntersection =\n  {\n    typeIntersectionMember1: number;\n  } & (\n    {\n      kind: NumberEnum.enumMember1;\n      typeUnionMember1: string;\n    } | {\n      kind: NumberEnum.enumMember2;\n      typeUnionMember2: string;\n    }\n  )\n\nexport type TaggedField = {\n  /**\n   * @tag 2\n   */\n  taggedFieldMember1: number;\n  /**\n   * @tag 3\n   */\n  taggedFieldMember2: string;\n}\n\nexport const enum StringEnum {\n  enumMember1 = 'enum member 1',\n  enumMember2 = 'enum member 2'\n}\nexport const enum NumberEnum {\n  enumMember1,\n  enumMember2\n}\nexport const enum NumberEnum2 {\n  enumMember1 = 3,\n  enumMember2 = 4\n}\nexport type Enum = {\n  stringEnum: StringEnum;\n  numberEnum: NumberEnum;\n  numberEnum2: NumberEnum2;\n}\n\ntype integer = number\ntype uint32 = number\ntype int32 = number\ntype sint32 = number\ntype fixed32 = number\ntype sfixed32 = number\ntype uint64 = number\ntype int64 = number\ntype sint64 = number\ntype fixed64 = number\ntype sfixed64 = number\ntype float = number\ntype double = number\n\ntype NumberType = {\n  /**\n   * @multipleOf 10\n   * @minimum 70\n   * @maximum 90\n   * @exclusiveMinimum 70\n   * @exclusiveMaximum 90\n   */\n  numberMember: number;\n\n  integerMember: integer;\n\n  uint32Member: uint32;\n  int32Member: int32;\n  sint32Member: sint32;\n  fixed32Member: fixed32;\n  sfixed32Member: sfixed32;\n\n  uint64Member: uint64;\n  int64Member: int64;\n  sint64Member: sint64;\n  fixed64Member: fixed64;\n  sfixed64Member: sfixed64;\n\n  floatMember: float;\n  doubleMember: double;\n}\n\ntype StringType = {\n  /**\n   * @minLength 10\n   * @maxLength 20\n   * @pattern ^[A-z]{3}$\n   */\n  stringMember: string;\n}\n\ntype ArrayType = {\n  /**\n   * @itemMinLength 10\n   * @itemMaxLength 20\n   * @itemPattern ^[A-z]{3}$\n   */\n  arrayType1: string[];\n  /**\n   * @uniqueItems\n   * @minItems 1\n   * @maxItems 10\n   */\n  arrayType2: TypeLiteral[];\n  arrayType3: { literal: number }[];\n  /**\n   * @itemMultipleOf 100\n   * @itemMinimum 100\n   * @itemMaximum 200\n   * @itemExclusiveMinimum 300\n   * @itemExclusiveMaximum 400\n   */\n  arrayType4: uint32[];\n}\n\ntype MapType = {\n  mapType: { [name: string]: number };\n  mapType2: { [name: string]: TypeLiteral };\n  mapType3: { [name: string]: { literal: number } };\n  mapType4: { [name: string]: uint32 };\n}\n\ntype ID = any\n\ntype Parameter = {\n  /**\n   * @param {string} name\n   * @param {number} age\n   */\n  member1: string\n  /**\n   * @param {string} [name]\n   */\n  member2: string\n}\n\n/**\n * @entry cases.json\n */\nexport type EntryType = {\n  optionalMember?: string;\n  booleanMember: boolean;\n  stringMember: string;\n  numberType: NumberType;\n  arrayType: ArrayType;\n  typeLiteral: { literal: number };\n  referenceType: TypeLiteral;\n  interfaceType: Interface;\n  typeUnion: TypeUnion;\n  interfaceExtends: InterfaceExtends;\n  typeIntersection: TypeIntersection;\n  typeUnionAndIntersection: TypeUnionAndIntersection;\n  mapType: MapType;\n  taggedField: TaggedField;\n  enum: Enum;\n  stringNumber: StringType;\n  id: ID;\n  parameter: Parameter;\n}\n";function y(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],staticClass:"source",domProps:{value:e.source},on:{input:function(n){n.target.composing||(e.source=n.target.value)}}}),e._v(" "),t("div",{staticClass:"result"},[t("button",{on:{click:function(n){e.generate()}}},[e._v("generate")]),e._v(" "),t("div",{staticClass:"options"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedOption=n.target.multiple?t:t[0]}}},e._l(e.options,function(n){return t("option",{key:n,domProps:{value:n}},[e._v(e._s(n))])}))]),e._v(" "),"protobuf"===e.selectedOption?t("pre",{staticClass:"protobuf"},[e._v(e._s(e.protobuf))]):e._e(),e._v(" "),e.jsonSchema?t("pre",{staticClass:"json-schema"},[e._v(e._s(e.jsonSchema))]):e._e(),e._v(" "),"graphql schema"===e.selectedOption?t("pre",{staticClass:"graphql-schema"},[e._v(e._s(e.graphqlSchema))]):e._e(),e._v(" "),"reason types"===e.selectedOption?t("pre",{staticClass:"reason-types"},[e._v(e._s(e.reasonTypes))]):e._e(),e._v(" "),"ocaml types"===e.selectedOption?t("pre",{staticClass:"ocaml-types"},[e._v(e._s(e.ocamlTypes))]):e._e()])])}var l=[];t.d(n,"App",function(){return f});var c="types-as-schema:source",f=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.protobuf="",n.options=["protobuf"],n.selectedOption="protobuf",n.graphqlSchema="",n.reasonTypes="",n.ocamlTypes="",n.innerSource=localStorage.getItem(c)||u,n.jsonSchemas=[],n}return r.b(n,e),Object.defineProperty(n.prototype,"source",{get:function(){return this.innerSource},set:function(e){this.innerSource=e,localStorage.setItem(c,e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"jsonSchema",{get:function(){var e=this;if(this.selectedOption){var n=this.jsonSchemas.find(function(n){return n.entry===e.selectedOption});if(n)return n.content}return""},enumerable:!0,configurable:!0}),n.prototype.generate=function(){if(this.source){var e=i.createSourceFile("",this.source,i.ScriptTarget.ESNext,!1,i.ScriptKind.TS),n=new p(e);this.protobuf=n.generateProtobuf(),this.jsonSchemas=n.generateJsonSchemas().map(function(e){return{entry:e.entry,content:JSON.stringify(e.schema,null,"  ")}}),this.graphqlSchema=n.generateGraphqlSchema(),this.reasonTypes=n.generateReasonTypes(),this.ocamlTypes=n.generateOcamlTypes(),this.options=["protobuf"];try{for(var t=r.d(this.jsonSchemas),a=t.next();!a.done;a=t.next()){var m=a.value;this.options.push(m.entry)}}catch(e){o={error:e}}finally{try{a&&!a.done&&(s=t.return)&&s.call(t)}finally{if(o)throw o.error}}this.options.push("graphql schema"),this.options.push("reason types"),this.options.push("ocaml types")}var o,s},n=r.a([s()({render:y,staticRenderFns:l})],n)}(m.default);new f({el:"#container"})}});