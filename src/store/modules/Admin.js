import Axios from "axios";
import { get, add, update} from "../../api/User";


const URL = "http://5d0c436d9ab9d80014c25e56.mockapi.io/";

const state = {

  desserts: [],
  roles: ["Admin", "Supper Amin", "Customer"],
  itemDelete: null
};
const getters = {
  getRole: state => state.roles,
  getFormTitle: state => {
    return state.editedIndex === -1 ? "New User" : "Edit User";
  },
  getDesserts: state => {
    return state.desserts;
  },
  getEditedIndex: state => {
    return state.editedIndex;
  },
};
const mutations = {
  default(state) {
    state.editedItem = Object.assign({}, state.defaultItem);
    state.editedIndex = -1;
  },
  initialize(state, data) {
    state.desserts = data;
  },
  saveData(state, data) {
    state.desserts.push(data);
  },
  editData(state,item) {
    Object.assign(state.desserts[item.index], item.user);
  },
  deleteItem(state, item) {
    state.itemDelete = item;
  },
  deleteItems(state) {
    const index = state.desserts.indexOf(state.itemDelete);
    // c1  state.desserts.splice(index, 1);
    state.desserts = state.desserts.filter((v, k) => k !== index);
  }
};
const actions = {
  async getUsers({ commit }) {
    const results = await get(`${URL}users`);
    commit("initialize", results);
  },
  saveData: async ({ commit }, data) => {
    const user = await add(`${URL}users`,data);
    commit("saveData", user);
  },
  editData: async ({ commit }, items) => {
    console.log("item",items)
    const editUser = await update(`${URL}users/${items.item.id}`, items)
    commit("editData", {user:editUser, index:items.index})
  },
  deleteItem: ({ commit }, item) => {
    commit("deleteItem", item);
  },
  deleteItems: ({ commit }) => {
    commit("deleteItems");
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
