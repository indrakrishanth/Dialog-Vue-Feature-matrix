<template>
  <div>
      <label style="margin-top: 60px;"> Dialog rendering </label>
    <div class="control-section">
        
        <!-- Render Button to open the Dialog -->
        <button ejs-button id='dlgbtn' v-on:click="BtnClick" class="e-btn close-btn">Open</button>

        <ejs-dialog :buttons='dlgButtons' ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='content' :showCloseIcon='true' :target='target' width='330px'>
        </ejs-dialog>
    </div>
  </div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
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
export default Vue.extend({
     name: 'dialog',
    data: function() {
        return {
            target: '.control-section',
            header: 'Dialog Testing',
            content: '<p> This is a default dialog rendering </p>',
            animationSettings: { effect: 'None' },
            dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'OK' } }, {click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'CANCEL' } }]
        }
    },
    methods: {
        BtnClick : function() {
            this.$refs.dialogObj.show();
        },
        dlgBtnClick: function() {
            this.$refs.dialogObj.hide();
        },
    }
});
</script>