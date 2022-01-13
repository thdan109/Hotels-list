<template>
  <div>
    <!-- <h1>This is Home Pages</h1> -->
    <el-header>
      <el-row style="height: 100%">
        <el-col style="display: flex; align-items: center" :span="2"
          ><el-icon style="color: white; font-size: 36px"><histogram /></el-icon
        ></el-col>
        <el-col :span="20"></el-col>
        <el-col
          style="display: flex; align-items: center; justify-content: flex-end"
          :span="2"
          ><el-icon style="color: white; font-size: 36px; margin-right: 10px"
            ><avatar /></el-icon
        ></el-col>
      </el-row>
    </el-header>
    <!-- end header -->
    <!-- Filter star -->
    <!-- <el-container> -->
    <el-row class="filter" justify="center">
      <el-col
        style="display: flex; flex-direction: column; align-items: center"
        :span="12"
      >
        <span style="font-size: 18px; font-weight: 700; margin-bottom: 10px"
          >Filter Rarity</span
        >
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click="chooseStar(item.value)"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- </el-container> -->
    <!--  -->
    <el-container class="container-main">
      <!-- <el-row> -->
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <card :hotels="hotelData" />
      </el-col>
      <el-col :span="3"></el-col>
      <!-- </el-row> -->
    </el-container>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed, ref } from "vue";
import Card from "../components/Card.vue";
import { Histogram, Avatar } from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    Histogram,
    Avatar,
    Card,
  },
  setup() {
    const value = ref("");
    const options = [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
    ];
    const store = useStore();
    store.dispatch("getHotels");
    let hotelData = computed(() => store.state.dataFilter);

   

    const chooseStar = async (star: number) => {
      store.getters.getFilterHotelByStar({ star: star });
    };

    return {
      hotelData,
      options,
      value,
      chooseStar,
    };
  },
});
</script>
<style>
.el-header {
  background-color: #004d40;
}
.container-main {
  margin-top: 60px;
}
.el-card {
  margin: 10px;
}
.filter {
  margin-top: 60px;
}
.el-select .el-input {
  width: 300px;
}
.el-input--suffix .el-input__inner {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgb(182, 182, 182);
}
.el-select .el-input .el-input__inner {
  border: none !important;
}
.el-card.img {
  text-align: center;
}
.el-card img {
  margin: auto;
}
.button-view-detail {
  margin-top: 30px;
}
.attribute-detail {
  font-weight: 700;
  font-size: 14px;
}
.attribute-room {
  padding-left: 20px;
}
</style>
