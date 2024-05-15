<template>
  <div class="flex flex-col items-center">
    <header>
      <AboutUsHeader />
    </header>

    <main class="flex flex-col items-center">
      <h1
        class="hidden lg:block custom-text-red font-quattrocento text-[39px] mt-[5vw]"
      >
        About us
      </h1>

      <div
        class="hidden lg:block custom-text-blue lg:mx-60 lg:my-10 mx-6 my-1 mb-10 text-center w-3/6"
      >
        <p>
          Hey there! Welcome to our corner of the internet! 📚 We're just a
          bunch of book-loving students who stumbled upon the world of UX design
          and programming decided to make something cool together.
        </p>
        <br />
        <p>
          So, what's our deal? Well, we're passionate about books (seriously, we
          could talk about them all day!). But here's the thing: with so many
          amazing books out there, it can be super overwhelming to decide what
          to read next. That's where we come in!
        </p>
        <br />
        <p>
          We've created this website (and an app) to make finding your next
          favorite read a breeze. Whether you're in the mood for a
          heart-pounding thriller, a swoon-worthy romance, or a mind-bending
          sci-fi adventure, we've got you covered. Our book generators are like
          your personal literary matchmakers, helping you discover books
          tailored to your tastes and mood. Thanks for stopping by and happy
          reading! 📖✨
        </p>
      </div>

      <div
        class="font-quattrocento custom-text-blue flex flex-col items-center space-y-4 lg:space-y-5 lg:mt-[3vw]"
      >
        <h4>API: Open Library</h4>
        <h4>Version 1.0</h4>
      </div>

      <LineImage />

      <div
        class="flex lg:flex-row lg:space-x-24 lg:h-[250px] flex-col space-y-10 lg:space-y-0 mt-[8vw] lg:mt-0"
      >
        <!-- java -->
        <div class="flex flex-col items-center">
          <h3 class="group-name custom-text-blue">Java Developers</h3>
          <h3 class="contributors">Helene Bengtsson</h3>
          <h3 class="contributors">Älva Läckgren</h3>
          <h3 class="contributors">Poya Kazemzade</h3>
        </div>
        <!-- ux -->
        <div class="flex flex-col items-center">
          <h3 class="group-name custom-text-blue">UX designers</h3>
          <h3 class="contributors">Victoria Kembro</h3>
          <h3 class="contributors">Anders Albinson</h3>
          <h3 class="contributors">Maria Värmsjö</h3>
          <h3 class="contributors">Christofer Björlin</h3>
        </div>
      </div>

      <LineImage />

      <img
        class="w-[150px] mt-[15vw] mb-[10vw] lg:hidden"
        src="../assets/icons/booksdarkred.png"
        alt=""
      />

      <BooksDecor />

    </main>
  </div>
</template>

<script setup>
import AboutUsHeader from "../components/general_components/AboutUsHeader.vue";
import LineImage from "../components/general_components/LineImage.vue";
import BooksDecor from "../components/general_components/BooksDecor.vue"
</script>
