import React, { useState } from 'react';
import { TextInput, Checkbox, Modal, Button } from '@mantine/core';

const EndModal = ({ isOpen, setIsOpen, nextLevel, gameState }) => {
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
            <Button onClick={() => nextLevel()}>Next Level?</Button>
            {submitted ? <h2>Thank you for playing!</h2> :
                <>
                    <h2>Survey</h2>
                    {/* <form data-netlify="true" name="langle-survey" method="post" onSubmit={handleSubmit}>
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
                    </form> */}
                    <form name="contact" method="POST" data-netlify="true">
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Your Role: <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                            </select></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>

                </>}
        </Modal>
    );
};

export default EndModal;