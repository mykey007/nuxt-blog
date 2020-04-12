<template>
    <div class="input-control">
        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
            <slot />
        </label>
        <input
            class="block uppercase tracking-wide w-full text-gray-700 text-sm font-bold mb-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " 
            v-if="controlType === 'input'"
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)">
        <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            v-if="controlType === 'textarea'"
            rows="10"
            :value="value"
            @input="$emit('input', $event.target.value)">
        </textarea>
    </div>
</template>

<script>
export default {
    name: 'AppInputControl',
    props: {
        controlType: {
            type: String,
            default: 'input'
        },
        value: {
            type: String,
            default: ' '
        }
    }
}
</script>