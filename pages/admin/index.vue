<template>
  <div>
    <h1>Аналитика по постам</h1>
    <app-analytics-chart
      title="Количество просмотров"
      :labels="analytics.views.labels"
      :data="analytics.views.data"
    />
    <app-analytics-chart
      title="Количество комментариев"
      :labels="analytics.comments.labels"
      :data="analytics.comments.data"
    />
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart';

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {
    AppAnalyticsChart
  },
  async asyncData({ store }) {
    const analytics = await store.dispatch('post/getAnalytics');
    return { analytics };
  }
};
</script>

<style scoped></style>
