<template>
  <div class="graphqlTester" id="graphqlTester">
    <div class="graphqlTester__container">
      <div class="graphqlTester__bar">
        <button @click="send">Enviar</button>
        <button>Copiar</button>
        <select>
          <option value="vuejs">VueJS</option>
          <option value="node">NodeJS</option>
          <option value="curl">Curl</option>
        </select>
        <button>Generar</button>
      </div>
      <textarea
        class="graphqlTester__input"
        v-model="code"
        placeholder="# Escribe tu query"
        @keydown.tab="enableTab"></textarea>
    </div>
    <div class="graphqlTester__container">
      <prism class="graphqlTester__result" language="json">{{ result }}</prism>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-json'
import Prism from 'vue-prism-component'
import splitPane from 'vue-splitpane'


export default {
  name: 'graphqlTester',
  components: { Prism, splitPane },
  data () {
    return {
      code: '',
      result: '',
    }
  },
  methods: {
    send (event) {
      axios.post('http://localhost:8000/blog', {
        headers: {
          'Content-Type': 'application/json',
        },
        query: this.code,
      })
      .then(response => {
        this.result = response.data.data;
      })
      .catch(error => {
        console.log(error.response);
        this.result = ''
      })
    },
    enableTab (event) {
      event.preventDefault();
      const val = this.code;
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      // set textarea value to: text before caret + tab + text after caret
      this.code = val.substring(0, start) + '\t' + val.substring(end);

      // put caret at right position again
      //event.target.selectionStart = event.target.selectionEnd = start + 1;
    }
  },
}
</script>

<style lang="stylus">
@import '../../../node_modules/vuepress/lib/default-theme/styles/config.styl'

.graphqlTester
  width 50%
  position absolute
  top 0
  right 0

.graphqlTester__container
  height 50%
  overflow-y scroll
  border-left 1px solid $borderColor
  border-bottom 1px solid $borderColor

.graphqlTester__bar
  height 2rem
  line-height 2rem
  padding 0 .75rem
  border-bottom 1px solid $borderColor

.graphqlTester__input
  width calc(100% - 3rem)
  height calc(100% - 3.5rem)
  padding .75rem 1.5rem
  border none

.graphqlTester__input:focus
  outline none

.graphqlTester__result
  padding 1.5rem !important
  margin 0 !important
  height calc(100% - 3rem)
  font-size 13px
</style>
