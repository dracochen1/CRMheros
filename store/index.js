import axios from "axios";

export const CIVIL_LOGIN = 'CIVIL_LOGIN';
export const SET_CIVIL = 'SET_CIVIL';


export default {
  state: () => ({
    loginSuccess: false,
    civilId: null,
    civilRole: null,
  }),


  mutations: {
    [SET_CIVIL]: (state, civil) => {
      state.loginSuccess = true;
      state.civilId = civil.id;
      state.civilRole = civil.role; // ici doit apparaître le champ fk_role de la table civil
    },
  },

  actions: {
    [CIVIL_LOGIN]({commit}, {id}) {
      axios.get('http://localhost:8080/auth/login/' + id)
        .then(response => {
          console.log(response.data);
          commit(SET_CIVIL, response.data)
        })
        .catch(response => {
          throw response.statusText;
        })
    }
  },

  getters: {
    isLoggedIn: state => state.loginSuccess,
    getCivilId: state => state.civilId,
    getCivilRole: state => state.civilRole,
  }
}
