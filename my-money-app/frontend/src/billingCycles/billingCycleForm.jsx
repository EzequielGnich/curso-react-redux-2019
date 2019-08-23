import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCyclesActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      /* O mais(+) na frente do c(+c) da callback da função é para converter */
      /* qualquer valor string em valor numérico                      */
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
      /* this.props.credits ou this.props.debts vem em formato de array,                   */
      /* ao fazer o .map() eu estou transformando o array em um array de números(+d.value) */
      /* em seguida é feito o reduce para agregar todos os valores a partir da soma(sum)   */
      /* dos valores                                                                       */
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <div className="box-body">
            <Field
              name="name"
              component={labelAndInput}
              label="Nome"
              cols="12 4"
              placeholder="Informe o nome"
              readOnly={readOnly}
            />
            <Field
              name="month"
              component={labelAndInput}
              type="number"
              label="Mês"
              cols="12 4"
              placeholder="Informe o mês"
              readOnly={readOnly}
            />
            <Field
              name="year"
              component={labelAndInput}
              type="number"
              label="Ano"
              cols="12 4"
              placeholder="Informe o ano"
              readOnly={readOnly}
            />
            <Summary credit={sumOfCredits} debt={sumOfDebts} />
            <ItemList
              list={credits}
              cols="12 6"
              readOnly={readOnly}
              field="credits"
              legend="Créditos"
            />
            <ItemList
              list={debts}
              cols="12 6"
              readOnly={readOnly}
              field="debts"
              legend="Débitos"
              showStatus={true}
            />
          </div>
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);
const selector = formValueSelector("billingCycleForm");

const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
