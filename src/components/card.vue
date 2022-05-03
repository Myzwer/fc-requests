<script xmlns="http://www.w3.org/1999/html">

export default {
  data() {
    return {
      cards: [
        {
          title: "Graphics",
          time: "5 Weeks Out",
          image: "/src/assets/img/graphics-logo.png",
          lightBackround: "graphics-light-bg",
          darkBackground: "graphics-dark-bg",
          link: "https://form.asana.com/?hash=82a0b07a5bf0952f49f8e3a9c3c7141586aa0391685c2f8886d64246293fa4b1&id=1180472366888569",
        },
        {
          title: "production",
          time: "6 Weeks Out",
          image: "/src/assets/img/production-logo.png",
          lightBackround: "production-light-bg",
          darkBackground: "production-dark-bg",
          link: "https://form.asana.com/?hash=955ccdec3575db6c7b033d8f286a54471bd49e182661b139c7bccf293115bb30&id=1181669917666701",
        },
        {
          title: "video",
          time: "5 Weeks Out",
          image: "/src/assets/img/video-logo.png",
          lightBackround: "video-light-bg",
          darkBackground: "video-dark-bg",
          link: "https://form.asana.com/?hash=c8ebf3f86a60d54cd1bc1748b1efda5b697c32ee46ba774d32a72ae083f18b47&id=1181617399985893",
        },
        {
          title: "content capture",
          time: "4 Weeks Out",
          image: "/src/assets/img/cc-logo.png",
          lightBackround: "cc-light-bg",
          darkBackground: "cc-dark-bg",
          link: "https://form.asana.com/?hash=9e5cf307fc0098eac87dcd155c49001db46d77ba6b4e71f22a7918a73a2cf090&id=1181687929181103",
        },
        {
          title: "music",
          time: "6 Weeks Out",
          image: "/src/assets/img/music-logo.png",
          lightBackround: "music-light-bg",
          darkBackground: "music-dark-bg",
          link: "https://form.asana.com/?hash=0898d731f222ac6067ee68ac7f0dacaa1cee2a4607da8bad91762de95b4774ac&id=1181645616362842",
        },
        {
          title: "comms",
          time: "6 Weeks Out",
          image: "/src/assets/img/comms-logo.png",
          lightBackround: "comms-light-bg",
          darkBackground: "comms-dark-bg",
          link: "https://form.asana.com/?k=BLdJnFUuhfCYwKYYl7j6og&d=169089913990651/",
        },
        {
          title: "events",
          time: "8 Weeks Out",
          image: "/src/assets/img/events-logo.png",
          lightBackround: "events-light-bg",
          darkBackground: "events-dark-bg",
          link: "https://form.asana.com/?hash=c4a73e4cfd4d57c50801c24ee91449faaebada1f236a946cbe87063a92cb595d&id=1181687929181075",
        },
        {
          title: "facilities",
          time: "4 Weeks Out",
          image: "/src/assets/img/facilities-logo.png",
          lightBackround: "facilities-light-bg",
          darkBackground: "facilities-dark-bg",
          link: "https://calendar.planningcenteronline.com/rooms",
        },
        {
          title: "childcare",
          time: "4 Weeks Out",
          image: "/src/assets/img/childcare-logo.png",
          lightBackround: "child-light-bg",
          darkBackground: "child-dark-bg",
          link: "https://form.asana.com/?hash=5ee3d7b1c6d28053c36213352eb6ef1871cc141a9391f4dfd61403770a3a49ce&id=1194262452423960",
        },
      ]
    }
  },
}

</script>

<template>
  <div v-for="card in cards" class="col-span-12 md:col-span-6 lg:col-span-4 px-5 text-black">
    <div class="p-10 rounded-3xl transition duration-150 ease-out hover:ease-in hover:bg-gray-lightest">
      <a :href="card.link" target="_blank">
        <div :class="card.lightBackround" class="p-14 rounded-3xl">
          <img :src="card.image" :alt="card.title + ' logo'"/>
        </div>
        <h1 class="uppercase text-xl font-bold pt-2"> {{ card.title }} </h1>
        <h2>Timeline: {{ card.time }}</h2>
      </a>
    </div>
  </div>
</template>


<style scoped>
/* Comms */
.comms-light-bg {
  background-color: #ee8781;
}
.comms-dark-bg {
  background-color: #ff544a;
}

/* Childcare */
.child-light-bg {
  background-color: #8f9d9a;
}
.child-dark-bg {
  background-color: #24c19f;
}

/* Content Capture */
.cc-light-bg {
  background-color: #e8cb48;
}
.cc-dark-bg {
  background-color: #ffe881;
}

/* Events */
.events-light-bg {
  background-color: #d85b9a;
}
.events-dark-bg {
  background-color: #ff5daf;
}

/* Facilities */
.facilities-light-bg {
  background-color: #d54854;
}
.facilities-dark-bg {
  background-color: #fa6975;
}

/* Graphics */
.graphics-light-bg {
  background-color: #79b74b;
}
.graphics-dark-bg {
  background-color: #7df127;
}

/* Music */
.music-light-bg {
  background-color: #a078f6;
}
.music-dark-bg {
  background-color: #6f2dfb;
}

/* Production */
.production-light-bg {
  background-color: #448b9f;
}
.production-dark-bg {
  background-color: #4fcaed;
}

/* Video */
.video-light-bg {
  background-color: #59a469;
}
.video-dark-bg {
  background-color: #47f46c;
}
</style>