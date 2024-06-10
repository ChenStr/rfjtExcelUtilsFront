<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <el-button>默认按钮</el-button>
  </div>
</template>


<script>
import { test } from "@/api/test";

export default {
  name: 'AboutView',
  // 用到的模块名称
  components: {
    
  },
  // 变量数据存储
  data() {
    return {
      msg: "This is an about page"
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
      test().then(response => {
          if (response.data.code == '200') {
            this.msg = response.data.data;
          }
        }
      );
    }
  }
}
</script>
