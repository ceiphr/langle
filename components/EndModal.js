import React, { useState } from 'react';
import { TextInput, Checkbox, Select, Modal, Button } from '@mantine/core';

import styles from "@styles/EndModal.module.css";

const EndModal = ({ isOpen, setIsOpen, level, nextLevel, gameState }) => {
    const [submitted, setSubmitted] = useState(false);

    // const encode = (data) => {
    //     return Object.keys(data)
    //         .map(
    //             (key) =>
    //                 encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    //         )
    //         .join("&");
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({
    //             "form-name": event.target.getAttribute("name"),
    //             ...name,
    //         }),
    //     })
    //         .then(() => setSubmitted(true))
    //         .catch((error) => alert(error));
    // };

    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <div className="center">
                <h1>You {gameState ? "win" : "lose"}!</h1>
                <p>You&apos;ve finished level {level + 1}/3.<br />There are three levels everyday.</p>
                {level < 2 && (<>
                    <Button onClick={() => nextLevel()}>Next Level?</Button>
                </>)}
            </div>
            {submitted ? <h2>Thank you for playing!</h2> :
                <>
                    <h2>Survey</h2>
                    <p>Please answer the following questions when you&apos;re finished playing.</p>
                    <form className={styles.form} name="survey-iteration-1" method="POST" data-netlify="true" onSubmit={() => setSubmitted(true)}>
                        <input type="hidden" name="form-name" value="contact" />
                        <Select
                            label="Are you using Langle on Desktop or Mobile?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'Desktop' },
                                { value: 'b', label: 'Mobile' },
                            ]}
                        />
                        <Select
                            label="Have you ever played Wordle?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'Yes' },
                                { value: 'b', label: 'No' },
                            ]}
                        />
                        <Select
                            label="Did you use Langle in LightMode or DarkMode?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'LightMode' },
                                { value: 'b', label: 'DarkMode' },
                            ]}
                        />
                        <Select
                            label="Which of the following start modes do you prefer?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.' },
                                { value: 'b', label: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.' },
                            ]}
                        />
                        <Select
                            label="Which of the following describes your interaction with the keyboard?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'I only used the virtual keyboard to type in the guessed words.' },
                                { value: 'b', label: 'I only used my regular keyboard to type in the guessed words.' },
                                { value: 'c', label: 'I used both the virtual and regular keyboard to type in the guessed words.' },
                            ]}
                        />
                        <Select
                            label="Which of the following describes your interaction with the keyboard?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'Multiple times a day' },
                                { value: 'b', label: 'Multiple times a week' },
                                { value: 'c', label: 'Multiple times a month' },
                                { value: 'd', label: 'Never' },
                            ]}
                        />
                        <Select
                            label="How many attempts do you think would be fair for the easy prompt you were presented with? (You were given 3 attempts)"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: '2' },
                                { value: 'b', label: '3' },
                                { value: 'c', label: '4' },
                                { value: 'd', label: '5' },
                                { value: 'e', label: '6+' },
                            ]}
                        />
                        <Select
                            label="Would you see yourself using this game in order to learn a language?"
                            placeholder="Pick one"
                            data={[
                                { value: 'a', label: 'Yes' },
                                { value: 'b', label: 'No' },
                                { value: 'c', label: 'Possibly' },
                            ]}
                        />
                        <TextInput
                            label="Did you have any difficulty navigating or interacting with the prompt?"
                            name="Name"
                        />
                        <TextInput
                            label="What quick feedback would you like to give our development team for our future iterations, if any? (150 words)"
                            name="Name"
                        />
                        <br />
                        <Button type="submit">Send</Button>
                    </form>

                </>}
        </Modal>
    );
};

export default EndModal;