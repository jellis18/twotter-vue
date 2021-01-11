<template>
  <div class="user-profile">
    <div class="sidbar">
      <div class="user-panel">
        <h1 class="username">@{{ state.user.username }}</h1>
        <div class="admin-badge" v-if="state.user.isAdmin">Admin</div>
        <div class="follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "@/assets/users";
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";

export default {
  name: "UserProfile",
  components: {
    TwootItem,
    CreateTwootPanel,
  },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    //TODO: If userID, fetch user from API

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    });

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      });
    }

    return {
      state,
      addTwoot,
      userId,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
  .twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }

  .follower-count {
    margin-right: auto;
    border-radius: 5px;
  }
}
</style>
