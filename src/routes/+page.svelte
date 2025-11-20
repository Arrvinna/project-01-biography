<script>
  import Header from '$lib/Header.svelte';
  import Section from '$lib/Section.svelte';
  import Footer from '$lib/Footer.svelte';

  // Replace these placeholder values with your real info
  let myInfo = {
    title: "About Me",
    item1: "Name: Jane Doe",
    item2: "Age: 20",
    item3: "School: Example University"
  };

  let hobbiesInfo = {
    title: "Hobbies",
    item1: "Reading",
    item2: "Hiking",
    item3: "Photography"
  };

  let skillsInfo = {
    title: "Skills",
    item1: "JavaScript",
    item2: "Svelte",
    item3: "CSS"
  };

  const copyrightText = `© ${new Date().getFullYear()} Jane Doe`;
</script>

<style>
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

  .page {
    min-height: 80vh;
  }
</style>

<div class="container mt-5 page">
  <Header title="My Biography" />

  <div class="row mt-4">
    <div class="col-md-4">
      <Section {...myInfo} />
    </div>
    <div class="col-md-4">
      <Section {...hobbiesInfo} />
    </div>
    <div class="col-md-4">
      <Section {...skillsInfo} />
    </div>
  </div>

  <div class="mt-4">
    <Footer copyright={copyrightText} />
  </div>
</div>
