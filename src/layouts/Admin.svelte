<script>
  // components for this layout
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";

    import Caixa from "../views/admin/Caixa.svelte";

  export let location;
  export let admin = "";
</script>

<div>
  <Sidebar location={location}/>
  <div class="relative md:ml-64 bg-blueGray-100">
    <HeaderStats />
    <Caixa />
  </div>
</div>
