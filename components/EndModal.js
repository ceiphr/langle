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
            <form name="contact" method="post" data-netlify="true">
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
            </form>
        </Modal>
    );
};

export default EndModal;