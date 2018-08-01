<template>
  <div class="wrap" onselectstart="return false">
        
    <!--搜索栏-->
    <Form class="from" :label-width= '100' label-position='left' ref= "paramterManager" 
    :model= "paramterManager" :rules= 'RuleValidate' inline>
    <Row>
        <Form-item label='参数名称:' prop='paramterName'>
            <Input type="text" v-model= "paramterManager.paramterName" style="width:180px"/>
        </Form-item>
        <Form-item label='启用状态:'>
        <Select name="" id="" v-model= "paramterManager.status">
            <Option value="0">未启用</option>
            <Option value="1">已启用</option>
        </Select>
        </Form-item>
        <Button type= 'primary' icon= 'search' @click= "paramterManager.visible = false;queryListOne(1)">查询</Button>
        <Button type= 'primary' icon= 'android-sync' @click= 'resetData'>重置</Button>
    </Row>
    </Form>

    <!--操作按钮栏 -->
    <div>
        <Button type= 'primary' icon= 'android-add-circle' @click= 'openAddDialog'>新增参数</Button>
        <Button type= 'primary' icon= 'android-sync' @click= 'openUpdateDialog'>修改参数</Button>
        <Button type= 'primary' icon= 'android-delete-circle' @click= 'deleteParameter'>删除参数</Button>
    </div>

    <!-- 主列表 -->
    <Table class= 'table' highlight-row  border size= 'small' width="982"
        :columns= 'columns'
        :data= 'parameterData'
        @on-row-click= "handleRowClick">
    </Table>

    <!-- 主列表分页工具条-->
    <Page class= 'pager'
            :total= 'ParameterManagerTotal'
            :current= 'paramterManager.pageNo'
            :page-size= 'paramterManager.pageSize'
            show-total
            @on-change="queryListOne($event)"
            inline>
            <Button type="primary" @click='queryListOne(1)'>刷新</Button>
    </Page>

    <!-- 主列表=>新增参数弹窗-->
    <Modal :title= 'ParameterAddModal.title' v-model= 'ParameterAddModal.visible' @on-cancel= "modal= false"  width=600>
       <div>
         <Form ref= "parameterAdd" :model= "parameterAdd" :rules= 'ParameterRuleValidate' :label-width='100' lable-position="rigth" :inline= "true">
           <Row>
             <Col span='12'>
             <Form-item label='参数编号:' prop='paramterId'>
               <Input type="text" v-model= "parameterAdd.paramterName"/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='参数名称:' prop='paramterName'>
               <Input type="text" v-model= "parameterAdd.paramterName"/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='启用状态:'>
               <Select name="" id="" v-model= "parameterAdd.status" style="width:162px">
                  <Option value="0">未启用</option>
                  <Option value="1">已启用</option>
              </Select>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='参数描述:' prop='parameterDesc'>
               <Input type="text" v-model= "parameterAdd.parameterDesc"/>
             </Form-item>
             </Col>
           </Row>
         </Form>
       </div>
       <div slot="footer">
         <Button type="ghost" @click= "ParameterAddModal.visible = false; handleReset('parameterAdd')">取消</Button>
         <Button type="primary" @click= "addParameter">保存</Button>
       </div>
    </Modal>

    <!-- 主列表=>修改参数弹窗-->
    <Modal :title= 'ParameterUpdateModal.title' v-model= 'ParameterUpdateModal.visible' @on-cancel= "modal= false"  width=600>
       <div>
         <Form ref= "parameterUpdate" :model= "parameterUpdate" :rules= 'ParameterRuleValidate' :label-width='100' lable-position="rigth" :inline= "true">
           <Row>
             <Col span='12'>
             <Form-item label='参数编号:' prop='paramterId'>
               <Input type="text" v-model= "parameterUpdate.paramterName" disabled/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='参数名称:' prop='paramterName'>
               <Input type="text" v-model= "parameterUpdate.paramterName"/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='启用状态:'>
               <Select name="" id="" v-model= "parameterUpdate.status" style="width:162px">
                  <Option value="0">未启用</option>
                  <Option value="1">已启用</option>
              </Select>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='参数描述:' prop='parameterDesc'>
               <Input type="text" v-model= "parameterUpdate.parameterDesc"/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='创建人:' prop='createOper'>
               <Input type="text" v-model= "parameterUpdate.createOper" disabled/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='创建时间:' prop='createTime'>
               <Input type="text" v-model= "parameterUpdate.createTime" disabled/>
             </Form-item>
             </Col>
              <Col span='12'>
             <Form-item label='更新人:' prop='updateOper'>
               <Input type="text" v-model= "parameterUpdate.updateOper" disabled/>
             </Form-item>
             </Col>
             <Col span='12'>
             <Form-item label='更新时间:' prop='updateTime'>
               <Input type="text" v-model= "parameterUpdate.updateTime" disabled/>
             </Form-item>
             </Col>
           </Row>
         </Form>
       </div>
       <div slot="footer">
         <Button type="ghost" @click= "ParameterUpdateModal.visible = false; handleReset('parameterUpdate')">取消</Button>
         <Button type="primary" @click= "updateParameter">保存</Button>
       </div>
    </Modal>
  </div>
