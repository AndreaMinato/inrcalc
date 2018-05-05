<template>
  <div class="container">
    <h3>Anti Trombina III:</h3>
      <h4 style="margin-bottom:0;">Dose da somministrare: </h4>
      <h2 style="margin-top:0;">{{tot}} U.I.</h2>

    <label for="weight">Peso: <strong>{{weight}}kg</strong></label>
    <div class="slider-group">
      <div class="button" @click="decreaseWeight">-</div>
      <input class="slider" type="range" id="weight" min=0 max=200 v-model="weight"/>
      <div class="button" @click="increaseWeight">+</div>
    </div>

    <label for="desiderata">Livello desiderato: <strong>{{desiderata}}%</strong></label>
    <div class="slider-group">
      <div class="button" @click="decreaseDesiderata">-</div>
      <input class="slider" type="range" id="desiderata" min=0 max=100 v-model="desiderata"/>
      <div class="button" @click="increaseDesiderata">+</div>
    </div>


  <label for="dosata">Attività dosata: <strong>{{dosata}}%</strong></label>
    <div class="slider-group">
      <div class="button" @click="decreaseDosata">-</div>
      <input class="slider" type="range" id="dosata" min=0 max=120 v-model="dosata"/>
      <div class="button" @click="increaseDosata">+</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "inr",
  methods: {
    decreaseWeight() {
      if (this.weight > 0) this.weight--;
    },
    increaseWeight() {
      if (this.weight < 200) this.weight++;
    },
    decreaseDesiderata() {
      if (this.desiderata > 0) this.desiderata--;
    },
    increaseDesiderata() {
      if (this.desiderata < 100) this.desiderata++;
    },
    decreaseDosata() {
      if (this.dosata > 0) this.dosata--;
    },
    increaseDosata() {
      if (this.dosata < 100) this.dosata++;
    }
  },

  data() {
    return {
      weight: 80,
      desiderata: 100,
      dosata: 100
    };
  },

  computed: {
    tot() {
      // peso corporeo (kg) x [livello desiderato-attività dosata(%)] / 1,5.
      return Math.round(this.weight * (this.desiderata - this.dosata) / 1.5);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 860px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.button {
  margin-left: 5px;
  margin-right: 5px;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  background: #42b983;
}

.slider-group {
  margin-bottom: 30px;
  margin-top: 20px;
  display: flex;
}

.slider {
  flex: 1;
  -webkit-appearance: none;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #42b983;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #42b983;
  cursor: pointer;
}
</style>
