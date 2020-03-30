<template>
    <button 
    class="button bg-yellow-400 hover:bg-yellow-500 text-grey-600 font-bold py-2 px-4 rounded"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        btnStyle: {
            type: String,
            default: ''
        }
    }
}
</script>