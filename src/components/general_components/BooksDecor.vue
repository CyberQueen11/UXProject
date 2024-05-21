<script>
export default {
  props: {
    showHomeAboutDecor: Boolean,
    showOnceUponDecor: Boolean,
    showPictureSwipeDecor: Boolean,
    showJudgeBookDecor: Boolean,
  },
};
</script>

<template>
  <div
    v-if="showHomeAboutDecor"
    class="hidden lg:flex flex-row items-end mt-[2vw] mb-[3vw] justify-center overflow-x-hidden"
  >
    <img class="w-[200px]" src="../../assets/icons/booksdarkred.png" alt="darkRed books" />
    <img
      class="w-[150px] h-1/2"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img class="w-[200px]" src="../../assets/icons/booksdarkred.png" alt="darkRed books" />
    <img
      class="w-[150px] h-1/2"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img class="w-[200px]" src="../../assets/icons/bookslightred.png" alt="darkRed books" />
    <img
      class="w-[150px] h-1/2"
      src="../../assets/icons/bookslightred.png"
      alt="lightRed books"
    />
    <img class="w-[200px]" src="../../assets/icons/booksdarkred.png" alt="darkRed books" />
    <img
      class="w-[150px] h-1/2"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img class="w-[200px]" src="../../assets/icons/booksdarkred.png" alt="darkRed books" />

    <img
      class="w-[150px] h-1/2"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
  </div>

  <div
    v-if="showOnceUponDecor"
    class="hidden lg:flex flex-row items-end justify-center overflow-x-hidden"
  >
    <img
      class="w-[17vw] h-1/2"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img class="w-[11vw] mb-5" src="../../assets/icons/booksdarkred.png" alt="darkRed books" />
    <img
      class="w-[6vw] h-1/2 invisible"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img
      class="w-[10vw] invisible"
      src="../../assets/icons/bookslightred.png"
      alt="lightRed books"
    />
    <img
      class="w-[8vw] h-1/2 invisible"
      src="../../assets/icons/bookslightred.png"
      alt="lightRed books"
    />
    <img
      class="w-[11vw] invisible"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img
      class="w-[9vw] h-1/2 invisible"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img
      class="w-[10vw] invisible"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
    <img
      class="w-[14vw] h-1/2"
      src="../../assets/icons/booksdarkred.png"
      alt="darkRed books"
    />
  </div>

</template>
