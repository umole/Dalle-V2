import { surpriseMePrommpt } from '../constants';
import FileSaver from 'file-saver';
export function getRandomPrompts(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrommpt?.length);
    const randomPrompt = surpriseMePrommpt[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompts(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}`)
}