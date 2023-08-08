<script>
  export let i_class ="fa-money-bill"
  export let title = "dinheiro";

</script>

<div class="centralize mt-10">
  <div class="-mx-3 md:flex rounded-l rounded-5xl bordered p-5 bg-green-200">
    <div class=" px-3 centralize">
      <i class={"fas " + i_class + " mr-2"}></i>
      <span class="uppercase font-bold">
        {title}
      </span>
    </div>
  </div>
  <input type="text" class="outline-none h-full w-1/2">
</div>