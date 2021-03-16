<template>
     <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
               <h3>
                  Une incident a été déclaré 
               </h3> 
              </div>

              <div class="modal-body">
                <slot name="body">
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button left" @click="closeModalAndRedirect()">
                      Regarder
                  </button>
                  <button class="modal-default-button right" @click="closeModal">
                      Fermer
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    methods:{
        closeModal : function (){
            document.querySelector(".modal-mask").style.display = "none";
        },
        closeModalAndRedirect : function(){
             
            document.querySelector(".modal-mask").style.display = "none";
            document.location.href="/admin/incident";
        }

    },
})
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  height: 130px;
  background-color: white;
  color: white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header{
    background-color: #e74c3c;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-header h3 {
    font-size: 1em;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-default-button.left{
    background-color: #e74c3c;
    border: none;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    border: 2px solid #e74c3c;

}
.modal-default-button.right{
    border: none;
    padding: 10px 30px;
    color: black;
    background-color: #bdc3c7;
    border: 2px solid #bdc3c7;
    cursor: pointer;
}
.modal-default-button.right:hover{
    background-color: white;
    transition: 300ms;
}
.modal-default-button.left:hover{
    background-color: white;
    color: #e74c3c;
    transition: 300ms;
}
.modal-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>