<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";
  export let url = "";
</script>

<Router url="{url}">
  <!-- admin layout -->
  <Route path="/*admin" component="{Admin}" />
</Router>
