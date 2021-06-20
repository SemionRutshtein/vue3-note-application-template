const App = {
    data() {
        return {
            placeholderString: 'Enter you note',
            title: 'List of notes',
            inputValue: '',
            notes: ['First note', 'Second note']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== ''){
            this.notes.push(this.inputValue)
            this.inputValue = ''
            }
        },
        toUpperCase(item) {
          return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
        return this.notes.length * 2
        }
    }
}
Vue.createApp(App).mount('#app')