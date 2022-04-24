import React from 'react';
import { TextInput, Checkbox, Modal, Button } from '@mantine/core';

const EndModal = ({ isOpen, setIsOpen, gameState }) => {
    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <h1>You {gameState ? "win" : "lose"}!</h1>
            <h2>Survey</h2>
            {/* <form name="contact" method="post" data-netlify="true">
                <TextInput
                    required
                    label="Name"
                    placeholder="Joe"
                />
                <TextInput
                    required
                    label="Email"
                    placeholder="mamaj@stevens.edu"
                />
                <Checkbox
                    mt="md"
                    label="Have you played Wordle before?"
                />
                <Button type="submit">Send</Button>
            </form> */}
            <form name="contact" method="POST" data-netlify="true">
                <label>Your Name: <input type="text" name="name" /></label>
                <label>Your Email: <input type="email" name="email" /></label>
                <label>Message: <textarea name="message"></textarea></label>
                <button type="submit">Send</button>
            </form>
        </Modal>
    );
};

export default EndModal;