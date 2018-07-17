<template>
  <div class="control-section default-sample">
    <div class="col-lg-8">
        <label> Dialog Dynamic Rendering </label>
        <div class="control_wrapper" ref="container">
        <button @click="onClick">Render Dialog</button>
        </div>
    </div>
</div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
.default-sample .control_wrapper {
    max-width: 410px;
    margin-top: 8%;
    min-width: 245px;
    margin-left: 52%;
}
#defaultfileupload .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}
#dlgbtn2{
        margin-top: 15px;
        margin-left: 35%;
    }
	#defaultDialog {
	    left:23%;
	}
    .control-section {
        height: 100%;
        min-height: 600px;
    }
    .e-btn-hide {
	    display: none;
	}
    #dlgbtn {
        margin-top: 15px;
    }
    #target {
        height: 100%;
        min-height: 350px;
    }
    @media screen and (min-width: 150px) and (max-width: 480px) {
        .control-section {
            margin-bottom: 30px;
        }
        .control-wrapper {
            margin-bottom: 0px;
        }
    }
</style>
<script>
import Vue from "vue";
import Dialog from './newComponent'
	export default {
    name: 'dynamic-rendering',
    components: { Dialog },
    methods: {
      onClick() {
        var ComponentClass = Vue.extend(Dialog)
        var instance = new ComponentClass;
        instance.$mount() // pass nothing
      }
    }
  }
</script>