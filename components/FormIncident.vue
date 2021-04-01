<template>
     <transition name="modal2">
        <div class="modal-mask2">
          <div class="modal-wrapper2">
            <div class="modal-container2">

              <div class="modal-header2">
               <h3>
                  Declarer une mission
               </h3>
              </div>

              <div class="modal-body2">
                <slot name="body2">
                    <div>
                      <label for="level_secur">Niveau de sécurité</label>
                    <select name="" id="level_secur">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>

                    <div>
                      <label for="level_emergency">Niveau d'urgence</label>
                     <select name="" id="level_emergency">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </div>

                    <div>
                      <label for="status">Statut de la mission</label><br>
                    <input type="text" name="" id="status">
                    </div>

                   <div>
                      <label for="number_civil">Nombre de civils touchés</label><br>
                    <input type="number" name="" id="number_civil">

                   </div>
                    <div>
                      <label for="super">Choisir un super-heros adapté</label><br>
                      <select name="" id="super">
                        <option>Veuillez selectionner</option>
                        <option v-for="superVal in supers" :key="superVal.id" :value="superVal.id">{{superVal.name}}</option>
                      </select>
                    </div>
                    <button @click="postMission">Declancher la mission</button>
                </slot>
              </div>

              <div class="modal-footer2">
                <slot name="footer2">
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
export default Vue.extend({
    created(){
      var url = window.location.href;
      var uuid = url.split("/");
      return this.uuid = uuid[5];
    },
    data: function () {
      return {
          uuid : "",
          supers : [],
          incident : "",
        }
    },
    mounted(){
        axios.get('http://localhost:8080/supers/',)
                  .then((response) => {
                      return this.supers = response.data;
                  });
    },
    methods:{
      postMission : function(){
        axios.get('http://localhost:8080/incidents/' + this.uuid)
                  .then((response) => {
                      return this.incident = response.data;
                  })
        setTimeout(this.postMission2, 2000);
        
      },
      postMission2 : function(){
        let titre = "Mission delcaré à partir de l'incident #" + this.uuid;
        let nature = this.incident.description;
        let road = this.incident.location;
        let severitylevel = document.querySelector("#level_secur").value;
        let emergencylevel = document.querySelector("#level_emergency").value;
        let status = document.querySelector("#status").value;
        let numbercivils = document.querySelector("#number_civil").value;
        let startdate = Date.now();
        let inc = this.incident.id;
        let supervalue = document.querySelector("#super").value;
        axios.post("http://localhost:8080/missions/", {
          "titre" : titre,
          "nature" : nature,
          "road" : road,
          "severitylevel" : severitylevel,
          "emergencylevel" : emergencylevel,
          "status" : status,
          "nombercivils" : numbercivils,
          "startdate" : "'" + startdate + "'",
          "incident" : inc,
          "supers" : [supervalue],
        })
        .then((response) => {
            console.log(response);
        });
        axios.patch('http://localhost:8080/incidents/' + this.incident.id, {
            "type": this.incident.type,
            "description": this.incident.description,
            "location" : this.incident.location,
            "source" : this.incident.source,
            "alert" : false,
            "status" : false
        })
        .then((response) => {
            document.location.href = `/admin/incidents/${this.incident.id}`

        }, (error) => {

        });
      }
    }
})
</script>
<style scoped>
.modal-body2{
  color: black;
}
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
.modal-body2{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal-body2 div{
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
}
.modal-body2 button{
  width: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  text-align: center;
  background-color: #3498db;
  color: white;
  border: 2px solid #3498db;
}
.modal-body2 button:hover{
  background-color: white;
  color: #3498db;
  transition: 300ms;
}
.modal-wrapper2 {
  display: table-cell;
  vertical-align: middle;
}

.modal-container2 {
  width: 400px;
  height: 700px;
  margin: 0px auto;
  height: auto;
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
