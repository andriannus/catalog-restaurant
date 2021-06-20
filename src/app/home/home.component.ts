import { defineComponent } from "vue";

import { XCard } from "@/app/shared/components/card";
import { RESTAURANTS } from "@/app/shared/constants/data.constant";

export default defineComponent({
  name: "Home",

  components: {
    XCard,
  },

  setup() {
    return { RESTAURANTS };
  },
});
