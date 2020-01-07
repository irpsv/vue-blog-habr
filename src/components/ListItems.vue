<template>
  <div class='list-items'>
    <template v-if='items && items.length'>

      <template v-for='(item, index) in items'>
        <slot :item="item" :index="index">
          Элемент {{ index }}
        </slot>
      </template>

    </template>
    <template v-else>

      <slot name="empty">
        Нет элементов
      </slot>

    </template>
  </div>
</template>

<script>
export default {
  name: 'ListItems',
  props: {
    items: Array,
  },
}
</script>