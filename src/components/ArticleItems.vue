<template>
  <ListItems :items="items" class="row">
    <template v-slot:default="props">
      <b-col :cols="itemCols">
        <ArticleItem :item="props.item"></ArticleItem>
      </b-col>
    </template>
    <template v-slot:empty>
      <b-col>
        Статьи еще пишутся :)
      </b-col>
    </template>
  </ListItems>
</template>

<script>
import ListItems from '@/components/ListItems.vue'
import ArticleItem from '@/components/ArticleItem.vue'

export default {
  name: 'ArticleItems',
  components: {
    ArticleItem,
    ListItems,
  },
  extends: ListItems,
  props: {
    cols: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    itemCols() {
      return 12 / this.cols;
    },
  },
}
</script>