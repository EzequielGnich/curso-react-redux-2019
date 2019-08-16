import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import BillingCycleList from './billingCyclesList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

  componentWillMount() {
    this.props.showTabs('tabList', 'tabCreate')
    this.props.selectTab('tabList')
  }


  render() {
    return (
      <div>
        <ContentHeader title='Ciclo de pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form />
              </TabContent>
              <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
              <TabContent id='tabDelete'><h1>Deletar</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({selectTab, showTabs}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle)
