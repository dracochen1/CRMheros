<template>
     <transition name="modal1">
        <div class="modal-mask1">
          <div class="modal-wrapper1">
            <div class="modal-container1">

              <div class="modal-header1">
               <h3>
                  Déclarer une mission
               </h3>
              </div>

              <div class="modal-body1">
                <slot name="body1">
                  <form action="">
                    <label for="super-heros">Attribuer un super héros</label><br>
                    <select name="" id="super-heros">
                      <option value="">1</option>
                    </select><br>
                    <label for="super-vilain">Attribuer un super-vilain</label><br>
                    <select name="" id="super-vilain">

                    </select>
                  </form>
                </slot>
              </div>

              <div class="modal-footer1">
                <slot name="footer1">
                  <button class="modal-default-button1 left1" @click="closeModalAndPostMission">
                      Declancher la missions
                  </button>
                  <button class="modal-default-button1 right1" @click="closeModal">
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
            document.querySelector(".modal-mask1").style.display = "none";
        },
        closeModalAndPostMission : function(){

            document.querySelector(".modal-mask1").style.display = "none";
            
        }

    },
})
</script>
<style scoped>
.modal-mask1 {
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

.modal-wrapper1 {
  display: table-cell;
  vertical-align: middle;
}
label{
  color: black;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 200px;
  margin: auto;
}
.modal-container1 {
  width: 600px;
  margin: 0px auto;
  height: auto;
  padding-bottom: 10px;
  background-color: white;
  color: white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header1{
    background-color: #e74c3c;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-header1 h3 {
    font-size: 1em;
}

.modal-body1 {
  margin: 20px 0;
}

.modal-enter1 {
  opacity: 0;
}

.modal-leave-active1 {
  opacity: 0;
}

.modal-enter1 .modal-container1,
.modal-leave-active1 .modal-container1 {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-default-button1.left1{
    background-color: #e74c3c;
    border: none;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    border: 2px solid #e74c3c;

}
.modal-default-button1.right1{
    border: none;
    padding: 10px 30px;
    color: black;
    background-color: #bdc3c7;
    border: 2px solid #bdc3c7;
    cursor: pointer;
}
.modal-default-button1.right1:hover{
    background-color: white;
    transition: 300ms;
}
.modal-default-button1.left1:hover{
    background-color: white;
    color: #e74c3c;
    transition: 300ms;
}
.modal-footer1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
