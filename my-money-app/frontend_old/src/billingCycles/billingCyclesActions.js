import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";

import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return dispatch => {
    // Variavel responsavel por armazenar o id do usuario id vem do values._id
    // criado no mongodb feita a verificação se existe um valor para id senão
    // adiciona uma string vazia deixando a URL da mesma forma
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
    return {
      type: "TEMP"
    };
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle)
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle)
  ];
}

/* Reutilizar este código
export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}
*/
export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES)
  ];
}
