<template>
  <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      app
      id="header"
    >
      <v-list dense id="nav">
        <template v-for="item in items">
          <v-list-group
            :key="item.name"
            v-model="item.model"
            v-if="item.children"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <template v-if="child.name === 'Front'">
                <v-list-group
                  no-action
                  sub-group
                  value="true"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link :to="{ name: child.name }">{{ child.name }}</router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item
                    v-for="(frontChild, j) in child.children"
                    :key="j"
                    link
                  >
                    <v-list-item-title>
                      <router-link :to="{ name: frontChild.name }">{{ frontChild.name }}</router-link>
                    </v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </template>
              <v-list-item-content v-else>
                <v-list-item-title>
                  <router-link :to="{ name: child.name }">{{ child.name }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.name"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                  <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="teal lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Portfolio</span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      items: []
    }
  },
  created () {
    this.items = this.$router.options.routes
  }
}
</script>

<style lang="sass">
</style>
