<template>
  <div>
    <el-dialog :title="dialogUser.title" :visible.sync="dialogUser.show" :close-on-click-modal='false'
    :close-on-press-escape='false' :modal-append-to-body="false" width="80%" top="0">
      <div class="form">
        <el-form :model="caseForm" ref="caseForm" :rules="rules" style="margin:10px;" label-width="120px">
          <el-form-item label="員工編號" prop="id" style="display:none" >
            <el-input v-model="caseForm.id" disabled></el-input>
          </el-form-item>

          <el-form-item label="建立人員" prop="create_user" style="display:none">
            <el-input v-model="caseForm.create_user" disabled></el-input>
          </el-form-item>

          <el-form-item label="建立時間" prop="create_time" style="display:none">
            <el-input v-model="caseForm.create_time" disabled></el-input>
          </el-form-item>

          <el-form-item label="新聞標題" prop="title">
            <el-input v-model="caseForm.title" placeholder="建案名稱"></el-input>
          </el-form-item>

          <el-form-item label="封面圖片" prop="cover_photo">
            <el-input v-model="caseForm.cover_photo" placeholder="封面圖片(URL)"></el-input>
          </el-form-item>

          <el-form-item label="新聞內容" prop="article">
            <ckeditor v-model="caseForm.article" :config="editorConfig" style="margin-bottom:5px"></ckeditor>
          </el-form-item>

          <el-form-item>
              <el-button @click="dialogUser.show = false">取消</el-button>
              <el-button type="primary" @click='onSubmit("caseForm")'>送出</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { db } from '../firebase'
import region from '../json/Taiwan_Administrative_Region.json'
export default {
  inject: ['reload'],
  props: {
    dialogUser: Object,
    caseForm: Object
  },
  data () {
    return {
      editorData: '',
      editorConfig: {
        height: '230px'
      },
      county: [],
      district: [],
      rules: {
        title: [
          { required: true, message: '請輸入文章標題', trigger: 'blur' },
          { min: 2, max: 100, message: '標題介於6~30個字元', trigger: 'blur' }
        ],
        article: [
          { required: true, message: '請輸入文章內容', trigger: 'blur' },
          { min: 2, message: '文章介於6~1500個字元', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getCounty (selectedCounty) {
      this.district = []
      this.county.forEach(element => {
        if (element.name === selectedCounty) {
          element.districts.forEach(ele2 => {
            this.district.push(ele2.name)
          })
        }
      })
    },
    onSubmit (caseForm) {
      this.$refs[caseForm].validate(valid => {
        // valid為布林值，當表單有資料時為true，無資料時為false，當表單有資料時提交數據
        if (valid) {
          // Firebase即時資料庫
          if (this.dialogUser.option === 'add') {
            db.database().ref('news').child(this.caseForm.id).set({
              id: this.caseForm.id,
              create_user: this.caseForm.create_user,
              create_time: this.caseForm.create_time,
              title: this.caseForm.title,
              cover_photo: this.caseForm.cover_photo,
              article: this.caseForm.article
            })
          } else if (this.dialogUser.option === 'edit') {
            console.log(this.caseForm.id)
            db.database().ref('news').child(this.caseForm.id).update({
              title: this.caseForm.title,
              cover_photo: this.caseForm.cover_photo,
              article: this.caseForm.article
            })
          }
          this.$message({
            message: '保存成功！',
            type: 'success'
          })
          // 提交後關閉視窗
          this.dialogUser.show = false
          // 重整頁面
          this.reload()
        }
      })
    }
  },
  created () {
    region.forEach(element => {
      this.county.push(element)
    })
  }
}
</script>
