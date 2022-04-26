import React, { useState } from 'react';
import { RadioGroup, Radio, NumberInput, Textarea, TextInput, Select, Button, Notification } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { Check } from 'tabler-icons-react';
import { useColorScheme } from '@mantine/hooks';
import { questions } from '@data/surveyQuestions';
import styles from "@styles/Survey.module.css";

const Survey = ({ hidden = false }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const surveyCompleted = useSelector(state => state.surveyCompleted);
    const preferredColorScheme = useColorScheme();

    const level = useSelector(state => state.level);

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
        [questions[11]]: "",
        [questions[12]]: "",
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
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": event.target.getAttribute("name"),
                ...formData
            }),
        })
            .then(() => {
                setSubmitted(true)
                dispatch({ type: "SET_SURVEY_COMPLETED" });
            })
            .catch((error) => alert(error));
    };


    if (submitted || surveyCompleted)
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
            <p>Please answer the following questions when you&apos;re finished playing. You can only submit the form once.</p>
            <form className={styles.form} name="langle-branch1" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="langle-branch1" />
                <TextInput placeholder="Joe" name={questions[0]} label={questions[0]} onChange={(e) => setDataForm({ ...formData, [questions[0]]: e.target.value })} />
                <TextInput placeholder="mamaj@stevens.edu" name={questions[1]} label={questions[1]} onChange={(e) => setDataForm({ ...formData, [questions[1]]: e.target.value })} />
                <RadioGroup
                    label={questions[2]}
                    name={questions[2]}
                    onChange={(value) => setDataForm({ ...formData, [questions[2]]: value })}
                >
                    <Radio value="Desktop" label="Desktop" />
                    <Radio value="Mobile" label="Mobile" />
                </RadioGroup>
                <RadioGroup
                    label={questions[3]}
                    name={questions[3]}
                    onChange={(value) => setDataForm({ ...formData, [questions[3]]: value })}
                >
                    <Radio value="Yes" label="Yes" />
                    <Radio value="No" label="No" />
                </RadioGroup>
                <RadioGroup
                    className={styles.hidden}
                    label={questions[4]}
                    name={questions[4]}
                    value={theme === "" ? preferredColorScheme : theme}
                >
                    <Radio value="Light" label="Light" />
                    <Radio value="Dark" label="Dark" />
                </RadioGroup>
                <Select
                    label={questions[5]}
                    name={questions[5]}
                    placeholder="Pick one"
                    data={[
                        { value: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.', label: 'Game starts in the easiest difficulty, and the user is prompted for difficulty after each prompt.' },
                        { value: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.', label: 'The user is prompted to choose a difficulty in the beginning, but can still change after every prompt.' },
                    ]}
                    onChange={(value) => setDataForm({ ...formData, [questions[5]]: value })}
                />
                <Select
                    label={questions[6]}
                    name={questions[6]}
                    placeholder="Pick one"
                    data={[
                        { value: 'I only used the virtual keyboard to type in the guessed words.', label: 'I only used the virtual keyboard to type in the guessed words.' },
                        { value: 'I only used my regular keyboard to type in the guessed words.', label: 'I only used my regular keyboard to type in the guessed words.' },
                        { value: 'I used both the virtual and regular keyboard to type in the guessed words.', label: 'I used both the virtual and regular keyboard to type in the guessed words.' },
                    ]}
                    onChange={(value) => setDataForm({ ...formData, [questions[6]]: value })}
                />
                <Select
                    label={questions[7]}
                    name={questions[7]}
                    placeholder="Pick one"
                    data={[
                        { value: 'Multiple times a day', label: 'Multiple times a day' },
                        { value: 'Multiple times a week', label: 'Multiple times a week' },
                        { value: 'Multiple times a month', label: 'Multiple times a month' },
                        { value: 'Never', label: 'Never' },
                    ]}
                    onChange={(value) => setDataForm({ ...formData, [questions[7]]: value })}
                />
                <NumberInput
                    label={questions[8]}
                    name={questions[8]}
                    placeholder="Pick one"
                    defaultValue={4}
                    onChange={(value) => setDataForm({ ...formData, [questions[8]]: value })}
                />
                <RadioGroup
                    label={questions[9]}
                    name={questions[9]}
                    onChange={(value) => setDataForm({ ...formData, [questions[9]]: value })}
                >
                    <Radio value="Yes" label="Yes" />
                    <Radio value="No" label="No" />
                    <Radio value="Maybe" label="Maybe" />
                </RadioGroup>
                <Textarea
                    label={questions[10]}
                    name={questions[10]}
                    onChange={(event) => setDataForm({ ...formData, [questions[10]]: event.target.value })}
                />
                <Textarea
                    label={questions[11]}
                    name={questions[11]}
                    onChange={(event) => setDataForm({ ...formData, [questions[11]]: event.target.value })}
                />
                <NumberInput
                    className={styles.hidden}
                    label={questions[12]}
                    name={questions[12]}
                    placeholder="Pick one"
                    defaultValue={level + 1}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Survey;