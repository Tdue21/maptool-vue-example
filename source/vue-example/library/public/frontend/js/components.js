
const propertyView = {
    template: `
        <div class="properties">
            <label>{{ label }}</label>
            <input type="text" v-model="value" />
            <button @click="updateProperty">Set</button>
            <button @click="resetProperty">Reset</button>
        </div>
    `,

    props: ['label', 'modelValue'],
    emits: ['update:modelValue', 'onupdate', 'onreset'],
    
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    },

    methods:{
        updateProperty() {
            this.$emit('onupdate', {name: this.label, value: this.value});
        },

        resetProperty() {
            this.$emit('onreset', {name: this.label, value: this.value});
        }
    }
};