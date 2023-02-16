import { surpriseMePrommpt } from '../constants';

export function getRandomPrompts(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrommpt?.length);
    const randomPrompt = surpriseMePrommpt[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompts(prompt);

    return randomPrompt;
}
