<template>
  <el-row>
    <el-col
      v-for="(item, index) in hotels"
      :key="index"
      :xs="24"
      :sm="12"
      :md="8"
    >
      <el-card>
        <el-row class="img">
          <img style="width: 250px" :src="item.image" alt="img-hotel" />
        </el-row>
        <el-row align="middle">
          <el-col :lg="16" :md="16" :sm="24" :xs="24">
            <h2>{{ item.name }}</h2>
          </el-col>
          <el-col :lg="8" :md="8" :sm="24" :xs="24">
            <el-rate
              disabled
              v-model="item.attributes.rarity"
              size="large"
            ></el-rate>
          </el-col>
        </el-row>
        <el-row>
          <span style="color: gray; margin-top: 10px">{{
            item.description
          }}</span>
        </el-row>
        <el-row>
          <span
            style="
              color: gray;
              font-size: 18px;
              margin-top: 30px;
              margin-bottom: 10px;
            "
            >Attributes</span
          >
        </el-row>
        <el-row class="attribute-room" align="middle">
          <el-col :span="4"
            ><el-icon style="color: #009688; font-size: 26px"
              ><histogram /></el-icon
          ></el-col>
          <el-col class="attribute-detail" :span="12"> Room </el-col>
          <el-col class="attribute-detail" :span="8">
            {{ item.attributes.rooms }}
          </el-col>
        </el-row>
        <el-row class="attribute-room" align="middle">
          <el-col :span="4"
            ><el-icon style="color: #009688; font-size: 26px"
              ><avatar /></el-icon
          ></el-col>
          <el-col class="attribute-detail" :span="12"> staff </el-col>
          <el-col class="attribute-detail" :span="8">
            {{ item.attributes.staff }}
          </el-col>
        </el-row>
        <el-row class="button-view-detail">
          <el-col>
            <el-button
              style="color: #009688; font-weight: 600"
              type="text"
              plain
              @click="chooseHotelById(item.id)"
              >VIEW MODE</el-button
            >
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    hotels: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const chooseHotelById = (id: number) => {
      router.push(`/details/${id}`);
      store.dispatch("getHotelById", { id: id });
    };

    return {
      chooseHotelById,
    };
  },
});
</script>
<style lang=""></style>
