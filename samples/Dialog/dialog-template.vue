<template>
  <div>
      <label style="margin-top: 60px;">Dialog Template Support</label>
    <div class="control-section">
        
        <!-- Render Button to open the Dialog -->
        <button ejs-button id='dlgbtn' v-on:click="BtnClick" class="e-btn close-btn">Open</button>

        <ejs-dialog ref="dialogObj" :header='headerTemplate' :content='contentTemplate' :footerTemplate='footerTemplate' :animationSettings='animationSettings' :showCloseIcon='true' :target='target' width='330px' :open="dialogOpen" :close="dialogClose">
        </ejs-dialog>
    </div> 
  </div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
    
	#defaultDialog {
	    left:23%;
	}
    .control-section {
        height: 100%;
        min-height: 400px;
    }
    .e-btn-hide {
	    display: none;
	}
    #dlgbtn {
        margin-top: 40px;
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
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.use(DialogPlugin);

var footerTemplateVue = Vue.component("demo", {
    template: '<span><button id="dlgButton" class="e-control e-btn e-flat e-primary" data-ripple="true">Ok</button><button id="dlgButton2" class="e-control e-btn e-flat" data-ripple="true">Cancel</button></span>',
    data() {
        return {
            data: {}
        };
    }
});

var headerTemplateVue = Vue.component("demo1", {
    template: '<div>Dialog testing</div>',
    data() {
        return {
            data: {}
        };
    }
});

var contentTemplateVue = Vue.component("demo2", {
    template: '<p>This is a dialog with template support</p>',
    data() {
        return {
            data: {}
        };
    }
});
export default Vue.extend({
     name: 'dialog-template',
     data: function() {
        return {
            target: '.control-section',
            animationSettings: { effect: 'None' },
            footerTemplate: function (){
                return { template: footerTemplateVue }
            },
            headerTemplate: function (){
                return { template: headerTemplateVue }
            },
            contentTemplate: function (){
                return { template: contentTemplateVue }
            }
        }
    },
    methods: {
        BtnClick : function() {
            this.$refs.dialogObj.show();
        },
        dialogClose: function() {
            document.getElementById('dlgbtn').style.display = '';
        },
        dialogOpen: function() {
            document.getElementById('dlgbtn').style.display = 'none';
            document.getElementById('dlgButton').onclick = () => {
                this.$refs.dialogObj.hide();
            };
            document.getElementById('dlgButton2').onclick = () => {
                this.$refs.dialogObj.hide();
            };
        },
    }
});
</script>