<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time" />
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://picsum.photos/id/237/800/500"
        alt="pics"
        class="post-image"
      />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-message" />
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id';
      this.$router.push(`/post/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  min-height: 200px;
  border: 1px solid black;
  margin-bottom: 1.5rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-image {
  width: 100%;
  height: auto;
}

.post-body {
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
