import React from 'react';
import { TextInput, Checkbox, Modal, Button } from '@mantine/core';

const EndModal = ({isOpen, setIsOpen, gameState}) => {
    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <h1>You {gameState ? "win" : "lose"}!</h1>
            <h2>Survey</h2>
            <form name="contact" netlify>
                <p>
                    <TextInput
                        required
                        label="Name"
                        placeholder="Joe"
                    />
                </p>
                <p>
                    <TextInput
                        required
                        label="Stevens Email"
                        placeholder="mamaj@stevens.edu"
                    />
                </p>
                <Checkbox
                    mt="md"
                    label="Have you played Wordle before?"
                />
                <p>
                    <Button type="submit">Send</Button>
                </p>
            </form>
        </Modal>
    );
};

export default EndModal;