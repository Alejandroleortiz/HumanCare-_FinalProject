import React from 'react'
import Chat from '../components/chatbot-ChatGPT/Chat'
import Layout from '../components/layouts/Layout'


function ChatBot() {
    return (
        <>
            <Layout includeSidebar>
                <div className="container-fluid">

                    <Chat />

                </div>
            </Layout>

        </>
    )
}

export default ChatBot