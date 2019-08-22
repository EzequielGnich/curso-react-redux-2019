import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCyclesActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className="box-body">
          <div className="box-body">
            <Field
              name='name'
              component={labelAndInput}
              label='Nome'
              cols='12 4'
              placeholder='Informe o nome'
              readOnly={readOnly} />
            <Field
              name='month'
              component={labelAndInput}
              type='number'
              label='Mês'
              cols='12 4'
              placeholder='Informe o mês'
              readOnly={readOnly} />
            <Field
              name='year'
              component={labelAndInput}
              type='number'
              label='Ano'
              cols='12 4'
              placeholder='Informe o ano'
              readOnly={readOnly} />
              <ItemList
                list={credits}
                cols='12 6'
                readOnly={readOnly}
                field='credits'
                legend='Créditos' />
              <ItemList
                list={debts}
                cols='12 6'
                readOnly={readOnly}
                field='debts'
                legend='Débitos'
                showStatus={true} />
          </div>
        </div>
        <div className="box-footer">
          <button
            type='submit'
            className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type='button'
            className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
