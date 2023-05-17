import React, { useState } from 'react'
import '../../styles/chatbot.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"

// const API_KEY = "";

function Chat() {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I am HumanCareGPT",
      sender: "ChatGPT"
    }
  ]) // []

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage]; //tomar todos los mensajes del state, mensajes viejos + mensajes nuevos

    setMessages(newMessages); // actualizar los mensajes del state
    setIsTyping(true); // asignar un indicador de que chatGPT est[a escribiendo (chatGPT is typing)

    // procesar los mensajes a mediante chatGPT (enviar al chat y ver la respuesta)
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    //chatMessages {sender: "user" or "ChatGPT", message "The message content here"}
    // apiMessages {role: "user" or "assistant", content: "The message content here" }

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    // role:"user" -> un mensaje desde el user, "assistant" -> la respuesta de chatGPT
    // "system" -> es un mensaje inicial que define como queres que ChatGPT se comunique 

    const systemMessage = {
      role: "system",
      content: `Speak likea highly professional AI medical assistant working for HumanCare.
      Your aim is to provide people with general advice and tips to improve their health and well-being in English.
      Remember that, although you have broad knowledge across various areas of medicine, you should not recommend specific medications.
      If the user's symptoms suggest a serious health issue, you should advise them to seek professional medical attention.
      Please respond to the following question in the most helpful and empathetic way possible.`
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // El system message DEFINE la logica de muestro ChatGPT
        ...apiMessages // Los messages de nuestro chat con ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setIsTyping(false);
    })
  }

  return (
    <div>
      <div style={{ position: "relative", height: "80vh", width: "60vw" }} className='container-fluid  mt-5' >
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior='smooth'
              typingIndicator={isTyping ? <TypingIndicator content="HumanCareGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat