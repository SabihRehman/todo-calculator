<template>
    <div class="text-center justify-center my-40">
        <div class="mx-56 mb-4 justify-center box-border h-20 w-50 p-4 border-4 border-gray-400 bg-gray-200">
            <p class="my-2">{{calScreen}}</p>
        </div>

        <div class="flex justify-center text-center m-56 my-0 grid grid-cols-4 gap-4 justify-items-stretch">
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('1')">1</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('2')">2</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('3')">3</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="performOperation('+')">+</button>
            
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('4')">4</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('5')">5</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('6')">6</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="performOperation('-')">-</button>
            
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('7')">7</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('8')">8</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('9')">9</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="performOperation('*')">*</button>

            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('.')">.</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="tap('0')">0</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="performOperation('=')">=</button>
            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="performOperation('/')">/</button>

            <button class="text-gray-700 bg-gray-400 flex justify-center items-center px-4 py-2" v-on:click="performOperation('Clear')">Clear</button>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'Calculator',
        data(){
            return {
                calScreen:  '',// Display
                val1: '',//Store value 1 on tapping the calculator button
                val2: '',//Store value 2 on tapping the calculator button
                selectedOperation: '' //Selected mathematical operator
            }
        },
        methods: {
            tap(value){
                if(this.selectedOperation){
                    this.val2 = value;
                    this.calScreen += value;
                } else {
                    this.val1 += value;
                    this.calScreen += value;
                }
            },

            performOperation(value){
                const operations = {
                    "+": (a,b) => a+b,
                    "-": (a,b) => a-b,
                    "/": (a,b) => a/b,
                    "*": (a,b) => a*b,
                };

                if(value == 'Clear'){
                    // Clear the display
                    [this.calScreen, this.val1, this.val2] = '';
                    return;
                }
                if(this.selectedOperation || this.selectedOperation == '='){
                    // Calculate value and display on the screen
                    this.calScreen = operations[this.selectedOperation](Number(this.val1), Number(this.val2));
                    
                    // Store displayed value in val1 variable
                    this.val1 = this.calScreen;

                    // Show the final result
                    this.calScreen = value == '='? this.calScreen: this.calScreen + value;
                    this.selectedOperation = value == '='? '' : value;
                    return;
                } else {
                    this.selectedOperation = value;
                    this.calScreen += value;
                    return;
                }                
            }
        }
    }
</script>

<style>

</style>