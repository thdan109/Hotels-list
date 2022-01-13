<template>
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
  <el-container style="margin-top: 100px">
    <el-col :span="4"></el-col>
    <el-col :span="16">
      <el-card>
        <el-row  align="middle">
          <el-col class="image-hotel" :md="16" :sm="16" :xs="24">
            <img :src="data.image" alt="" />
          </el-col>
          <el-col class="info" :md="8" :sm="8" :xs="24" v-if="data.attributes">
            <el-row>
              <span class="name">{{ data.name }}</span>
            </el-row>

            <el-row class="star">
              <el-rate
                disabled
                v-model="data.attributes.rarity"
                size="large"
                style="font-size: 20px"
              ></el-rate>
            </el-row>
            <el-row>
              <span class="description">{{ data.description }}</span>
            </el-row>
            <el-row>
              <span
                style="
                  color: gray;
                  font-size: 18px;
                  margin-top: 30px;
                  margin-bottom: 20px;
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
                {{ data.attributes.rooms }}
              </el-col>
            </el-row>
            <el-row class="attribute-room" align="middle">
              <el-col :span="4"
                ><el-icon style="color: #009688; font-size: 26px"
                  ><avatar /></el-icon
              ></el-col>
              <el-col class="attribute-detail" :span="12"> staff </el-col>
              <el-col class="attribute-detail" :span="8">
                {{ data.attributes.staff }}
              </el-col>
            </el-row>
            <el-row class="button-view-detail">
              <el-col>
                <el-button
                  style="color: #009688; font-weight: 600"
                  type="text"
                  plain
                  @click="$router.push('/')"
                  >VIEW LIST</el-button
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="4"></el-col>
  </el-container>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { Histogram, Avatar } from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    Histogram,
    Avatar,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("getHotelById", { id: route.params.id });
    const data = computed(() => store.state.dataHotelById);
    console.log(data);

    return {
      data,
    };
  },
});
</script>
<style scoped>
.image-hotel{
  display: flex;
  justify-content: center;
}
.image-hotel img {
  width: 80%;
}
.name {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
}
.description {
  margin-top: 15px;
  font-weight: 600;
}
.star .el-rate__icon {
  font-size: 35px !important;
  background-color: red;
}
</style>
