<template>
  <div>
    <form>
      <input v-model="messageID" type="text" placeholder="Enter message ID">
      <button @click="fetchMessage">Fetch Message</button>
    </form>
    <table v-if="message" class="message-table">
      <tr>
        <td class="message-item-label">ID:</td>
        <td class="message-item-value">{{ message.messageID }}</td>
      </tr>
      <tr>
        <td class="message-item-label">Lecturer Email:</td>
        <td class="message-item-value">{{ message.lecturerEmail}}</td>
      </tr>
      <tr>
        <td class="message-item-label">Recipient:</td>
        <td class="message-item-value">{{ message.to }}</td>
      </tr>
      <tr>
        <td class="message-item-label">Content:</td>
        <td class="message-item-value">{{ message.content }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      messageID: '',
      message: null,
      error: null,
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await axios.get(`http://localhost:8080/messages/${this.messageID}`);
        this.message = response.data;
      } catch (err) {
        this.error = 'Error fetching message';
      }
    },
  },
};
</script>

<style>
  .message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
  }
  
  .message-item {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FF0000;
    color: #FFFFFF;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
  }
  
  .error-item {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  input {
    width: 300px;
    height: 50px;
    font-size: 18px;
    margin-bottom: 20px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid gray;
  }
  
  button {
    width: 150px;
    height: 50px;
    font-size: 18px;
    background-color: lightblue;
    color: #FFFFFF;
    border-radius: 10px;
    border: none;
  }
</style>