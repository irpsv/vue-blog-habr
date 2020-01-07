<template>
  <div>
    {{ item.title }}
  </div>
</template>

<script>
import Category from '@/models/Category';

export default {
  name: 'CategoryItem',
  props: {
    item: Category,
  },
}
</script>