<template>
  <div id="mission-table">
    <h1>Missions</h1>
    <b-table
      bordered
      striped
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
      <template #cell(actions)="{ item }">
        <b-button size="sm" :to="'/mission/' + item.id"> Detail </b-button>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
interface Mission {
  id: number;
  name: string;
  map: string;
  date: string;
  registered: number;
  max: number;
}

interface Field {
  key: string;
  label: string;
}

interface Data {
  items: Mission[];
  fields: Field[];
}

export default {
  data: (): Data => {
    return {
      items: [
        {
          id: 4,
          name: "CPC-COM[18]-Cache_cash-V30",
          map: "Kujari",
          date: "31/03/2021",
          registered: 8,
          max: 11,
        },
        {
          id: 3,
          name: "CPC-CO[04]-Piece_de_8-v2",
          map: "Stratis",
          date: "28/03/2021",
          registered: 4,
          max: 4,
        },
        {
          id: 2,
          name: "CPC-CO[08]-Smash_And_Grab-V1",
          map: "Ruha",
          date: "28/03/2021",
          registered: 5,
          max: 6,
        },
        {
          id: 1,
          name: "CPC-CO[16]-Shapurville-V4",
          map: "Shapur",
          date: "27/03/2021",
          registered: 1,
          max: 14,
        },
      ],
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Nom de la mission" },
        { key: "map", label: "Map" },
        { key: "date", label: "Date" },
        { key: "registered", label: "Nombre d'inscrits" },
        { key: "max", label: "Nombre de joueurs" },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    rowClass(item: Mission): string | undefined {
      if (item?.registered === item?.max) return "table-danger";
      return;
    },
  },
};
</script>

<style scoped>
#mission-table {
  margin: 10px;
}

h1 {
  text-align: initial;
}
</style>
