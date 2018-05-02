<template>
  <div class="graphql">
    <Content custom/>
    <graphqlTester/>
  </div>
</template>

<script>
import graphqlTester from './graphqlTester.vue'

export default {
  components: { graphqlTester },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../../node_modules/vuepress/lib/default-theme/styles/config.styl'

$mobileSidebarWidth = $sidebarWidth * 0.82

.graphqlLayout
  .sidebar
    display inherit !important

  .custom-layout
    padding-left $sidebarWidth

.graphql
  position relative
  height calc(100vh - 3.6rem)
  overflow hidden

  .content.custom
    width calc(50% - 6rem)
    padding 1.5rem 3rem
    height 100%
    overflow-y scroll

  .graphqlTester
    height calc(100vh - 3.6rem)

@media (max-width: $MQNarrow)
  .graphqlLayout
    .custom-layout
      padding-left $mobileSidebarWidth

@media (max-width: $MQMobile)
  .graphqlLayout
    .custom-layout
      padding-left 0
</style>
