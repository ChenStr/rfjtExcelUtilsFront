<template>
  <div class="rfjt">
    <el-upload
      class="upload-demo"
      drag
      :action="upload.url"
      accept=".xlsx, .xls"
      :before-upload="beforeAvatarUpload"
      :http-request="uploadFile"
      >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传Excel文件哦</div>
    </el-upload>
  </div>
</template>


<script>
import { test,startUploadFile } from "@/api/test";
import { saveAs } from 'file-saver'

export default {
  name: 'Test',
  // 用到的模块名称
  components: {
    
  },
  // 变量数据存储
  data() {
    return {
      upload: {
        url: "/upload"
      }
    }
  },
  // 监视值改变
  watch: {
  },
  // 开始时调用
  created() {
    this.getTest();
  },
  // 方法
  methods: {
    getTest() {
      // test().then(response => {
      //     if (response.data.code == '200') {
      //       this.msg = response.data.data;
      //     }
      //   }
      // );
    },
    beforeAvatarUpload(file) {
        // const type = file.type;
        // if (type != 'application/vnd.ms-excel' && type != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        //   this.$message.error('请上传 Excel 格式!');
        // }
        return true;
    },
    // 下载blob文件
    onSuccess(res,file) {
      const fileName ="应收款明细表.xls";
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    },
    getfileType(type) {
        switch (type) {
            case 'txt': return 'text/plain';
            case 'doc': return 'application/msword';
            case 'docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            case 'xls': return 'application/vnd.ms-excel';
            case 'xlsx': return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            case 'pdf': return 'application/pdf';
            case 'pptx': return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
            case 'ppt': return 'application/vnd.ms-powerpoint';
            case 'png': return 'image/png';
            case 'jpg': return 'image/jpeg';
            case 'gif': return 'image/gif';
            case 'svg': return 'image/svg+xml';
            case 'ico': return 'image/x-icon';
            case 'bmp': return 'image/bmp,';
        }
    },
    //参数必须是param，才能获取到内容
    uploadFile(param){
        // 获取上传的文件名
        var file = param.file
        //发送请求的参数格式为FormData
        const formData = new FormData();
        formData.append("file",file);
        // 调用param中的钩子函数处理各种情况，这样就可以用在组件中用钩子了。也可以用res.code==200来进行判断处理各种情况
        startUploadFile(formData).then(res=>{
            this.onSuccess(res,null);
        }).catch(err=>{
            // param.onError(err);
        })
    },
  }
}
</script>
