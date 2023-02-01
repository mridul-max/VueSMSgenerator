<template>
    <div class="message-list">
      <ul>
        <li v-for="message in messages" :key="message.MessageID">
          <div class="message-item">
            <div class="message-content">{{ message.Content }}</div>
            <div class="message-details">
              <div class="message-to">{{ message.to }}</div>
              <div class="message-lecturer">{{ message.LecturerEmail }}</div>     
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        messages: []
      };
    },
    created() {
      axios
        .get('/api/message/lecturer/' + this.lecturerEmail)
        .then(response => {
          this.messages = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    props: ['lecturerEmail']
  };
  </script>
  
  <style>
  .message-list {
    width: 80%;
    margin: 0 auto;
  }
  
  .message-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .message-content {
    font-size: 18px;
  }
  
  .message-details {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .message-lecturer,
  .message-to {
    font-size: 14px;
    color: #333;
  }
  </style>
  