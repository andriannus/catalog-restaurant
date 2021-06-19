import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import { AppBar } from "@/app/shared/components/app-bar";

export default defineComponent({
  name: "App",

  components: {
    AppBar,
    RouterView,
  },
});
