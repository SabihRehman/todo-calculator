<template>
    <div class="flex flex-col">
        <div class="text-center">
            <label class="text-center">Title</label>
            <input class="placeholder-red-300 border border-black-400 p-5" placeholder="Cycle" type="text" v-model="title">

            <label class="text-center">Description</label>
            <input class="placeholder-red-300 border border-black-400 p-5" placeholder="Bought from US" type="text" v-model="description">
            
            <label class="text-center">Rate</label>
            <input class="placeholder-red-300 border border-black-400 p-5" placeholder="$300" type="number" v-model="rate">
            <button class="p-5 border-black border-black-400 bg-gray-600 text-white font-extrabold" v-if="isUpdate" v-on:click="updateItem()">Update Item</button>
            <button class="p-5 border-black border-black-400 bg-gray-600 text-white font-extrabold" v-if="!isUpdate" v-on:click="addItemInList">Add item</button>
        </div>
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Rate
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                
                            </th></tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(item, index) in listItems" :key="index">
                                <td class="px-6 py-4 whitespace-no-wrap">
                                    <div class="flex items-center">
                                        
                                        <div class="ml-4">
                                            <div class="text-sm leading-5 font-medium text-gray-900">
                                                {{item.title}}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap">
                                    <div class="text-sm leading-5 text-gray-900 "><p class="break-all">{{item.description}}</p></div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap">
                                    <div class="text-sm leading-5 text-gray-900">{{item.rate}}</div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900" v-on:click="updateItem(index)">EDIT</a>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900" v-on:click="removeItemFromList(index)">DELETE</a>
                                </td>
                            </tr>
                            <!-- More rows... -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'ListItems',
        data(){
            return {
                title:'',
                description:'',
                rate: '',
                isUpdate: false,
                updateIndex: null,
                listItems: [{title: 'Harry Potter', description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.', rate:30}]
            }
        },
        methods: {
            addItemInList(){
                this.listItems.push({title: this.title, description: this.description, rate: this.rate});
                [this.title, this.description, this.rate] = ''; 
            },

            removeItemFromList(index){
                // Remove the selected item from the list
                this.listItems.splice(index, 1);
            },

            updateItem(index){
                if(this.isUpdate){
                    // Update the selected item
                    this.isUpdate = false;
                    this.listItems[this.updateIndex].title = this.title;
                    this.listItems[this.updateIndex].description = this.description;
                    this.listItems[this.updateIndex].rate = this.rate;

                    [this.title, this.description, this.rate] = ''; 
                } else {
                    // Select the item to Edit
                    this.isUpdate = true;
                    this.updateIndex = index;

                    [this.title, this.description, this.rate] = [this.listItems[index].title, this.listItems[index].description, this.listItems[index].rate]; 
                }
            }
        },
    }
</script>

<style>

</style>