<template>
  <div class="svg">
    <p> 
      <label>Title : </label>
      <input type="text" v-model='title' placeholder="Title">
    </p>
   <!--  <p> 
      <label>Stroke Width : </label>
      <input type="text" v-model='stroke_width' placeholder="Stroke Width">
    </p> -->
   <p>
      <label>Text Color : </label>
      <input type="color" v-model="text_color">
      {{text_color}}
    </p>
    <p>
      <label>Radius : </label>
      <input type="number" v-model='radius' placeholder="Radius" min="0">
    </p>
   
    <p>
      <label>Circle Border Width : </label>
      <input type="number" v-model="circle_border_width" min='0' placeholder="Circle Border Width">
    </p>
    <p>
      <label>Circle Background Color: </label>
      <input type="color" v-model="bg_color">
      {{bg_color}}
    </p>
    <p>
      <label>Circle Border Color : </label>
      <input type="color" v-model="border_color">
      {{border_color}}
    </p>
    <p>
     <svg v-bind:height="2*radius+2*circle_border_width" v-bind:width="2*radius+2*circle_border_width">
        <circle v-bind:cx="1*radius + 1*circle_border_width" v-bind:cy="1*radius + 1*circle_border_width" v-bind:r="radius" v-bind:stroke="border_color" v-bind:stroke-width="circle_border_width" v-bind:fill="bg_color" />
         <text x="50%" y="50%" text-anchor="middle" v-bind:stroke="text_color" v-bind:stroke-width="stroke_width" dy=".3em">{{title}}</text>
      </svg> 
    </p>
  </div>
</template>

<script>
export default {
  name: 'SVGCreator',

  data () {
    return {
      title: 'Sample Text',
      circle_border_width : 1,
      radius: 100,
      bg_color : '#e7f9f2',
      border_color : '#000000',
      text_color: '#000000',
      stroke_width: '1px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
