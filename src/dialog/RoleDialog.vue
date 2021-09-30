<template>
  <div>
    <el-dialog :title="dialog.title" :visible.sync="dialog.show"
      :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false">
      <el-form :model="form" ref="form" :rules="form_rules" label-width="120px" >
          <el-form-item prop='role_name' label="角色名稱">
            <el-input type="text" v-model="form.role_name"></el-input>
          </el-form-item>
          <el-form-item prop='role_desc' label="角色描述">
            <el-input type="text" v-model="form.role_desc"></el-input>
          </el-form-item>
          <el-form-item prop="function" label="系統功能">
            <el-checkbox v-for="item in form.function" :key="item.id" v-model="item.checked">
              {{ item.name }}
            </el-checkbox>
          </el-form-item>
          <el-form-item prop="role_privilege" label="角色權限">
            <el-checkbox v-for="item in form.role_privilege" :key="item.id" v-model="item.checked">
              {{ item.name }}
            </el-checkbox>
          </el-form-item>
        <el-form-item>
          <el-button @click="dialog.show = false">取消</el-button>
          <el-button type="primary" @click='onSubmit("form")'>送出</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { db } from '../firebase'
export default {
  inject: ['reload'],
  props: {
    dialog: Object,
    form: Object
  },
  data () {
    return {
      form_rules: {
        role_name: [{ required: true, message: '角色名稱不得為空！', trigger: 'blur' }],
        role_desc: [{ required: true, message: '角色描述不得為空！', trigger: 'blur' }],
        function: [{ required: true, message: '系統功能不得為空！', trigger: 'blur' }],
        role_privilege: [{ required: true, message: '角色權限不得為空！', trigger: 'blur' }]
      },
      selectedList: []
    }
  },
  methods: {
    onSubmit (form) {
      // this.$refs[form.validate]為驗證用語法
      this.$refs[form].validate(valid => {
        // valid為布林值，當表單有資料時為true，無資料時為false，當表單有資料時提交數據
        if (valid) {
          if (this.dialog.option === 'add') {
            db.database().ref('role').child(this.form.id).set({
              id: this.form.id,
              create_time: this.form.create_time,
              create_user: this.form.create_user,
              role_name: this.form.role_name,
              role_desc: this.form.role_desc,
              function: this.form.function,
              role_privilege: this.form.role_privilege
            })
          } else if (this.dialog.option === 'edit') {
            db.database().ref('role').child(this.form.id).update({
              role_name: this.form.role_name,
              role_desc: this.form.role_desc,
              function: this.form.function,
              role_privilege: this.form.role_privilege
            })
          }
          this.$message({
            message: '保存成功！',
            type: 'success'
          })
          this.dialog.show = false
          // 重整頁面
          this.reload()
        }
      })
    }
  }
}
</script>
<style>
.right_side{
  display: flex;
}
.allProduct{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border: 1px solid gray;
}
.selectedProduct{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border: 1px solid gray;
}
.draggable{
  width: 200px;
  height: 180px;
  overflow-y: scroll;
}
.item{
  margin: 5px;
  background-color: rgb(224, 89, 40);
  color: whitesmoke;
  cursor: move;
}
</style>
