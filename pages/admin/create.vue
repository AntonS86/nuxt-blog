<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">Создать новый пост</h1>
    <el-form-item label="Введите название поста" prop="title">
      <el-input v-model.trim="controls.title" />
    </el-form-item>

    <el-form-item label="Тест в формате .md или .html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>

    <el-button class="mb" type="success" plain @click="previewDialog = true">
      Предпросмотр
    </el-button>
    <el-dialog title="Педпросмотр" :visible.sync="previewDialog">
      <vue-markdown :key="controls.text">{{ controls.text }}</vue-markdown>
    </el-dialog>

    <el-upload
      ref="upload"
      class="mb"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Перетащите картинку <em>или нажмите</em>
      </div>
      <div slot="tip" class="el-upload__tip">Файлы с расширением jpg/png</div>
    </el-upload>

    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">
        Создать пост
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: 'Название поста не может быть пустым',
            trigger: 'blur'
          }
        ],
        text: [
          {
            required: true,
            message: 'Текст не должен быть пустым',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw;
    },
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true;
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          };

          try {
            await this.$store.dispatch('post/create', formData);
            this.controls.text = '';
            this.controls.title = '';
            this.image = null;
            this.$refs.upload.clearFiles();

            this.$message.success('Пост был успешно создан');
          } catch (e) {
            console.log(e);
          } finally {
            this.loading = false;
          }
        } else {
          this.$message.warning('Форма не валидна');
        }
      });
    }
  }
};
</script>

<style scoped>
form {
  width: 600px;
}
</style>
