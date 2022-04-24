import React, { useState } from 'react';
import { TextInput, Checkbox, Modal, Button } from '@mantine/core';

const EndModal = ({ isOpen, setIsOpen, gameState }) => {
    const [submitted, setSubmitted] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": event.target.getAttribute("name"),
                ...name,
            }),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error));
    };

    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <h1>You {gameState ? "win" : "lose"}!</h1>
            {submitted ? <h2>Thank you for playing!</h2> :
                <>
                    <h2>Survey</h2>
                    <form data-netlify="true" name="langle-survey" method="post" onSubmit={handleSubmit}>
                        <TextInput
                            required
                            label="Name"
                            name="Name"
                            placeholder="Joe"
                        />
                        <TextInput
                            required
                            label="Email"
                            name="Email"
                            placeholder="mamaj@stevens.edu"
                        />
                        <Checkbox
                            mt="md"
                            name="Have you played Wordle before?"
                            label="Have you played Wordle before?"
                        />
                        <br />
                        <Button type="submit">Send</Button>
                    </form>
                </>}
        </Modal>
    );
};

export default EndModal;