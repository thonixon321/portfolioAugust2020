<template functional>
  <footer class='footer flex justify-center'>
    <div class='footer__logo-section'>
      <div class='logo text-6xl text-gray-600 mb-24'>
        Logo
        <span class="">
          TomDesigns</span>
      </div>
      <p class='slogan uppercase my-12 text-xl text-gray-200 font-bold'>Love the hustle.</p>
      <p class='text-gray-600 text-lg copyright'>&copy; 2020 TomDesigns Company. <br> All rights reserved.</p>
    </div>
    <div class='footer__info-section'>
      <h1 class='footer__statement text-5xl text-gray-200 font-bold mb-40'>I collaborate with ambitious brands and <br> people; let's build something great together.</h1>
      <div class='footer__contact-section flex mb-32'>
        <div class='personal-contact'>
          <p class="text-gray-600 text-2xl mb-8">Start a conversation</p>
          <p class='underline text-gray-200 text-xl font-bold'>thonixon321@gmail.com <br> +1 541 297 2245</p>
        </div>
        <div class='basic-location ml-24 mr-64'>
          <p class="text-gray-600 text-2xl mb-8">Current Location</p>
          <p class='underline text-gray-200 text-xl font-bold'>Coos Bay <br>Oregon 97420</p>
        </div>
        <div class='social-media'>
          <div class='icons flex'>
            <img
              src='../assets/images/001-twitter.svg'
              alt='twitter icon'
            >
            <img
              src='../assets/images/002-instagram-logo.svg'
              alt='instagram icon'
            >
            <img
              src='../assets/images/003-facebook.svg'
              alt='facebook icon'
            >
            <img
              src='../assets/images/004-linkedin.svg'
              alt='linked in icon'
            >
          </div>
          <p class="uppercase font-bold text-xl text-gray-600 ml-8 mb-4">Terms & conditions</p>
          <p class="uppercase font-bold text-xl text-gray-600 ml-8">Privacy Policy</p>
        </div>
      </div>
      <div class='footer__disclaimer text-gray-100 text-xl font-bold'>This site was designed by Tom Nixon. Icons made by <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >Freepik</a> from <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >www.flaticon.com</a> <br> Ben Kolde - laptop image; Jeremy Yap - coffee image; Ibrahim Rifath - notepad image</div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
