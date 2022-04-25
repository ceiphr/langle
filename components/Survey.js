import React, { useState } from 'react';
import { RadioGroup, Radio, NumberInput, Textarea, Select, Button, Notification } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import styles from "@styles/Survey.module.css";

const Survey = ({ hidden = false }) => {
    const [submitted, setSubmitted] = useState(false);
    const [notifHidden, setNotifHidden] = useState(false);
    const [formData, setDataForm] = useState({
        "form-name": "survey-iteration-1",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(formData)
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error));
    };

    if (submitted)
        return (
            <>
                <br />
                <Notification className={notifHidden ? "fade" : ""} onClose={() => setNotifHidden(true)} icon={<Check size={18} />} color="teal" title="Thank you for completing the survey!">
                    Your response will help shape Langle.
                </Notification>
            </>
        );

    return (
        <div hidden={hidden}>
            <h2>Survey</h2>
            <p>Please answer the following questions when you&apos;re finished playing.</p>
            <form className={styles.form} name="survey-iteration-1" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="survey-iteration-1" />
                <RadioGroup
                    label="Are you using Langle on Desktop or Mobile?"
                    required
                    value={formData.question1}
                    onChange={(value) => setDataForm({ ...formData, question1: value })}
                >
                    <Radio value="Desktop" label="Desktop" />
                    <Radio value="Mobile" label="Mobile" />
                </RadioGroup>
                <RadioGroup
                    label="Have you ever played Wordle?"
                    required
                    value={formData.question2}
                    onChange={(value) => setDataForm({ ...formData, question2: value })}
                >
                    <Radio value="Yes" label="Yes" />
                    <Radio value="No" label="No" />
                </RadioGroup>
                <RadioGroup
                    label="Have you ever played Wordle?"
                    required
                    value={formData.question3}
                    onChange={(value) => setDataForm({ ...formData, question3: value })}
                >
                    <Radio value="Light" label="Light" />
                    <Radio value="Dark" label="Dark" />
                </RadioGroup>
                <Select
                    label="Which of the following start modes do you prefer?"
                    placeholder="Pick one"
                    data={[
                        { value: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.', label: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.' },
                        { value: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.', label: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.' },
                    ]}
                    value={formData.question4}
                    onChange={(value) => setDataForm({ ...formData, question4: value })}
                />
                <Select
                    label="Which of the following describes your interaction with the keyboard?"
                    placeholder="Pick one"
                    data={[
                        { value: 'I only used the virtual keyboard to type in the guessed words.', label: 'I only used the virtual keyboard to type in the guessed words.' },
                        { value: 'I only used my regular keyboard to type in the guessed words.', label: 'I only used my regular keyboard to type in the guessed words.' },
                        { value: 'I used both the virtual and regular keyboard to type in the guessed words.', label: 'I used both the virtual and regular keyboard to type in the guessed words.' },
                    ]}
                    value={formData.question5}
                    onChange={(value) => setDataForm({ ...formData, question5: value })}
                />
                <Select
                    label="Which of the following describes your interaction with the keyboard?"
                    placeholder="Pick one"
                    data={[
                        { value: 'Multiple times a day', label: 'Multiple times a day' },
                        { value: 'Multiple times a week', label: 'Multiple times a week' },
                        { value: 'Multiple times a month', label: 'Multiple times a month' },
                        { value: 'Never', label: 'Never' },
                    ]}
                    value={formData.question6}
                    onChange={(value) => setDataForm({ ...formData, question6: value })}
                />
                <NumberInput
                    label="How many attempts do you think would be fair for the easy prompt you were presented with? (You were given 4 attempts)"
                    placeholder="Pick one"
                    defaultValue={4}
                    value={formData.question7}
                    onChange={(value) => setDataForm({ ...formData, question7: value })}
                />
                <RadioGroup
                    label="Would you see yourself using this game in order to learn a language?"
                    required
                    value={formData.question8}
                    onChange={(value) => setDataForm({ ...formData, question8: value })}
                >
                    <Radio value="Yes" label="Yes" />
                    <Radio value="No" label="No" />
                    <Radio value="Maybe" label="Maybe" />
                </RadioGroup>
                <Textarea
                    label="Did you have any difficulty navigating or interacting with the prompt?"
                    name="Name"
                    onChange={(event) => setDataForm({ ...formData, question9: event.target.value })}
                />
                <Textarea
                    label="What quick feedback would you like to give our development team for future iterations? (150 words)"
                    name="Name"
                    onChange={(event) => setDataForm({ ...formData, question10: event.target.value })}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Survey;