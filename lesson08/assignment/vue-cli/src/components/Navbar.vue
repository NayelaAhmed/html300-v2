<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'HandMadeCards' }">Hand-made Cards</b-nav-item>
      <b-nav-item :to="{ name: 'Pricing' }">Pricing</b-nav-item>
      <b-nav-item :to="{ name: 'CardGrid' }">Grid</b-nav-item>
    </b-navbar-nav>
  </b-navbar>

  
</template>
<script>
export default {
  name: 'Navbar'
};
</script>