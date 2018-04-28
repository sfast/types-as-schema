!function(e){function n(n){for(var i,o,a=n[0],s=n[1],p=n[2],l=0,y=[];l<a.length;l++)o=a[l],r[o]&&y.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(u&&u(n);y.length;)y.shift()();return m.push.apply(m,p||[]),t()}function t(){for(var e,n=0;n<m.length;n++){for(var t=m[n],i=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(i=!1)}i&&(m.splice(n--,1),e=o(o.s=t[0]))}return e}var i={},r={1:0};var m=[];function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var p=0;p<a.length;p++)n(a[p]);var u=s;m.push([83,0]),t()}({144:function(e,n){},145:function(e,n){},179:function(e,n){},181:function(e,n){},185:function(e,n){},186:function(e,n){},187:function(e,n){},41:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toUpperCase=function(e){return e[0].toUpperCase()+e.substring(1)},n.toLowerCase=function(e){return e[0].toLowerCase()+e.substring(1)}},81:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const i=t(89),r=t(88),m=t(87),o=t(86),a=t(85),s=t(84);n.Generator=class{constructor(e){this.sourceFile=e,this.models=[];const n=new i.Parser(e);this.models=n.models}generateProtobuf(){return r.generateProtobuf(this.models)}generateJsonSchemas(){return m.generateJsonSchemas(this.models)}generateGraphqlSchema(){return o.generateGraphqlSchema(this.models)}generateReasonTypes(){return a.generateReasonTypes(this.models)}generateOcamlTypes(){return s.generateOcamlTypes(this.models)}}},83:function(e,n,t){"use strict";t.r(n);var i=t(21),r=t(20),m=t(40),o=t(82),a=t.n(o),s=t(81),p="type TypeLiteral = {\n  typeLiteralMember1: number;\n  typeLiteralMember2: string;\n}\n\n/**\n * @minProperties 1\n * @maxProperties 1\n * @additionalProperties\n */\ninterface Interface {\n  interfaceMember1?: number\n  interfaceMember2?: string\n}\n\ntype TypeUnion1 = TypeLiteral | {\n  typeUnionMember1: number;\n  typeUnionMember2: string;\n}\ntype TypeUnion2 =\n  {\n    kind: StringEnum.enumMember1;\n    typeUnionMember1: string;\n  } | {\n    kind: StringEnum.enumMember2;\n    typeUnionMember2: string;\n  }\ntype TypeUnion3 =\n  {\n    kind: NumberEnum.enumMember1;\n    typeUnionMember1: string;\n  } | {\n    kind: NumberEnum.enumMember2;\n    typeUnionMember2: string;\n  }\ntype TypeUnion4 =\n  {\n    kind: 'foo';\n    typeUnionMember1: string;\n  } | {\n    kind: 'bar';\n    typeUnionMember2: string;\n  }\ntype TypeUnion5 = TypeLiteral | Interface\ntype TypeUnion8 = 'foo' | 'bar'\ntype TypeUnion = {\n  typeUnionMember1: TypeUnion1;\n  typeUnionMember2: TypeUnion2;\n  typeUnionMember3: TypeUnion3;\n  typeUnionMember4: TypeUnion4;\n  typeUnionMember5: TypeUnion5;\n  typeUnionMember6: string | null;\n  typeUnionMember7: 'foo' | 'bar';\n  typeUnionMember8: TypeUnion8;\n}\n\ninterface InterfaceExtends extends Interface {\n  interfaceExtendsMember1: number\n  interfaceExtendsMember2: string\n}\n\ntype TypeIntersection1 = Interface & {\n  typeIntersectionMember1: number;\n  typeIntersectionMember2: string;\n}\ntype TypeIntersection2 =\n  {\n    typeIntersectionMember1: number;\n    typeIntersectionMember2: string;\n  } & {\n    typeIntersectionMember3: number;\n    typeIntersectionMember4: string;\n  }\n\ntype TypeIntersection = {\n  typeIntersectionMember1: TypeIntersection1;\n  typeIntersectionMember2: TypeIntersection2;\n}\n\ntype TypeUnionAndIntersection =\n  {\n    typeIntersectionMember1: number;\n  } & (\n    {\n      kind: NumberEnum.enumMember1;\n      typeUnionMember1: string;\n    } | {\n      kind: NumberEnum.enumMember2;\n      typeUnionMember2: string;\n    }\n  )\n\nexport type TaggedField = {\n  /**\n   * @tag 2\n   */\n  taggedFieldMember1: number;\n  /**\n   * @tag 3\n   */\n  taggedFieldMember2: string;\n}\n\nexport const enum StringEnum {\n  enumMember1 = 'enum member 1',\n  enumMember2 = 'enum member 2'\n}\nexport const enum NumberEnum {\n  enumMember1,\n  enumMember2\n}\nexport const enum NumberEnum2 {\n  enumMember1 = 3,\n  enumMember2 = 4\n}\nexport type Enum = {\n  stringEnum: StringEnum;\n  numberEnum: NumberEnum;\n  numberEnum2: NumberEnum2;\n}\n\ntype integer = number\ntype uint32 = number\ntype int32 = number\ntype sint32 = number\ntype fixed32 = number\ntype sfixed32 = number\ntype uint64 = number\ntype int64 = number\ntype sint64 = number\ntype fixed64 = number\ntype sfixed64 = number\ntype float = number\ntype double = number\n\ntype NumberType = {\n  /**\n   * @multipleOf 10\n   * @minimum 70\n   * @maximum 90\n   * @exclusiveMinimum 70\n   * @exclusiveMaximum 90\n   */\n  numberMember: number;\n\n  integerMember: integer;\n\n  uint32Member: uint32;\n  int32Member: int32;\n  sint32Member: sint32;\n  fixed32Member: fixed32;\n  sfixed32Member: sfixed32;\n\n  uint64Member: uint64;\n  int64Member: int64;\n  sint64Member: sint64;\n  fixed64Member: fixed64;\n  sfixed64Member: sfixed64;\n\n  floatMember: float;\n  doubleMember: double;\n}\n\ntype StringType = {\n  /**\n   * @minLength 10\n   * @maxLength 20\n   * @pattern ^[A-z]{3}$\n   */\n  stringMember: string;\n}\n\ntype ArrayType = {\n  /**\n   * @itemMinLength 10\n   * @itemMaxLength 20\n   * @itemPattern ^[A-z]{3}$\n   */\n  arrayType1: string[];\n  /**\n   * @uniqueItems\n   * @minItems 1\n   * @maxItems 10\n   */\n  arrayType2: TypeLiteral[];\n  arrayType3: { literal: number }[];\n  /**\n   * @itemMultipleOf 100\n   * @itemMinimum 100\n   * @itemMaximum 200\n   * @itemExclusiveMinimum 300\n   * @itemExclusiveMaximum 400\n   */\n  arrayType4: uint32[];\n}\n\ntype MapType7 = {\n  foo: string\n  [name: string]: string\n}\n\ntype MapType = {\n  mapType: { [name: string]: number };\n  mapType2: { [name: string]: TypeLiteral };\n  mapType3: { [name: string]: { literal: number } };\n  mapType4: { [name: string]: uint32 };\n  mapType5: { [name: string]: any };\n  mapType6: {\n    foo: number\n    [name: string]: number\n  };\n  mapType7: MapType7\n}\n\ntype ID = any\n\ntype Parameter = {\n  /**\n   * @param {string} name\n   * @param {number} age\n   */\n  member1: string\n  /**\n   * @param {string} [name]\n   */\n  member2: string\n}\n\ntype DefaultValue = {\n  /**\n   * @default foo\n   */\n  stringMember: string\n  /**\n   * @default 123\n   */\n  numberMember: number\n  /**\n   * @default true\n   */\n  booleanMember: boolean\n}\n\n/**\n * @entry cases.json\n */\nexport type EntryType = {\n  optionalMember?: string;\n  booleanMember: boolean;\n  stringMember: string;\n  numberType: NumberType;\n  arrayType: ArrayType;\n  typeLiteral: { literal: number };\n  referenceType: TypeLiteral;\n  interfaceType: Interface;\n  typeUnion: TypeUnion;\n  interfaceExtends: InterfaceExtends;\n  typeIntersection: TypeIntersection;\n  typeUnionAndIntersection: TypeUnionAndIntersection;\n  mapType: MapType;\n  taggedField: TaggedField;\n  enum: Enum;\n  stringNumber: StringType;\n  id: ID;\n  parameter: Parameter;\n  optionalArrayMember?: string[];\n  tupleType: [string, string];\n  defaultType: DefaultValue;\n  anyType: any;\n}\n";function u(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],staticClass:"source",domProps:{value:e.source},on:{input:function(n){n.target.composing||(e.source=n.target.value)}}}),e._v(" "),t("div",{staticClass:"result"},[t("button",{on:{click:function(n){e.generate()}}},[e._v("generate")]),e._v(" "),t("div",{staticClass:"options"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedOption=n.target.multiple?t:t[0]}}},e._l(e.options,function(n){return t("option",{key:n,domProps:{value:n}},[e._v(e._s(n))])}))]),e._v(" "),"protobuf"===e.selectedOption?t("pre",{staticClass:"protobuf"},[e._v(e._s(e.protobuf))]):e._e(),e._v(" "),e.jsonSchema?t("pre",{staticClass:"json-schema"},[e._v(e._s(e.jsonSchema))]):e._e(),e._v(" "),"graphql schema"===e.selectedOption?t("pre",{staticClass:"graphql-schema"},[e._v(e._s(e.graphqlSchema))]):e._e(),e._v(" "),"reason types"===e.selectedOption?t("pre",{staticClass:"reason-types"},[e._v(e._s(e.reasonTypes))]):e._e(),e._v(" "),"ocaml types"===e.selectedOption?t("pre",{staticClass:"ocaml-types"},[e._v(e._s(e.ocamlTypes))]):e._e()])])}var l=[];t.d(n,"App",function(){return d});var y="types-as-schema:source",d=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.protobuf="",n.options=["protobuf"],n.selectedOption="protobuf",n.graphqlSchema="",n.reasonTypes="",n.ocamlTypes="",n.innerSource=localStorage.getItem(y)||p,n.jsonSchemas=[],n}return i.__extends(n,e),Object.defineProperty(n.prototype,"source",{get:function(){return this.innerSource},set:function(e){this.innerSource=e,localStorage.setItem(y,e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"jsonSchema",{get:function(){var e=this;if(this.selectedOption){var n=this.jsonSchemas.find(function(n){return n.entry===e.selectedOption});if(n)return n.content}return""},enumerable:!0,configurable:!0}),n.prototype.generate=function(){if(this.source){var e=r.createSourceFile("",this.source,r.ScriptTarget.ESNext,!1,r.ScriptKind.TS),n=new s.Generator(e);this.protobuf=n.generateProtobuf(),this.jsonSchemas=n.generateJsonSchemas().map(function(e){return{entry:e.entry,content:JSON.stringify(e.schema,null,"  ")}}),this.graphqlSchema=n.generateGraphqlSchema(),this.reasonTypes=n.generateReasonTypes(),this.ocamlTypes=n.generateOcamlTypes(),this.options=["protobuf"];try{for(var t=i.__values(this.jsonSchemas),m=t.next();!m.done;m=t.next()){var o=m.value;this.options.push(o.entry)}}catch(e){a={error:e}}finally{try{m&&!m.done&&(p=t.return)&&p.call(t)}finally{if(a)throw a.error}}this.options.push("graphql schema"),this.options.push("reason types"),this.options.push("ocaml types")}var a,p},n=i.__decorate([a()({render:u,staticRenderFns:l})],n)}(m.default);new d({el:"#container"})},84:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const i=t(41);function r(e,n){let t="";if("array"===n.kind){const m=r(e,n.type);m&&(t=`${i.toLowerCase(m)} list`)}else if("enum"===n.kind)t=n.name;else if("reference"===n.kind){const i=e.find(e=>"enum"===e.kind&&e.name===n.name);t=i&&"enum"===i.kind&&"string"===i.type?"string":n.name}else"number"===n.kind?t="number"===n.type||"float"===n.type||"double"===n.type?"float":"int":"string"===n.kind?t="string":"boolean"===n.kind&&(t="bool");return t}n.generateOcamlTypes=function(e){const n=[];for(const t of e)if("object"===t.kind){const m=t.members.map(n=>{const t=r(e,n.type);if(t)return`  ${n.name}: ${n.optional?i.toLowerCase(t)+" option":i.toLowerCase(t)}`});n.push(`type ${i.toLowerCase(t.name)} = {\n${m.filter(e=>e).map(e=>e+";").join("\n")}\n}`)}else if("enum"===t.kind){const e=t.members.map(e=>`  | ${i.toUpperCase(e.name)}`).join("\n");n.push(`type ${i.toLowerCase(t.name)} =\n${e}`)}return n.join("\n\n")+"\n"}},85:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const i=t(41);function r(e,n){let t="";if("array"===n.kind){const m=r(e,n.type);m&&(t=`list(${i.toLowerCase(m)})`)}else if("enum"===n.kind)t=n.name;else if("reference"===n.kind){const i=e.find(e=>"enum"===e.kind&&e.name===n.name);t=i&&"enum"===i.kind&&"string"===i.type?"string":n.name}else"number"===n.kind?t="number"===n.type||"float"===n.type||"double"===n.type?"float":"int":"string"===n.kind?t="string":"boolean"===n.kind&&(t="bool");return t}n.generateReasonTypes=function(e){const n=[];for(const t of e)if("object"===t.kind){const m=t.members.map(n=>{const t=r(e,n.type);if(t)return`  ${n.name}: ${n.optional?`option(${i.toLowerCase(t)})`:i.toLowerCase(t)}`});n.push(`type ${i.toLowerCase(t.name)} = {\n  .\n${m.filter(e=>e).map(e=>e+",").join("\n")}\n};`)}else if("enum"===t.kind){const e=t.members.map(e=>`  | ${i.toUpperCase(e.name)}`).join("\n");n.push(`type ${i.toLowerCase(t.name)} =\n${e};`)}return n.join("\n\n")+"\n"}},86:function(e,n,t){"use strict";function i(e,n){let t="";if("array"===n.kind){const r=i(e,n.type);r&&(t=`[${r}]`)}else if("enum"===n.kind)t=n.name;else if("reference"===n.kind){const i=e.find(e=>"enum"===e.kind&&e.name===n.name);t=i&&"enum"===i.kind&&"string"===i.type?"String":n.name}else"number"===n.kind?t="number"===n.type||"float"===n.type||"double"===n.type?"Float":"Int":"string"===n.kind?t="String":"boolean"===n.kind&&(t="Boolean");return t}Object.defineProperty(n,"__esModule",{value:!0}),n.generateGraphqlSchema=function(e){const n=[];for(const t of e)if("object"===t.kind){const r=t.members.map(n=>{const t=i(e,n.type);if(t){let r="";if(n.parameters){const t=[];for(const r of n.parameters){const n=i(e,r.type);n&&(r.optional?t.push(`${r.name}: ${n}`):t.push(`${r.name}: ${n}!`))}r=`(${t.join(", ")})`}return`  ${n.name}${r}: ${n.optional?t:t+"!"}`}});n.push(`type ${t.name} {\n${r.filter(e=>e).join("\n")}\n}`)}else if("enum"===t.kind){const e=t.members.map(e=>`  ${e.name}`);n.push(`enum ${t.name} {\n${e.join("\n")}\n}`)}return n.join("\n\n")+"\n"}},87:function(e,n,t){"use strict";function i(e){if("number"===e.kind)return r(e);if("boolean"===e.kind)return{type:"boolean",default:e.default};if("map"===e.kind)return{type:"object",additionalProperties:i(e.value)};if("array"===e.kind)return{type:"array",items:i(e.type),uniqueItems:e.uniqueItems,minItems:e.minItems,maxItems:e.maxItems};if("enum"===e.kind){if("string"===e.type)return{type:"string",enum:e.enums};{const n=r({kind:"number",type:e.type});return Object.assign(n,{enum:e.enums,minimum:void 0,maximum:void 0}),n}}if("reference"===e.kind)return{type:void 0,$ref:`#/definitions/${e.name}`};if("object"===e.kind){const n={},t=[];for(const r of e.members)r.optional||t.push(r.name),n[r.name]=i(r.type);let r;return{type:"object",properties:n,required:t,additionalProperties:r=void 0===e.additionalProperties?void 0!==e.additionalProperties&&void 0:!0===e.additionalProperties||!1===e.additionalProperties?e.additionalProperties:i(e.additionalProperties),minProperties:e.minProperties>e.members.filter(e=>!e.optional).length?e.minProperties:void 0,maxProperties:e.maxProperties&&e.maxProperties<e.members.length?e.maxProperties:void 0}}return"string"===e.kind?{type:e.kind,minLength:e.minLength,maxLength:e.maxLength,pattern:e.pattern,default:e.default,enum:e.enums}:"union"===e.kind?{type:void 0,anyOf:e.members.map(e=>i(e))}:"null"===e.kind?{type:"null"}:{type:e.kind}}function r(e){let n;return n="double"===e.type||"float"===e.type?{type:"number",minimum:e.minimum,maximum:e.maximum}:"uint32"===e.type||"fixed32"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:0,maximum:void 0!==e.maximum?e.maximum:4294967295}:"int32"===e.type||"sint32"===e.type||"sfixed32"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:-2147483648,maximum:void 0!==e.maximum?e.maximum:2147483647}:"uint64"===e.type||"fixed64"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:0,maximum:void 0!==e.maximum?e.maximum:0x10000000000000000}:"int64"===e.type||"sint64"===e.type||"sfixed64"===e.type?{type:"integer",minimum:void 0!==e.minimum?e.minimum:-0x8000000000000000,maximum:void 0!==e.maximum?e.maximum:0x8000000000000000}:"number"===e.type||"integer"===e.type?{type:e.type,minimum:e.minimum,maximum:e.maximum}:{type:e.kind,minimum:e.minimum,maximum:e.maximum},Object.assign(n,{multipleOf:e.multipleOf,exclusiveMinimum:e.exclusiveMinimum,exclusiveMaximum:e.exclusiveMaximum,default:e.default}),n}Object.defineProperty(n,"__esModule",{value:!0}),n.generateJsonSchemas=function(e){const n={};for(const t of e)"object"!==t.kind&&"array"!==t.kind&&"union"!==t.kind&&"string"!==t.kind&&"number"!==t.kind||(n[t.name]=i(t));return e.filter(e=>("object"===e.kind||"array"===e.kind||"union"===e.kind)&&e.entry).map(e=>({entry:e.entry,schema:{$ref:`#/definitions/${e.name}`,definitions:function e(n,t){const i={},r="string"==typeof n?t[n]:n;if(void 0===r)return i;if("string"==typeof n&&(i[n]=r),"array"===r.type)Object.assign(i,e(r.items,t));else if("object"===r.type){if(r.properties)for(const n in r.properties)if(r.properties.hasOwnProperty(n)){const m=r.properties[n];Object.assign(i,e(m,t))}}else if(void 0===r.type){if(r.$ref){const n=r.$ref.substring("#/definitions/".length);Object.assign(i,e(n,t))}if(r.anyOf)for(const n of r.anyOf)Object.assign(i,e(n,t))}return i}(e.name,n)}}))}},88:function(e,n,t){"use strict";function i(e,n){let t="",r="";if("map"===n.kind){let t="";if("number"===n.value.kind){const{propertyType:r}=i(e,n.value);t=r}else"reference"===n.value.kind&&(t=n.value.name);t&&(r=`map<${n.key.kind}, ${t}>`)}else if("array"===n.kind){t="repeated ";const{propertyType:m}=i(e,n.type);r=m}else if("enum"===n.kind)r="string"===n.type?"string":n.name;else if("reference"===n.kind){const t=e.find(e=>"enum"===e.kind&&e.name===n.name);r=t&&"enum"===t.kind&&"string"===t.type?"string":n.name}else"number"===n.kind?r="number"===n.type?"double":"integer"===n.type?"int32":n.type:"string"===n.kind?r=n.kind:"boolean"===n.kind&&(r="bool");return{modifier:t,propertyType:r}}Object.defineProperty(n,"__esModule",{value:!0}),n.generateProtobuf=function(e){const n=[];for(const t of e)if("object"===t.kind){const r=[];let m=t.members.reduce((e,n)=>n.tag?Math.max(e,n.tag):e,0);for(const n of t.members){n.tag||m++;const{modifier:t,propertyType:o}=i(e,n.type);o&&r.push(`    ${t}${o} ${n.name} = ${n.tag?n.tag:m};`)}n.push(`message ${t.name} {\n${r.join("\n")}\n}`)}else if("enum"===t.kind){const e=[];for(const n of t.members)"number"==typeof n.value&&e.push(`    ${n.name} = ${n.value};`);e.length>0&&n.push(`enum ${t.name} {\n${e.join("\n")}\n}`)}return`syntax = "proto3";\n\n${n.join("\n\n")}\n`}},89:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const i=t(21).__importDefault(t(20));n.Parser=class{constructor(e){this.sourceFile=e,this.models=[],i.default.forEachChild(e,e=>{if(e.kind===i.default.SyntaxKind.EnumDeclaration){const n=e,t=n.members;if(t.length>0){const e=t[0];if(e.initializer){const r={kind:"enum",name:n.name.text,type:e.initializer.kind===i.default.SyntaxKind.StringLiteral?i.default.ClassificationTypeNames.stringLiteral:"uint32",members:[]};for(const e of t)if(e.initializer){const n=e.name;if(e.initializer.kind===i.default.SyntaxKind.StringLiteral){const t=e.initializer;r.members.push({name:n.text,value:t.text})}else if(e.initializer.kind===i.default.SyntaxKind.NumericLiteral){const t=e.initializer;r.members.push({name:n.text,value:+t.text})}}this.models.push(r)}else{const e={kind:"enum",name:n.name.text,type:"uint32",members:[]};let r=0;for(const n of t){const t=n.name;if(n.initializer&&n.initializer.kind===i.default.SyntaxKind.NumericLiteral){const i=+n.initializer.text;e.members.push({name:t.text,value:i}),r=i+1}else e.members.push({name:t.text,value:r}),r++}this.models.push(e)}}}}),i.default.forEachChild(e,e=>{this.handleSourceFile(e)})}handleSourceFile(e){const n=this.getJsDocs(e),t=n.find(e=>"entry"===e.name);if(e.kind===i.default.SyntaxKind.TypeAliasDeclaration){const r=e;if(r.type.kind===i.default.SyntaxKind.ArrayType){const e=r.type,i=this.getType(e.elementType),m={kind:"array",name:r.name.text,type:i,entry:t?t.comment:void 0};for(const e of n)this.setJsonSchemaArray(e,m);this.models.push(m)}else if(r.type.kind===i.default.SyntaxKind.TypeLiteral||r.type.kind===i.default.SyntaxKind.UnionType||r.type.kind===i.default.SyntaxKind.IntersectionType){if(r.type.kind===i.default.SyntaxKind.UnionType){const e=r.type;if(e.types.every(e=>e.kind===i.default.SyntaxKind.LiteralType)){let n;const t=[];for(const r of e.types){const e=r;e.literal.kind===i.default.SyntaxKind.StringLiteral?(n="string",t.push(e.literal.text)):e.literal.kind===i.default.SyntaxKind.NumericLiteral&&(n="number",t.push(+e.literal.text))}if(n){if("string"===n){const e={kind:n,name:r.name.text,enums:t};this.models.push(e)}else{const e={kind:n,type:n,name:r.name.text,enums:t};this.models.push(e)}return}}else if(e.types.every(e=>e.kind===i.default.SyntaxKind.TypeReference)){const n={kind:"union",name:r.name.text,members:e.types.map(e=>this.getType(e)),entry:t?t.comment:void 0};return void this.models.push(n)}}const{members:e,minProperties:m,maxProperties:o,additionalProperties:a}=this.getMembersInfo(r.type),s={kind:"object",name:r.name.text,members:e,minProperties:m,maxProperties:void 0===a?o:void 0,additionalProperties:a,entry:t?t.comment:void 0};for(const e of n)this.setJsonSchemaObject(e,s);this.models.push(s)}}else if(e.kind===i.default.SyntaxKind.InterfaceDeclaration){const r=e;if(this.models.some(e=>e.name===r.name.text))return;const{members:m,minProperties:o,maxProperties:a,additionalProperties:s}=this.getObjectMembers(r.members);let p=o,u=a;if(r.heritageClauses)for(const e of r.heritageClauses)if(e.kind===i.default.SyntaxKind.HeritageClause)for(const n of e.types)if(n.kind===i.default.SyntaxKind.ExpressionWithTypeArguments){const e=n.expression.text;this.preHandleType(e);const t=this.models.find(n=>"object"===n.kind&&n.name===e);if(t&&"object"===t.kind)for(const e of t.members)m.every(n=>n.name!==e.name)&&(m.push(e),u++,e.optional||p++)}const l={kind:"object",name:r.name.text,members:m,minProperties:p,maxProperties:void 0===s?u:void 0,additionalProperties:s,entry:t?t.comment:void 0};for(const e of n)this.setJsonSchemaObject(e,l);this.models.push(l)}}getJsDocs(e){const n=e.jsDoc,t=[];if(n&&n.length>0)for(const e of n)if(e.tags)for(const n of e.tags){let e,i,r;if("param"===n.tagName.text){const t=n.typeExpression;e=this.getType(t.type),i=n.name.text,r=n.isBracketed}t.push({name:n.tagName.text,type:e,paramName:i,comment:n.comment,optional:r})}return t}getType(e){if(e.kind===i.default.SyntaxKind.StringKeyword)return{kind:"string"};if(e.kind===i.default.SyntaxKind.NumberKeyword)return{kind:"number",type:"number"};if(e.kind===i.default.SyntaxKind.BooleanKeyword)return{kind:"boolean"};if(e.kind===i.default.SyntaxKind.TypeLiteral){const n=e;if(1!==n.members.length||n.members[0].kind!==i.default.SyntaxKind.IndexSignature){const{members:e,minProperties:t,maxProperties:i,additionalProperties:r}=this.getMembersInfo(n);return{kind:"object",members:e,minProperties:t,maxProperties:void 0===r?i:void 0,additionalProperties:r}}{const e=n.members[0];if(1===e.parameters.length){const n=e.parameters[0].type;if(n&&e.type)return{kind:"map",key:this.getType(n),value:this.getType(e.type)}}}}else{if(e.kind===i.default.SyntaxKind.ArrayType){const n=e;return{kind:"array",type:this.getType(n.elementType)}}if(e.kind===i.default.SyntaxKind.TypeReference){const n=e;if(n.typeName.kind===i.default.SyntaxKind.Identifier){const e=n.typeName;return r.includes(e.text)?{kind:"number",type:e.text}:{kind:"reference",name:e.text}}if(n.typeName.kind===i.default.SyntaxKind.QualifiedName){const e=n.typeName.left.text,t=this.models.find(n=>"enum"===n.kind&&n.name===e);if(t)return{kind:"enum",name:t.name,type:t.type,enums:t.members.map(e=>e.value)}}}else if(e.kind===i.default.SyntaxKind.UnionType){const n=e;if(!n.types.every(e=>e.kind===i.default.SyntaxKind.LiteralType))return{kind:"union",members:n.types.map(e=>this.getType(e))};{let e;const t=[];for(const r of n.types){const n=r;n.literal.kind===i.default.SyntaxKind.StringLiteral?(e="string",t.push(n.literal.text)):n.literal.kind===i.default.SyntaxKind.NumericLiteral&&(e="number",t.push(+n.literal.text))}if(e)return{kind:"enum",type:e,name:e,enums:t}}}else if(e.kind===i.default.SyntaxKind.TupleType){const n=e;let t;for(const e of n.elementTypes)t=this.getType(e);if(t)return{kind:"array",type:t,minItems:n.elementTypes.length,maxItems:n.elementTypes.length}}else if(e.kind===i.default.SyntaxKind.LiteralType){const n=e;let t;const r=[];if(n.literal.kind===i.default.SyntaxKind.StringLiteral?(t="string",r.push(n.literal.text)):n.literal.kind===i.default.SyntaxKind.NumericLiteral&&(t="number",r.push(+n.literal.text)),t)return{kind:"enum",type:t,name:t,enums:r}}else if(e.kind===i.default.SyntaxKind.NullKeyword)return{kind:"null"}}return{kind:void 0}}getMembersInfo(e){const n=[];let t=0,r=0;if(e.kind===i.default.SyntaxKind.TypeLiteral){const n=e;return this.getObjectMembers(n.members)}if(e.kind===i.default.SyntaxKind.UnionType){const i=e;t=1/0;for(const e of i.types){const i=this.getMembersInfo(e);if(t>i.minProperties&&(t=i.minProperties),r<i.maxProperties&&(r=i.maxProperties),0===n.length){const e=JSON.parse(JSON.stringify(i.members));n.push(...e)}else{const e=i.members;for(const t of n){const n=e.find(e=>e.name===t.name);if(n){if("enum"===n.type.kind&&"enum"===t.type.kind)for(const e of n.type.enums)t.type.enums.every(n=>n!==e)&&t.type.enums.push(e)}else t.optional=!0}for(const t of e)if(n.every(e=>e.name!==t.name)){const e=JSON.parse(JSON.stringify(t));e.optional=!0,n.push(e)}}}}else if(e.kind===i.default.SyntaxKind.IntersectionType){const i=e;for(const e of i.types){const i=this.getMembersInfo(e);t+=i.minProperties,r+=i.maxProperties;const m=i.members;for(const e of m)n.every(n=>n.name!==e.name)&&n.push(JSON.parse(JSON.stringify(e)))}}else if(e.kind===i.default.SyntaxKind.ParenthesizedType){const i=e,m=this.getMembersInfo(i.type);t=m.minProperties,r=m.maxProperties;const o=JSON.parse(JSON.stringify(m.members));for(const e of o)n.push(e)}else if(e.kind===i.default.SyntaxKind.TypeReference){const i=e.typeName.text;this.preHandleType(i);const m=this.models.find(e=>"object"===e.kind&&e.name===i);if(m&&"object"===m.kind)for(const e of m.members)n.every(n=>n.name!==e.name)&&(n.push(JSON.parse(JSON.stringify(e))),r++,e.optional||t++)}return{members:n,minProperties:t,maxProperties:r}}preHandleType(e){if(this.models.some(n=>n.name===e))return;let n=!1;i.default.forEachChild(this.sourceFile,t=>{n||(t.kind===i.default.SyntaxKind.InterfaceDeclaration?t.name.text===e&&(n=!0,this.handleSourceFile(t)):t.kind===i.default.SyntaxKind.TypeAliasDeclaration&&t.name.text===e&&(n=!0,this.handleSourceFile(t)))})}getObjectMembers(e){const n=[];let t,r=0,m=0;for(const o of e)if(o.kind===i.default.SyntaxKind.PropertySignature){const e=o,t={name:e.name.text,type:{kind:void 0}};n.push(t),e.questionToken?t.optional=!0:r++,m++,e.type&&(t.type=this.getType(e.type));const i=this.getJsDocs(e);for(const e of i)"tag"===e.name?e.comment&&(t.tag=+e.comment):"mapValueType"===e.name?e.comment&&"map"===t.type.kind&&"number"===t.type.value.kind&&(t.type.value.type=e.comment):"type"===e.name?this.overrideType(t.type,e):"param"===e.name?(e.paramName&&e.type&&(t.parameters||(t.parameters=[]),t.parameters.push({name:e.paramName,type:e.type,optional:e.optional})),this.overrideType(t.type,e)):"array"===t.type.kind?this.setJsonSchemaArray(e,t.type):"number"===t.type.kind?e.comment&&("multipleOf"===e.name?t.type.multipleOf=+e.comment:"maximum"===e.name?t.type.maximum=+e.comment:"minimum"===e.name?t.type.minimum=+e.comment:"exclusiveMaximum"===e.name?t.type.exclusiveMaximum=+e.comment:"exclusiveMinimum"===e.name?t.type.exclusiveMinimum=+e.comment:"default"===e.name&&(t.type.default=+e.comment)):"string"===t.type.kind?e.comment&&("minLength"===e.name?t.type.minLength=+e.comment:"maxLength"===e.name?t.type.maxLength=+e.comment:"pattern"===e.name?t.type.pattern=e.comment:"default"===e.name&&(t.type.default=e.comment)):"boolean"===t.type.kind?e.comment&&"default"===e.name&&(t.type.default="true"===e.comment.toLowerCase()):"object"===t.type.kind&&this.setJsonSchemaObject(e,t.type)}else if(o.kind===i.default.SyntaxKind.IndexSignature){const e=o;e.type&&(t=this.getType(e.type))}return{members:n,minProperties:r,maxProperties:m,additionalProperties:t}}overrideType(e,n){n&&n.comment&&("number"===e.kind?e.type=n.comment:"array"===e.kind&&"number"===e.type.kind&&(e.type={kind:e.type.kind,type:n.comment}))}setJsonSchemaArray(e,n){e.comment?"minItems"===e.name?n.minItems=+e.comment:"maxItems"===e.name?n.maxItems=+e.comment:"itemType"===e.name?this.overrideType(n,e):"number"===n.type.kind?"itemMultipleOf"===e.name?n.type.multipleOf=+e.comment:"itemMinimum"===e.name?n.type.minimum=+e.comment:"itemMaximum"===e.name?n.type.maximum=+e.comment:"itemExclusiveMinimum"===e.name?n.type.exclusiveMinimum=+e.comment:"itemExclusiveMaximum"===e.name?n.type.exclusiveMaximum=+e.comment:"itemDefault"===e.name&&(n.type.default=+e.comment):"string"===n.type.kind?"itemMinLength"===e.name?n.type.minLength=+e.comment:"itemMaxLength"===e.name?n.type.maxLength=+e.comment:"itemPattern"===e.name?n.type.pattern=e.comment:"itemDefault"===e.name&&(n.type.default=e.comment):"boolean"===n.type.kind&&"itemDefault"===e.name&&(n.type.default="true"===e.comment.toLowerCase()):"uniqueItems"===e.name&&(n.uniqueItems=!0)}setJsonSchemaObject(e,n){e.comment?"minProperties"===e.name?n.minProperties=+e.comment:"maxProperties"===e.name&&(n.maxProperties=+e.comment):"additionalProperties"===e.name&&(n.additionalProperties=!0)}};const r=["double","float","uint32","fixed32","integer","int32","sint32","sfixed32","uint64","fixed64","int64","sint64","sfixed64"]}});