</template>

<script>
import cChunk from '../../common/cChunk'
export default {
  name: 'parameter',
  components: {
      cChunk
  },
  data () {
    const validataParameterType = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请填写参数名称'))
      }
      callback();
    };
    return {
        right: {
          rAuth: false,
          rDelete: true,
          rList: false,
          rModify: false,
          rRead: false,
          rWrite: false
        },
        RuleValidate: { // 默认校验规则
          paramterName: [{min: 1, trigger: 'blur', message: '至少输入一个字符'},
                        {max: 20, trigger: 'blur', message: '最多可输入20个字符'}]
        },
        ParameterRuleValidate: { // 参数信息校验规则
          paramterName: [{required: true, validator:validataParameterType, trigger: 'blur', message: '请输入参数名称'},
            {required: true, min: 1, trigger: 'blur', message: '至少输入一个字符'}]
        },
        pager: {
          total: 300,
          current: 1,
          size: 10
        },
        paramterManager: {
          paramterName: '',
          status: '0',
          pageNo: 1,
          pageSize: 10
        },
        ParameterManagerTotal: 0,
        columns: [
          {title: '参数编号', width: 100, key: 'parameterId'},
          {title: '参数名称', width: 100, key: 'parameterName'},
          {title: '启用状态', width: 100, key: 'status', render: (h,param) => h('span', this.curStatus[param.row.status])},
          {title: '参数描述', width: 180, key: 'parameterDesc'},
          {title: '创建人员', width: 100, key: 'createOper'},
          {title: '创建时间', width: 150, key: 'createTime'},
          {title: '修改人员', width: 100, key: 'updateOper'},
          {title: '修改时间', width: 150, key: 'updateTime'}
        ],
        curStatus: {'1': '已启用', '0': '未启用'},
        parameterData: [],
        rowDataId: '',
        ParameterAddModal: {
          title: '新增参数',
          visible: false,
          type: 'a' // a->新增 u->修改 v->查询
        },
        parameterAdd: {},
        ParameterUpdateModal: {
          title: '修改参数',
          visible: false,
          type: 'u' // a->新增 u->修改 v->查询
        },
        parameterUpdate: {},
        currentData: []
    }
  },
  created () {
      this.queryListOne(); // 初始化页面调用
  },
  mounted () {},
  methods: {
    // 重置按钮
    resetData () {
      this.paramterManager.paramterName = ''
      this.paramterManager.status = '0'
      this.paramterManager.pageNo = 1
    },
    // 取消按钮
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    // 选择一行数据后，加载对应的参数信息
    handleRowClick (data) {
      let paramId = data.parameterId;
      this.rowDataId =paramId;
      this.currentData = data;
    },
    // 新增参数按钮弹框
    openAddDialog () {
      this.handleReset('parameterAdd')
      this.parameterAdd.parameterId = null
      this.parameterAdd.paramterName = null
      this.parameterAdd.status = null
      this.parameterAdd.parameterDesc = null
      this.ParameterAddModal = {
        visible: true,
        title: '新增参数',
        type: 'a'
      }
    },
    // 新增参数，点击保存按钮触发
    addParameter () {
      this.$refs['parameterAdd'].validate((valid) => {
        if (valid) {
          this.$http.post(this.$api.PARAM_ADD, this.parameterAdd, _data =>{
            if (_data.resultCode === '000000') {
              this.ParameterAddModal.visible = false
              this.$Message.success('新增成功')
              setTimeout(() => {
                this.queryListOne()
              },0);
            } else {
              this.$Message.error('新增失败')
              this.ParameterAddModal.visible = false
            }
          })
        } else {
          this.$Message.error('请填写完整信息');
        }
      });
    },
    // 修改参数按钮弹框
    openUpdateDialog () {
      this.handleReset('parameterUpdate')
      let rowData = this.currentData;
      let paramId = this.rowDataId;
      console.log('选中的行值：' + paramId);
      if (paramId === '' || paramId === undefined) {
        this.$Message.info('请选择你要修改的参数值');
        return
      }
      this.parameterUpdate = {
        parameterId: rowData.parameterId,
        parameterName: rowData.parameterName,
        status: rowData.status,
        parameterDesc: rowData.parameterDesc,
        createOper: rowData.createOper,
        createTime: rowData.createTime,
        updateOper: rowData.updateOper,
        updateTime: rowData.updateTime
      }
      this.ParameterUpdateModal = {
        visible: true,
        title: '修改参数',
        type: 'u'
      }
    },
    // 修改参数,点击保存按钮触发
    updateParameter (){
      this.$refs['parameterUpdate'].validate((valid) => {
        if (valid) {
          this.$http.post(this.$api.PARAM_UPDATE, this.parameterUpdate, _data => {
            if (_data.resultCode === '000000') {
              this.ParameterUpdateModal.visible = false
              this.$Message.success('修改成功')
              setTimeout(() => {
                this.queryListOne()
              },0);
            } else {
              this.$Message.error('修改失败')
              this.ParameterUpdateModal.visible = false
            }
          })
        } else {
          this.$Message.error('请填写完整信息');
        }
      });
    },
    // 删除参数
    deleteParameter () {
      let paramId = this.rowDataId;
      if (paramId === '' || paramId === undefined) {
        this.$Message.info('请选择你要删除的参数值');
        return
      }
      let status = this.currentData.status;
      this.$Modal.confirm({
        title: '删除参数',
        content: '确认要删除"' + paramid + '"这个参数吗？',
        onOk: () => {
          if (status === '0') {
            this.$http.post(this.$api.PARAM_DELETE, {parameterId: this.rowDataId}, _data => {
              if (_data.resultCode === '000000') {
                this.$Message.success('成功')
                setTimeout(() => {
                  this.queryListOne()
                },0);
              } else {
                this.$Message.error('删除失败');
              }
            })
          }
        }
      })
    },
    // 查询参数列表
    queryListOne (page) {
      this.paramterManager.pageNo = page;
      this.rowDataId = '' // 每次刷新时清除缓存值
      this.$http.get('static/json/param.json').then((_data) => {
      console.log(JSON.parse(_data.bodyText));
      var test = JSON.parse(_data.bodyText);
      console.log(test);
      this.parameterData = test.list
      this.ParameterManagerTotal = _data.data.total;
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  div.wrap {
    padding: 0 20px;
    div.table {
      margin: 20px 0
    }
    .pager {
      margin-bottom: 20px;
      -moz-user-select: none;
    }
  }
</style>