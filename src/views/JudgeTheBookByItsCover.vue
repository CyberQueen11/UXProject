<script setup>
import AboutButton from "@/components/general_components/AboutButton.vue";
import HomeButton from "../components/general_components/HomeButton.vue";
import BookFetcher from "../components/judgeTheBookByCover/BookFetcher.vue";
</script>

<template>
  <header>
    <HomeButton />
    <!-- mobile -->
    <div class="block lg:hidden">
      <div class="flex flex-col items-center text-center mt-24 mb-10">
        <h2 class="font-Quattrocento text-darkred text-[31px] mb-6">
          Judge the <br />book by its <br />cover
        </h2>
        <img src="../assets/icons/Streck.png" alt="separator" />
      </div>
      <h4 class="font-Quattrocento text-darkred text-[20px] hidden">
        Judge the <br />book by its <br />cover
      </h4>
    </div>
    <!-- desktop -->
    <div class="hidden lg:block flex flex-col items-center text-center mt-44">
      <h2 class="font-Quattrocento text-darkred text-[31px] mb-6">
        Judge the book by its cover
      </h2>
    </div>
  </header>
  <main>
    <BookFetcher />
  </main>
  <footer class="hidden lg:block">
    <AboutButton />
  </footer>
</template>
