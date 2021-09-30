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

          <el-form-item label="建案名稱" prop="title">
            <el-input v-model="caseForm.title" type="name" placeholder="建案名稱"></el-input>
          </el-form-item>

          <el-form-item label="建案縮圖" prop="thumbnail">
            <el-input v-model="caseForm.thumbnail" type="name" placeholder="建案縮圖url"></el-input>
          </el-form-item>

          <el-form-item label="建案位置" prop="location">
            <el-select v-model="caseForm.county" placeholder="縣轄市" @change="getCounty(caseForm.county)">
              <el-option v-for="item in county" :key="item.name" :label="item.name" :value="item.name"></el-option>
            </el-select>
            <el-select v-model="caseForm.district" placeholder="行政區" style="margin-left:5px;">
              <el-option v-for="item in district" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="格局規劃" prop="layout">
            <el-input v-model="caseForm.layout" type="name" placeholder="格局規劃"></el-input>
          </el-form-item>

          <el-form-item label="樓層規劃" prop="floor">
            <el-input v-model="caseForm.floor" type="name" placeholder="樓層規劃"></el-input>
          </el-form-item>

          <el-form-item label="接待中心" prop="reception_center">
            <el-input v-model="caseForm.reception_center" type="name" placeholder="接待中心"></el-input>
          </el-form-item>

          <el-form-item label="建案簡介" prop="article">
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
          { min: 2, max: 30, message: '標題介於6~30個字元', trigger: 'blur' }
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
      // this.$refs[form.validate]為驗證用語法
      this.$refs[caseForm].validate(valid => {
        // valid為布林值，當表單有資料時為true，無資料時為false，當表單有資料時提交數據
        if (valid) {
          // Firebase即時資料庫
          if (this.dialogUser.option === 'add') {
            db.database().ref('article').child(this.caseForm.id).set({
              id: this.caseForm.id,
              create_user: this.caseForm.create_user,
              create_time: this.caseForm.create_time,
              title: this.caseForm.title,
              thumbnail: this.caseForm.thumbnail,
              county: this.caseForm.county,
              district: this.caseForm.district,
              layout: this.caseForm.layout,
              floor: this.caseForm.floor,
              reception_center: this.caseForm.reception_center,
              article: this.caseForm.article
            })
          } else if (this.dialogUser.option === 'edit') {
            console.log(this.caseForm.id)
            db.database().ref('article').child(this.caseForm.id).update({
              title: this.caseForm.title,
              thumbnail: this.caseForm.thumbnail,
              county: this.caseForm.county,
              district: this.caseForm.district,
              layout: this.caseForm.layout,
              floor: this.caseForm.floor,
              reception_center: this.caseForm.reception_center,
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
