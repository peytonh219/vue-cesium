(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"8e2I":function(s,a,t){"use strict";t.r(a);var e=t("FzzC"),r=t.n(e);for(var n in e)"default"!==n&&function(s){t.d(a,s,function(){return e[s]})}(n);var l=t("Si+6"),v=t("JFUb"),_=Object(v.a)(r.a,l.a,l.b,!1,null,null,null);a.default=_.exports},AJMo:function(s,a,t){s.exports=t("8e2I")},FzzC:function(s,a,t){var e,r,n;r=[a],void 0===(n="function"==typeof(e=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{appearance:null,attributes:null,geometry:null,modelMatrix:null,dimensions:{x:4e5,y:3e5,z:5e5}}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance,t=a.Cesium;a.viewer,this.attributes={color:t.ColorGeometryInstanceAttribute.fromColor(t.Color.RED.withAlpha(.5))},this.appearance=new t.PerInstanceColorAppearance({closed:!0,translucent:!0}),this.modelMatrix=t.Matrix4.multiplyByTranslation(t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(105,40)),new t.Cartesian3(0,0,25e4),new t.Matrix4)}}},s.exports=a.default})?e.apply(a,r):e)||(s.exports=n)},"Si+6":function(s,a,t){"use strict";t.d(a,"a",function(){return e}),t.d(a,"b",function(){return r});var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("BoxGeometry")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("add BoxGeometry to viewer")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{on:{ready:s.ready}},[t("cesium-terrain-provider"),s._v(" "),t("primitive",{attrs:{appearance:s.appearance}},[t("geometry-instance",{attrs:{geometry:s.geometry,attributes:s.attributes,modelMatrix:s.modelMatrix},on:{"update:geometry":function(a){s.geometry=a}}},[t("box-geometry",{attrs:{dimensions:s.dimensions}})],1)],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("box-geometry")]),this._v(" Describes a cube centered at the origin.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-terrain-provider")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-terrain-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("primitive")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("geometry-instance")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("box-geometry")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("box-geometry")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("geometry-instance")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("primitive")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions")]),s._v(": {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v("}\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(" : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha("),t("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v("))\n        }\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PerInstanceColorAppearance({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("closed")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("translucent")]),s._v(" : "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),t("span",{attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(")),\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("250000")]),s._v("), "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4())\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("Reference official document  "),a("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/BoxGeometry.html"}},[this._v("BoxGeometry")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])])])])}]}}]);