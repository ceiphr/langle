import React, { useState } from 'react';
import { RadioGroup, Radio, NumberInput, Textarea, Select, Button, Notification } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import { questions } from '@data/surveyQuestions';
import styles from "@styles/Survey.module.css";

const Survey = ({ hidden = false }) => {
    const [submitted, setSubmitted] = useState(false);
    const [notifHidden, setNotifHidden] = useState(false);
    const [formData, setDataForm] = useState({
        [questions[0]]: "",
        [questions[1]]: "",
        [questions[2]]: "",
        [questions[3]]: "",
        [questions[4]]: "",
        [questions[5]]: "",
        [questions[6]]: "",
        [questions[7]]: "",
        [questions[8]]: "",
        [questions[9]]: "",
        [questions[10]]: "",
    });

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    const handleSubmit = (event) => {
        console.log(encode({
            "form-name": event.target.getAttribute("name"),
            ...formData
        }));
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": event.target.getAttribute("name"),
                ...formData
            }),
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
                    label={questions[0]}
                    name={questions[0]}
                    onChange={(value) => setDataForm({ ...formData, [questions[0]]: value })}
                >
                    <Radio value="Desktop" label="Desktop" />
                    <Radio value="Mobile" label="Mobile" />
                </RadioGroup>
                <RadioGroup
                    label={questions[1]}
                    name={questions[1]}
                    onChange={(value) => setDataForm({ ...formData, [questions[1]]: value })}
                >
                    <Radio value="Yes" label="Yes" />
                    <Radio value="No" label="No" />
                </RadioGroup>
                <RadioGroup
                    label={questions[2]}
                    name={questions[2]}
                    onChange={(value) => setDataForm({ ...formData, [questions[2]]: value })}
                >
                    <Radio value="Light" label="Light" />
                    <Radio value="Dark" label="Dark" />
                </RadioGroup>
                <Select
                    label={questions[3]}
                    name={questions[3]}
                    placeholder="Pick one"
                    data={[
                        { value: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.', label: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.' },
                        { value: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.', label: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.' },
                    ]}
                    onChange={(value) => setDataForm({ ...formData, [questions[3]]: value })}
                />
                <Select
                    label={questions[4]}
                    name={questions[4]}
                    placeholder="Pick one"
                    data={[
                        { value: 'I only used the virtual keyboard to type in the guessed words.', label: 'I only used the virtual keyboard to type in the guessed words.' },
                        { value: 'I only used my regular keyboard to type in the guessed words.', label: 'I only used my regular keyboard to type in the guessed words.' },
                        { value: 'I used both the virtual and regular keyboard to type in the guessed words.', label: 'I used both the virtual and regular keyboard to type in the guessed words.' },
                    ]}
                    onChange={(value) => setDataForm({ ...formData, [questions[4]]: value })}
                />
                <Select
                    label={questions[5]}
                    name={questions[5]}
                    placeholder="Pick one"
                    data={[
                        { value: 'Multiple times a day', label: 'Multiple times a day' },
                        { value: 'Multiple times a week', label: 'Multiple times a week' },
                        { value: 'Multiple times a month', label: 'Multiple times a month' },
                        { value: 'Never', label: 'Never' },
                    ]}
                    onChange={(value) => setDataForm({ ...formData, [questions[5]]: value })}
                />
                <NumberInput
                    label={questions[6]}
                    name={questions[6]}
                    placeholder="Pick one"
                    defaultValue={4}
                    onChange={(value) => setDataForm({ ...formData, [questions[6]]: value })}
                />
                <RadioGroup
                    label={questions[7]}
                    name={questions[7]}
                    required
                    onChange={(value) => setDataForm({ ...formData, [questions[7]]: value })}
                >
                    <Radio value="Yes" label="Yes" />
                    <Radio value="No" label="No" />
                    <Radio value="Maybe" label="Maybe" />
                </RadioGroup>
                <Textarea
                    label={questions[8]}
                    name={questions[8]}
                    onChange={(event) => setDataForm({ ...formData, [questions[8]]: event.target.value })}
                />
                <Textarea
                    label={questions[9]}
                    name={questions[9]}
                    onChange={(event) => setDataForm({ ...formData, [questions[9]]: event.target.value })}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Survey;