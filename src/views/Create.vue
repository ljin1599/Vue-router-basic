    <template>
    <div class="create">
        <h1>Board Create</h1>
    </div>
<el-input
    v-model="title"
    maxlength="20"
    placeholder="Please input"
    show-word-limit
    type="text"
  />
  <div style="margin: 20px 0"></div>
  <el-input
    v-model="content"
    maxlength="50"
    placeholder="Please input"
    show-word-limit
    type="textarea"
  />
    </template>

    <script setup>
    import { ref } from 'vue'
    const title = ref('')
    const content = ref('')
    </script>