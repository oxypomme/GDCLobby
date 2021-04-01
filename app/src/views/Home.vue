<template>
  <div class="home">
    <MissionTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MissionTable from "@/components/MissionTable.vue"; // @ is an alias to /src

@Component({
  components: {
    MissionTable,
  },
})
export default class Home extends Vue {}
</script>
