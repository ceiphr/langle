import React, { useEffect, useState } from 'react';
import { SegmentedControl, Checkbox, Modal, Button, Group } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import styles from '@styles/Navigation.module.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const language = useSelector(state => state.language);
    const [modalOpen, setModalOpen] = useState(false);
    const [tmpLanguage, setTmpLanguage] = useState(language);

    const updateLanguage = (value) => {
        setModalOpen(true);
        setTmpLanguage(value);
    };

    const handleLanguageChange = () => {
        dispatch({ type: "SET_LANGUAGE", payload: tmpLanguage });
        dispatch({ type: "SET_GAMESTATE", payload: null });
        dispatch({ type: "RESET_LEVEL" });
        setModalOpen(false);
    }

    const updateTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch({ type: "SET_THEME", payload: newTheme });
    }

    const useStyles = createStyles((theme) => ({
        controls: {
            backgroundColor: theme.colors.dark[8] + " !important",
        },
    }));

    const preferredColorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState(preferredColorScheme);

    useEffect(() => {
        if (theme === "")
            setCurrentTheme(preferredColorScheme);
        else
            setCurrentTheme(theme);
    }, [preferredColorScheme, theme]);

    return (
        <>
            <div className={styles.nav}>
                <h1>Langle</h1>
                <div className={styles.controls}>
                    <Checkbox
                        className={styles.checkbox}
                        label="Dark"
                        checked={currentTheme === 'dark'}
                        onChange={() => updateTheme()}
                    />
                    <SegmentedControl
                        className={styles.segmentedControl}
                        data={[
                            { label: 'Spanish', value: 'spanish' },
                            { label: 'French', value: 'french' },
                        ]}
                        value={language}
                        onChange={(value) => updateLanguage(value)}
                    />
                </div>
            </div>
            <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Warning:">
                <p>Are you sure you want to change your language?
                    Changing your language will reset your current progress.</p>
                <Group>
                <Button color="red" onClick={() => handleLanguageChange()}>Change Language</Button>
                <Button color="gray" variant="outline" onClick={() => setModalOpen(false)}>Go Back</Button>
                </Group>
            </Modal>
        </>
    );
};

export default Navigation;