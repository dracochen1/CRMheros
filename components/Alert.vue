<template>
     <transition name="modal2">
        <div class="modal-mask2">
          <div class="modal-wrapper2">
            <div class="modal-container2">

              <div class="modal-header2">
               <h3>
                  Une incident a été déclaré
               </h3>
              </div>

              <div class="modal-body2">
                <slot name="body2">
                </slot>
              </div>

              <div class="modal-footer2">
                <slot name="footer2">
                  <button class="modal-default-button2 left2" @click="closeModalAndRedirect()">
                      Regarder
                  </button>
                  <button class="modal-default-button2 right2" @click="closeModal">
                      Fermer
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    methods:{
        closeModal : function (){
            document.querySelector(".modal-mask2").style.display = "none";
        },
        closeModalAndRedirect : function(){

            document.querySelector(".modal-mask2").style.display = "none";
            document.location.href="/admin/incident";
        }

    },
})
</script>
<style scoped>
.modal-mask2 {
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

.modal-wrapper2 {
  display: table-cell;
  vertical-align: middle;
}

.modal-container2 {
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
.modal-header2{
    background-color: #e74c3c;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-header2 h3 {
    font-size: 1em;
}

.modal-body2 {
  margin: 20px 0;
}

.modal-enter2 {
  opacity: 0;
}

.modal-leave-active2 {
  opacity: 0;
}

.modal-enter2 .modal-container2,
.modal-leave-active2 .modal-container2 {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-default-button2.left2{
    background-color: #e74c3c;
    border: none;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    border: 2px solid #e74c3c;

}
.modal-default-button2.right2{
    border: none;
    padding: 10px 30px;
    color: black;
    background-color: #bdc3c7;
    border: 2px solid #bdc3c7;
    cursor: pointer;
}
.modal-default-button2.right2:hover{
    background-color: white;
    transition: 300ms;
}
.modal-default-button2.left2:hover{
    background-color: white;
    color: #e74c3c;
    transition: 300ms;
}
.modal-footer2{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
