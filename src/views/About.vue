<template>
  <div class="flex flex-col items-center">
    <header>
      <AboutUsHeader />
    </header>
    <main class="flex flex-col items-center">
      <h1 class="text-darkred font-Quattrocento text-[39px]">About us</h1>
      <div class="mx-60 my-10 text-center">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          animi sunt impedit amet repellendus officia autem cumque ad enim
        </p>
        <p>
          distinctio, quidem aliquam nulla laudantium fugiat dolore quos
          incidunt quam. Sint ut, consequuntur, voluptate pariatur enim ab
        </p>
        <p>
          assumenda nihil explicabo quis illum natus asperiores aliquid quia.
          Itaque soluta vitae aspernatur minima earum quidem ut omnis
        </p>
      </div>
      <div class="flex space-x-14">
        <!-- java -->
        <div class="flex flex-col items-center">
          <h3 class="group-name">Java</h3>
          <h3 class="contributors">Helene Bengtsson</h3>
          <h3 class="contributors">Älva Läckgren</h3>
          <h3 class="contributors">Poya Kazemzade</h3>
        </div>
        <!-- ux -->
        <div class="flex flex-col items-center">
          <h3 class="group-name">UX designers</h3>
          <h3 class="contributors">Victoria Kembro</h3>
          <h3 class="contributors">Anders Albinson</h3>
          <h3 class="contributors">Maria Värmsjö</h3>
          <h3 class="contributors">Christofer Björlin</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import AboutUsHeader from "../components/general_components/AboutUsHeader.vue";
</script>
