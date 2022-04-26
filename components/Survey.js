import React, { useState } from 'react';
import { Button, Notification } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { Check, ExternalLink } from 'tabler-icons-react';
import styles from "@styles/Survey.module.css";

const Survey = () => {
    const dispatch = useDispatch();
    const surveyCompleted = useSelector(state => state.surveyCompleted);
    const [notifHidden, setNotifHidden] = useState(false);

    const handleOnClick = () => {
        setTimeout(() => {
            dispatch({ type: "SET_SURVEY_COMPLETED" });
        }, 1000);
    }

    if (surveyCompleted)
        return (
            <>
                <br />
                <Notification className={notifHidden ? "fade" : ""} onClose={() => setNotifHidden(true)} icon={<Check size={18} />} color="teal" title="Thank you for completing the survey!">
                    Your response will help shape Langle.
                </Notification>
            </>
        );


    return (
        <div>
            <h2 className={styles.title}>Survey</h2>
            <p className={styles.subtitle}>Please answer the survey when you&apos;re finished playing.</p>
            <a href="https://forms.gle/veY8N7q67S8xzrL16" target="_blank" rel="noreferrer">
                <Button variant="outline" rightIcon={<ExternalLink size={14}/>}  onClick={handleOnClick}>Open Survey</Button>
            </a>
        </div >
    );
};

export default Survey;