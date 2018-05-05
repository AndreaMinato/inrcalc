<template>
  <div class="container">
    <h3>Concentrato di Complesso Protrombinico:</h3>
    <h2> {{tot}} U.I.</h2>

    <label for="weight">Peso: <strong>{{weight}}kg</strong></label>
    <div class="slider-group">
      <div class="button" @click="decreaseWeight">-</div>
      <input class="slider" type="range" id="weight" min=0 max=200 v-model="weight"/>
      <div class="button" @click="increaseWeight">+</div>
    </div>

    <label for="inr">Inr: <strong>{{humanInr}}</strong></label>
    <div class="slider-group">
      <div class="button" @click="decreaseInr">-</div>
      <input class="slider" type="range" id="inr" min=1.9 max=6.1 step=0.01 v-model="inr"/>
      <div class="button" @click="increaseInr">+</div>
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

    decreaseInr() {
      if (this.inr > 1.9) this.inr -= 0.1;
    },
     increaseInr() {
      if (this.inr < 6.1) this.inr += 0.1;
    }
  },

  data() {
    return {
      weight: 80,
      inr: 2
    };
  },

  computed: {
    humanInr() {
      if (this.inr < 2.0) return "<2";

      if (this.inr > 6.0) return ">6";

      return parseFloat(this.inr).toFixed(2);
    },

    tot() {
      if (this.inr <= 2.0) return 20 * this.weight;
      if (this.inr > 2.0 && this.inr < 4.0) return 30 * this.weight;
      if (this.inr >= 4.0 && this.inr < 6.0) return 40 * this.weight;
      if (this.inr >= 6.0) return 50 * this.weight;
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
