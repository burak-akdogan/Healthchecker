(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-profile"],{fb5e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Cover",{staticClass:"border-bottom",attrs:{username:t.account.username,meta:t.account.meta,editable:!0},on:{cover:t.setCover,avatar:t.setAvatar}}),r("form",{staticClass:"p-4",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("dl",{staticClass:"form-group"},[t._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control input-lg input-block",attrs:{id:"name",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),r("dl",{staticClass:"form-group"},[t._m(1),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.about,expression:"form.about"}],staticClass:"form-control input-lg input-block",attrs:{id:"about"},domProps:{value:t.form.about},on:{input:function(e){e.target.composing||t.$set(t.form,"about",e.target.value)}}})]),t.error?r("dl",{staticClass:"flash flash-error",domProps:{textContent:t._s(t.error)}}):t._e(),r("div",{staticClass:"form-actions pt-4"},[r("button",{staticClass:"btn-mktg",attrs:{type:"submit",disabled:t.isLoading}},[t._v(" Save ")])])])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dt",[r("label",{attrs:{for:"name"}},[t._v("Name")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dt",[r("label",{attrs:{for:"about"}},[t._v("Bio")])])}],s=(r("96cf"),r("1da1")),n=r("7dfd"),i={data:function(){return{error:!1,form:{},isLoading:!1,account:this.$store.state.settings.account}},mounted:function(){this.form=JSON.parse(JSON.stringify(this.account.meta))},methods:{handleSubmit:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,n["a"].request("edit_profile",this.form);case 4:return t.next=6,this.$store.dispatch("getProfile",this.account.username);case 6:this.$store.dispatch("notify","You've successfully updated your profile"),this.$router.push("/".concat(this.account.username)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),this.error=t.t0;case 13:this.isLoading=!1;case 14:case"end":return t.stop()}}),t,this,[[1,10]])})));function e(){return t.apply(this,arguments)}return e}(),setCover:function(t){this.form.cover=t},setAvatar:function(t){this.form.avatar=t}}},u=i,c=r("2877"),m=Object(c["a"])(u,a,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=edit-profile.a5c0ef9d.js.map