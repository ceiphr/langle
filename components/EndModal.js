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
                    <form name="contact" action="/" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <input type="text" name="firstname" id="firstname" />
                            <label htmlFor="yourname">
                                Your Name:
                            </label> <br />
                            <input type="text" name="name" id="yourname" />
                        </p>
                        <p>
                            <label htmlFor="youremail">
                                Your Email:
                            </label> <br />
                            <input type="email" name="email" id="youremail" />
                        </p>
                        <p>
                            <label htmlFor="yourmessage">
                                Message:
                            </label> <br />
                            <textarea name="message" id="yourmessage"></textarea>
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