<template #heading>
<!-- creating the header component that uses a name slot, and giving a default value -->
    <div>   
            <slot name="heading"></slot>  
            <h1 slot="heading">Saying it with a card</h1>
    </div>
</template>

<script>



export default {

    name: "heading"
  
}
</script>